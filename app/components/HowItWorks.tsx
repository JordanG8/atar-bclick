"use client";

import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: "💬",
      title: "יוצרים קשר",
      description:
        "שולחים לנו הודעה בוואטסאפ או מייל. מספרים לנו על העסק שלך, מה אתה מוכר ולמי.",
      color: "from-[#8b5cf6]/80 to-[#3b82f6]/80",
    },
    {
      number: "02",
      icon: "⚡",
      title: "אנחנו בונים",
      description:
        "הצוות שלנו עם כלי AI מתקדמים בונה לך דף נחיתה מקצועי, מותאם לעסק ולקהל שלך.",
      color: "from-blue-600/80 to-purple-600/80",
    },
    {
      number: "03",
      icon: "🚀",
      title: "עולה לאוויר",
      description:
        "תוך 24 שעות האתר שלך חי ופעיל ברשת, עם דומיין ו-SSL. לקוחות צופים בך.",
      color: "from-emerald-600/80 to-teal-500/80",
    },
  ];

  return (
    <section id="how" className="py-32 bg-[#050B14] relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#8b5cf6]/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 text-[#8b5cf6] font-bold text-sm px-6 py-2 rounded-full mb-6 uppercase tracking-wider">
            תהליך העבודה המהיר
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            הופכים את המסלול לפשוט,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6]">
              את התוצאה למושלמת.
            </span>
          </h2>
        </motion.div>

        {/* Steps Bento Box Series */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative group">
          {/* Subtle Connector Line */}
          <div className="hidden md:block absolute top-1/2 -translate-y-1/2 right-[10%] left-[10%] h-[1px] bg-gradient-to-l from-transparent via-[#8b5cf6]/20 to-transparent z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative liquid-glass rounded-[2rem] p-10 text-center z-10 h-full flex flex-col items-center justify-center overflow-hidden border border-white/5 hover:border-[#8b5cf6]/40 transition-all duration-500 shadow-[0_0_40px_rgba(0,0,0,0.5)] hover:shadow-[0_10px_50px_rgba(212,168,67,0.15)]"
            >
              <div className={`absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-br ${step.color} rounded-full blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-700`} />
              
              <div className="absolute top-6 left-6 text-7xl font-black text-white/5 leading-none select-none pointer-events-none">
                {step.number}
              </div>

              <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-4xl mb-8 shadow-inner relative z-20 backdrop-blur-md">
                <span style={{ filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.3))' }}>{step.icon}</span>
              </div>

              <h3 className="text-3xl font-black text-white mb-4 relative z-20">
                {step.title}
              </h3>
              <p className="text-white/60 leading-relax text-lg font-light relative z-20">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.8, duration: 1 }}
           className="text-center mt-20"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 text-[#8b5cf6] font-bold text-xl px-8 py-4 rounded-full bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 hover:bg-[#8b5cf6]/20 transition-all hover:scale-105"
          >
            בואו נתחיל לדבר
            <span className="text-2xl leading-none">💬</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
