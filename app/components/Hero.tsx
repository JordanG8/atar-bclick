"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowLeft, CheckCircle2, ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";

const ThreeScene = dynamic(() => import("./ThreeScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-48 h-48">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#d4a843]/10 via-[#1e3a8a]/10 to-[#d4a843]/10 animate-pulse" />
        <div className="absolute inset-4 rounded-full border border-[#d4a843]/20 animate-[spin_8s_linear_infinite]" />
        <div className="absolute inset-10 rounded-full border border-[#1e3a8a]/15 animate-[spin_12s_linear_infinite_reverse]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white/20 text-xs font-medium tracking-widest uppercase">Loading 3D</span>
        </div>
      </div>
    </div>
  ),
});

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const floatVariants = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" as const },
  },
};

const marqueeItems = [
  "עיצוב מותאם אישית",
  "דפי נחיתה",
  "3D אינטראקטיבי",
  "AI וידאו",
  "חוויית משתמש פרימיום",
  "מוכן תוך 24 שעות",
  "עיצוב רספונסיבי",
  "אנימציות מתקדמות",
];

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [4, -4]), {
    stiffness: 150,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-4, 4]), {
    stiffness: 150,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToExamples = () => {
    document.getElementById("examples")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section
        className="relative min-h-[100dvh] flex items-center overflow-hidden bg-[#050B14]"
        onMouseMove={handleMouseMove}
        dir="rtl"
      >
        {/* ── Mesh Gradient Background Blobs ── */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="mesh-blob mesh-blob-1" />
          <div className="mesh-blob mesh-blob-2" />
          <div className="mesh-blob mesh-blob-3" />
        </div>

        {/* ── AI Video Background Layer ── */}
        <div className="absolute inset-0 pointer-events-none z-[1]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-lighten"
            src="https://cdn.pixabay.com/video/2020/05/25/40130-424930032_tiny.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#050B14]/30 to-[#050B14]/80" />
        </div>

        {/* ── Main Content Grid: Asymmetric Split ── */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pt-28 pb-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center min-h-[70dvh]">

            {/* ── Right Side: Text Content (RTL primary) ── */}
            <motion.div
              className="lg:col-span-6 xl:col-span-5 flex flex-col"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Liquid Glass Badge */}
              <motion.div variants={itemVariants}>
                <div className="liquid-glass inline-flex items-center gap-3 rounded-full px-5 py-2.5 mb-8 w-max">
                  <span className="w-2 h-2 rounded-full bg-[#d4a843] animate-pulse shadow-[0_0_8px_rgba(212,168,67,0.6)]" />
                  <span className="text-white/90 text-sm font-semibold tracking-wide">
                    עיצוב פרימיום · ביצוע מדויק · מוכן תוך 24 שעות
                  </span>
                </div>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={itemVariants}
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.05] mb-6 tracking-tight"
              >
                <span className="text-white">הנוכחות הדיגיטלית</span>
                <br />
                <span className="text-white">שלך, </span>
                <span className="bg-gradient-to-r from-[#d4a843] via-[#fceab8] to-[#d4a843] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(212,168,67,0.3)]">
                  ברמה אחרת
                </span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl text-white/60 mb-10 max-w-lg leading-relaxed font-light"
              >
                אנו יוצרים דפי נחיתה מרהיבים עם אלמנטים תלת-ממדיים אינטראקטיביים,
                וידאו AI וחוויית משתמש שמותירה רושם.
                החל מ-<span className="text-[#f0c866] font-bold">₪500</span> בלבד.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 mb-14"
              >
                <motion.button
                  onClick={scrollToContact}
                  whileHover={{ scale: 1.03, boxShadow: "0 0 60px rgba(212,168,67,0.5)" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="group relative overflow-hidden bg-gradient-to-r from-[#d4a843] to-[#e6bc57] text-[#050B14] font-black text-lg px-10 py-5 rounded-2xl shadow-[0_0_40px_rgba(212,168,67,0.3)] flex items-center justify-center gap-3"
                >
                  <span className="relative z-10">התחל עכשיו</span>
                  <ArrowLeft className="w-5 h-5 relative z-10 group-hover:-translate-x-2 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                </motion.button>

                <motion.button
                  onClick={scrollToExamples}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="liquid-glass text-white font-bold text-lg px-10 py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-white/10 transition-colors"
                >
                  צפה בגלריה העיצובים
                </motion.button>
              </motion.div>

              {/* Floating Stat Cards */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-3 gap-4"
              >
                {[
                  { label: "זמן אספקה", value: "24h" },
                  { label: "ויזואלי", value: "3D" },
                  { label: "שביעות רצון", value: "100%" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    variants={floatVariants}
                    animate="animate"
                    style={{
                      animationDelay: `${i * 0.4}s`,
                    }}
                    className="liquid-glass rounded-2xl p-4 text-center group cursor-default"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#d4a843] mx-auto mb-2 opacity-80 group-hover:scale-125 transition-transform duration-300" />
                    <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-white/40 text-xs font-medium mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* ── Left Side: 3D Spline Scene (RTL secondary) ── */}
            <motion.div
              className="lg:col-span-6 xl:col-span-7 relative h-[400px] sm:h-[500px] lg:h-[650px]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                perspective: 1200,
              }}
            >
              {/* Glow ring behind the 3D scene */}
              <div className="absolute inset-0 -m-8 rounded-full bg-[#d4a843]/5 blur-[80px] pointer-events-none" />
              <div className="absolute inset-0 -m-4 rounded-3xl border border-white/[0.03] pointer-events-none" />

              <div className="w-full h-full relative z-10 rounded-3xl overflow-hidden">
                <ThreeScene />
              </div>

              {/* Floating decorative label */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 liquid-glass rounded-full px-4 py-2 text-xs text-white/60 font-medium tracking-wider uppercase z-20 whitespace-nowrap"
              >
                Interactive 3D — Drag to Explore
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* ── Scroll Indicator ── */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/20 cursor-pointer hover:text-white/50 transition-colors z-20"
          onClick={scrollToExamples}
        >
          <ChevronDown className="w-10 h-10" />
        </motion.div>
      </section>

      {/* ── Kinetic Marquee Strip ── */}
      <div className="relative bg-[#070E1A] border-t border-b border-white/5 py-4 overflow-hidden z-10">
        <div className="kinetic-marquee flex gap-12 whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="text-white/30 text-sm font-bold uppercase tracking-widest flex items-center gap-4"
            >
              {item}
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4a843]/40 shrink-0" />
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
