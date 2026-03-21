"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Scissors, MapPin, Phone, ChevronDown, CheckCircle2 } from "lucide-react";

export default function BarbershopPremium() {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  const scrollToNext = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    viewport: { once: true, margin: "-100px" }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-[#d4a843] selection:text-black overflow-x-hidden" dir="rtl">
      
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 right-0 left-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full bg-gradient-to-br from-[#d4a843] to-[#9c782b] flex items-center justify-center text-[#0A0A0A] font-black shadow-[0_0_20px_rgba(212,168,67,0.3)] group-hover:scale-110 transition-transform duration-300">
              <Scissors className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-black text-lg md:text-xl tracking-tight">הספר של יוסי</div>
              <div className="text-[#d4a843] text-[10px] md:text-xs font-bold uppercase tracking-widest">Premium Barbershop</div>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-10 text-sm font-bold text-white/70">
            {['אודות', 'שירותים', 'גלריה', 'ביקורות', 'יצירת קשר'].map((item, i) => (
              <a key={i} href={`#${item === 'יצירת קשר' ? 'contact' : item === 'שירותים' ? 'services' : item === 'גלריה' ? 'gallery' : item === 'ביקורות' ? 'testimonials' : 'about'}`} 
                 className="hover:text-[#d4a843] hover:-translate-y-0.5 transition-all duration-300">
                {item}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="bg-[#d4a843] hover:bg-[#f0c866] text-[#0A0A0A] font-black px-4 md:px-6 py-2.5 md:py-3 rounded-full text-xs md:text-sm whitespace-nowrap transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(212,168,67,0.4)]"
          >
            הזמן תור
          </a>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent z-10" />
          <div 
            className="absolute inset-0 bg-cover bg-center object-cover scale-110"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1585747860111-b0e2d3bb073f?q=80&w=2000&auto=format&fit=crop")' }}
          />
        </motion.div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 pt-20 text-center flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="inline-flex items-center gap-2 border border-[#d4a843]/30 bg-[#d4a843]/10 backdrop-blur-md rounded-full px-5 py-2 text-[#d4a843] text-xs font-bold uppercase tracking-widest mb-8 shadow-[0_0_30px_rgba(212,168,67,0.15)]"
          >
            <span className="w-2 h-2 rounded-full bg-[#d4a843] animate-pulse" />
            תל אביב, שינקין 48
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-6xl md:text-8xl lg:text-9xl font-black leading-[1.1] mb-6 tracking-tighter"
          >
            סטייל שמתחיל <br/>
            <span className="bg-gradient-to-r from-[#d4a843] via-[#ffdf8a] to-[#d4a843] bg-clip-text text-transparent italic pr-4 drop-shadow-2xl">
              מהראש
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-white/70 text-lg md:text-2xl leading-relaxed max-w-2xl font-light mb-12"
          >
            חוויית תספורת ברמה בינלאומית. עיצוב שיער, זקן וגילוח קלאסי לגבר המודרני שיודע מה הוא רוצה.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <a
              href="#contact"
              className="group relative overflow-hidden bg-gradient-to-r from-[#d4a843] to-[#b38827] text-[#0A0A0A] font-black text-xl px-12 py-5 rounded-full transition-all duration-300 shadow-[0_0_40px_rgba(212,168,67,0.3)] hover:shadow-[0_0_60px_rgba(212,168,67,0.5)] hover:scale-[1.03]"
            >
              <span className="relative z-10">קבע תור עכשיו</span>
            </a>
            <a
              href="#services"
              className="border border-white/20 hover:border-white/60 bg-white/5 backdrop-blur-sm text-white font-bold text-xl px-12 py-5 rounded-full transition-all hover:bg-white/10"
            >
              השירותים שלנו
            </a>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 z-20 cursor-pointer text-white/30 hover:text-[#d4a843] transition-colors"
          onClick={scrollToNext}
        >
          <ChevronDown className="w-12 h-12" />
        </motion.div>
      </section>

      {/* Services Section with 3D Hover Cards */}
      <section id="services" className="py-32 relative bg-[#0A0A0A]">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#d4a843]/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp as any}
            className="text-center mb-20"
          >
            <span className="text-[#d4a843] font-bold text-sm uppercase tracking-widest border border-[#d4a843]/30 rounded-full px-4 py-1.5 bg-[#d4a843]/10">מחירון פרימיום</span>
            <h2 className="text-5xl md:text-7xl font-black mt-6 text-white tracking-tight">השירותים שלנו</h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "תספורת גברים",
                price: "₪80",
                desc: "ייעוץ אישי, חפיפה מעסה, תספורת מדויקת ועיצוב בחומרים מובילים.",
                features: ["ייעוץ אישי", "חפיפה", "תספורת", "סטיילינג"],
                highlight: false
              },
              {
                title: "הקלאסי המלא",
                price: "₪140",
                desc: "תספורת ועיצוב זקן קומפלט. גילוח צדדים בסכין ישרה, מגבת חמה וטיפול עור.",
                features: ["תספורת קומפלט", "עיצוב זקן מיוחד", "מגבת חמה", "אפטר שייב יוקרתי"],
                highlight: true
              },
              {
                title: "עיצוב זקן וגילוח",
                price: "₪70",
                desc: "שרטוט ועיצוב זקן נקי. גילוח קלאסי מסורתי המשולב עם עיסוי לשחרור מתחים.",
                features: ["שרטוט מדויק", "גילוח סכין", "עיסוי זקן", "שמנים אתריים"],
                highlight: false
              }
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ y: -15, scale: 1.02 }}
                className={`group relative rounded-[2rem] p-10 border transition-all duration-500 overflow-hidden ${
                  plan.highlight
                    ? "bg-gradient-to-b from-[#1a1508] to-[#0A0A0A] border-[#d4a843]/50 shadow-[0_0_50px_rgba(212,168,67,0.1)]"
                    : "bg-[#111] border-white/5 hover:border-white/20"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-[#d4a843] via-[#ffdf8a] to-[#d4a843]" />
                )}
                
                <div className="mb-8 relative z-10">
                  <h3 className="text-2xl font-black text-white mb-2">{plan.title}</h3>
                  <div className="flex items-end gap-2 mb-4">
                    <span className={`text-5xl font-black ${plan.highlight ? "text-[#d4a843]" : "text-white"}`}>
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">{plan.desc}</p>
                </div>

                <ul className="space-y-4 mb-10 relative z-10">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className={`w-5 h-5 ${plan.highlight ? "text-[#d4a843]" : "text-white/30"}`} />
                      <span className="text-white/80 font-medium">{f}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-xl font-bold transition-all relative z-10 ${
                  plan.highlight 
                    ? "bg-[#d4a843] text-black hover:bg-[#ffdf8a] shadow-xl" 
                    : "bg-white/5 text-white hover:bg-white/10"
                }`}>
                  הזמן עכשיו
                </button>
                
                {plan.highlight && (
                  <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#d4a843]/10 rounded-full blur-[80px] pointer-events-none" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Parallax Image Gallery */}
      <section id="gallery" className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white">עבודות נבחרות</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80",
              "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&q=80",
              "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80",
            ].map((src, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ scale: 1.02, rotateY: 3, zIndex: 10 }}
                className="relative aspect-[4/5] rounded-3xl overflow-hidden cursor-crosshair group"
                style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                <img src={src} className="w-full h-full object-cover" alt="Barber work" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-end p-8">
                  <span className="text-[#d4a843] font-black text-xl tracking-wider">Premium Fade</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Contact */}
      <section id="contact" className="py-32 relative overflow-hidden bg-[#0A0A0A]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,168,67,0.05),_transparent_70%)] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#111] border border-white/5 rounded-[3rem] p-10 md:p-16 shadow-2xl"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">שריין את המקום שלך</h2>
              <p className="text-white/50 text-lg">אל תחכה לרגע האחרון. שריין תור ונדאג שתצא במיטבך.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="שם מלא" className="w-full bg-black border border-white/10 focus:border-[#d4a843] text-white rounded-2xl px-6 py-5 outline-none transition-colors" />
              <input type="tel" placeholder="מספר נייד" className="w-full bg-black border border-white/10 focus:border-[#d4a843] text-white rounded-2xl px-6 py-5 outline-none transition-colors" dir="ltr" />
              <div className="md:col-span-2">
                <select className="w-full bg-black border border-white/10 focus:border-[#d4a843] text-white/50 focus:text-white rounded-2xl px-6 py-5 outline-none transition-colors appearance-none cursor-pointer">
                  <option>בחר שירות מבוקש</option>
                  <option>תספורת גברים (₪80)</option>
                  <option>הקלאסי המלא (₪140)</option>
                  <option>עיצוב זקן (₪70)</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <button className="w-full bg-gradient-to-r from-[#d4a843] to-[#b38827] text-black font-black text-xl py-6 rounded-2xl hover:scale-[1.02] transition-transform shadow-[0_0_30px_rgba(212,168,67,0.2)]">
                  שלח בקשת תור
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-12 text-white/50">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#d4a843]" />
                <span>שינקין 48, תל אביב</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#d4a843]" />
                <span dir="ltr">050-555-9876</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/30 text-sm font-medium">© {new Date().getFullYear()} הספר של יוסי. עיצוב שיער בסטנדרט אחר.</div>
          <div className="flex items-center gap-2 text-white/30 text-sm">
            <span>Powered by</span>
            <a href="/" className="text-[#d4a843] font-bold hover:text-white transition-colors">אתר בקליק</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
