"use client";

import { motion } from "framer-motion";

export default function Contact() {
  const phone = "054-352-3776";
  const phoneFormatted = "+972543523776";
  const email = "jordangoren123@gmail.com";

  return (
    <section id="contact" className="py-32 bg-[#050B14] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-100px] right-[-200px] w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[150px]" />
        <div className="absolute bottom-[-200px] left-[-100px] w-[500px] h-[500px] rounded-full bg-[#8b5cf6]/10 blur-[150px]" />
        
        {/* Animated grid overlay */}
        <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white/70 font-bold text-sm px-6 py-2 rounded-full mb-6 uppercase tracking-widest backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#8b5cf6] animate-pulse" />
            מתחילים לעבוד
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-6 tracking-tight">
            מוכנים <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6]">להמריא?</span>
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
            שלחו לנו הודעה, ספרו לנו מה העסק שלכם צריך, הכל שקוף ובלי הפתעות.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* WhatsApp / Bit */}
          <motion.a
            href={`https://wa.me/${phoneFormatted}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group liquid-glass backdrop-blur-xl rounded-[2rem] p-10 text-center transition-all duration-300 border border-white/10 hover:border-[#25D366]/40 hover:shadow-[0_0_50px_rgba(37,211,102,0.15)] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#25D366]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="text-6xl mb-6 relative z-10 filter drop-shadow-[0_10px_20px_rgba(37,211,102,0.3)] group-hover:scale-110 transition-transform duration-500">📱</div>
            <h3 className="text-2xl font-black text-white mb-2 relative z-10">וואטסאפ / Bit</h3>
            <p className="text-3xl font-bold text-[#8b5cf6] mb-4 tracking-wider relative z-10" dir="ltr">
              {phone}
            </p>
            <p className="text-white/50 text-base mb-8 relative z-10 font-light">
              מענה מהיר בווצאפ<br />
              העברת תשלום באותו מספר בביט
            </p>
            <div className="bg-[#25D366] text-[#02050A] font-black text-lg py-4 px-8 rounded-xl inline-block group-hover:bg-[#20bd5a] transition-colors shadow-[0_10px_20px_rgba(37,211,102,0.3)] relative z-10 w-full sm:w-auto">
              התחל צ׳אט בוואטסאפ
            </div>
          </motion.a>

          {/* Email */}
          <motion.a
            href={`mailto:${email}`}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group liquid-glass backdrop-blur-xl rounded-[2rem] p-10 text-center transition-all duration-300 border border-white/10 hover:border-[#1e3a8a]/40 hover:shadow-[0_0_50px_rgba(30,58,138,0.2)] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="text-6xl mb-6 relative z-10 filter drop-shadow-[0_10px_20px_rgba(30,58,138,0.3)] group-hover:scale-110 transition-transform duration-500">✉️</div>
            <h3 className="text-2xl font-black text-white mb-2 relative z-10">אימייל</h3>
            <p className="text-xl font-bold text-[#8b5cf6] mb-4 break-all relative z-10 tracking-wider" dir="ltr">
              {email}
            </p>
            <p className="text-white/50 text-base mb-8 relative z-10 font-light">
              לשלוח פרטים מקיפים?<br />
              אנחנו קוראים כל מייל במהרה
            </p>
            <div className="bg-white/10 border border-white/20 hover:bg-white/20 text-white font-black text-lg py-4 px-8 rounded-xl inline-block transition-colors relative z-10 w-full sm:w-auto">
              שלח הודעת דוא״ל
            </div>
          </motion.a>
        </div>

        {/* Bottom tag */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.3 }}
           className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-8 py-4 backdrop-blur-md">
            <span className="text-2xl">💳</span>
            <span className="text-white/70 font-medium tracking-wide">
              מחיר פרימיום אחד | תשלום פשוט ובטוח | מוכן מהר
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
