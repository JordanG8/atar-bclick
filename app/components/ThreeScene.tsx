"use client";

import { useRef, useEffect, useCallback } from "react";
import * as THREE from "three";

export default function ThreeScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const frameRef = useRef<number>(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseRef.current.targetX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouseRef.current.targetY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const w = container.clientWidth;
    const h = container.clientHeight;

    // ── Renderer ──
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // Transparent background
    container.appendChild(renderer.domElement);

    // ── Scene & Camera ──
    const scene = new THREE.Scene();
    
    // Use an orthographic-like feel or slight perspective
    const camera = new THREE.PerspectiveCamera(35, w / h, 0.1, 100);
    camera.position.set(0, 0, 18);
    // slightly angled down
    camera.rotation.x = -0.15;
    camera.rotation.y = 0.1;

    // ── Grid of Boxes (InstancedMesh) ──
    const gridSize = 40; 
    const boxSize = 0.6;
    const gap = 0.15;
    const totalBoxes = gridSize * gridSize;
    const gridOffset = (gridSize * (boxSize + gap)) / 2;

    const geometry = new THREE.BoxGeometry(boxSize, boxSize, boxSize);
    
    // We will use a custom ShaderMaterial to handle hover scaling and neon coloring
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uBaseColor: { value: new THREE.Color("#0f172a") }, // dark slate
        uHoverColor: { value: new THREE.Color("#8b5cf6") }, // neon purple
        uHighlightColor: { value: new THREE.Color("#3b82f6") }, // neon blue
      },
      vertexShader: `
        uniform float uTime;
        uniform vec2 uMouse;
        varying vec3 vNormal;
        varying vec3 vColor;
        varying float vHoverIntensity;

        // Easing function
        float cubicOut(float t) {
          float f = t - 1.0;
          return f * f * f + 1.0;
        }

        void main() {
          // Extract translation from instanceMatrix
          vec3 instancePos = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
          
          // Map mouse to world constraints roughly (-1 to 1) -> (-10 to +10)
          vec2 mouseWorld = uMouse * 10.0; 
          
          // Distance from this instance to mouse in XY plane
          float dist = distance(instancePos.xy, mouseWorld);
          
          // Hover effect radius
          float hoverRadius = 4.5;
          float hoverInfluence = 1.0 - smoothstep(0.0, hoverRadius, dist);
          
          // Add some organic wave based on time and position
          float wave = sin(uTime * 2.0 + instancePos.x * 0.5 + instancePos.y * 0.5) * 0.5 + 0.5;
          
          // Combine hover and wave
          float combinedHover = hoverInfluence + (wave * 0.1 * hoverInfluence);
          combinedHover = cubicOut(min(combinedHover, 1.0));
          
          vHoverIntensity = combinedHover;

          // Scale and Extrude based on hover
          float scaleBase = 0.8;
          float scaleHover = 1.0 + combinedHover * 0.6; // grows slightly
          
          // Apply scale to vertex position (before applying instanceMatrix)
          vec3 transformed = position * mix(scaleBase, scaleHover, combinedHover);
          
          // Extrude Z
          transformed.z += combinedHover * 1.5; // pull out towards camera

          vec4 mvPosition = viewMatrix * modelMatrix * instanceMatrix * vec4(transformed, 1.0);
          gl_Position = projectionMatrix * mvPosition;

          // Pass normal correctly mapped
          vNormal = normalize((modelMatrix * instanceMatrix * vec4(normal, 0.0)).xyz);
        }
      `,
      fragmentShader: `
        uniform vec3 uBaseColor;
        uniform vec3 uHoverColor;
        uniform vec3 uHighlightColor;
        varying vec3 vNormal;
        varying float vHoverIntensity;

        void main() {
          // Simple lighting
          vec3 lightDir = normalize(vec3(1.0, 2.0, 3.0));
          float diff = max(dot(vNormal, lightDir), 0.0);
          float ambient = 0.4;
          
          // Fake iridescence mix
          vec3 activeColor = mix(uHoverColor, uHighlightColor, vHoverIntensity);
          
          // Final color based on hover
          vec3 color = mix(uBaseColor, activeColor, vHoverIntensity * 0.9);
          
          // Add lighting
          color = color * (diff * 0.8 + ambient);
          
          // Edge emission/glow at highest hover
          float edgeGlow = pow(1.0 - max(dot(vNormal, vec3(0.0, 0.0, 1.0)), 0.0), 3.0);
          color += activeColor * edgeGlow * vHoverIntensity * 1.5;

          gl_FragColor = vec4(color, 1.0);
        }
      `,
      transparent: true,
    });

    const instancedMesh = new THREE.InstancedMesh(geometry, material, totalBoxes);
    
    // Setup initial positions
    const dummy = new THREE.Object3D();
    let index = 0;
    for (let x = 0; x < gridSize; x++) {
      for (let y = 0; y < gridSize; y++) {
        dummy.position.x = (x * (boxSize + gap)) - gridOffset;
        dummy.position.y = (y * (boxSize + gap)) - gridOffset;
        dummy.position.z = 0; // base plane
        
        // Random slight rotation or uniform
        dummy.updateMatrix();
        instancedMesh.setMatrixAt(index, dummy.matrix);
        index++;
      }
    }
    
    instancedMesh.instanceMatrix.needsUpdate = true;
    scene.add(instancedMesh);

    // ── Floating Particle Field (Dust) ──
    const particleCount = 200;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
        pPos[i * 3] = (Math.random() - 0.5) * 25;
        pPos[i * 3 + 1] = (Math.random() - 0.5) * 25;
        pPos[i * 3 + 2] = Math.random() * 5 - 2;
    }
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
        color: 0x8b5cf6,
        size: 0.1,
        transparent: true,
        opacity: 0.4,
        blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    // ── Animation ──
    const clock = new THREE.Clock();

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Smooth mouse interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      // Update uniforms
      material.uniforms.uTime.value = t;
      material.uniforms.uMouse.value.set(mouseRef.current.x, mouseRef.current.y);

      // Subtle scene rotation based on mouse or time
      instancedMesh.rotation.x = Math.sin(t * 0.2) * 0.05 + mouseRef.current.y * -0.1;
      instancedMesh.rotation.y = Math.cos(t * 0.2) * 0.05 + mouseRef.current.x * 0.1;

      particles.rotation.y = t * 0.05;
      particles.rotation.x = Math.sin(t * 0.05) * 0.02;

      // Camera parallax
      camera.position.x += (mouseRef.current.x * 1.5 - camera.position.x) * 0.05;
      camera.position.y += (mouseRef.current.y * 1.5 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };
    animate();

    const resizeObserver = new ResizeObserver((entries) => {
      if (!container) return;
      for (const entry of entries) {
        const nw = entry.contentRect.width;
        const nh = entry.contentRect.height;
        if (nw > 0 && nh > 0) {
          camera.aspect = nw / nh;
          camera.updateProjectionMatrix();
          renderer.setSize(nw, nh);
        }
      }
    });
    resizeObserver.observe(container);

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(frameRef.current);
      resizeObserver.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      pGeo.dispose();
      pMat.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [handleMouseMove]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full"
      style={{ touchAction: "none" }}
    />
  );
}
