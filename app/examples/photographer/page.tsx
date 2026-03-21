export default function PhotographerPage() {
  return (
    <div dir="rtl" className="min-h-screen bg-black font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-rose-300 to-amber-200 rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-sm">ר</span>
            </div>
            <div>
              <div className="text-white font-bold text-lg leading-none">רון צלמות</div>
              <div className="text-rose-300/70 text-xs">Wedding Photography</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-white/60 text-sm">
            <a href="#portfolio" className="hover:text-rose-300 transition-colors">גלריה</a>
            <a href="#services" className="hover:text-rose-300 transition-colors">חבילות</a>
            <a href="#testimonials" className="hover:text-rose-300 transition-colors">זוגות</a>
            <a href="#contact" className="hover:text-rose-300 transition-colors">צור קשר</a>
          </div>
          <a href="#contact" className="border border-rose-300/60 text-rose-300 font-semibold px-5 py-2.5 rounded-full hover:bg-rose-300 hover:text-black transition-all text-sm">
            בדוק תאריך
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background gradient art */}
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0"
          style={{background: 'radial-gradient(ellipse at 20% 80%, rgba(244, 63, 94, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(251, 191, 36, 0.1) 0%, transparent 50%), radial-gradient(ellipse at 50% 50%, rgba(244, 63, 94, 0.05) 0%, transparent 70%)'}} />

        {/* Decorative lines */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-300/20 to-transparent" />

        <div className="relative max-w-6xl mx-auto px-6 py-32 pt-48 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <div className="inline-block text-rose-300/80 text-sm tracking-[0.3em] uppercase mb-6 font-light">
              צלם חתונות מוביל
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
              רגעים{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-amber-200 to-rose-400">
                לנצח
              </span>
            </h1>
            <p className="text-xl text-white/50 mb-10 leading-relaxed">
              מצלם את היום הכי מיוחד בחייכם בסגנון עדין, רומנטי ועוצר נשימה. כל זוג מקבל גישה שונה — כי הסיפור שלכם ייחודי.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-gradient-to-r from-rose-400 to-amber-300 text-black font-black text-lg px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-rose-500/30 transition-all transform hover:-translate-y-1 text-center">
                בדוק תאריך פנוי
              </a>
              <a href="#portfolio" className="text-white/70 font-semibold text-lg px-8 py-4 rounded-full border border-white/10 hover:border-rose-300/40 hover:text-rose-300 transition-all text-center">
                ראה עבודות
              </a>
            </div>
          </div>

          {/* Decorative photo mockup */}
          <div className="flex-shrink-0 relative">
            <div className="w-72 h-96 bg-gradient-to-br from-rose-900/40 to-amber-900/20 rounded-3xl border border-rose-300/20 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-300/10 to-transparent" />
              <div className="text-center">
                <div className="text-6xl mb-4">💍</div>
                <div className="text-rose-300/60 text-sm">תמונה מהאוסף</div>
              </div>
              {/* Corner accents */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-rose-300/40 rounded-tr-lg" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-rose-300/40 rounded-bl-lg" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-rose-400 to-amber-300 rounded-2xl p-4 shadow-xl shadow-rose-500/20">
              <div className="text-black font-black text-2xl">200+</div>
              <div className="text-black/70 text-xs">חתונות</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="portfolio" className="py-24 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-rose-300/60 text-sm tracking-widest uppercase mb-4">הגישה שלי</div>
            <h2 className="text-4xl font-black text-white mb-4">כל חתונה — סיפור אחר</h2>
            <p className="text-white/40 text-lg max-w-xl mx-auto">אני לא מצלם תמונות. אני משמר רגשות, מבטים, ורגעים שלא יחזרו.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎞️",
                title: "סגנון דוקומנטרי",
                desc: "תיעוד אותנטי של כל רגע — כולל הדמעות, הצחוקים, ומבטי הפתעה. ממש כמו שזה קרה.",
                grad: "from-rose-500/20 to-rose-900/20 border-rose-500/20",
              },
              {
                icon: "✨",
                title: "עריכה עדינה ואלגנטית",
                desc: "פלטת צבעים רכה ועדינה שתתאים לאלבום חתונה שיישאר יפה לנצח — לא טרנד שיחלוף.",
                grad: "from-amber-500/20 to-amber-900/20 border-amber-500/20",
              },
              {
                icon: "💌",
                title: "אלבום יוקרתי מודפס",
                desc: "בכל חבילה: אלבום מודפס בגודל A3 עם כריכת עור, USB עם כל התמונות ברזולוציה מלאה.",
                grad: "from-purple-500/20 to-purple-900/20 border-purple-500/20",
              },
            ].map((card) => (
              <div key={card.title} className={`bg-gradient-to-br ${card.grad} border rounded-3xl p-8 hover:scale-[1.02] transition-transform`}>
                <div className="text-4xl mb-6">{card.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                <p className="text-white/50 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="services" className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-rose-300/60 text-sm tracking-widest uppercase mb-4">חבילות</div>
            <h2 className="text-4xl font-black text-white mb-4">השקעה ברגעים שלכם</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "כסף",
                price: "₪4,500",
                hours: "6 שעות",
                features: ["6 שעות צילום", "500 תמונות ערוכות", "גלריה אונליין", "USB עם קבצים"],
                highlight: false,
              },
              {
                name: "זהב",
                price: "₪7,500",
                hours: "10 שעות",
                features: ["10 שעות צילום", "900 תמונות ערוכות", "אלבום A3 מודפס", "גלריה אונליין", "USB עם קבצים", "עורך וידאו highlight"],
                highlight: true,
              },
              {
                name: "פלטינום",
                price: "₪12,000",
                hours: "כל היום",
                features: ["יום שלם + חינה", "1500+ תמונות", "2 צלמים", "אלבום יוקרה", "סרטון מלא 10 דק׳", "פגישת היכרות"],
                highlight: false,
              },
            ].map((pkg) => (
              <div key={pkg.name} className={`rounded-3xl p-8 relative overflow-hidden ${pkg.highlight ? 'bg-gradient-to-br from-rose-400 to-amber-300' : 'bg-white/5 border border-white/10'}`}>
                {pkg.highlight && (
                  <div className="absolute top-4 left-4 bg-black/20 text-black font-bold text-xs px-3 py-1 rounded-full">
                    הכי פופולרי
                  </div>
                )}
                <div className={`text-sm font-semibold mb-2 ${pkg.highlight ? 'text-black/60' : 'text-rose-300/60'}`}>{pkg.hours}</div>
                <div className={`text-4xl font-black mb-1 ${pkg.highlight ? 'text-black' : 'text-white'}`}>{pkg.price}</div>
                <div className={`text-2xl font-bold mb-6 ${pkg.highlight ? 'text-black/80' : 'text-white/80'}`}>חבילת {pkg.name}</div>
                <ul className="space-y-2 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className={`flex items-center gap-2 text-sm ${pkg.highlight ? 'text-black/80' : 'text-white/60'}`}>
                      <span className={pkg.highlight ? 'text-black' : 'text-rose-300'}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`block text-center font-bold py-3 px-6 rounded-xl transition-all ${pkg.highlight ? 'bg-black text-white hover:bg-gray-900' : 'bg-gradient-to-r from-rose-400 to-amber-300 text-black hover:opacity-90'}`}>
                  בחר חבילה
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-zinc-950">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">זוגות שצילמתי</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { names: "נועה ואורי", date: "אוגוסט 2024", text: "רון לכד כל רגע מרגש בחתונה שלנו. כשקיבלנו את האלבום בכינו מרוב יופי. לא מתאר בכמה שמחנו שבחרנו בו!", stars: 5 },
              { names: "שירה ואריאל", date: "מרץ 2024", text: "מקצועי, שקט, ובלתי נראה — אבל התוצאות מדהימות. כל תמונה נראית כמו פוסטר של סרט אהבה. אנחנו כל כך מרוצים!", stars: 5 },
              { names: "לימור ודוד", date: "ינואר 2024", text: "רון הצליח לתפוס את אבא שלי בוכה בחופה — רגע שלא ידענו שהוא קרה. עכשיו זו התמונה האהובה עלינו. מדהים.", stars: 5 },
            ].map((t) => (
              <div key={t.names} className="bg-white/3 border border-white/8 rounded-3xl p-8">
                <div className="flex gap-1 mb-4">
                  {Array(t.stars).fill(0).map((_, i) => (
                    <span key={i} className="text-amber-300 text-lg">★</span>
                  ))}
                </div>
                <p className="text-white/70 leading-relaxed text-lg mb-6">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-amber-300 rounded-full flex items-center justify-center text-black font-bold text-lg">
                    {t.names[0]}
                  </div>
                  <div>
                    <div className="font-bold text-white">{t.names}</div>
                    <div className="text-white/40 text-sm">{t.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-black">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="text-rose-300/60 text-sm tracking-widest uppercase mb-4">בוא נדבר</div>
          <h2 className="text-4xl font-black text-white mb-4">התאריך שלכם מחכה</h2>
          <p className="text-white/40 text-lg mb-12">שלחו פרטים ואחזור אליכם תוך 24 שעות</p>
          <div className="bg-white/3 border border-white/10 rounded-3xl p-10">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input type="text" placeholder="שמות הזוג" className="bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-xl px-4 py-3.5 focus:outline-none focus:border-rose-300/50 transition-colors text-right" />
              <input type="tel" placeholder="טלפון" className="bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-xl px-4 py-3.5 focus:outline-none focus:border-rose-300/50 transition-colors text-right" />
            </div>
            <input type="text" placeholder="תאריך החתונה המתוכנן" className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-xl px-4 py-3.5 mb-4 focus:outline-none focus:border-rose-300/50 transition-colors text-right" />
            <textarea placeholder="ספרו לי על החתונה שלכם..." rows={3} className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-xl px-4 py-3.5 mb-6 focus:outline-none focus:border-rose-300/50 transition-colors text-right resize-none" />
            <button className="w-full bg-gradient-to-r from-rose-400 to-amber-300 text-black font-black text-xl py-4 rounded-xl hover:shadow-2xl hover:shadow-rose-500/30 transition-all transform hover:-translate-y-0.5">
              שלח ואבדוק זמינות
            </button>
          </div>
          <div className="flex justify-center gap-8 mt-10 text-white/30 text-sm">
            <span>📞 052-9876543</span>
            <span>📷 @ron.weddings</span>
          </div>
        </div>
      </section>

      <footer className="bg-zinc-950 py-8 text-center text-white/20 text-sm border-t border-white/5">
        © 2024 רון צלמות | נבנה על ידי <span className="text-rose-300/60">אתר בקליק</span>
      </footer>
    </div>
  );
}
