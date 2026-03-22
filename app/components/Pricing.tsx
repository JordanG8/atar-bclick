"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Pricing() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const features = [
    "דף נחיתה מקצועי ומרשים מתמיד",
    "עיצוב פרימיום מותאם לעסק שלך",
    "חווית מובייל עוצרת נשימה",
    "אנימציות תלת ממד מתקדמות",
    "SSL ואבטחת מידע",
    "אחסון ודומיין לשנה הראשונה",
    "תמיכה מלאה ב-RTL (עברית)",
    "זמינות לשינויים ללא הגבלה במעמד המסירה",
  ];

  return (
    <section id="pricing" className="py-32 bg-[#02050A] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8b5cf6]/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 text-[#8b5cf6] font-bold text-sm px-6 py-2 rounded-full mb-6 uppercase tracking-wider">
            השקעה חכמה
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight">
            חבילת ה-Premium
          </h2>
          <p className="text-xl text-white/60 max-w-xl mx-auto font-light">
            הכל כלול, במחיר אחד ברור והוגן ללא עמלות נסתרות
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Main Pricing Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, boxShadow: "0 25px 60px rgba(212,168,67,0.15)" }}
            transition={{ duration: 0.5 }}
            className="relative liquid-glass rounded-[2.5rem] p-10 sm:p-14 overflow-hidden border border-white/10"
          >
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#8b5cf6] via-[#06b6d4] to-[#8b5cf6] opacity-80" />

            {/* Badge */}
            <div className="flex justify-center mb-10">
              <span className="bg-[#8b5cf6] text-[#050B14] shadow-[0_0_20px_rgba(212,168,67,0.4)] text-sm font-black uppercase tracking-widest px-6 py-2 rounded-full">
                הבחירה המובילה
              </span>
            </div>

            {/* Price */}
            <div className="text-center mb-12 relative">
              <div className="absolute inset-0 bg-[#8b5cf6] opacity-5 blur-[60px] rounded-full" />
              <p className="text-white/40 text-sm font-semibold tracking-widest uppercase mb-4">דף נחיתה מושלם החל מ</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 drop-shadow-sm">500</span>
                <span className="text-4xl font-bold text-[#8b5cf6]">₪</span>
              </div>
              <p className="text-[#8b5cf6]/80 text-sm mt-4 font-medium tracking-wide">תשלום פעם אחת · בעלות מלאה שלך</p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-6 mb-12">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#8b5cf6]/20 group-hover:border-[#8b5cf6]/50 transition-colors">
                    <Check className="w-3.5 h-3.5 text-[#8b5cf6]" />
                  </div>
                  <span className="text-white/80 text-sm font-light leading-snug">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] text-[#02050A] font-black text-xl py-5 rounded-2xl shadow-[0_10px_30px_rgba(212,168,67,0.3)] hover:shadow-[0_15px_40px_rgba(212,168,67,0.5)] transition-shadow"
            >
              התחל פרויקט עכשיו
            </motion.button>
          </motion.div>

          {/* Trust badges */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-3 gap-6 mt-12"
          >
            {[
              { icon: "🔒", text: "תשלום בטוח" },
              { icon: "⚡", text: "אספקה ב-24 ש׳" },
              { icon: "👑", text: "איכות פרימיום" },
            ].map((badge, i) => (
              <div key={i} className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                <div className="text-2xl mb-2 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">{badge.icon}</div>
                <div className="text-xs font-semibold tracking-wider text-white/50">{badge.text}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
