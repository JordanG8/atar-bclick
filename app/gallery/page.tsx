import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "גלריית דוגמאות | אתר בקליק",
  description:
    "גלו את הדוגמאות שלנו — דפי נחיתה מקצועיים לעסקים קטנים בישראל. מסעדות, ספרות, עורכי דין, חדרי כושר ועוד. הזמינו עוד היום ב-₪500 בלבד.",
  alternates: {
    canonical: "https://atar-bclick.vercel.app/gallery",
  },
  openGraph: {
    title: "גלריית דוגמאות | אתר בקליק",
    description:
      "דפי נחיתה מקצועיים לעסקים קטנים בישראל — תוצאות אמיתיות ב-₪500 בלבד.",
    url: "https://atar-bclick.vercel.app/gallery",
  },
};

const examples = [
  {
    slug: "restaurant",
    name: "מסעדת הים התיכון",
    emoji: "🍽️",
    category: "מסעדה",
    description: "תפריט עשיר, אווירה ים-תיכונית ואפשרות הזמנת מקום אונליין — כל מה שמסעדה צריכה.",
    gradient: "from-orange-500 via-red-500 to-pink-600",
    accent: "bg-orange-500/20",
    tag: "מזון ואירוח",
  },
  {
    slug: "barbershop",
    name: "הספר של יוסי",
    emoji: "✂️",
    category: "ספרות",
    description: "תור אונליין, גלריית סגנונות ותמחור ברור — הלקוחות מגיעים מוכנים.",
    gradient: "from-slate-700 via-zinc-600 to-stone-500",
    accent: "bg-slate-500/20",
    tag: "יופי וטיפוח",
  },
  {
    slug: "lawyer",
    name: "משרד עורכי דין כהן ושות׳",
    emoji: "⚖️",
    category: "משפטים",
    description: "אמינות, מקצועיות ופרטי יצירת קשר ברורים — כל מה שלקוח מחפש בעורך דין.",
    gradient: "from-blue-900 via-indigo-800 to-blue-700",
    accent: "bg-blue-900/20",
    tag: "שירותים מקצועיים",
  },
  {
    slug: "gym",
    name: "PowerFit Tel Aviv",
    emoji: "💪",
    category: "כושר",
    description: "אנרגיה, מחירון מנויים ולוח שיעורים — חדר הכושר שגורם לאנשים להצטרף.",
    gradient: "from-yellow-500 via-orange-500 to-red-600",
    accent: "bg-yellow-500/20",
    tag: "בריאות וכושר",
  },
  {
    slug: "dentist",
    name: "ד״ר שרה לוי — רפואת שיניים",
    emoji: "🦷",
    category: "רפואת שיניים",
    description: "אמון, רשימת שירותים וקביעת תור קלה — הקליניקה שמרגישה מקצועית ונגישה.",
    gradient: "from-cyan-500 via-teal-500 to-emerald-500",
    accent: "bg-cyan-500/20",
    tag: "רפואה ובריאות",
  },
  {
    slug: "realestate",
    name: "דני נדל״ן",
    emoji: "🏠",
    category: "נדל״ן",
    description: "נכסים מוצגים ביופי, אמינות מתועדת ויצירת קשר מהירה — ככה מוכרים דירות.",
    gradient: "from-emerald-600 via-green-500 to-teal-500",
    accent: "bg-emerald-600/20",
    tag: "נדל״ן",
  },
  {
    slug: "photographer",
    name: "רון צלמות",
    emoji: "📸",
    category: "צלמות",
    description: "גלריה ויזואלית מרשימה, פקג׳ים וסגנון אישי — הדרך הנכונה לשווק צלם.",
    gradient: "from-purple-600 via-violet-600 to-fuchsia-600",
    accent: "bg-purple-600/20",
    tag: "צלמות ויצירה",
  },
  {
    slug: "electrician",
    name: "חשמל אמין",
    emoji: "⚡",
    category: "חשמלאי",
    description: "זמינות מיידית, רשימת שירותים ואזורי פעילות — בדיוק מה שבעל הבית צריך לראות.",
    gradient: "from-amber-400 via-yellow-500 to-orange-500",
    accent: "bg-amber-400/20",
    tag: "בית ותחזוקה",
  },
  {
    slug: "beauty",
    name: "גלאם סטודיו",
    emoji: "💅",
    category: "יופי",
    description: "אלגנטיות, שירותים עם תמחור, וגלריית עבודות — סטודיו יופי שאי אפשר לעמוד בפניו.",
    gradient: "from-pink-500 via-rose-500 to-fuchsia-500",
    accent: "bg-pink-500/20",
    tag: "יופי וטיפוח",
  },
  {
    slug: "tutor",
    name: "ד״ר מתמטיקה",
    emoji: "📐",
    category: "חינוך",
    description: "אמינות אקדמית, שיטת הלימוד ואפשרות להרשמה — המורה הפרטי שמלא בתלמידים.",
    gradient: "from-blue-500 via-indigo-500 to-purple-600",
    accent: "bg-blue-500/20",
    tag: "חינוך והשכלה",
  },
];

export default function GalleryPage() {
  return (
    <div
      className="min-h-screen bg-[#0a1628] text-white"
      dir="rtl"
      style={{ fontFamily: "var(--font-heebo), sans-serif" }}
    >
      {/* Top nav bar */}
      <nav className="fixed top-0 right-0 left-0 z-50 bg-[#0a1628]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1 group">
            <span className="text-xl font-black text-white group-hover:text-white/90 transition-colors">אתר</span>
            <span className="text-xl font-black text-[#d4a843] group-hover:text-[#f0c866] transition-colors">בקליק</span>
          </Link>
          <Link
            href="/#contact"
            className="bg-[#d4a843] hover:bg-[#f0c866] text-[#0a1628] font-bold px-5 py-2 rounded-full text-sm transition-all duration-200 shadow-lg shadow-[#d4a843]/25"
          >
            רוצה אתר כזה?
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#d4a843]/10 rounded-full blur-3xl" />
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-purple-600/8 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#d4a843]/15 border border-[#d4a843]/30 text-[#d4a843] text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-[#d4a843] animate-pulse" />
            10 דוגמאות אמיתיות
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6">
            <span className="text-white">האתרים</span>
            <br />
            <span className="bg-gradient-to-l from-[#d4a843] via-[#f0c866] to-[#d4a843] bg-clip-text text-transparent">
              שמוכרים עבורך
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            כל אחת מהדוגמאות הבאות היא אתר מלא ומוכן — עם עיצוב מקצועי, תוכן עברי ופונקציונליות מלאה.{" "}
            <span className="text-white/90 font-semibold">הכל ב-₪500 בלבד.</span>
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {[
              { num: "10+", label: "תחומי עסק" },
              { num: "₪500", label: "מחיר קבוע" },
              { num: "48h", label: "זמן מסירה" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-black text-[#d4a843]">{s.num}</div>
                <div className="text-sm text-white/50 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {examples.map((ex, i) => (
            <article
              key={ex.slug}
              className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40"
            >
              {/* Gradient thumbnail */}
              <div className={`relative h-48 bg-gradient-to-br ${ex.gradient} overflow-hidden`}>
                {/* Decorative grid overlay */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />
                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/10 group-hover:to-white/20 transition-all duration-300" />

                {/* Browser chrome mockup */}
                <div className="absolute top-4 right-4 left-4 bg-white/15 backdrop-blur-sm rounded-lg p-2">
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
                    <div className="flex-1 mr-2 bg-white/20 rounded h-3" />
                  </div>
                  <div className="space-y-1.5">
                    <div className="bg-white/30 rounded h-3 w-3/4" />
                    <div className="bg-white/20 rounded h-2 w-full" />
                    <div className="bg-white/20 rounded h-2 w-5/6" />
                  </div>
                </div>

                {/* Emoji badge */}
                <div className="absolute bottom-4 left-4 text-4xl drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {ex.emoji}
                </div>

                {/* Category tag */}
                <div className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-sm text-white/90 text-xs font-semibold px-2.5 py-1 rounded-full">
                  {ex.tag}
                </div>

                {/* Number badge */}
                <div className="absolute top-4 left-4 w-7 h-7 rounded-full bg-black/30 backdrop-blur-sm text-white/70 text-xs font-bold flex items-center justify-center">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Card body */}
              <div className="p-5">
                <h2 className="text-lg font-bold text-white mb-1 leading-snug">{ex.name}</h2>
                <p className="text-sm text-white/55 leading-relaxed mb-5">{ex.description}</p>

                <Link
                  href={`/examples/${ex.slug}`}
                  className="flex items-center justify-between w-full bg-white/10 hover:bg-[#d4a843] border border-white/10 hover:border-[#d4a843] text-white/90 hover:text-[#0a1628] font-semibold text-sm px-4 py-2.5 rounded-xl transition-all duration-200 group/btn"
                >
                  <span>צפה בדוגמה</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover/btn:-translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-20 relative overflow-hidden rounded-3xl bg-gradient-to-l from-[#d4a843] via-[#e8bc55] to-[#f0c866] p-0.5">
          <div className="relative bg-gradient-to-l from-[#0f1e4a] to-[#0a1628] rounded-3xl px-8 py-12 text-center overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4a843]/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
            </div>

            <div className="relative">
              <div className="text-4xl mb-4">🚀</div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                מצאת עיצוב שמוצא חן בעיניך?
              </h2>
              <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
                נבנה לך אתר מותאם אישית לעסק שלך — ב-₪500 בלבד, תוך 48 שעות.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/#contact"
                  className="bg-[#d4a843] hover:bg-[#f0c866] text-[#0a1628] font-black text-lg px-8 py-4 rounded-full transition-all duration-200 shadow-xl shadow-[#d4a843]/30 hover:shadow-[#d4a843]/50 hover:scale-105"
                >
                  רוצה אתר כזה? דברו איתנו
                </Link>
                <Link
                  href="/"
                  className="text-white/60 hover:text-white font-semibold text-base transition-colors underline underline-offset-4"
                >
                  חזרה לעמוד הבית
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-white/30 text-sm">
        <p>© {new Date().getFullYear()} אתר בקליק — כל הזכויות שמורות</p>
      </footer>
    </div>
  );
}
