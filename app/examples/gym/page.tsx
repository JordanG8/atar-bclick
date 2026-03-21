export default function GymPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans" dir="rtl">

      {/* Navigation */}
      <nav className="fixed top-0 right-0 left-0 z-50 bg-black/95 backdrop-blur-md border-b border-lime-400/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-lime-400 font-black text-2xl tracking-tight">POWER</div>
            <div className="text-white font-black text-2xl tracking-tight">FIT</div>
            <div className="text-gray-500 font-medium text-sm mr-1">TEL AVIV</div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#about" className="hover:text-lime-400 transition-colors">אודות</a>
            <a href="#programs" className="hover:text-lime-400 transition-colors">תוכניות</a>
            <a href="#pricing" className="hover:text-lime-400 transition-colors">מחירים</a>
            <a href="#contact" className="hover:text-lime-400 transition-colors">הצטרפות</a>
          </div>
          <a
            href="#contact"
            className="bg-lime-400 hover:bg-lime-300 text-black font-black px-5 py-2.5 rounded text-sm transition-all hover:scale-105"
          >
            אימון ניסיון חינם
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        {/* Neon glow effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-lime-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-lime-400/3 rounded-full blur-3xl" />

        {/* Diagonal accent */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-20 top-0 w-3 h-full bg-gradient-to-b from-lime-400 via-lime-400/50 to-transparent" style={{ transform: "skewX(-8deg)" }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 border border-lime-400/40 rounded px-4 py-2 text-lime-400 text-xs font-black uppercase tracking-widest mb-8">
                <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
                OPEN 24/7 — TEL AVIV
              </div>

              <h1 className="text-6xl md:text-8xl font-black leading-none mb-6 uppercase">
                <span className="block text-white">BUILD</span>
                <span className="block text-white">YOUR</span>
                <span className="block text-lime-400" style={{ WebkitTextStroke: "0px" }}>
                  BEST
                </span>
                <span className="block text-white">SELF</span>
              </h1>

              <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
                הגיע הזמן לשנות הרגלים. ב-PowerFit תמצאו ציוד מתקדם, מאמנים אישיים
                מוסמכים, ואווירה שמניעה אותכם קדימה — כל יום.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 bg-lime-400 hover:bg-lime-300 text-black font-black px-8 py-4 rounded text-base transition-all hover:scale-105"
                >
                  אימון ראשון חינם
                  <span className="group-hover:translate-x-1 transition-transform inline-block">←</span>
                </a>
                <a
                  href="#programs"
                  className="inline-flex items-center justify-center border border-gray-700 hover:border-lime-400 text-gray-400 hover:text-lime-400 font-bold px-8 py-4 rounded text-base transition-all"
                >
                  התוכניות שלנו
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-800">
                {[
                  { num: "2,500+", label: "חברים פעילים" },
                  { num: "80+", label: "מכשירים" },
                  { num: "24/7", label: "פתוח תמיד" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-black text-lime-400">{s.num}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right decorative */}
            <div className="hidden md:flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 border border-lime-400/20 rounded-2xl flex items-center justify-center bg-gradient-to-br from-lime-400/5 to-transparent">
                  <div className="text-center">
                    <div className="text-8xl mb-4">💪</div>
                    <div className="text-lime-400 font-black uppercase tracking-widest text-sm">No Pain, No Gain</div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-lime-400 text-black rounded-xl px-4 py-3 font-black text-sm">
                  חינם לחודש הראשון →
                </div>
                <div className="absolute -top-4 -right-4 border border-lime-400/40 bg-black rounded-xl px-4 py-3 text-xs text-lime-400 font-bold">
                  ⚡ מאמן אישי כלול
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="about" className="py-24 bg-gray-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-lime-400 font-bold text-xs uppercase tracking-widest">למה PowerFit?</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3 text-white uppercase">
              Not Just A Gym
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🏋️",
                title: "ציוד פרימיום",
                desc: "מעל 80 מכשירים מתוצרת Technogym ו-Life Fitness. קרוסאובר, כלים חופשיים, עמדות גב — הכל ברמה הגבוהה ביותר.",
              },
              {
                icon: "👨‍🏫",
                title: "מאמנים מוסמכים",
                desc: "כל מאמן אישי מוסמך ועובר הכשרה מתמשכת. בונים תוכנית אימון מותאמת אישית — ומלווים כל צעד.",
              },
              {
                icon: "🔥",
                title: "קבוצות ומחלקות",
                desc: "30+ שיעורי קבוצה בשבוע: HIIT, ספינינג, יוגה, פילאטיס, קיקבוקסינג ועוד. לא משתעממים כאן.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-black border border-gray-800 hover:border-lime-400/50 rounded-xl p-8 transition-all group"
              >
                <div className="text-5xl mb-5">{card.icon}</div>
                <h3 className="text-white font-black text-xl mb-3 group-hover:text-lime-400 transition-colors">
                  {card.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-lime-400 font-bold text-xs uppercase tracking-widest">תוכניות אימון</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3 text-white uppercase">Choose Your Path</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "🔥",
                title: "Fat Burner",
                subtitle: "שריפת שומן",
                desc: "תוכנית HIIT אינטנסיבית בשילוב קרדיו חכם. 8 שבועות לגוף שתמיד חלמתם עליו.",
                duration: "8 שבועות",
                level: "בינוני–מתקדם",
              },
              {
                icon: "💪",
                title: "Muscle Builder",
                subtitle: "בניית מסה",
                desc: "תוכנית כוח מגובשת שמשלבת פיצול שרירים, הזנה נכונה ועומס מתקדם. תוצאות בתוך 12 שבועות.",
                duration: "12 שבועות",
                level: "כל הרמות",
              },
              {
                icon: "🧘",
                title: "Body Balance",
                subtitle: "גוף ונפש",
                desc: "שילוב ייחודי של כוח, גמישות ומיינדפולנס. אידיאלי למי שרוצה להתחיל בצורה בטוחה.",
                duration: "6 שבועות",
                level: "מתחילים",
              },
              {
                icon: "⚡",
                title: "Athletic Performance",
                subtitle: "ביצועים ספורטיביים",
                desc: "תוכנית ייעודית לספורטאים ואנשים שרוצים לשדרג ביצועים — מהירות, כוח, סיבולת.",
                duration: "10 שבועות",
                level: "מתקדם",
              },
            ].map((prog) => (
              <div
                key={prog.title}
                className="bg-gray-950 border border-gray-800 hover:border-lime-400/40 rounded-xl p-8 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-3xl">{prog.icon}</span>
                    <h3 className="text-white font-black text-xl mt-2 group-hover:text-lime-400 transition-colors">
                      {prog.title}
                    </h3>
                    <div className="text-lime-400/60 text-sm font-medium">{prog.subtitle}</div>
                  </div>
                  <div className="text-left">
                    <div className="text-gray-500 text-xs">{prog.duration}</div>
                    <div className="text-gray-500 text-xs mt-1">{prog.level}</div>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{prog.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-gray-950">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-lime-400 font-bold text-xs uppercase tracking-widest">מחירים</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3 text-white uppercase">No Hidden Fees</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "BASIC",
                price: "₪149",
                period: "לחודש",
                features: ["גישה מלאה לציוד", "שיעורי קבוצה", "לוקר אישי", "אפליקציית אימון"],
                hot: false,
              },
              {
                name: "PRO",
                price: "₪229",
                period: "לחודש",
                features: ["הכל ב-BASIC", "4 אימוני PT בחודש", "תוכנית אימון אישית", "ייעוץ תזונה", "מגבת + מיץ"],
                hot: true,
              },
              {
                name: "ELITE",
                price: "₪399",
                period: "לחודש",
                features: ["הכל ב-PRO", "PT ללא הגבלה", "ניתוח גוף חודשי", "גישה לסאונה", "חנייה חינם"],
                hot: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`rounded-xl border p-8 transition-all ${
                  plan.hot
                    ? "bg-lime-400/5 border-lime-400 scale-105"
                    : "bg-black border-gray-800 hover:border-gray-600"
                }`}
              >
                {plan.hot && (
                  <div className="text-center mb-6">
                    <span className="bg-lime-400 text-black text-xs font-black px-4 py-1 rounded-full uppercase">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <div className={`font-black text-xs uppercase tracking-widest mb-2 ${plan.hot ? "text-lime-400" : "text-gray-500"}`}>
                    {plan.name}
                  </div>
                  <div className={`text-5xl font-black ${plan.hot ? "text-lime-400" : "text-white"}`}>
                    {plan.price}
                  </div>
                  <div className="text-gray-500 text-sm">{plan.period}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <span className="text-lime-400 font-black text-xs">✓</span>
                      <span className="text-gray-300">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block text-center font-black py-3 rounded transition-all uppercase tracking-wide text-sm ${
                    plan.hot
                      ? "bg-lime-400 hover:bg-lime-300 text-black"
                      : "border border-gray-700 hover:border-lime-400 text-gray-400 hover:text-lime-400"
                  }`}
                >
                  הצטרף עכשיו
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-black">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-lime-400 font-bold text-xs uppercase tracking-widest">ביקורות</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3 text-white uppercase">Real People, Real Results</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "אילון ברק",
                role: "חבר — 18 חודשים",
                text: "ירדתי 22 ק\"ג ב-6 חודשים. המאמן האישי היה חסר כל פשרות — ואני כל כך שמח על זה. PowerFit שינה לי את החיים.",
                result: "-22 ק\"ג",
              },
              {
                name: "שני אברהם",
                role: "חברה — שנה",
                text: "הגעתי אחרי לידה ולא ידעתי מאיפה להתחיל. הצוות כאן היה כל כך סבלני ומקצועי. עכשיו אני מרגישה חזקה מתמיד.",
                result: "+8 ק\"ג שריר",
              },
              {
                name: "גיל מיטל",
                role: "חבר — 3 שנים",
                text: "ניסיתי חמישה חדרי כושר בתל אביב. PowerFit הוא פשוט אחר — ציוד, אנשים, אווירה. לא עוזב.",
                result: "5 ק\"מ תוך 22 דק'",
              },
            ].map((r) => (
              <div key={r.name} className="bg-gray-950 border border-gray-800 rounded-xl p-8">
                <div className="bg-lime-400 text-black font-black text-sm inline-block px-3 py-1 rounded mb-5">
                  {r.result}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{r.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-lime-400 flex items-center justify-center text-black font-black text-sm">
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">{r.name}</div>
                    <div className="text-gray-600 text-xs">{r.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-gray-950">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <span className="text-lime-400 font-bold text-xs uppercase tracking-widest">הצטרפות</span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-4 text-white uppercase">
            Start Today
          </h2>
          <p className="text-gray-500 mb-12">אימון ניסיון ראשון — בחינם. ללא מחויבות.</p>

          <div className="space-y-4 text-right">
            <input
              type="text"
              placeholder="שם מלא"
              className="w-full bg-black border border-gray-800 focus:border-lime-400 rounded-lg px-5 py-4 text-white placeholder-gray-600 outline-none transition-colors"
            />
            <input
              type="tel"
              placeholder="טלפון"
              className="w-full bg-black border border-gray-800 focus:border-lime-400 rounded-lg px-5 py-4 text-white placeholder-gray-600 outline-none transition-colors"
              dir="ltr"
            />
            <select className="w-full bg-black border border-gray-800 focus:border-lime-400 rounded-lg px-5 py-4 text-gray-500 outline-none transition-colors">
              <option>מטרת האימון</option>
              <option>ירידה במשקל</option>
              <option>בניית מסה</option>
              <option>שיפור כושר כללי</option>
              <option>ביצועים ספורטיביים</option>
            </select>
          </div>

          <button className="mt-6 w-full bg-lime-400 hover:bg-lime-300 text-black font-black py-4 rounded-lg text-lg transition-all hover:scale-[1.02] uppercase tracking-wide">
            אימון ניסיון חינם →
          </button>

          <div className="flex justify-center gap-10 mt-12 text-gray-600 text-sm">
            <div>📍 הרצל 100, תל אביב</div>
            <div dir="ltr">📞 03-600-0000</div>
            <div>⚡ פתוח 24/7</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-900 py-6 bg-black">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-700 text-sm">© 2024 PowerFit Tel Aviv. All rights reserved.</div>
          <div className="text-gray-800 text-xs">
            Built by{" "}
            <a href="/" className="text-lime-400 hover:text-lime-300">אתר בקליק</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
