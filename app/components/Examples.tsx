"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

import Link from "next/link";

const examples = [
  {
    slug: "stitch-ai",
    name: "Stitch AI Workspace",
    category: "AI",
    description: "Vite React app mimicking an advanced AI design generator with glassmorphism.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
    color: "from-fuchsia-500 to-cyan-500",
    emoji: "✨",
    url: "https://stitch-site-delta.vercel.app"
  },
  {
    slug: "spline-3d",
    name: "Spline Interactive 3D",
    category: "3D Web",
    description: "Immersive 3D interactive hero section combined with a stunning dark-mode layout.",
    image: "https://images.unsplash.com/photo-1614729939124-03290b5609ce?auto=format&fit=crop&w=800&q=80",
    color: "from-blue-600 to-indigo-900",
    emoji: "🧊",
    url: "https://spline-site-beta.vercel.app"
  },
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
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#8b5cf6]/5 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="inline-block bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 text-[#8b5cf6] font-bold text-sm px-6 py-2 rounded-full mb-6 uppercase tracking-wider">
            גלריית פרימיום
          </span>
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-6 tracking-tight">
            10 סגנונות, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6]">אינסוף אפשרויות</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
            כל עיצוב נבנה עם מחשבה על המרת לקוחות וחוויית משתמש חלקה. אנו נתאים כל אחד מהם לעסק שלך במדויק.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-14">
          {examples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -15, scale: 1.05, rotateX: 5, rotateY: 5 }}
              className="group relative rounded-[2rem] overflow-hidden backdrop-blur-3xl bg-white/[0.02] border border-white/10 hover:border-[#8b5cf6]/60 transition-all duration-700 shadow-[0_0_40px_rgba(0,0,0,0.8)] hover:shadow-[0_20px_60px_rgba(212,168,67,0.2)]"
              style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
            >
              <Link 
                 href={example.url || `/examples/${example.slug}`} 
                 target={example.url ? "_blank" : undefined}
                 rel={example.url ? "noopener noreferrer" : undefined}
                 className="block h-full relative z-10"
              >
                <div className="relative h-72 overflow-hidden m-4 rounded-[1.5rem]">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out group-hover:scale-110 group-hover:rotate-1"
                    style={{ backgroundImage: `url(${example.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#02050A] via-[#02050A]/20 to-transparent z-10 opacity-80" />
                  
                  {/* Glowing Tag */}
                  <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-xl border border-white/20 px-5 py-2 rounded-full flex items-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    <span className="text-xl">{example.emoji}</span>
                    <span className="text-white text-sm font-extrabold tracking-widest">{example.category}</span>
                  </div>
                </div>

                <div className="relative z-20 p-8 pt-2">
                  <div className="flex items-center gap-4 mb-4">
                     <div className="h-[2px] w-8 bg-[#8b5cf6] rounded-full" />
                     <h3 className="text-3xl font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#8b5cf6] group-hover:to-[#06b6d4] transition-all duration-500">
                       {example.name}
                     </h3>
                  </div>
                  <p className="text-white/70 text-base leading-relaxed mb-8 font-light">
                    {example.description}
                  </p>

                  <div className="pt-6 flex items-center justify-between border-t border-white/10">
                    <span className="text-sm font-black uppercase tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white group-hover:from-[#8b5cf6] group-hover:to-[#3b82f6] transition-all duration-300">
                      צפה בפרויקט
                    </span>
                    <div className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:bg-[#8b5cf6] group-hover:border-[#8b5cf6] group-hover:scale-110 transition-all duration-500 shadow-lg">
                      <ArrowLeft className="w-6 h-6 text-white group-hover:text-[#050B14] transition-colors" />
                    </div>
                  </div>
                </div>
                
                {/* Glow Effect behind card content */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#8b5cf6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
