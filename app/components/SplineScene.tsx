"use client";

import React, { Suspense } from "react";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

function SplineSceneSkeleton() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-64 h-64">
        {/* Shimmer skeleton */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/5 via-white/10 to-white/5 animate-pulse" />
        <div
          className="absolute inset-4 rounded-full border border-white/10"
          style={{
            animation: "spin 8s linear infinite",
          }}
        />
        <div
          className="absolute inset-10 rounded-full border border-white/5"
          style={{
            animation: "spin 12s linear infinite reverse",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white/20 text-sm font-medium tracking-widest uppercase">
            Loading 3D
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SplineScene() {
  return (
    <div className="w-full h-full relative">
      <Suspense fallback={<SplineSceneSkeleton />}>
        <Spline
          scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </Suspense>
    </div>
  );
}
