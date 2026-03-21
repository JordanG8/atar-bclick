import { AbsoluteFill, Video, interpolate, useCurrentFrame, useVideoConfig, staticFile } from "remotion";
import React from "react";

export const MyVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  
  // Fade in animation for text
  const opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  const translateY = interpolate(frame, [0, 30], [50, 0], {
     extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: "black" }}>
      {/* Replace 'hero-raw.mp4' with the generated Kling video downloaded to public/ later */}
      <Video src={staticFile("hero-raw.mp4")} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      
      {/* Dim overlay */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)' }} />

      {/* Cinematic Text Overlay */}
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
        <h1
          style={{
            fontFamily: "Arial, sans-serif",
            fontWeight: "bold",
            fontSize: 80,
            color: "#d4a843",
            opacity,
            transform: `translateY(${translateY}px)`,
            textAlign: "center",
            textShadow: "0px 0px 20px rgba(212,168,67,0.5)"
          }}
        >
          PREMIUM STYLE
        </h1>
        <p
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: 30,
            color: "white",
            opacity: interpolate(frame, [20, 50], [0, 1], { extrapolateRight: "clamp" }),
            transform: `translateY(${interpolate(frame, [20, 50], [30, 0], { extrapolateRight: "clamp" })}px)`,
            marginTop: 20,
            fontWeight: "lighter",
            letterSpacing: 4
          }}
        >
          EXPERIENCE THE DIFFERENCE
        </p>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
