export default function LawyerPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans" dir="rtl">

      {/* Navigation */}
      <nav className="fixed top-0 right-0 left-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center text-slate-950 font-black text-sm">
              ⚖
            </div>
            <div>
              <div className="text-white font-black text-base leading-none">כהן ושות&apos;</div>
              <div className="text-yellow-500 text-xs font-medium">משרד עורכי דין</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-yellow-500 transition-colors">אודות</a>
            <a href="#practice" className="hover:text-yellow-500 transition-colors">תחומי עיסוק</a>
            <a href="#testimonials" className="hover:text-yellow-500 transition-colors">לקוחות</a>
            <a href="#contact" className="hover:text-yellow-500 transition-colors">יצירת קשר</a>
          </div>
          <a
            href="#contact"
            className="bg-gradient-to-r from-yellow-600 to-amber-500 hover:from-yellow-500 hover:to-amber-400 text-slate-950 font-black px-5 py-2.5 rounded text-sm transition-all hover:scale-105"
          >
            פגישת ייעוץ חינם
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(234,179,8,0.1),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(30,58,138,0.3),_transparent_50%)]" />

        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-yellow-500" />
              <span className="text-yellow-500 text-xs font-bold uppercase tracking-[0.3em]">
                ייעוץ משפטי מקצועי — מאז 2001
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-[1.05] mb-8">
              <span className="block text-white">הזכויות שלכם</span>
              <span className="block text-white">בידיים</span>
              <span className="block bg-gradient-to-l from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                הנכונות
              </span>
            </h1>

            <p className="text-slate-300 text-xl leading-relaxed mb-10 max-w-2xl">
              משרד עורכי דין כהן ושות&apos; — ניסיון של 23 שנה בדיני משפחה, נדל&quot;ן ומסחרי.
              אנחנו לא רק מייצגים אתכם — אנחנו נלחמים עבורכם.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-600 to-amber-500 hover:from-yellow-500 hover:to-amber-400 text-slate-950 font-black px-10 py-4 rounded text-base transition-all hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/20"
              >
                פגישת ייעוץ חינם
                <span className="group-hover:translate-x-1 transition-transform inline-block">←</span>
              </a>
              <a
                href="#practice"
                className="inline-flex items-center justify-center border border-slate-600 hover:border-yellow-500 text-slate-400 hover:text-yellow-400 font-bold px-10 py-4 rounded text-base transition-all"
              >
                תחומי עיסוק
              </a>
            </div>

            {/* Stats bar */}
            <div className="grid grid-cols-4 gap-6 pt-8 border-t border-slate-800">
              {[
                { num: "23+", label: "שנות ניסיון" },
                { num: "1,200+", label: "תיקים הצליחו" },
                { num: "97%", label: "שיעור הצלחה" },
                { num: "4", label: "שותפים בכירים" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-black text-yellow-400">{s.num}</div>
                  <div className="text-slate-500 text-xs mt-0.5 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About / Why us */}
      <section id="about" className="py-24 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-yellow-500 text-xs font-bold uppercase tracking-widest">אודות המשרד</span>
              <h2 className="text-4xl md:text-5xl font-black mt-3 mb-6 text-white leading-tight">
                לא רק עורכי דין —<br />שותפים אמיתיים
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                משרד כהן ושות&apos; הוקם ב-2001 על ידי עו&quot;ד דניאל כהן, בוגר הפקולטה למשפטים
                באוניברסיטת תל אביב. לאורך השנים צמח המשרד לצוות של 8 עורכי דין מנוסים,
                המתמחים בדיני משפחה, נדל&quot;ן ומסחרי.
              </p>
              <p className="text-slate-400 leading-relaxed">
                אנחנו מאמינים בגישה אישית: כל לקוח מקבל תשומת לב מלאה, תקשורת שקופה
                ואסטרטגיה משפטית מותאמת אישית. לא מדברים בשפה משפטית — מסבירים בפשטות.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "👨‍⚖️", title: "דיני משפחה", desc: "גירושין, מזונות, משמורת ילדים" },
                { icon: "🏠", title: "נדל\"ן", desc: "רכישה, מכירה, ייצוג בעסקאות" },
                { icon: "💼", title: "מסחרי", desc: "חוזים, שותפויות, ייסוד חברות" },
                { icon: "⚖️", title: "ליטיגציה", desc: "ייצוג בבתי משפט בכל הערכאות" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-slate-800/60 border border-slate-700 hover:border-yellow-500/50 rounded-xl p-6 transition-all"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <div className="text-white font-bold text-sm mb-1">{item.title}</div>
                  <div className="text-slate-500 text-xs">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section id="practice" className="py-24 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-yellow-500 text-xs font-bold uppercase tracking-widest">תחומי עיסוק</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3 text-white">בכל תחום — מומחיות</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                num: "01",
                title: "דיני משפחה וגירושין",
                desc: "ליווי רגיש ומקצועי בתהליכי פרידה וגירושין — הסדרי משמורת, מזונות, חלוקת רכוש ועוד.",
                tags: ["גירושין", "משמורת", "מזונות", "הסכמי ממון"],
              },
              {
                num: "02",
                title: "עסקאות נדל\"ן",
                desc: "ביצוע ובדיקת עסקאות נדל\"ן מורכבות — מדירות מגורים ועד מבנים מסחריים גדולים.",
                tags: ["רכישה", "מכירה", "שכירות", "רישום טאבו"],
              },
              {
                num: "03",
                title: "משפט מסחרי",
                desc: "ייעוץ שוטף לעסקים וחברות — חוזים, שיתופי פעולה, מיזמים ופתרון סכסוכים מסחריים.",
                tags: ["חוזים", "שותפויות", "ייסוד חברות", "M&A"],
              },
            ].map((area) => (
              <div
                key={area.num}
                className="group bg-slate-900/60 border border-slate-800 hover:border-yellow-500/40 rounded-xl p-8 transition-all cursor-pointer"
              >
                <div className="flex items-start gap-6">
                  <div className="text-yellow-500/40 font-black text-4xl leading-none group-hover:text-yellow-500/70 transition-colors">
                    {area.num}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-white font-black text-xl mb-2 group-hover:text-yellow-400 transition-colors">
                        {area.title}
                      </h3>
                      <span className="text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity text-xl">→</span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{area.desc}</p>
                    <div className="flex gap-2 flex-wrap">
                      {area.tags.map((tag) => (
                        <span key={tag} className="bg-slate-800 text-slate-400 text-xs px-3 py-1 rounded-full border border-slate-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-yellow-500 text-xs font-bold uppercase tracking-widest">לקוחות ממליצים</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3 text-white">המילה שלהם שווה הכל</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "שרית גולדשטיין",
                role: "לקוחה — דיני משפחה",
                text: "עו\"ד כהן ליווה אותי בתהליך הגירושין המורכב ביותר שיכולתי לדמיין. הוא תמיד היה זמין, הסביר הכל בסבלנות ולחם על הזכויות שלי עד הסוף.",
              },
              {
                name: "מנחם שטרן",
                role: "לקוח — נדל\"ן",
                text: "רכשתי דירה להשקעה בשווי 2 מיליון שקל. המשרד ניהל את כל התהליך — מבדיקת הנכס ועד רישום הטאבו. מקצועי, יסודי, מהימן לחלוטין.",
              },
              {
                name: "אפרת ורדי",
                role: "לקוחה — מסחרי",
                text: "ייסדתי את החברה שלי עם הליווי של המשרד. מהחוזים ועד לשותפות עסקית — הכל היה מקצועי ומהיר. חוסכים לי הרבה כאב ראש.",
              },
            ].map((r) => (
              <div
                key={r.name}
                className="bg-slate-800/60 border border-slate-700 rounded-xl p-8 relative"
              >
                <div className="text-yellow-500/20 text-6xl font-black absolute top-4 left-6 leading-none">&ldquo;</div>
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-yellow-500 text-sm">★</span>
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 relative z-10">{r.text}</p>
                <div className="flex items-center gap-3 border-t border-slate-700 pt-5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-600 to-amber-500 flex items-center justify-center text-slate-950 font-black text-sm">
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{r.name}</div>
                    <div className="text-slate-500 text-xs">{r.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-yellow-500 text-xs font-bold uppercase tracking-widest">צרו קשר</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3 mb-4 text-white">
              פגישת ייעוץ ראשונה — חינם
            </h2>
            <p className="text-slate-400 text-lg">ספרו לנו על המקרה שלכם ונחזור תוך 24 שעות</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="שם מלא"
                className="w-full bg-slate-900 border border-slate-700 focus:border-yellow-500 rounded-lg px-5 py-4 text-white placeholder-slate-500 outline-none transition-colors"
              />
              <input
                type="tel"
                placeholder="טלפון"
                className="w-full bg-slate-900 border border-slate-700 focus:border-yellow-500 rounded-lg px-5 py-4 text-white placeholder-slate-500 outline-none transition-colors"
                dir="ltr"
              />
              <input
                type="email"
                placeholder="אימייל"
                className="w-full bg-slate-900 border border-slate-700 focus:border-yellow-500 rounded-lg px-5 py-4 text-white placeholder-slate-500 outline-none transition-colors"
                dir="ltr"
              />
              <select className="w-full bg-slate-900 border border-slate-700 focus:border-yellow-500 rounded-lg px-5 py-4 text-slate-400 outline-none transition-colors">
                <option>תחום הפנייה</option>
                <option>דיני משפחה</option>
                <option>נדל&quot;ן</option>
                <option>מסחרי</option>
                <option>אחר</option>
              </select>
              <textarea
                placeholder="תארו בקצרה את הנושא..."
                rows={4}
                className="w-full bg-slate-900 border border-slate-700 focus:border-yellow-500 rounded-lg px-5 py-4 text-white placeholder-slate-500 outline-none transition-colors resize-none"
              />
              <button className="w-full bg-gradient-to-r from-yellow-600 to-amber-500 hover:from-yellow-500 hover:to-amber-400 text-slate-950 font-black py-4 rounded-lg text-base transition-all hover:scale-[1.02]">
                שליחת פנייה
              </button>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-white font-bold text-lg mb-4">פרטי יצירת קשר</h3>
                <div className="space-y-4">
                  {[
                    { icon: "📍", label: "כתובת", val: "רחוב אחד העם 9, תל אביב" },
                    { icon: "📞", label: "טלפון", val: "03-720-1234", ltr: true },
                    { icon: "📧", label: "אימייל", val: "info@cohen-law.co.il", ltr: true },
                    { icon: "🕐", label: "שעות פעילות", val: "א'–ה' 9:00–18:00" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <span className="text-xl">{item.icon}</span>
                      <div>
                        <div className="text-slate-500 text-xs">{item.label}</div>
                        <div className="text-slate-300 text-sm mt-0.5" dir={item.ltr ? "ltr" : "rtl"}>
                          {item.val}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-600/20 to-amber-500/10 border border-yellow-500/30 rounded-xl p-6">
                <div className="text-yellow-400 font-black text-xl mb-2">פגישה ראשונה = 100% חינם</div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  אנחנו מאמינים שכל אדם מגיע לייעוץ משפטי מקצועי. לכן הפגישה הראשונה
                  אצלנו היא תמיד ללא תשלום — ללא כל מחויבות.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-slate-600 text-sm">© 2024 משרד עורכי דין כהן ושות&apos;. כל הזכויות שמורות.</div>
          <div className="text-slate-700 text-xs">
            נבנה על ידי{" "}
            <a href="/" className="text-yellow-500 hover:text-yellow-400">אתר בקליק</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
