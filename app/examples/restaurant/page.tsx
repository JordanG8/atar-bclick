export default function RestaurantPage() {
  return (
    <div className="min-h-screen bg-stone-950 text-white font-sans" dir="rtl">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatSvg {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          50% { transform: translateY(-18px) rotate(1deg); }
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        .hero-text { animation: fadeInUp 0.8s ease both; }
        .hero-text-delay { animation: fadeInUp 0.8s ease 0.15s both; }
        .hero-text-delay2 { animation: fadeInUp 0.8s ease 0.3s both; }
        .hero-text-delay3 { animation: fadeInUp 0.8s ease 0.45s both; }
        .float-svg { animation: floatSvg 6s ease-in-out infinite; }
        .gradient-text-animated {
          background: linear-gradient(270deg, #fb923c, #ef4444, #f97316, #dc2626);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientShift 4s ease infinite;
        }
        .orb-pulse { animation: pulseGlow 3s ease-in-out infinite; }
        .glass-card {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.1);
        }
      `}</style>

      {/* Sticky Frosted-Glass Navbar */}
      <nav className="fixed top-0 right-0 left-0 z-50 bg-stone-950/80 backdrop-blur-xl border-b border-orange-900/30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-black tracking-tight">
            <span className="text-orange-400">מסעדת</span>{" "}
            <span className="text-white">הים התיכון</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-300">
            <a href="#about" className="hover:text-orange-400 transition-colors">אודות</a>
            <a href="#menu" className="hover:text-orange-400 transition-colors">תפריט</a>
            <a href="#testimonials" className="hover:text-orange-400 transition-colors">המלצות</a>
            <a href="#contact" className="hover:text-orange-400 transition-colors">צור קשר</a>
          </div>
          <a
            href="#contact"
            className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-5 py-2.5 rounded-full text-sm transition-all hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
          >
            הזמן שולחן
          </a>
        </div>
      </nav>

      {/* Hero — Split Screen */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80)'}} >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Gradient mesh background */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/70 via-stone-950/50 to-amber-950/70" />
        {/* Glow orbs */}
        <div className="orb-pulse absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-orange-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="orb-pulse absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-red-700/15 rounded-full blur-3xl pointer-events-none" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left — Content */}
            <div>
              {/* Social proof micro-row */}
              <div className="hero-text flex items-center gap-3 mb-6">
                <div className="flex -space-x-2">
                  {["נ", "ד", "מ", "א"].map((l, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-red-500 border-2 border-stone-950 flex items-center justify-center text-white text-xs font-bold">
                      {l}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(i => <span key={i} className="text-orange-400 text-sm">★</span>)}
                  </div>
                  <div className="text-stone-400 text-xs">+500 ביקורות מרוצות</div>
                </div>
              </div>

              {/* Badge */}
              <div className="hero-text-delay inline-flex items-center gap-2 bg-orange-500/15 border border-orange-500/40 rounded-full px-4 py-1.5 text-orange-300 text-xs font-bold mb-6">
                <span>✦</span>
                <span>המסעדה #1 בתל אביב</span>
                <span>✦</span>
              </div>

              <h1 className="hero-text-delay text-5xl md:text-7xl font-black leading-none mb-6">
                <span className="block text-white">טעמים</span>
                <span className="block gradient-text-animated">שמספרים</span>
                <span className="block text-white">סיפור</span>
              </h1>

              <p className="hero-text-delay2 text-lg text-stone-300 max-w-lg leading-relaxed mb-8">
                מטבח ים תיכוני עשיר ומחמם לב, מבוסס על מתכונים משפחתיים שעברו מדור לדור. כל מנה — חוויה בלתי נשכחת.
              </p>

              {/* Two-tier CTA */}
              <div className="hero-text-delay3 flex flex-col sm:flex-row gap-3 mb-8">
                <a
                  href="#contact"
                  className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white font-bold px-8 py-4 rounded-full text-base transition-all hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30 text-center"
                >
                  הזמינו שולחן עכשיו
                  <span className="mr-2 group-hover:-translate-x-1 inline-block transition-transform">←</span>
                </a>
                <a
                  href="https://wa.me/972543523776"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-full text-base transition-all hover:scale-105 hover:shadow-xl hover:shadow-green-500/30"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  וואטסאפ
                </a>
              </div>

              {/* Stats */}
              <div className="hero-text-delay3 grid grid-cols-3 gap-4 pt-6 border-t border-stone-800/60">
                {[
                  { num: "15+", label: "שנות ניסיון" },
                  { num: "50+", label: "מנות מיוחדות" },
                  { num: "4.9★", label: "דירוג גוגל" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-black text-orange-400">{stat.num}</div>
                    <div className="text-stone-500 text-xs mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — SVG Illustration */}
            <div className="hidden md:flex justify-center items-center">
              <div className="float-svg w-full max-w-md drop-shadow-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" fill="none" className="w-full h-auto rounded-3xl">
                  <rect width="800" height="600" fill="#FFF8F0"/>
                  <ellipse cx="400" cy="420" rx="220" ry="40" fill="#D4956A"/>
                  <rect x="180" y="420" width="440" height="20" rx="4" fill="#C4845A"/>
                  <rect x="270" y="440" width="30" height="80" fill="#C4845A"/>
                  <rect x="500" y="440" width="30" height="80" fill="#C4845A"/>
                  <ellipse cx="400" cy="418" rx="210" ry="35" fill="#FFFFFF"/>
                  <ellipse cx="400" cy="418" rx="210" ry="35" fill="none" stroke="#E8D5B7" strokeWidth="2" strokeDasharray="8 8"/>
                  <ellipse cx="400" cy="395" rx="90" ry="20" fill="#F5F0E8"/>
                  <ellipse cx="400" cy="393" rx="75" ry="16" fill="#FFFFFF"/>
                  <circle cx="390" cy="390" r="18" fill="#E8956A"/>
                  <circle cx="415" cy="388" r="12" fill="#6BAD6B"/>
                  <circle cx="395" cy="380" r="8" fill="#D4474F"/>
                  <rect x="290" y="370" width="4" height="50" rx="2" fill="#B8B8B8"/>
                  <rect x="284" y="370" width="4" height="20" rx="2" fill="#B8B8B8"/>
                  <rect x="298" y="370" width="4" height="20" rx="2" fill="#B8B8B8"/>
                  <rect x="506" y="370" width="4" height="50" rx="2" fill="#B8B8B8"/>
                  <path d="M510 370 C518 375 518 385 510 390 L510 370Z" fill="#B8B8B8"/>
                  <path d="M500 290 Q500 330 480 350 L520 350 Q500 330 500 290Z" fill="#AED9E0" opacity="0.7"/>
                  <rect x="497" y="350" width="6" height="30" fill="#AED9E0" opacity="0.7"/>
                  <rect x="485" y="378" width="30" height="4" rx="2" fill="#AED9E0" opacity="0.7"/>
                  <ellipse cx="500" cy="290" rx="22" ry="8" fill="#AED9E0" opacity="0.5"/>
                  <ellipse cx="280" cy="380" rx="45" ry="18" fill="#E8C97A"/>
                  <path d="M238 375 Q260 360 280 365 Q300 360 322 375" stroke="#C4A05A" strokeWidth="2" fill="none"/>
                  <ellipse cx="265" cy="368" rx="12" ry="8" fill="#D4A85A"/>
                  <ellipse cx="285" cy="363" rx="10" ry="7" fill="#D4A85A"/>
                  <path d="M380 360 Q375 348 380 336" stroke="#CCCCCC" strokeWidth="2" fill="none" opacity="0.6" strokeLinecap="round"/>
                  <path d="M400 355 Q395 340 400 326" stroke="#CCCCCC" strokeWidth="2" fill="none" opacity="0.6" strokeLinecap="round"/>
                  <path d="M420 358 Q415 345 420 332" stroke="#CCCCCC" strokeWidth="2" fill="none" opacity="0.6" strokeLinecap="round"/>
                  <circle cx="165" cy="200" r="35" fill="#F5C5A3"/>
                  <rect x="140" y="235" width="50" height="80" rx="8" fill="#1A1A2E"/>
                  <path d="M155 250 L175 258 L155 266 Z" fill="#FFFFFF"/>
                  <path d="M175 250 L155 258 L175 266 Z" fill="#FFFFFF"/>
                  <rect x="185" y="245" width="80" height="8" rx="4" fill="#1A1A2E"/>
                  <ellipse cx="268" cy="241" rx="35" ry="6" fill="#D4956A"/>
                  <ellipse cx="255" cy="238" rx="12" ry="4" fill="#FFFFFF"/>
                  <ellipse cx="280" cy="237" rx="10" ry="4" fill="#FFFFFF"/>
                  <path d="M580 100 L580 300 Q580 340 620 340 Q660 340 660 300 L660 100 Z" fill="#B8D4E8" opacity="0.4"/>
                  <path d="M580 100 Q620 60 660 100" fill="#B8D4E8" opacity="0.4"/>
                  <line x1="620" y1="100" x2="620" y2="340" stroke="#8BAEC8" strokeWidth="2" opacity="0.6"/>
                  <line x1="400" y1="60" x2="400" y2="140" stroke="#8B7355" strokeWidth="3"/>
                  <path d="M365 140 Q365 200 400 200 Q435 200 435 140 Z" fill="#F5D878" opacity="0.8"/>
                  <ellipse cx="400" cy="140" rx="35" ry="8" fill="#C4A455"/>
                  <rect x="550" y="120" width="120" height="60" rx="8" fill="#FFFFFF" opacity="0.9"/>
                  <text x="610" y="148" textAnchor="middle" fontFamily="serif" fontSize="11" fill="#2D2D2D">מסעדת</text>
                  <text x="610" y="168" textAnchor="middle" fontFamily="serif" fontSize="11" fill="#2D2D2D">הים התיכון</text>
                  <path d="M50 500 Q80 460 120 480 Q100 490 90 510" stroke="#6BAD6B" strokeWidth="2" fill="none"/>
                  <ellipse cx="75" cy="468" rx="10" ry="6" fill="#6BAD6B" transform="rotate(-30 75 468)"/>
                  <ellipse cx="100" cy="472" rx="10" ry="6" fill="#6BAD6B" transform="rotate(10 100 472)"/>
                  <ellipse cx="112" cy="488" rx="10" ry="6" fill="#6BAD6B" transform="rotate(-20 112 488)"/>
                  <circle cx="85" cy="475" r="5" fill="#8B2252"/>
                  <circle cx="108" cy="480" r="4" fill="#8B2252"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features — Glassmorphism Bento */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-red-950/20 to-stone-950" />
        <div className="absolute top-0 left-1/2 w-[600px] h-[400px] bg-orange-500/10 rounded-full blur-3xl -translate-x-1/2" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-orange-400 font-semibold text-xs uppercase tracking-widest">הסיפור שלנו</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3 text-white">
              למה כולם <span className="text-orange-400">חוזרים אלינו?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🫒",
                title: "מרכיבים טריים",
                desc: "כל בוקר אנחנו מגיעים לשוק ובוחרים את הירקות, הפירות ומוצרי הים הטריים ביותר. אנחנו מאמינים שאיכות מתחילה בחומר הגלם.",
              },
              {
                icon: "👨‍🍳",
                title: "שפים מנוסים",
                desc: "הצוות שלנו כולל שפים שלמדו את האומנות בלב הים התיכון — באיטליה, יוון ומרוקו. כל מנה היא יצירת אמנות.",
              },
              {
                icon: "🕯️",
                title: "אווירה קסומה",
                desc: "תאורה עדינה, מוזיקה חמה ועיצוב ים תיכוני אותנטי. המסעדה שלנו היא מקלט מהעיר הסואנת — מושלמת לזוגות ואירועים.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="glass-card rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 group hover:scale-[1.02]"
              >
                <div className="text-5xl mb-5">{card.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">{card.title}</h3>
                <p className="text-stone-400 leading-relaxed text-sm">{card.desc}</p>
                <div className="h-0.5 bg-gradient-to-r from-orange-400 to-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right rounded-full mt-6" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-24 bg-stone-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-orange-400 font-semibold text-xs uppercase tracking-widest">הטעמים שלנו</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3 text-white">תפריט מנות הדגל</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "דג לוקוס על פטנה", desc: "בצלפים, לימון ועשבי תיבול טריים", price: "₪98", tag: "המלצת השף" },
              { name: "ריזוטו פירות ים", desc: "שרימפס, קלמרי ומולים ברוטב לימון חמאה", price: "₪89", tag: "הפופולרי ביותר" },
              { name: "כבש צלוי על הגריל", desc: "עם ירקות צלויים ורוטב יוגורט עשבים", price: "₪115", tag: null },
              { name: "פסטה ים תיכונית", desc: "עגבניות שרי, זיתים, בזיליקום ושמן זית כתית", price: "₪72", tag: null },
              { name: "סלט יווני קלאסי", desc: "עגבניה, מלפפון, פטה, זיתים וריחן", price: "₪52", tag: "ויגן" },
              { name: "קרם ברולה וניל", desc: "קינוח צרפתי קלאסי עם פירות יער טריים", price: "₪44", tag: "חדש" },
            ].map((item) => (
              <div
                key={item.name}
                className="glass-card rounded-2xl p-6 hover:bg-white/10 transition-all group cursor-pointer"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-white font-bold text-lg group-hover:text-orange-400 transition-colors">{item.name}</h3>
                  <span className="text-orange-400 font-black text-xl">{item.price}</span>
                </div>
                <p className="text-stone-400 text-sm">{item.desc}</p>
                {item.tag && (
                  <span className="inline-block mt-3 bg-orange-500/20 text-orange-300 text-xs font-semibold px-3 py-1 rounded-full border border-orange-500/30">
                    {item.tag}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950 to-red-950/30" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-orange-400 font-semibold text-xs uppercase tracking-widest">מה אומרים עלינו</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3 text-white">הלקוחות מדברים</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "נועה כהן", role: "תל אביב", text: "חוויה קולינרית מדהימה! הדג היה מושלם, השירות מעולה והאווירה רומנטית להפליא. חזרנו כבר פעמיים החודש." },
              { name: "דוד לוי", role: "הרצליה", text: "המסעדה הטובה ביותר שהייתי בה בשנים האחרונות. הריזוטו פירות ים היה פשוט מושלם. ממליץ בחום!" },
              { name: "מיכל אברהמי", role: "רמת גן", text: "חגגנו שם את יום ההולדת שלי ואני עדיין חולמת על הקרם ברולה. המקום קסום, הצוות מקסים. תודה!" },
            ].map((review) => (
              <div key={review.name} className="glass-card rounded-2xl p-8 relative hover:bg-white/10 transition-all">
                <div className="text-5xl text-orange-500/20 font-black absolute top-3 left-5">&ldquo;</div>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-orange-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-stone-300 leading-relaxed mb-6 text-sm">{review.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-sm">
                    {review.name[0]}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{review.name}</div>
                    <div className="text-stone-500 text-xs">{review.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-stone-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-orange-400 font-semibold text-xs uppercase tracking-widest">הזמינו מקום</span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-4 text-white">מחכים לכם בשולחן</h2>
          <p className="text-stone-400 text-xl mb-12 max-w-xl mx-auto">
            הזמינו שולחן עכשיו וקבלו בקבוק יין מתנה לזוגות שמגיעים בימי ראשון–רביעי
          </p>

          <div className="glass-card rounded-3xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-4 mb-6 text-right">
              <input type="text" placeholder="שם מלא" className="w-full bg-white/5 border border-white/10 focus:border-orange-500 rounded-xl px-5 py-4 text-white placeholder-stone-500 outline-none transition-colors" />
              <input type="tel" placeholder="מספר טלפון" className="w-full bg-white/5 border border-white/10 focus:border-orange-500 rounded-xl px-5 py-4 text-white placeholder-stone-500 outline-none transition-colors" dir="ltr" />
              <input type="date" className="w-full bg-white/5 border border-white/10 focus:border-orange-500 rounded-xl px-5 py-4 text-stone-400 outline-none transition-colors" dir="ltr" />
              <select className="w-full bg-white/5 border border-white/10 focus:border-orange-500 rounded-xl px-5 py-4 text-stone-400 outline-none transition-colors">
                <option>מספר סועדים</option>
                <option>2 אנשים</option>
                <option>3–4 אנשים</option>
                <option>5–8 אנשים</option>
                <option>9+ אנשים</option>
              </select>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white font-bold px-8 py-4 rounded-full text-base transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/30">
                שלחו הזמנה
              </button>
              <a
                href="https://wa.me/972543523776"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-full text-base transition-all hover:scale-[1.02]"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                וואטסאפ
              </a>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-stone-400">
            <div className="flex items-center gap-2 text-sm"><span>📍</span><span>רחוב דיזנגוף 122, תל אביב</span></div>
            <div className="flex items-center gap-2 text-sm"><span>📞</span><span dir="ltr">03-555-1234</span></div>
            <div className="flex items-center gap-2 text-sm"><span>🕐</span><span>א&#39;–ש&#39; 12:00–23:00</span></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-800 py-8 bg-stone-950">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-stone-500 text-sm">© 2024 מסעדת הים התיכון. כל הזכויות שמורות.</div>
          <div className="text-stone-600 text-xs">
            נבנה ע&#34;י{" "}
            <a href="/" className="text-orange-400 hover:text-orange-300 font-semibold">אתר בקליק</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
