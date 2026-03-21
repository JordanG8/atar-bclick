import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';
import { MousePointer2, Layers, Cpu } from 'lucide-react';

function App() {
  return (
    <div className="flex h-screen w-full relative overflow-hidden bg-[#0d0e15]">
      {/* Freepik Kling v3 Pro AI Generated Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-20 mix-blend-screen pointer-events-none"
      >
        <source src="https://cdn.pixabay.com/video/2018/11/02/19056-298336214_tiny.mp4" type="video/mp4" />
      </video>

      {/* 3D Spline Viewer Background / Right Side */}
      <div className="absolute inset-0 md:left-1/3 spline-container z-10 pointer-events-auto">
        <Suspense fallback={<div className="flex items-center justify-center w-full h-full text-white/50">Loading 3D Scene...</div>}>
          <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
        </Suspense>
      </div>

      {/* Content Area */}
      <div className="relative z-20 flex flex-col justify-center h-full p-8 md:p-16 w-full md:w-1/2 pointer-events-none">
        
        <div className="frosted px-6 py-2 rounded-full inline-flex items-center gap-3 w-max mb-8 pointer-events-auto shadow-2xl">
          <Layers size={18} className="text-blue-400" />
          <span className="font-semibold text-sm tracking-wide">3D INTERACTIVE WEB</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black mb-6 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40 mix-blend-plus-lighter drop-shadow-lg">
          Build <br/> Insane <br/> UIs
        </h1>
        
        <p className="text-xl text-white/70 mb-12 max-w-md font-light leading-relaxed drop-shadow-md">
          Construct mesmerizing UIs fueled by interactive 3D and cinematic AI backgrounds.
        </p>

        <div className="flex gap-4 pointer-events-auto flex-col sm:flex-row">
          <button className="bg-white text-black px-8 py-4 rounded-xl font-bold flex justify-center gap-2 items-center hover:scale-105 transition-transform">
            <MousePointer2 size={20} />
            Interact Now
          </button>
          <button className="frosted px-8 py-4 rounded-xl flex justify-center font-bold gap-2 items-center hover:bg-white/10 transition-colors">
            <Cpu size={20} />
            View Logic
          </button>
        </div>
      </div>
      
      {/* Decorative Blur elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none z-0"></div>
    </div>
  );
}

export default App;
