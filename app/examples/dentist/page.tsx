export default function DentistPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans" dir="rtl">

      {/* Navigation */}
      <nav className="fixed top-0 right-0 left-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white font-black text-sm">
              ד&quot;ר
            </div>
            <div>
              <div className="text-gray-900 font-black text-base leading-none">ד&quot;ר שרה לוי</div>
              <div className="text-sky-500 text-xs font-medium">רפואת שיניים</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
            <a href="#about" className="hover:text-sky-500 transition-colors">אודות</a>
            <a href="#services" className="hover:text-sky-500 transition-colors">טיפולים</a>
            <a href="#testimonials" className="hover:text-sky-500 transition-colors">המלצות</a>
            <a href="#contact" className="hover:text-sky-500 transition-colors">תיאום תור</a>
          </div>
          <a
            href="#contact"
            className="bg-sky-500 hover:bg-sky-400 text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-all hover:scale-105 hover:shadow-lg hover:shadow-sky-500/30"
          >
            קבע תור
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50">
        {/* Soft decorative blobs */}
        <div className="absolute top-20 left-0 w-96 h-96 bg-sky-100/80 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-100/60 rounded-full blur-3xl translate-x-1/3" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-sky-100 border border-sky-200 rounded-full px-5 py-2 text-sky-600 text-xs font-bold mb-8">
                <span className="w-2 h-2 bg-sky-400 rounded-full" />
                מרפאה פרטית בתל אביב — מאז 2008
              </div>

              <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6 text-gray-900">
                <span className="block">חיוך שמאיר</span>
                <span className="block text-sky-500">את החיים</span>
              </h1>

              <p className="text-gray-500 text-xl leading-relaxed mb-8 max-w-lg">
                מרפאת שיניים מודרנית עם טכנולוגיה מתקדמת וגישה אנושית חמה.
                ד&quot;ר שרה לוי ואמה מקצועית מטפלים בכל בני המשפחה — בעדינות ובמקצועיות.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold px-8 py-4 rounded-xl text-base transition-all hover:scale-105 hover:shadow-lg hover:shadow-sky-500/30"
                >
                  קביעת תור
                  <span className="group-hover:translate-x-1 transition-transform inline-block">←</span>
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center border border-gray-200 hover:border-sky-300 text-gray-500 hover:text-sky-500 font-bold px-8 py-4 rounded-xl text-base transition-all"
                >
                  כל הטיפולים
                </a>
              </div>

              <div className="flex gap-10">
                {[
                  { num: "16+", label: "שנות ניסיון" },
                  { num: "8,000+", label: "מטופלים מרוצים" },
                  { num: "4.9★", label: "גוגל" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-black text-sky-500">{s.num}</div>
                    <div className="text-gray-400 text-xs mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right visual */}
            <div className="hidden md:flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-3xl bg-gradient-to-br from-sky-100 to-blue-100 border border-sky-200 flex items-center justify-center shadow-xl">
                  <div className="text-center">
                    <div className="text-8xl mb-4">🦷</div>
                    <div className="text-sky-500 font-black text-sm">Professional Dental Care</div>
                    <div className="text-gray-400 text-xs mt-1">Tel Aviv</div>
                  </div>
                </div>
                <div className="absolute -bottom-5 -left-5 bg-white border border-sky-200 rounded-2xl px-5 py-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-500 text-xl">✓</div>
                    <div>
                      <div className="text-gray-900 font-bold text-sm">ללא כאב</div>
                      <div className="text-gray-400 text-xs">טכנולוגיה מתקדמת</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-5 -right-5 bg-sky-500 text-white rounded-2xl px-4 py-3 shadow-lg">
                  <div className="text-white font-bold text-sm">מקבלים ביטוח</div>
                  <div className="text-sky-100 text-xs">כל קופות החולים</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About / Why us */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sky-500 font-bold text-sm uppercase tracking-widest">למה לבחור בנו</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3 text-gray-900">
              הבריאות שלכם — בראש סדר העדיפויות
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🔬",
                title: "טכנולוגיה מתקדמת",
                desc: "ציוד רנטגן דיגיטלי עם קרינה מינימלית, מצלמות תוך-פיות, ומערכת CAD/CAM לכתרים בו-ביומי.",
                color: "sky",
              },
              {
                icon: "💙",
                title: "גישה אנושית",
                desc: "אנחנו יודעים שרבים חוששים מרופא שיניים. אצלנו תמצאו סביבה רגועה, הסברים מלאים ועדינות מקסימלית.",
                color: "blue",
              },
              {
                icon: "⏱️",
                title: "תורים מהירים",
                desc: "לא מחכים שבועות. תורים פנויים השבוע, כולל ערבים ושישי בבוקר. מגיבים לתור תוך שעה.",
                color: "sky",
              },
            ].map((card) => (
              <div
                key={card.title}
                className={`bg-${card.color}-50 border border-${card.color}-100 hover:border-${card.color}-200 rounded-2xl p-8 transition-all group`}
              >
                <div className="text-5xl mb-5">{card.icon}</div>
                <h3 className="text-gray-900 font-bold text-xl mb-3 group-hover:text-sky-500 transition-colors">
                  {card.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sky-500 font-bold text-sm uppercase tracking-widest">הטיפולים שלנו</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3 text-gray-900">שירות מלא לכל המשפחה</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🦷", name: "בדיקות ומניעה", desc: "בדיקה שנתית, ניקוי טרטר, ציפוי פלואוריד", price: "₪180" },
              { icon: "😁", name: "לבנת שיניים", desc: "לבנה מקצועית עם ג'ל מיוחד — עד 8 גוונים בהירים יותר", price: "₪800" },
              { icon: "🏗️", name: "שיניים תותבות", desc: "שיניים קבועות או נשלפות באיכות הגבוהה ביותר", price: "מ-₪1,500" },
              { icon: "🔧", name: "שיחזורים", desc: "סתימות קומפוזיט שלא נראות, כתרים ועטרות", price: "מ-₪350" },
              { icon: "🌿", name: "טיפול שורש", desc: "ללא כאב, עם הרדמה מתקדמת ומכשור אלקטרוני", price: "₪1,200" },
              { icon: "✨", name: "ציפויי חרסינה", desc: "Veneers קרמיים — חיוך מושלם כמו בסרטים", price: "מ-₪2,500" },
            ].map((service) => (
              <div
                key={service.name}
                className="bg-white border border-gray-200 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-500/10 rounded-2xl p-6 transition-all group"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-3xl">{service.icon}</span>
                  <span className="text-sky-500 font-black text-sm bg-sky-50 px-3 py-1 rounded-full">{service.price}</span>
                </div>
                <h3 className="text-gray-900 font-bold text-lg mb-2 group-hover:text-sky-500 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-400 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 rounded-2xl p-8 text-center">
            <div className="text-sky-500 font-black text-2xl mb-2">מקבלים את כל קופות החולים</div>
            <p className="text-gray-500">מכבי, מאוחדת, כללית, לאומית — ועובדים עם כל ביטוחי השיניים הפרטיים</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sky-500 font-bold text-sm uppercase tracking-widest">מה אומרים המטופלים</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3 text-gray-900">ביקורות אמיתיות</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "רחל אזולאי",
                role: "מטופלת — 5 שנים",
                text: "פחדתי מרופא שיניים כל חיי. ד\"ר לוי שינתה את הכל — כל כך עדינה, סבלנית ומסבירת פנים. עכשיו אני מגיעה לבדיקות בשמחה!",
              },
              {
                name: "משה בן דוד",
                role: "מטופל — 3 שנים",
                text: "עשיתי שיקום פה מלא אחרי שנים שלא הלכתי לרופא. ד\"ר שרה ייעצה לי, הסבירה הכל ועשתה עבודה מדהימה. תוצאה פשוט מרשימה.",
              },
              {
                name: "הדר פרידמן",
                role: "מטופלת — שנתיים",
                text: "עשיתי ציפויי חרסינה ל-8 שיניים. התוצאה מעבר לכל ציפייה — חיוך שתמיד חלמתי עליו. כל הצוות מדהים ומקצועי.",
              },
            ].map((r) => (
              <div
                key={r.name}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-sky-200 hover:shadow-lg hover:shadow-sky-500/10 transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{r.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center text-white font-black text-sm">
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="text-gray-900 font-semibold text-sm">{r.name}</div>
                    <div className="text-gray-400 text-xs">{r.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-gradient-to-br from-sky-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sky-500 font-bold text-sm uppercase tracking-widest">קביעת תור</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3 mb-4 text-gray-900">
              מתחילים מחיוך אחד
            </h2>
            <p className="text-gray-500 text-lg">קבעו תור עכשיו ונחזור אליכם תוך שעה</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 space-y-4">
              <input
                type="text"
                placeholder="שם מלא"
                className="w-full bg-gray-50 border border-gray-200 focus:border-sky-400 focus:bg-white rounded-xl px-5 py-4 text-gray-900 placeholder-gray-400 outline-none transition-colors"
              />
              <input
                type="tel"
                placeholder="מספר טלפון"
                className="w-full bg-gray-50 border border-gray-200 focus:border-sky-400 focus:bg-white rounded-xl px-5 py-4 text-gray-900 placeholder-gray-400 outline-none transition-colors"
                dir="ltr"
              />
              <select className="w-full bg-gray-50 border border-gray-200 focus:border-sky-400 focus:bg-white rounded-xl px-5 py-4 text-gray-500 outline-none transition-colors">
                <option>סוג הטיפול הרצוי</option>
                <option>בדיקה ראשונה</option>
                <option>ניקוי שיניים</option>
                <option>לבנת שיניים</option>
                <option>ציפויי חרסינה</option>
                <option>שיקום / ייעוץ</option>
                <option>כאב / חירום</option>
              </select>
              <textarea
                placeholder="מה מטריד אתכם? כתבו לנו..."
                rows={3}
                className="w-full bg-gray-50 border border-gray-200 focus:border-sky-400 focus:bg-white rounded-xl px-5 py-4 text-gray-900 placeholder-gray-400 outline-none transition-colors resize-none"
              />
              <button className="w-full bg-sky-500 hover:bg-sky-400 text-white font-bold py-4 rounded-xl text-base transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-sky-500/30">
                קביעת תור
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-gray-900 font-bold text-lg mb-5">פרטי מרפאה</h3>
                <div className="space-y-4">
                  {[
                    { icon: "📍", label: "כתובת", val: "שדרות ביאליק 11, תל אביב" },
                    { icon: "📞", label: "טלפון", val: "03-444-5678", ltr: true },
                    { icon: "💬", label: "וואטסאפ", val: "054-444-5678", ltr: true },
                    { icon: "🕐", label: "שעות", val: "א'–ה' 8:00–19:00 | שישי 8:00–13:00" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100">
                      <span className="text-xl">{item.icon}</span>
                      <div>
                        <div className="text-gray-400 text-xs font-medium">{item.label}</div>
                        <div className="text-gray-700 text-sm mt-0.5 font-medium" dir={item.ltr ? "ltr" : "rtl"}>
                          {item.val}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-sky-500 rounded-2xl p-6 text-white">
                <div className="font-black text-xl mb-2">🚨 כאב שיניים?</div>
                <p className="text-sky-100 text-sm leading-relaxed mb-4">
                  מקרי חירום מטופלים באותו היום. צלצלו ואנחנו נפנה תור מיוחד.
                </p>
                <div className="bg-white text-sky-500 font-black text-center py-3 rounded-xl text-sm">
                  03-444-5678 — עכשיו
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-400 text-sm">© 2024 ד&quot;ר שרה לוי — רפואת שיניים. כל הזכויות שמורות.</div>
          <div className="text-gray-300 text-xs">
            נבנה על ידי{" "}
            <a href="/" className="text-sky-500 hover:text-sky-400">אתר בקליק</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
