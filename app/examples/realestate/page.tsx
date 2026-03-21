export default function RealEstatePage() {
  return (
    <div dir="rtl" className="min-h-screen bg-slate-900 font-sans">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatSvg {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(1deg); }
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes orbPulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.15); opacity: 0.5; }
        }
        .anim-fade-1 { animation: fadeInUp 0.7s ease both 0.1s; }
        .anim-fade-2 { animation: fadeInUp 0.7s ease both 0.25s; }
        .anim-fade-3 { animation: fadeInUp 0.7s ease both 0.4s; }
        .anim-fade-4 { animation: fadeInUp 0.7s ease both 0.55s; }
        .svg-float { animation: floatSvg 5s ease-in-out infinite; }
        .gradient-text {
          background: linear-gradient(270deg, #eab308, #f59e0b, #fde68a, #eab308);
          background-size: 300% 300%;
          animation: gradientShift 4s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .orb-pulse { animation: orbPulse 4s ease-in-out infinite; }
        .glass-card {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.1);
        }
        .glass-nav {
          background: rgba(15,23,42,0.8);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(234,179,8,0.15);
        }
      `}</style>

      {/* Sticky Frosted Navbar */}
      <nav className="glass-nav fixed top-0 w-full z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-500/30">
              <span className="text-slate-900 font-black text-lg">ד</span>
            </div>
            <span className="text-white font-black text-xl">דני נדל&quot;ן</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-slate-300 text-sm">
            <a href="#about" className="hover:text-yellow-400 transition-colors duration-200">אודות</a>
            <a href="#services" className="hover:text-yellow-400 transition-colors duration-200">שירותים</a>
            <a href="#testimonials" className="hover:text-yellow-400 transition-colors duration-200">המלצות</a>
            <a href="#contact" className="hover:text-yellow-400 transition-colors duration-200">צור קשר</a>
          </div>
          <a href="#contact" className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 font-black px-5 py-2.5 rounded-xl hover:shadow-lg hover:shadow-yellow-500/40 transition-all text-sm">
            ייעוץ חינם
          </a>
        </div>
      </nav>

      {/* Hero — Split Screen */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900" />
        {/* Glow orbs */}
        <div className="orb-pulse absolute top-1/4 right-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="orb-pulse absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" style={{animationDelay:'2s'}} />
        <div className="absolute inset-0 opacity-10" style={{backgroundImage:'radial-gradient(circle at 20% 80%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 80% 20%, #eab308 0%, transparent 40%)'}} />

        <div className="relative max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center w-full">
          {/* Left: Text */}
          <div>
            {/* Badge */}
            <div className="anim-fade-1 inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
              מעל 500 עסקאות מוצלחות
            </div>

            {/* Social proof micro-row */}
            <div className="anim-fade-1 flex items-center gap-3 mb-6">
              <div className="flex -space-x-2 space-x-reverse">
                {["מ","י","ר","ש","ד"].map((l,i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 flex items-center justify-center text-xs font-bold text-white" style={{background:`hsl(${i*50+200},60%,50%)`}}>{l}</div>
                ))}
              </div>
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(s => <span key={s} className="text-yellow-400 text-sm">★</span>)}
                <span className="text-slate-400 text-sm mr-2">4.9 (200+ ביקורות)</span>
              </div>
            </div>

            <h1 className="anim-fade-2 text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              הבית שלך{" "}
              <span className="gradient-text">מחכה</span>
              <br />לך כבר עכשיו
            </h1>
            <p className="anim-fade-3 text-xl text-slate-300 mb-10 leading-relaxed">
              דני לוי, סוכן נדל&quot;ן עם 15 שנות ניסיון באזור המרכז. מוצא לך את הנכס המושלם במחיר הטוב ביותר — מובטח.
            </p>

            {/* Two-tier CTA */}
            <div className="anim-fade-4 flex flex-col sm:flex-row gap-4 mb-8">
              <a href="#contact" className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 font-black text-lg px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-yellow-500/40 transition-all transform hover:-translate-y-1 text-center">
                קבל ייעוץ חינם עכשיו
              </a>
              <a href="#about" className="border border-slate-600 text-slate-300 font-semibold text-lg px-8 py-4 rounded-xl hover:border-yellow-400 hover:text-yellow-400 transition-all text-center">
                גלה עוד
              </a>
            </div>

            {/* WhatsApp CTA */}
            <a href="https://wa.me/972543523776" className="anim-fade-4 inline-flex items-center gap-3 bg-green-500/20 border border-green-500/40 text-green-400 font-bold px-6 py-3 rounded-xl hover:bg-green-500/30 transition-all">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              שלח הודעה בוואטסאפ
            </a>
          </div>

          {/* Right: SVG illustration */}
          <div className="hidden md:flex items-center justify-center">
            <div className="svg-float w-full max-w-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" fill="none" className="w-full h-auto drop-shadow-2xl">
                <rect width="800" height="600" fill="#87CEEB"/>
                <rect x="0" y="0" width="800" height="300" fill="#B8D4E8" opacity="0.5"/>
                <circle cx="680" cy="80" r="50" fill="#FFD700" opacity="0.8"/>
                <circle cx="680" cy="80" r="40" fill="#FFE44D"/>
                <ellipse cx="150" cy="90" rx="70" ry="30" fill="#FFFFFF" opacity="0.9"/>
                <ellipse cx="110" cy="95" rx="45" ry="25" fill="#FFFFFF" opacity="0.9"/>
                <ellipse cx="195" cy="95" rx="45" ry="25" fill="#FFFFFF" opacity="0.9"/>
                <ellipse cx="450" cy="60" rx="55" ry="22" fill="#FFFFFF" opacity="0.8"/>
                <ellipse cx="410" cy="65" rx="38" ry="20" fill="#FFFFFF" opacity="0.8"/>
                <ellipse cx="490" cy="65" rx="38" ry="20" fill="#FFFFFF" opacity="0.8"/>
                <rect x="0" y="490" width="800" height="110" fill="#5D8A3C"/>
                <rect x="0" y="488" width="800" height="8" fill="#4A7A2E"/>
                <rect x="180" y="280" width="380" height="220" rx="4" fill="#FFFFFF"/>
                <polygon points="160,280 370,140 580,280" fill="#C0392B"/>
                <polygon points="175,280 370,155 565,280" fill="#E74C3C"/>
                <rect x="460" y="145" width="30" height="60" fill="#A93226"/>
                <rect x="455" y="143" width="40" height="8" rx="2" fill="#922B21"/>
                <path d="M475 143 Q468 125 475 108 Q482 92 475 78" stroke="#CCCCCC" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7"/>
                <rect x="330" y="380" width="80" height="120" rx="6" fill="#8B4513"/>
                <rect x="335" y="385" width="70" height="110" rx="4" fill="#A0522D"/>
                <circle cx="400" cy="442" r="6" fill="#FFD700"/>
                <path d="M330 380 Q370 355 410 380" fill="#8B4513"/>
                <rect x="210" y="320" width="90" height="75" rx="4" fill="#AED6F1"/>
                <rect x="215" y="325" width="80" height="65" rx="2" fill="#D4EEFF"/>
                <line x1="255" y1="325" x2="255" y2="390" stroke="#FFFFFF" strokeWidth="3"/>
                <line x1="215" y1="357" x2="295" y2="357" stroke="#FFFFFF" strokeWidth="3"/>
                <rect x="207" y="317" width="106" height="8" rx="3" fill="#E0E0E0"/>
                <rect x="440" y="320" width="90" height="75" rx="4" fill="#AED6F1"/>
                <rect x="445" y="325" width="80" height="65" rx="2" fill="#D4EEFF"/>
                <line x1="485" y1="325" x2="485" y2="390" stroke="#FFFFFF" strokeWidth="3"/>
                <line x1="445" y1="357" x2="525" y2="357" stroke="#FFFFFF" strokeWidth="3"/>
                <rect x="437" y="317" width="106" height="8" rx="3" fill="#E0E0E0"/>
                <rect x="180" y="380" width="100" height="120" rx="4" fill="#ECEFF1"/>
                <rect x="188" y="390" width="84" height="100" rx="2" fill="#CFD8DC"/>
                <line x1="188" y1="415" x2="272" y2="415" stroke="#AAAAAA" strokeWidth="2"/>
                <line x1="188" y1="440" x2="272" y2="440" stroke="#AAAAAA" strokeWidth="2"/>
                <line x1="188" y1="465" x2="272" y2="465" stroke="#AAAAAA" strokeWidth="2"/>
                <circle cx="230" cy="440" r="5" fill="#888888"/>
                <path d="M330 500 L350 490 L390 490 L410 500" fill="#C4A882"/>
                <circle cx="290" cy="490" r="22" fill="#4CAF50"/>
                <circle cx="270" cy="492" r="16" fill="#388E3C"/>
                <circle cx="310" cy="492" r="16" fill="#388E3C"/>
                <circle cx="510" cy="490" r="22" fill="#4CAF50"/>
                <circle cx="490" cy="492" r="16" fill="#388E3C"/>
                <circle cx="530" cy="492" r="16" fill="#388E3C"/>
                <rect x="640" y="370" width="14" height="130" fill="#795548"/>
                <circle cx="647" cy="340" r="65" fill="#388E3C"/>
                <circle cx="615" cy="360" r="45" fill="#4CAF50"/>
                <circle cx="680" cy="355" r="48" fill="#4CAF50"/>
                <rect x="560" y="380" width="90" height="70" rx="4" fill="#FFFFFF" stroke="#E63946" strokeWidth="3"/>
                <rect x="601" y="450" width="8" height="50" fill="#8B8B8B"/>
                <text x="605" y="405" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fontWeight="bold" fill="#E63946">למכירה</text>
                <text x="605" y="420" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#2D2D2D">דני נדל&quot;ן</text>
                <circle cx="100" cy="370" r="28" fill="#D4A574"/>
                <rect x="75" y="398" width="50" height="65" rx="6" fill="#2C3E50"/>
                <path d="M98 398 L102 420 L100 435 L98 420 Z" fill="#E63946"/>
                <rect x="125" y="415" width="50" height="8" rx="4" fill="#2C3E50"/>
                <rect x="170" y="408" width="40" height="50" rx="3" fill="#FFFDE7" stroke="#DDCC88" strokeWidth="1"/>
                <rect x="250" y="450" width="240" height="30" rx="4" fill="#2C3E50" opacity="0.85"/>
                <text x="370" y="470" textAnchor="middle" fontFamily="serif" fontSize="13" fill="#FFFFFF">3 חדרים | 120 מ&quot;ר | 2,800,000 ₪</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Stats row */}
      <section className="bg-slate-800/50 border-y border-white/5 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-6">
            {[
              { num: "500+", label: "עסקאות מוצלחות" },
              { num: "15", label: "שנות ניסיון" },
              { num: "98%", label: "לקוחות מרוצים" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-black text-yellow-400">{stat.num}</div>
                <div className="text-slate-400 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features — Glassmorphism Cards */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950/30 to-slate-900" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              למה לבחור בדני
            </div>
            <h2 className="text-4xl font-black text-white mb-4">מומחיות שמדברת בעד עצמה</h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">15 שנות ניסיון, אלפי לקוחות מרוצים ומחויבות מלאה לתוצאות</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🏆", title: "מומחיות מוכחת", desc: "מומחה מוביל בנדל&quot;ן באזור גוש דן עם רקורד של מאות עסקאות מוצלחות בכל טווח מחירים.", accent: "yellow" },
              { icon: "💰", title: "מחיר הוגן תמיד", desc: "ניהול מו&quot;מ מקצועי שחוסך לך עשרות אלפי שקלים. עמלה שקופה ללא הפתעות.", accent: "blue" },
              { icon: "⚡", title: "שירות מהיר ואישי", desc: "זמין 7 ימים בשבוע. מלווה אותך מהבדיקה הראשונה ועד חתימת החוזה ומסירת המפתחות.", accent: "green" },
            ].map((card) => (
              <div key={card.title} className="glass-card rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="text-4xl mb-5">{card.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">{card.title}</h3>
                <p className="text-slate-400 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">שירותים</h2>
            <p className="text-slate-400 text-lg">פתרון מלא לכל צרכי הנדל&quot;ן שלך</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "קנייה", price: "2%", desc: "ליווי מלא בתהליך רכישת דירה — חיפוש, בדיקות, מו&quot;מ וחוזה" },
              { title: "מכירה", price: "2%", desc: "שיווק מקצועי, צילום, פרסום ברשת ומציאת הקונה הנכון במחיר הטוב", highlight: true },
              { title: "השכרה", price: "1 חודש", desc: "אמצא לך שוכרים מוצקים ואנהל את תהליך ההשכרה עד לחתימת החוזה" },
            ].map((s) => (
              <div key={s.title} className={`rounded-3xl p-8 ${s.highlight ? 'bg-gradient-to-br from-yellow-400 to-yellow-500 text-slate-900' : 'glass-card text-white'}`}>
                <div className={`text-4xl font-black mb-2 ${s.highlight ? 'text-slate-900' : 'text-yellow-400'}`}>{s.price}</div>
                <div className={`text-xs font-semibold mb-1 ${s.highlight ? 'text-slate-700' : 'text-slate-400'}`}>עמלה</div>
                <h3 className="text-2xl font-black mb-4">{s.title}</h3>
                <p className={`leading-relaxed ${s.highlight ? 'text-slate-700' : 'text-slate-300'}`}>{s.desc}</p>
                <a href="#contact" className={`mt-6 block text-center font-bold py-3 px-6 rounded-xl transition-all ${s.highlight ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-yellow-400 text-slate-900 hover:bg-yellow-300'}`}>
                  צור קשר
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">מה אומרים הלקוחות</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "מיכל כהן", role: "קנתה דירה ברמת גן", text: "דני מצא לנו את הדירה המושלמת תוך 3 שבועות! ניהל מו&quot;מ מעולה וחסך לנו 80,000 ש&quot;ח.", stars: 5 },
              { name: "יוסי אברהם", role: "מכר דירה בתל אביב", text: "שיווק מקצועי, צלם מעולה ומכרנו ב-15% מעל המחיר שציפינו. ממליץ בחום!", stars: 5 },
              { name: "רחל שמיר", role: "השכירה נכס בגבעתיים", text: "שוכרים איכותיים, חוזה מסודר, והכל הושלם תוך שבועיים. שירות אישי ומקצועי.", stars: 5 },
            ].map((t) => (
              <div key={t.name} className="glass-card rounded-3xl p-8 hover:bg-white/10 transition-all">
                <div className="flex gap-1 mb-4">
                  {Array(t.stars).fill(0).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-slate-300 leading-relaxed mb-6 text-lg">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-white">{t.name}</div>
                    <div className="text-slate-500 text-sm">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-4">מוכן להתחיל?</h2>
          <p className="text-slate-400 text-lg mb-12">השאר פרטים ואחזור אליך תוך שעה לייעוץ חינם</p>
          <div className="glass-card rounded-3xl p-10">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input type="text" placeholder="שם מלא" className="bg-white/10 border border-white/20 text-white placeholder-slate-400 rounded-xl px-4 py-3.5 focus:outline-none focus:border-yellow-400 transition-colors text-right" />
              <input type="tel" placeholder="טלפון" className="bg-white/10 border border-white/20 text-white placeholder-slate-400 rounded-xl px-4 py-3.5 focus:outline-none focus:border-yellow-400 transition-colors text-right" />
            </div>
            <select className="w-full bg-white/10 border border-white/20 text-slate-400 rounded-xl px-4 py-3.5 mb-4 focus:outline-none focus:border-yellow-400 transition-colors text-right">
              <option value="">מה מעניין אותך?</option>
              <option value="buy">לקנות דירה</option>
              <option value="sell">למכור דירה</option>
              <option value="rent">להשכיר נכס</option>
            </select>
            <textarea placeholder="הוסף פרטים (אופציונלי)" rows={3} className="w-full bg-white/10 border border-white/20 text-white placeholder-slate-400 rounded-xl px-4 py-3.5 mb-4 focus:outline-none focus:border-yellow-400 transition-colors text-right resize-none" />
            <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 font-black text-xl py-4 rounded-xl hover:shadow-2xl hover:shadow-yellow-500/40 transition-all transform hover:-translate-y-0.5 mb-4">
              שלח ואקבל ייעוץ חינם
            </button>
            <a href="https://wa.me/972543523776" className="w-full flex items-center justify-center gap-2 bg-green-600 text-white font-black text-lg py-4 rounded-xl hover:bg-green-500 transition-all">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              שלח בוואטסאפ
            </a>
          </div>
          <div className="flex justify-center gap-8 mt-10 text-slate-400 text-sm">
            <span>📞 050-1234567</span>
            <span>📧 danny@realestate.co.il</span>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 py-8 text-center text-slate-600 text-sm border-t border-slate-800">
        <span className="text-slate-400">© 2025 דני נדל&quot;ן | </span>
        <a href="/" className="text-yellow-500 hover:text-yellow-400 transition-colors">נבנה ע&quot;י אתר בקליק</a>
      </footer>
    </div>
  );
}
