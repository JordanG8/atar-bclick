import React from 'react';
import { Sparkles, Terminal, Code2, Rocket, Video } from 'lucide-react';

function App() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Freepik Kling v3 Pro AI Generated Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 mix-blend-screen"
      >
        <source src="https://cdn.pixabay.com/video/2018/11/02/19056-298336214_tiny.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-0"></div>
      
      <nav className="absolute top-0 w-full p-6 flex justify-between items-center z-10 glass-panel border-b-0 rounded-none bg-transparent">
        <div className="text-xl font-bold flex items-center gap-2">
          <Sparkles className="text-pink-500" />
          <span className="gradient-text">StitchWeb</span>
        </div>
        <div className="hidden md:flex gap-6 text-sm text-[var(--text-secondary)] font-medium">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#how" className="hover:text-white transition-colors">How it works</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </div>
        <button className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition-transform">
          Get Started
        </button>
      </nav>

      <main className="z-10 flex flex-col items-center text-center px-4 mt-20 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 text-sm">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          Kling v3 Pro Video Beta
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight block">
          Design UIs with <br/>
          <span className="gradient-text">Stunning AI Precision</span>
        </h1>
        
        <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-12 max-w-2xl">
          Instantly generate production-ready React code utilizing the full power of Advanced Agentic UI frameworks.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center text-left md:text-center mt-6">
          <button className="bg-white text-black px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform">
            <Rocket size={20} />
            Start Designing
          </button>
          <button className="glass-panel px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 hover:bg-white/5 transition-colors">
            <Terminal size={20} />
            Documentation
          </button>
        </div>
      </main>

      <footer className="w-full text-center p-8 mt-20 text-[var(--text-secondary)] border-t border-white/10 text-sm z-10">
        <p>&copy; {new Date().getFullYear()} StitchWeb Inc. Powered by AntiGravity and Vite.</p>
      </footer>
    </div>
  );
}

export default App;
