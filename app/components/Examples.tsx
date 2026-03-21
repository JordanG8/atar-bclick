"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const examples = [
  {
    slug: "restaurant",
    name: "מסעדת גורמה",
    category: "מסעדה",
    description: "חוויית קולינריה דיגיטלית עם תפריט אינטראקטיבי והזמנת מקום.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    color: "from-orange-500 to-red-600",
    emoji: "🍽️",
  },
  {
    slug: "barbershop",
    name: "ברברשופ פרימיום",
    category: "ספרות",
    description: "סטייל מדויק עם קביעת תורים אונליין וגלריית עיצובים.",
    image: "https://images.unsplash.com/photo-1503951914946-0b1de5541604?auto=format&fit=crop&w=800&q=80",
    color: "from-slate-800 to-stone-700",
    emoji: "✂️",
  },
  {
    slug: "lawyer",
    name: "משרד עורכי דין",
    category: "משפטים",
    description: "אמינות וביטחון בסביבה מודרנית עם הצגת מומחיות.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80",
    color: "from-blue-900 to-indigo-800",
    emoji: "⚖️",
  },
  {
    slug: "gym",
    name: "מועדון כושר עלית",
    category: "כושר",
    description: "אנרגיה גבוהה, לוח שיעורים דינמי ומחירון מנויים מרהיב.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    color: "from-yellow-500 to-red-600",
    emoji: "💪",
  },
  {
    slug: "dentist",
    name: "מרפאת שיניים מתקדמת",
    category: "רפואה",
    description: "אסתטיקה וביטחון למטופלים עם קביעת תורים קלה.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
    color: "from-cyan-500 to-teal-500",
    emoji: "🦷",
  },
  {
    slug: "realestate",
    name: "סוכנות נדל״ן יוקרה",
    category: "נדל״ן",
    description: "סיורי נכסים וירטואליים והצגה ויזואלית שמוכרת.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    color: "from-emerald-600 to-teal-900",
    emoji: "🏠",
  },
  {
    slug: "photographer",
    name: "סטודיו צילום קריאייטיב",
    category: "צילום",
    description: "תיק עבודות מינימליסטי השם דגש על האמנות שלך.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    color: "from-purple-600 to-fuchsia-600",
    emoji: "📸",
  },
  {
    slug: "electrician",
    name: "שירותי חשמל ואנרגיה",
    category: "חשמלאי",
    description: "זמינות מהירה, אמינות גבוהה ויצירת קשר בקליק.",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
    color: "from-amber-400 to-orange-600",
    emoji: "⚡",
  },
  {
    slug: "beauty",
    name: "גלאם קליניק",
    category: "קוסמטיקה",
    description: "אווירת יוקרה, גלריית תוצאות ברמת פרימיום ומבצעים.",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80",
    color: "from-pink-500 to-rose-600",
    emoji: "💅",
  },
  {
    slug: "tutor",
    name: "אקדמיה ללמידה מובחרת",
    category: "חינוך",
    description: "בניית סמכות, הצגת מתודולוגיות והרשמה מהירה לתלמידים.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4273?auto=format&fit=crop&w=800&q=80",
    color: "from-indigo-500 to-purple-800",
    emoji: "📚",
  },
];

export default function Examples() {
  return (
    <section id="examples" className="py-32 bg-[#02050A] relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-1/3 h-1/2 bg-blue-900/10 blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#d4a843]/5 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="inline-block bg-[#d4a843]/10 border border-[#d4a843]/30 text-[#d4a843] font-bold text-sm px-6 py-2 rounded-full mb-6 uppercase tracking-wider">
            גלריית פרימיום
          </span>
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-6 tracking-tight">
            10 סגנונות, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4a843] to-[#e6bc57]">אינסוף אפשרויות</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
            כל עיצוב נבנה עם מחשבה על המרת לקוחות וחוויית משתמש חלקה. אנו נתאים כל אחד מהם לעסק שלך במדויק.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
          {examples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-[#0a1120] rounded-[2rem] overflow-hidden border border-white/5 hover:border-[#d4a843]/40 transition-all duration-500 shadow-2xl"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${example.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1120] via-[#0a1120]/60 to-transparent z-10" />
                
                {/* Floating Tag */}
                <div className="absolute top-6 right-6 z-20 bg-black/50 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full flex items-center gap-2">
                  <span>{example.emoji}</span>
                  <span className="text-white text-xs font-bold tracking-wide">{example.category}</span>
                </div>
              </div>

              <div className="relative z-20 p-8 -mt-10">
                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-[#d4a843] transition-colors">
                  {example.name}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-8">
                  {example.description}
                </p>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#d4a843]">
                    קליק להדגמה
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#d4a843] transition-colors duration-300">
                    <ArrowLeft className="w-5 h-5 text-white group-hover:text-[#050B14] transition-colors" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
