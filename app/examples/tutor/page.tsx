export default function TutorPage() {
  return (
    <div dir="rtl" className="min-h-screen bg-slate-950 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/95 backdrop-blur-sm border-b border-teal-500/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-teal-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-black text-xl">∑</span>
            </div>
            <div>
              <div className="text-white font-black text-xl leading-none">ד״ר מתמטיקה</div>
              <div className="text-teal-400/70 text-xs tracking-wider">יעל המורה</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-slate-400 text-sm">
            <a href="#about" className="hover:text-teal-400 transition-colors">אודות</a>
            <a href="#services" className="hover:text-teal-400 transition-colors">מה אני מלמדת</a>
            <a href="#testimonials" className="hover:text-teal-400 transition-colors">תלמידים</a>
            <a href="#pricing" className="hover:text-teal-400 transition-colors">מחירים</a>
          </div>
          <a href="#contact" className="bg-gradient-to-r from-purple-500 to-teal-500 text-white font-bold px-5 py-2.5 rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all text-sm">
            שיעור ניסיון חינם
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-950" />
        {/* Mathematical symbols in background */}
        <div className="absolute inset-0 overflow-hidden select-none pointer-events-none">
          {["∫", "∑", "π", "√", "∞", "∂", "≠", "±", "×", "÷", "²", "³"].map((sym, i) => (
            <div
              key={i}
              className="absolute text-teal-500/5 font-black"
              style={{
                fontSize: `${80 + (i % 4) * 40}px`,
                top: `${(i * 17) % 90}%`,
                left: `${(i * 23) % 90}%`,
                transform: `rotate(${(i * 13) % 30 - 15}deg)`,
              }}
            >
              {sym}
            </div>
          ))}
        </div>
        <div className="absolute inset-0"
          style={{background: 'radial-gradient(ellipse at 30% 50%, rgba(168, 85, 247, 0.12) 0%, transparent 50%), radial-gradient(ellipse at 70% 30%, rgba(20, 184, 166, 0.1) 0%, transparent 50%)'}} />

        <div className="relative max-w-6xl mx-auto px-6 py-32 pt-48">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-semibold px-4 py-2 rounded-full mb-8">
                🎓 ד״ר במתמטיקה שימושית — אוניברסיטת תל אביב
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
                מתמטיקה{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">
                  סוף סוף
                </span>
                <br />
                תהיה קלה.
              </h1>
              <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                יעל לוי, ד״ר במתמטיקה עם 12 שנות ניסיון בהוראה. מלמדת תלמידים יסודי, תיכון ואקדמיה — ועוזרת להם לא רק להצליח, אלא לאהוב מתמטיקה.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-gradient-to-r from-purple-500 to-teal-500 text-white font-black text-lg px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-purple-500/30 transition-all transform hover:-translate-y-1 text-center">
                  שיעור ניסיון חינם
                </a>
                <a href="#about" className="border border-slate-700 text-slate-300 font-semibold text-lg px-8 py-4 rounded-xl hover:border-teal-400 hover:text-teal-400 transition-all text-center">
                  קרא עוד
                </a>
              </div>
            </div>

            {/* Stats display */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "500+", label: "תלמידים", icon: "👩‍🎓" },
                { num: "95%", label: "שיפור בציונים", icon: "📈" },
                { num: "12", label: "שנות הוראה", icon: "🎓" },
                { num: "100%", label: "שביעות רצון", icon: "⭐" },
              ].map((s) => (
                <div key={s.label} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 text-center hover:border-teal-500/40 transition-colors">
                  <div className="text-3xl mb-2">{s.icon}</div>
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">{s.num}</div>
                  <div className="text-slate-500 text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="bg-gradient-to-br from-purple-500/20 to-teal-500/10 border border-purple-500/20 rounded-3xl p-10">
              <div className="text-6xl mb-6">👩‍💻</div>
              <h3 className="text-white font-black text-2xl mb-4">ד״ר יעל לוי</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                ד״ר במתמטיקה שימושית מאוניברסיטת תל אביב. לימדה בפקולטה למתמטיקה ועכשיו מקדישה את זמנה ללמד תלמידים עד גיל 18 ובאוניברסיטה.
              </p>
              <div className="space-y-3">
                {["ד״ר במתמטיקה שימושית, אוניברסיטת ת״א", "מרצה לשעבר — מכון ויצמן", "מחברת ספר לימוד לתיכון", "תואר שלישי בהצטיינות יתרה"].map((c) => (
                  <div key={c} className="flex items-center gap-3 text-slate-300 text-sm">
                    <span className="text-teal-400 font-bold">✓</span> {c}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-black text-white mb-6">הגישה שלי</h2>
              <div className="space-y-6">
                {[
                  { icon: "🎯", title: "אבחון מדויק", desc: "כל תלמיד מתחיל עם אבחון קצר — מזהה בדיוק מה חסר ובונה תוכנית לימוד אישית." },
                  { icon: "🧩", title: "הסברים שמבינים", desc: "לא שיטות ל בעל פה — מסבירה את ה-למה מאחורי כל דבר, שהידע יישאר לתמיד." },
                  { icon: "📊", title: "מעקב ועדכונים", desc: "משתפת את ההורים בדוח התקדמות חודשי. לא מנחשים — יודעים בדיוק איפה הילד." },
                ].map((card) => (
                  <div key={card.title} className="flex gap-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-teal-500/20 border border-purple-500/30 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                      {card.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-1">{card.title}</h3>
                      <p className="text-slate-400 leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Teach */}
      <section id="services" className="py-24 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">מה אני מלמדת</h2>
            <p className="text-slate-500 text-lg">מכיתה ד׳ ועד אקדמיה</p>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { grade: "יסודי", sub: "כיתות ד׳-ו׳", topics: ["חשבון", "שברים", "גיאומטריה", "בעיות מילוליות"], color: "from-teal-500/20 to-teal-900/20 border-teal-500/30" },
              { grade: "חטיבה", sub: "כיתות ז׳-ט׳", topics: ["אלגברה", "פונקציות", "הנדסה", "סטטיסטיקה"], color: "from-purple-500/20 to-purple-900/20 border-purple-500/30" },
              { grade: "תיכון", sub: "כיתות י׳-י״ב", topics: ["אלגברה מתקדמת", "חדוו״א", "טריגונומטריה", "הכנה לבגרות"], color: "from-teal-500/20 to-purple-500/20 border-teal-400/30", highlight: true },
              { grade: "אקדמיה", sub: "שנה א׳-ב׳", topics: ["חשבון אינפי׳", "לינארית", "סטטיסטיקה", "הסתברות"], color: "from-slate-700/30 to-slate-900/20 border-slate-600/30" },
            ].map((level) => (
              <div key={level.grade} className={`bg-gradient-to-br ${level.color} border rounded-3xl p-6 ${level.highlight ? 'ring-2 ring-teal-400/30' : ''} relative`}>
                {level.highlight && (
                  <div className="absolute -top-3 right-1/2 translate-x-1/2 bg-gradient-to-r from-purple-500 to-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    הכי פופולרי
                  </div>
                )}
                <div className="text-2xl font-black text-white mb-1">{level.grade}</div>
                <div className="text-teal-400/70 text-sm mb-4">{level.sub}</div>
                <ul className="space-y-2">
                  {level.topics.map((t) => (
                    <li key={t} className="text-slate-400 text-sm flex items-center gap-2">
                      <span className="text-teal-400 text-xs">▸</span> {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">מחירים</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "שיעור בודד", price: "₪200", per: "לשעה", desc: "מתאים לבדיקה ולהתנסות. ללא התחייבות.", features: ["60 דקות", "חומרי לימוד", "שיעור ניסיון ראשון חינם"] },
              { name: "חבילת 10", price: "₪180", per: "לשעה", desc: "החבילה הפופולרית ביותר. חיסכון של ₪200.", features: ["10 × 60 דקות", "חומרי לימוד", "דוח התקדמות", "תרגול בין שיעורים", "ייעוץ להורים"], highlight: true },
              { name: "אינטנסיבי", price: "₪160", per: "לשעה", desc: "הכנה לבגרות/בחינות. 3 שיעורים שבועיים.", features: ["3 שיעורי 90 דק׳/שבוע", "הכנה ממוקדת לבחינה", "סימולציות בחינה", "סיכומים ותרגילים"], },
            ].map((pkg) => (
              <div key={pkg.name} className={`rounded-3xl p-8 ${pkg.highlight ? 'bg-gradient-to-br from-purple-600 to-teal-600 text-white' : 'bg-slate-800 border border-slate-700 text-white'} relative`}>
                {pkg.highlight && (
                  <div className="absolute -top-3 right-1/2 translate-x-1/2 bg-white text-purple-600 font-black text-xs px-4 py-1 rounded-full">
                    הכי חסכוני
                  </div>
                )}
                <div className={`text-4xl font-black mb-0.5 ${pkg.highlight ? 'text-white' : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400'}`}>
                  {pkg.price}
                </div>
                <div className={`text-sm mb-2 ${pkg.highlight ? 'text-white/70' : 'text-slate-500'}`}>{pkg.per}</div>
                <div className={`text-xl font-bold mb-2 ${pkg.highlight ? 'text-white' : 'text-white'}`}>{pkg.name}</div>
                <p className={`text-sm mb-6 ${pkg.highlight ? 'text-white/70' : 'text-slate-500'}`}>{pkg.desc}</p>
                <ul className="space-y-2 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className={`text-sm flex items-center gap-2 ${pkg.highlight ? 'text-white/90' : 'text-slate-400'}`}>
                      <span className={pkg.highlight ? 'text-white' : 'text-teal-400'}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`block text-center font-bold py-3 px-6 rounded-xl transition-all ${pkg.highlight ? 'bg-white text-purple-600 hover:bg-white/90' : 'bg-gradient-to-r from-purple-500 to-teal-500 text-white hover:opacity-90'}`}>
                  בחר חבילה
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">מה אומרים התלמידים</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "אלי ברק", role: "עלה מ-54 ל-92 בבגרות 5 יח׳", text: "לא האמנתי שאני יכול לעבור 5 יחידות. יעל הסבירה לי הכל מאפס, בסבלנות, עד שהבנתי. עכשיו מתמטיקה היא המקצוע האהוב עליי!", stars: 5 },
              { name: "תמר שמש", role: "סטודנטית, אינפי 1", text: "נרשמתי אחרי שנכשלתי פעמיים. יעל אבחנה בדיוק איפה הבעיה. עברתי בסוף את הקורס עם 87. לא מוצאת מילים להודות!", stars: 5 },
              { name: "רחל ואבי כהן", role: "הורים של תלמידה כיתה ח׳", text: "הבת שלנו עברה מציון 65 ל-96 בשישה חודשים. יעל מדהימה — מסבירה, עקבית, ומדווחת לנו כל שבוע. ממליצים בחום!", stars: 5 },
            ].map((t) => (
              <div key={t.name} className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-teal-500/30 transition-colors">
                <div className="flex gap-1 mb-4">
                  {Array(t.stars).fill(0).map((_, i) => <span key={i} className="text-teal-400 text-lg">★</span>)}
                </div>
                <p className="text-slate-300 leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-white">{t.name}</div>
                    <div className="text-teal-400/70 text-sm">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-slate-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-4">התחל/י עם שיעור ניסיון חינם</h2>
          <p className="text-slate-500 text-lg mb-12">שלח/י פרטים ואחזור אליך תוך 24 שעות</p>
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-10">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input type="text" placeholder="שם התלמיד/ה" className="bg-slate-900 border border-slate-700 text-white placeholder-slate-500 rounded-xl px-4 py-3.5 focus:outline-none focus:border-teal-500 transition-colors text-right" />
              <input type="tel" placeholder="טלפון" className="bg-slate-900 border border-slate-700 text-white placeholder-slate-500 rounded-xl px-4 py-3.5 focus:outline-none focus:border-teal-500 transition-colors text-right" />
            </div>
            <select className="w-full bg-slate-900 border border-slate-700 text-slate-400 rounded-xl px-4 py-3.5 mb-4 focus:outline-none focus:border-teal-500 transition-colors text-right">
              <option value="">כיתה / שלב לימודי</option>
              <option>יסודי (ד׳-ו׳)</option>
              <option>חטיבה (ז׳-ט׳)</option>
              <option>תיכון (י׳-י״ב)</option>
              <option>אקדמיה</option>
            </select>
            <textarea placeholder="ספר/י לי על הקשיים — כדי שאוכל להיערך לשיעור הניסיון" rows={3} className="w-full bg-slate-900 border border-slate-700 text-white placeholder-slate-500 rounded-xl px-4 py-3.5 mb-6 focus:outline-none focus:border-teal-500 transition-colors text-right resize-none" />
            <button className="w-full bg-gradient-to-r from-purple-500 to-teal-500 text-white font-black text-xl py-4 rounded-xl hover:shadow-2xl hover:shadow-purple-500/30 transition-all transform hover:-translate-y-0.5">
              שלח ← קבל שיעור ניסיון חינם
            </button>
          </div>
          <div className="flex justify-center gap-8 mt-10 text-slate-600 text-sm">
            <span>📞 053-1234567</span>
            <span>📧 yael@drmath.co.il</span>
          </div>
        </div>
      </section>

      <footer className="bg-black py-8 text-center text-slate-700 text-sm border-t border-slate-900">
        © 2024 ד״ר מתמטיקה | יעל לוי | נבנה על ידי <span className="text-teal-500/60">אתר בקליק</span>
      </footer>
    </div>
  );
}
