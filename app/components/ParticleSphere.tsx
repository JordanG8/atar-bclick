"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

// Simplex 3D noise GLSL
const noiseGLSL = `
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

  float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289(i);
    vec4 p = permute(permute(permute(
      i.z + vec4(0.0, i1.z, i2.z, 1.0))
      + i.y + vec4(0.0, i1.y, i2.y, 1.0))
      + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }
`;

const vertexShader = `
  ${noiseGLSL}

  uniform float uTime;
  uniform float uNoiseStrength;
  uniform float uNoiseScale;
  uniform vec2 uMouse;
  uniform float uScrollProgress;

  varying float vDisplacement;
  varying float vElevation;

  void main() {
    float scrollMorph = uScrollProgress * 0.5;
    float noise = snoise(position * uNoiseScale + uTime * 0.2 + scrollMorph);
    float noise2 = snoise(position * uNoiseScale * 2.0 + uTime * 0.1) * 0.5;

    float displacement = (noise + noise2) * uNoiseStrength;

    // Mouse influence
    vec3 worldPos = (modelMatrix * vec4(position, 1.0)).xyz;
    float mouseDist = length(vec2(worldPos.x - uMouse.x * 3.0, worldPos.y - uMouse.y * 3.0));
    float mouseInfluence = smoothstep(2.5, 0.0, mouseDist) * 0.3;
    displacement += mouseInfluence;

    vec3 newPosition = position + normal * displacement;

    vDisplacement = displacement;
    vElevation = newPosition.y;

    vec4 mvPosition = modelViewMatrix * vec4(newPosition, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    // Size attenuation
    gl_PointSize = (2.5 + displacement * 2.0) * (200.0 / -mvPosition.z);
  }
`;

const fragmentShader = `
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  uniform float uOpacity;

  varying float vDisplacement;
  varying float vElevation;

  void main() {
    float dist = length(gl_PointCoord - vec2(0.5));
    if (dist > 0.5) discard;

    float alpha = 1.0 - smoothstep(0.2, 0.5, dist);
    alpha *= uOpacity;

    float colorMix = vDisplacement * 0.5 + 0.5;
    colorMix = clamp(colorMix, 0.0, 1.0);
    vec3 color = mix(uColor1, uColor2, colorMix);

    // Slight glow for points near the camera
    color += vec3(0.05) * (1.0 - dist * 2.0);

    gl_FragColor = vec4(color, alpha);
  }
`;

export default function ParticleSphere() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const scrollRef = useRef(0);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Particle sphere geometry
    const geometry = new THREE.IcosahedronGeometry(1.8, 32);

    // Shader material
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uNoiseStrength: { value: 0.35 },
        uNoiseScale: { value: 1.2 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uScrollProgress: { value: 0 },
        uColor1: { value: new THREE.Color("#E8E0D5") },
        uColor2: { value: new THREE.Color("#B8794E") },
        uOpacity: { value: 0.7 },
      },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Mouse tracking
    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // Scroll tracking
    const onScroll = () => {
      const snapContainer = document.querySelector(".snap-container");
      if (snapContainer) {
        const scrollTop = snapContainer.scrollTop;
        const maxScroll =
          snapContainer.scrollHeight - snapContainer.clientHeight;
        scrollRef.current = maxScroll > 0 ? scrollTop / maxScroll : 0;
      }
    };

    // Listen on snap container
    const snapContainer = document.querySelector(".snap-container");
    if (snapContainer) {
      snapContainer.addEventListener("scroll", onScroll, { passive: true });
    }

    // Resize
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    // Animation
    const clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      material.uniforms.uTime.value = elapsed;
      material.uniforms.uMouse.value.set(
        mouseRef.current.x,
        mouseRef.current.y
      );
      material.uniforms.uScrollProgress.value = scrollRef.current;

      // Organic rotation
      points.rotation.x = Math.sin(elapsed * 0.1) * 0.2;
      points.rotation.y = elapsed * 0.05;

      // Scale breathe
      const breathe = 1 + Math.sin(elapsed * 0.5) * 0.03;
      points.scale.setScalar(breathe);

      // Shift colors based on scroll
      const scrollVal = scrollRef.current;
      if (scrollVal < 0.25) {
        // Hero: cream/copper
        material.uniforms.uColor1.value.set("#E8E0D5");
        material.uniforms.uColor2.value.set("#B8794E");
        material.uniforms.uOpacity.value = 0.7;
      } else if (scrollVal < 0.5) {
        // About: dark tones on light bg
        material.uniforms.uColor1.value.set("#6B6B6B");
        material.uniforms.uColor2.value.set("#0A0A0A");
        material.uniforms.uOpacity.value = 0.25;
      } else if (scrollVal < 0.75) {
        // Work: copper emphasis
        material.uniforms.uColor1.value.set("#B8794E");
        material.uniforms.uColor2.value.set("#D4956A");
        material.uniforms.uOpacity.value = 0.5;
      } else {
        // Contact: bright cream
        material.uniforms.uColor1.value.set("#E8E0D5");
        material.uniforms.uColor2.value.set("#F2EDE8");
        material.uniforms.uOpacity.value = 0.6;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      if (snapContainer) {
        snapContainer.removeEventListener("scroll", onScroll);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="three-canvas" />;
}
