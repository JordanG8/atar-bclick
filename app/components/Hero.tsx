"use client";

import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, ChevronDown, Sparkles } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToExamples = () => {
    const el = document.getElementById("examples");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050B14]">
      {/* Dynamic 3D Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, -90, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full bg-[#d4a843]/20 blur-[150px]"
        />
        <motion.div
          animate={{
            y: [0, -50, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[30%] w-[400px] h-[400px] rounded-full bg-purple-600/20 blur-[100px]"
        />
        
        {/* Animated Perspective Grid */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            transform: "perspective(1000px) rotateX(60deg) translateY(-100px) translateZ(-200px)",
            transformOrigin: "top text-center"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md rounded-full px-5 py-2.5 mb-8 shadow-[0_0_30px_rgba(212,168,67,0.15)]"
        >
          <Sparkles className="w-4 h-4 text-[#f0c866]" />
          <span className="text-white/90 text-sm md:text-base font-medium tracking-wide">
            עיצוב פרימיום. ביצוע מדויק. מוכן תוך 24 שעות.
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-6 tracking-tight"
        >
          הנוכחות הדיגיטלית שלך,
          <br />
          <span className="bg-gradient-to-r from-[#d4a843] via-[#fceab8] to-[#d4a843] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(212,168,67,0.3)] inline-block mt-2">
            ברמה בינלאומית
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-xl sm:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
        >
          אנו יוצרים דפי נחיתה מרהיבים ודינמיים לעסקים שרוצים לשדר יוקרה ולהמיר מבקרים ללקוחות.
          החל מ-<span className="text-[#f0c866] font-bold">₪500</span> בלבד.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
        >
          <button
            onClick={scrollToContact}
            className="group relative overflow-hidden bg-gradient-to-r from-[#d4a843] to-[#e6bc57] text-[#050B14] font-black text-xl px-10 py-5 rounded-2xl transition-all duration-300 shadow-[0_0_40px_rgba(212,168,67,0.4)] hover:shadow-[0_0_60px_rgba(212,168,67,0.6)] hover:scale-[1.02] w-full sm:w-auto flex items-center justify-center gap-3"
          >
            <span className="relative z-10">התחל עכשיו</span>
            <ArrowLeft className="w-6 h-6 relative z-10 group-hover:-translate-x-2 transition-transform" />
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </button>

          <button
            onClick={scrollToExamples}
            className="group bg-white/5 backdrop-blur-md border border-white/20 hover:bg-white/10 hover:border-white/40 text-white font-bold text-xl px-10 py-5 rounded-2xl transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-3"
          >
            צפה בגלריה העיצובים
          </button>
        </motion.div>

        {/* Floating Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-24 max-w-4xl mx-auto border-t border-white/10 pt-10"
        >
          {[
            { label: "זמן אספקה", value: "24 שעות" },
            { label: "עיצוב ויזואלי", value: "3D מודרני" },
            { label: "שביעות רצון", value: "100%" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center gap-2 group cursor-default">
              <CheckCircle2 className="w-6 h-6 text-[#d4a843] opacity-80 group-hover:scale-125 transition-transform duration-300" />
              <div className="text-3xl font-black text-white tracking-tight">{stat.value}</div>
              <div className="text-white/50 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 cursor-pointer hover:text-white/60 transition-colors"
        onClick={scrollToExamples}
      >
        <ChevronDown className="w-10 h-10" />
      </motion.div>
    </section>
  );
}
