export default function BeautyPage() {
  return (
    <div dir="rtl" className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-pink-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-black text-lg">G</span>
            </div>
            <div>
              <div className="font-black text-xl bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">GLAM</div>
              <div className="text-gray-400 text-xs tracking-wider">סטודיו לאסתטיקה</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-gray-500 text-sm">
            <a href="#services" className="hover:text-pink-500 transition-colors">טיפולים</a>
            <a href="#about" className="hover:text-pink-500 transition-colors">אודות</a>
            <a href="#testimonials" className="hover:text-pink-500 transition-colors">ביקורות</a>
            <a href="#pricing" className="hover:text-pink-500 transition-colors">מחירים</a>
          </div>
          <a href="#contact" className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold px-5 py-2.5 rounded-full hover:shadow-lg hover:shadow-pink-300 transition-all text-sm">
            קבעי תור
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1600&q=80&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-white opacity-80" />
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-40" />
          <div className="absolute top-1/2 -left-20 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-40" />
          <div className="absolute -bottom-20 right-1/3 w-80 h-80 bg-pink-300 rounded-full blur-3xl opacity-30" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-32 pt-48 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-purple-100 border border-pink-200 text-pink-600 text-sm font-semibold px-4 py-2 rounded-full mb-8">
              ✨ סטודיו פרמיום לטיפוח ויופי
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              <span className="text-gray-900">את מגיעה</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600">
                להרגיש מלכה
              </span>
            </h1>
            <p className="text-xl text-gray-500 mb-10 leading-relaxed">
              גלאם — הסטודיו שבו יופי פוגש מקצועיות. טיפולי פנים, עיצוב גבות, הסרת שיער, ציפורניים ועוד — הכל במקום אחד.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-black text-lg px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-pink-300 transition-all transform hover:-translate-y-1 text-center">
                קבעי תור עכשיו
              </a>
              <a href="#services" className="border-2 border-pink-200 text-pink-600 font-semibold text-lg px-8 py-4 rounded-full hover:bg-pink-50 transition-all text-center">
                גלי את הטיפולים
              </a>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-8 mt-12">
              {[{ n: "5000+", l: "לקוחות מרוצות" }, { n: "8", l: "שנות ניסיון" }, { n: "50+", l: "טיפולים" }].map((s) => (
                <div key={s.l}>
                  <div className="font-black text-2xl bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">{s.n}</div>
                  <div className="text-gray-400 text-xs">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero SVG illustration */}
          <div className="flex-shrink-0 hidden md:block">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" fill="none" className="w-full max-w-md mx-auto">
              {/* Background */}
              <rect width="800" height="600" fill="#FDF6F9"/>
              <path d="M0 100 Q200 90 400 110 Q600 130 800 100" stroke="#F8E8F0" strokeWidth="30" fill="none" opacity="0.5"/>
              <path d="M0 250 Q200 230 500 260 Q650 270 800 250" stroke="#F8E8F0" strokeWidth="20" fill="none" opacity="0.4"/>

              {/* Gold accent lines */}
              <line x1="0" y1="580" x2="800" y2="580" stroke="#C9A96E" strokeWidth="3"/>
              <line x1="0" y1="574" x2="800" y2="574" stroke="#C9A96E" strokeWidth="1"/>

              {/* Vanity mirror */}
              <rect x="250" y="50" width="300" height="360" rx="150" fill="#2C2C2C"/>
              <rect x="260" y="60" width="280" height="340" rx="140" fill="#F5E8EE"/>
              {/* Top bulbs */}
              <circle cx="320" cy="55" r="10" fill="#FFFDE7"/><circle cx="320" cy="55" r="7" fill="#FFD700" opacity="0.8"/>
              <circle cx="356" cy="46" r="10" fill="#FFFDE7"/><circle cx="356" cy="46" r="7" fill="#FFD700" opacity="0.8"/>
              <circle cx="400" cy="43" r="10" fill="#FFFDE7"/><circle cx="400" cy="43" r="7" fill="#FFD700" opacity="0.8"/>
              <circle cx="444" cy="46" r="10" fill="#FFFDE7"/><circle cx="444" cy="46" r="7" fill="#FFD700" opacity="0.8"/>
              <circle cx="480" cy="55" r="10" fill="#FFFDE7"/><circle cx="480" cy="55" r="7" fill="#FFD700" opacity="0.8"/>
              {/* Side bulbs left */}
              <circle cx="260" cy="100" r="9" fill="#FFFDE7"/><circle cx="260" cy="100" r="6" fill="#FFD700" opacity="0.8"/>
              <circle cx="254" cy="140" r="9" fill="#FFFDE7"/><circle cx="254" cy="140" r="6" fill="#FFD700" opacity="0.8"/>
              <circle cx="252" cy="180" r="9" fill="#FFFDE7"/><circle cx="252" cy="180" r="6" fill="#FFD700" opacity="0.8"/>
              <circle cx="254" cy="220" r="9" fill="#FFFDE7"/><circle cx="254" cy="220" r="6" fill="#FFD700" opacity="0.8"/>
              <circle cx="260" cy="260" r="9" fill="#FFFDE7"/><circle cx="260" cy="260" r="6" fill="#FFD700" opacity="0.8"/>
              <circle cx="270" cy="295" r="9" fill="#FFFDE7"/><circle cx="270" cy="295" r="6" fill="#FFD700" opacity="0.8"/>
              {/* Side bulbs right */}
              <circle cx="540" cy="100" r="9" fill="#FFFDE7"/><circle cx="540" cy="100" r="6" fill="#FFD700" opacity="0.8"/>
              <circle cx="546" cy="140" r="9" fill="#FFFDE7"/><circle cx="546" cy="140" r="6" fill="#FFD700" opacity="0.8"/>
              <circle cx="548" cy="180" r="9" fill="#FFFDE7"/><circle cx="548" cy="180" r="6" fill="#FFD700" opacity="0.8"/>
              <circle cx="546" cy="220" r="9" fill="#FFFDE7"/><circle cx="546" cy="220" r="6" fill="#FFD700" opacity="0.8"/>
              <circle cx="540" cy="260" r="9" fill="#FFFDE7"/><circle cx="540" cy="260" r="6" fill="#FFD700" opacity="0.8"/>
              <circle cx="530" cy="295" r="9" fill="#FFFDE7"/><circle cx="530" cy="295" r="6" fill="#FFD700" opacity="0.8"/>
              {/* Bottom bulbs */}
              <circle cx="320" cy="352" r="9" fill="#FFFDE7"/><circle cx="320" cy="352" r="6" fill="#FFD700" opacity="0.8"/>
              <circle cx="356" cy="363" r="9" fill="#FFFDE7"/><circle cx="356" cy="363" r="6" fill="#FFD700" opacity="0.8"/>
              <circle cx="400" cy="367" r="9" fill="#FFFDE7"/><circle cx="400" cy="367" r="6" fill="#FFD700" opacity="0.8"/>
              <circle cx="444" cy="363" r="9" fill="#FFFDE7"/><circle cx="444" cy="363" r="6" fill="#FFD700" opacity="0.8"/>
              <circle cx="480" cy="352" r="9" fill="#FFFDE7"/><circle cx="480" cy="352" r="6" fill="#FFD700" opacity="0.8"/>

              {/* Face in mirror */}
              <circle cx="400" cy="200" r="75" fill="#F8D5B5"/>
              <path d="M330 185 Q338 130 370 120 Q400 115 430 120 Q462 130 470 185 Q478 220 460 240 Q430 255 400 250 Q370 255 340 240 Q322 220 330 185Z" fill="#2C1810"/>
              <path d="M335 200 Q320 225 325 270" stroke="#2C1810" strokeWidth="22" strokeLinecap="round" fill="none"/>
              <path d="M465 200 Q480 225 475 270" stroke="#2C1810" strokeWidth="22" strokeLinecap="round" fill="none"/>
              <ellipse cx="375" cy="192" rx="18" ry="10" fill="#FFFFFF"/>
              <circle cx="375" cy="192" r="8" fill="#5C3317"/>
              <circle cx="378" cy="189" r="3" fill="#FFFFFF"/>
              <path d="M358 185 Q375 180 392 185" stroke="#8B3A8B" strokeWidth="4" fill="none" opacity="0.7"/>
              <ellipse cx="425" cy="192" rx="18" ry="10" fill="#FFFFFF"/>
              <circle cx="425" cy="192" r="8" fill="#5C3317"/>
              <circle cx="428" cy="189" r="3" fill="#FFFFFF"/>
              <path d="M408 185 Q425 180 442 185" stroke="#8B3A8B" strokeWidth="4" fill="none" opacity="0.7"/>
              <path d="M398 200 Q395 215 388 222 Q400 226 412 222 Q405 215 402 200" fill="#F0C090" opacity="0.4"/>
              <path d="M383 238 Q390 233 400 235 Q410 233 417 238 Q410 248 400 250 Q390 248 383 238Z" fill="#E63946"/>
              <path d="M383 238 Q395 242 400 241 Q405 242 417 238" stroke="#C0392B" strokeWidth="1" fill="none"/>

              {/* Vanity table */}
              <rect x="100" y="410" width="600" height="20" rx="6" fill="#D4A96E"/>
              <rect x="100" y="405" width="600" height="12" rx="4" fill="#E8C090"/>
              <rect x="130" y="430" width="20" height="120" rx="4" fill="#C9A96E"/>
              <rect x="650" y="430" width="20" height="120" rx="4" fill="#C9A96E"/>

              {/* Beauty products */}
              <rect x="150" y="375" width="16" height="32" rx="4" fill="#C9A96E"/>
              <rect x="152" y="362" width="12" height="16" rx="3" fill="#E63946"/>
              <rect x="185" y="360" width="24" height="48" rx="8" fill="#F5C5A3"/>
              <rect x="189" y="356" width="16" height="8" rx="4" fill="#E8B896"/>
              <rect x="225" y="368" width="12" height="40" rx="5" fill="#1A1A1A"/>
              <ellipse cx="231" cy="408" rx="8" ry="4" fill="#333333"/>
              <rect x="252" y="358" width="8" height="50" rx="4" fill="#C9A96E"/>
              <ellipse cx="256" cy="357" rx="8" ry="12" fill="#F5C5A3" opacity="0.8"/>
              <rect x="275" y="362" width="35" height="45" rx="6" fill="#D4EEFF"/>
              <rect x="282" y="355" width="21" height="10" rx="4" fill="#AED6F1"/>
              <rect x="288" y="350" width="9" height="8" rx="2" fill="#888888"/>
              <rect x="328" y="376" width="60" height="32" rx="4" fill="#C9A96E"/>
              <rect x="332" y="380" width="12" height="12" rx="2" fill="#8B3A8B"/>
              <rect x="348" y="380" width="12" height="12" rx="2" fill="#E63946"/>
              <rect x="364" y="380" width="12" height="12" rx="2" fill="#F39C12"/>
              <rect x="332" y="396" width="12" height="8" rx="2" fill="#FFB800"/>
              <rect x="348" y="396" width="12" height="8" rx="2" fill="#4CAF50"/>
              {/* Rose */}
              <circle cx="470" cy="390" r="22" fill="#FFB3C1"/>
              <circle cx="455" cy="385" r="14" fill="#FF8FAB"/>
              <circle cx="480" cy="383" r="12" fill="#FF8FAB"/>
              <circle cx="465" cy="375" r="10" fill="#FF4D6D"/>
              <path d="M470 412 Q465 430 460 440" stroke="#4CAF50" strokeWidth="3" fill="none"/>
              <ellipse cx="453" cy="432" rx="10" ry="6" fill="#4CAF50" transform="rotate(-30 453 432)"/>

              {/* Studio sign */}
              <rect x="270" y="510" width="260" height="60" rx="10" fill="#2C2C2C"/>
              <text x="400" y="538" textAnchor="middle" fontFamily="serif" fontSize="16" fill="#C9A96E">גלאם סטודיו</text>
              <text x="400" y="558" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#888888">Glam Studio | Beauty &amp; Makeup</text>

              {/* Sparkles */}
              <text x="80" y="200" fontSize="28" fill="#FFD700" opacity="0.6">✦</text>
              <text x="700" y="150" fontSize="20" fill="#FFD700" opacity="0.5">✦</text>
              <text x="680" y="330" fontSize="16" fill="#E63946" opacity="0.4">✦</text>
              <text x="100" y="350" fontSize="18" fill="#C9A96E" opacity="0.5">✦</text>
            </svg>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">הטיפולים שלנו</h2>
            <p className="text-gray-500 text-lg">מגוון טיפולים מקצועיים לכל צורך</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "✨", title: "טיפולי פנים", desc: "ניקוי, לחות ונוגדי הזדקנות. טיפול עמוק שמשיב לעור את הזוהר הטבעי שלו.", badge: "הכי פופולרי", color: "from-pink-50 to-pink-100 border-pink-200" },
              { icon: "🌿", title: "הסרת שיער IPL", desc: "הסרת שיער קבועה עם טכנולוגיה מתקדמת. כאב מינימלי, תוצאות מקסימליות.", badge: "חדש", color: "from-purple-50 to-purple-100 border-purple-200" },
              { icon: "💅", title: "ציפורניים", desc: "ג׳ל, אקריל, נייל ארט ותוספות. עיצוב מושלם שמחזיק שבועות.", badge: null, color: "from-rose-50 to-rose-100 border-rose-200" },
              { icon: "👁️", title: "עיצוב גבות ועפעפיים", desc: "Microblading, lamination, לאש ליפט ועוד. מסגרת מושלמת לפנים שלך.", badge: null, color: "from-pink-50 to-purple-50 border-purple-100" },
              { icon: "💆", title: "עיסוי ורפיון", desc: "עיסוי גב, כתפיים וצוואר לשחרור מתחים ורגיעה עמוקה. ממש כמו ספא.", badge: null, color: "from-purple-50 to-pink-50 border-pink-100" },
              { icon: "🌟", title: "חבילת כלה", desc: "מה-הד-טו-טו לכלה ולחברות. איפור, ציפורניים, טיפול פנים וחינה.", badge: "פרמיום", color: "from-amber-50 to-pink-50 border-amber-200" },
            ].map((service) => (
              <div key={service.title} className={`bg-gradient-to-br ${service.color} border rounded-3xl p-7 relative hover:shadow-lg transition-shadow`}>
                {service.badge && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {service.badge}
                  </div>
                )}
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-gray-900 font-bold text-xl mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About + Why Us */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">למה גלאם?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🏅", title: "מוצרים יוקרתיים", desc: "אנחנו עובדים רק עם מותגים מובילים: Dermalogica, O.P.I, Kérastase. התוצאות מדברות בעד עצמן." },
              { icon: "👩‍🏫", title: "צוות מוסמך", desc: "כל הטכנאיות שלנו עברו הכשרה מקצועית ומתעדכנות בטרנדים והטכנולוגיות החדשות." },
              { icon: "🌺", title: "אווירה כמו ספא", desc: "נכנסים ללחץ, יוצאים בטוב. סטודיו מעוצב, מוזיקת רקע, ארומתרפיה וקפה מפנק." },
            ].map((card) => (
              <div key={card.title} className="text-center p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl flex items-center justify-center text-3xl mx-auto mb-6">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-500 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">מחירון</h2>
            <div className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold px-5 py-2 rounded-full text-sm">
              20% הנחה לתור ראשון!
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "ניקוי פנים בסיסי", price: "₪180", time: "45 דק׳" },
              { name: "טיפול פנים מתקדם", price: "₪280", time: "75 דק׳" },
              { name: "הסרת שיער IPL — רגליים", price: "₪350", time: "60 דק׳" },
              { name: "מניקור ג׳ל", price: "₪120", time: "45 דק׳" },
              { name: "פדיקור + ג׳ל", price: "₪160", time: "60 דק׳" },
              { name: "Microblading גבות", price: "₪890", time: "90 דק׳" },
              { name: "לאש ליפט", price: "₪280", time: "60 דק׳" },
              { name: "חבילת כלה שלמה", price: "₪1,500", time: "3 שעות" },
            ].map((item) => (
              <div key={item.name} className="bg-white rounded-2xl border border-pink-100 p-5 flex items-center justify-between hover:border-pink-300 hover:shadow-md transition-all">
                <div>
                  <div className="font-bold text-gray-900">{item.name}</div>
                  <div className="text-gray-400 text-sm">{item.time}</div>
                </div>
                <div className="font-black text-xl bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  {item.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">מה אומרות הלקוחות</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "הילה כהן", service: "טיפול פנים + ג׳ל", text: "הסטודיו הכי מפנק שהייתי בו! גב׳ רחל מדהימה, הידיים שלה קסמות. העור שלי זוהר מאז. כבר קבעתי תור חוזר!", stars: 5 },
              { name: "מאיה לב", service: "Microblading", text: "חיכיתי חצי שנה לזה ולא התאכזבתי! גבות טבעיות ומושלמות. כל אחת שואלת אותי איפה עשיתי. ממליצה בשתי ידיים!", stars: 5 },
              { name: "רות פרידמן", service: "חבילת כלה", text: "גלאם עשה לי את האיפור לחתונה ולכל החברות. כולן נראו עוצרות נשימה. שירות מקצועי, סבלני ומדהים.", stars: 5 },
            ].map((t) => (
              <div key={t.name} className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 border border-pink-100">
                <div className="flex gap-1 mb-4">
                  {Array(t.stars).fill(0).map((_, i) => <span key={i} className="text-pink-400 text-xl">★</span>)}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{t.name}</div>
                    <div className="text-gray-400 text-sm">{t.service}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Booking */}
      <section id="contact" className="py-24 bg-gradient-to-br from-pink-500 to-purple-700">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-4">קבעי תור עכשיו</h2>
          <p className="text-pink-100 text-lg mb-12">20% הנחה לתור ראשון — לא לפספס!</p>
          <div className="bg-white rounded-3xl p-10">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input type="text" placeholder="שם מלא" className="bg-pink-50 border border-pink-200 text-gray-900 placeholder-gray-400 rounded-xl px-4 py-3.5 focus:outline-none focus:border-pink-500 transition-colors text-right" />
              <input type="tel" placeholder="טלפון" className="bg-pink-50 border border-pink-200 text-gray-900 placeholder-gray-400 rounded-xl px-4 py-3.5 focus:outline-none focus:border-pink-500 transition-colors text-right" />
            </div>
            <select className="w-full bg-pink-50 border border-pink-200 text-gray-500 rounded-xl px-4 py-3.5 mb-4 focus:outline-none focus:border-pink-500 transition-colors text-right">
              <option value="">איזה טיפול מעניין אותך?</option>
              <option>טיפול פנים</option>
              <option>הסרת שיער IPL</option>
              <option>ציפורניים</option>
              <option>עיצוב גבות/עפעפיים</option>
              <option>חבילת כלה</option>
              <option>אחר</option>
            </select>
            <input type="text" placeholder="מתי מתאים לך? (יום + שעה מועדפים)" className="w-full bg-pink-50 border border-pink-200 text-gray-900 placeholder-gray-400 rounded-xl px-4 py-3.5 mb-6 focus:outline-none focus:border-pink-500 transition-colors text-right" />
            <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-black text-xl py-4 rounded-xl hover:shadow-2xl hover:shadow-pink-300 transition-all transform hover:-translate-y-0.5">
              שלח ← אחזור אליך תוך שעה
            </button>
          </div>
          <div className="flex justify-center gap-8 mt-10 text-pink-200 text-sm">
            <span>📞 054-7654321</span>
            <span>📍 רחוב דיזנגוף 45, תל אביב</span>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 py-8 text-center text-gray-600 text-sm">
        © 2024 גלאם — סטודיו לאסתטיקה | נבנה על ידי <span className="text-pink-400">אתר בקליק</span>
      </footer>
    </div>
  );
}
