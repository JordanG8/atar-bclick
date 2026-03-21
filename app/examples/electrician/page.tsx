export default function ElectricianPage() {
  return (
    <div dir="rtl" className="min-h-screen bg-gray-950 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-950/95 backdrop-blur-sm border-b border-yellow-400/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <div className="text-white font-black text-xl leading-none">מוטי חשמלאי</div>
              <div className="text-yellow-400/70 text-xs font-medium tracking-wider">חשמל אמין ● מהיר ● מקצועי</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-gray-400 text-sm font-medium">
            <a href="#services" className="hover:text-yellow-400 transition-colors">שירותים</a>
            <a href="#about" className="hover:text-yellow-400 transition-colors">אודות</a>
            <a href="#testimonials" className="hover:text-yellow-400 transition-colors">לקוחות</a>
            <a href="#contact" className="hover:text-yellow-400 transition-colors">צור קשר</a>
          </div>
          <a href="tel:050-1234567" className="bg-yellow-400 text-gray-950 font-black px-5 py-2.5 rounded-lg hover:bg-yellow-300 transition-all text-sm flex items-center gap-2">
            <span>📞</span> 050-1234567
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gray-950" />
        {/* Animated electrical grid lines */}
        <div className="absolute inset-0 opacity-5"
          style={{backgroundImage: 'linear-gradient(#fbbf24 1px, transparent 1px), linear-gradient(90deg, #fbbf24 1px, transparent 1px)', backgroundSize: '60px 60px'}} />
        <div className="absolute inset-0"
          style={{background: 'radial-gradient(ellipse at 60% 50%, rgba(251, 191, 36, 0.12) 0%, transparent 60%)'}} />

        {/* Diagonal accent */}
        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-yellow-400 to-transparent opacity-60" />

        <div className="relative max-w-6xl mx-auto px-6 py-16">
          <div className="max-w-3xl">
            {/* Urgency badge */}
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-gray-950 text-sm font-black px-4 py-2 rounded-lg mb-8">
              ⚡ זמין עכשיו — שירות חירום 24/7
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
              חשמל{" "}
              <span className="text-yellow-400">תקע</span>
              <br />
              <span className="text-white">ועובד.</span>
              <br />
              <span className="text-gray-500 text-4xl md:text-5xl font-bold">בלי ב.ס.</span>
            </h1>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              מוטי כהן, חשמלאי מוסמך עם רישיון ממשלתי. 18 שנות ניסיון. מגיע בתוך שעה, עובד בנקיון ועוזב כשהכל עובד.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:050-1234567" className="bg-yellow-400 text-gray-950 font-black text-xl px-8 py-5 rounded-xl hover:bg-yellow-300 hover:shadow-2xl hover:shadow-yellow-400/30 transition-all transform hover:-translate-y-1 text-center flex items-center justify-center gap-2">
                ⚡ התקשר עכשיו
              </a>
              <a href="#contact" className="border-2 border-gray-700 text-white font-semibold text-xl px-8 py-5 rounded-xl hover:border-yellow-400 hover:text-yellow-400 transition-all text-center">
                שלח הודעה
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 mt-12 text-sm">
              {["✅ רישיון ממשלתי", "✅ ביטוח מלא", "✅ 18 שנות ניסיון", "✅ אחריות על עבודה"].map((b) => (
                <span key={b} className="text-gray-400 font-medium">{b}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <div className="bg-yellow-400 py-4">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🚨</span>
            <span className="text-gray-950 font-black text-lg">קצר חשמל? חיווט בוער? ממפגע? — מגיע תוך שעה, כל שעה</span>
          </div>
          <a href="tel:050-1234567" className="bg-gray-950 text-yellow-400 font-black px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors whitespace-nowrap">
            050-1234567 📞
          </a>
        </div>
      </div>

      {/* Services */}
      <section id="services" className="py-24 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">מה אני עושה</h2>
            <p className="text-gray-500 text-lg">כל עבודת חשמל, גדולה כקטנה</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🏠", title: "חשמל ביתי", items: ["החלפת לוח חשמל", "הוספת שקעים ונקודות", "תיקון קצרים", "חיווט חדש לגמרי"] },
              { icon: "🔌", title: "מטבח וחדר רחצה", items: ["חיבור מכשירי חשמל", "דוד שמש ומים", "אקו קוק", "מאוורר ואוורור"] },
              { icon: "💡", title: "תאורה ועיצוב", items: ["תאורת LED חכמה", "ספוטים ותאורה שקועה", "חיצוי ומרפסת", "בית חכם ואוטומציה"] },
              { icon: "🏢", title: "עסקים ומשרדים", items: ["חיווט משרדי מלא", "לוחות חשמל תעשייתיים", "גנרטורים", "תשתית IT"] },
              { icon: "⚡", title: "חירום 24/7", items: ["קצר חשמל", "נתיך שנשרף", "ממפגע חשמלי", "אין חשמל"] },
              { icon: "🛡️", title: "בדיקות ותיקונים", items: ["בדיקת תקינות לפני קניה", "תיקון ממפגעים", "דוח תקינות רשמי", "ייעוץ שיפוץ"] },
            ].map((service) => (
              <div key={service.title} className="bg-gray-950 border border-gray-800 rounded-2xl p-6 hover:border-yellow-400/40 transition-colors group">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-white font-bold text-xl mb-4 group-hover:text-yellow-400 transition-colors">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="text-gray-500 text-sm flex items-center gap-2">
                      <span className="text-yellow-400 text-xs">▸</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-gray-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black text-white mb-6">מי אני?</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                שמי מוטי כהן. חשמלאי מוסמך עם רישיון ממשלתי מאז 2006. עבדתי על מאות פרויקטים — מדירות להשבחה ועד בניינים מסחריים גדולים.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                אני מגיע בזמן, עובד בצורה נקייה ומסודרת, ולא עוזב עד שהכל עובד ואתה שבע רצון. בלי תוספות מחיר אחרי הציטוט.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[{ n: "18+", l: "שנות ניסיון" }, { n: "2000+", l: "פרויקטים" }, { n: "100%", l: "ביטוח" }].map((s) => (
                  <div key={s.l} className="bg-gray-900 border border-gray-800 rounded-2xl p-4 text-center">
                    <div className="text-yellow-400 font-black text-2xl">{s.n}</div>
                    <div className="text-gray-500 text-xs mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-yellow-400/10 to-transparent border border-yellow-400/20 rounded-3xl p-10">
              <div className="text-5xl mb-6">⚡</div>
              <h3 className="text-white font-black text-2xl mb-6">הבטחה שלי</h3>
              <ul className="space-y-4">
                {[
                  "מגיע תוך שעה לקריאות חירום",
                  "מחיר קבוע לפני תחילת עבודה",
                  "אחריות שנה על כל עבודה",
                  "עובד עם חומרים איכותיים בלבד",
                  "מנקה אחרי סיום העבודה",
                ].map((p) => (
                  <li key={p} className="flex items-center gap-3 text-gray-300">
                    <span className="text-yellow-400 font-black">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-black text-white mb-16 text-center">לקוחות מרוצים</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "ירון לוי", loc: "תל אביב", text: "קצר חשמל בשעה 23:00, מוטי הגיע תוך 45 דקות. תיקן, ניקה והלך. מחיר הוגן. ממליץ מאוד.", stars: 5 },
              { name: "דנה מזרחי", loc: "ראשון לציון", text: "עשה לנו שיפוץ חשמל מלא לדירה 5 חדרים. מקצועי, נקי, בזמן ובתקציב. פנטסטי!", stars: 5 },
              { name: "אלי שפירא", loc: "גבעתיים", text: "בדיקת תקינות לפני קניית דירה. מצא כמה בעיות שחסכו לי הרבה כסף. מדויק ואמין.", stars: 5 },
            ].map((t) => (
              <div key={t.name} className="bg-gray-950 border border-gray-800 rounded-2xl p-6 hover:border-yellow-400/30 transition-colors">
                <div className="flex gap-1 mb-4">
                  {Array(t.stars).fill(0).map((_, i) => <span key={i} className="text-yellow-400">★</span>)}
                </div>
                <p className="text-gray-400 leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center text-gray-950 font-black">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">{t.name}</div>
                    <div className="text-gray-600 text-xs">{t.loc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-gray-950">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-4">צור קשר</h2>
            <p className="text-gray-500 text-lg">לבעיית חשמל או פרויקט עתידי — אני כאן</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <a href="tel:050-1234567" className="flex items-center gap-4 bg-yellow-400 text-gray-950 rounded-2xl p-5 hover:bg-yellow-300 transition-colors font-bold">
                <span className="text-2xl">📞</span>
                <div>
                  <div className="text-sm opacity-70">חירום ושאלות</div>
                  <div className="text-xl font-black">050-1234567</div>
                </div>
              </a>
              <a href="https://wa.me/9720501234567" className="flex items-center gap-4 bg-green-500/20 border border-green-500/30 text-green-400 rounded-2xl p-5 hover:bg-green-500/30 transition-colors font-bold">
                <span className="text-2xl">💬</span>
                <div>
                  <div className="text-sm opacity-70">WhatsApp</div>
                  <div className="text-xl font-black">שלח הודעה</div>
                </div>
              </a>
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5 text-gray-400 text-sm leading-relaxed">
                <strong className="text-yellow-400">שעות פעילות</strong><br />
                א׳-ה׳: 07:00–20:00<br />
                ו׳: 07:00–14:00<br />
                חירום: 24/7 ✓
              </div>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-4">
              <input type="text" placeholder="שם" className="w-full bg-gray-950 border border-gray-700 text-white placeholder-gray-500 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400 transition-colors text-right" />
              <input type="tel" placeholder="טלפון" className="w-full bg-gray-950 border border-gray-700 text-white placeholder-gray-500 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400 transition-colors text-right" />
              <textarea placeholder="תאר את הבעיה" rows={3} className="w-full bg-gray-950 border border-gray-700 text-white placeholder-gray-500 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400 transition-colors text-right resize-none" />
              <button className="w-full bg-yellow-400 text-gray-950 font-black py-4 rounded-xl hover:bg-yellow-300 transition-colors">
                שלח ← מוטי יחזור אליך
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black py-8 text-center text-gray-700 text-sm border-t border-gray-900">
        © 2024 מוטי חשמלאי | רישיון ממשלתי מס׳ 12345 | נבנה על ידי <span className="text-yellow-400/60">אתר בקליק</span>
      </footer>
    </div>
  );
}
