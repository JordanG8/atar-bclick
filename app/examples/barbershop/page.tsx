export default function BarbershopPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans" dir="rtl">

      {/* Navigation */}
      <nav className="fixed top-0 right-0 left-0 z-50 bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center text-zinc-950 font-black text-lg">
              י
            </div>
            <div>
              <div className="text-white font-black text-lg leading-none">הספר של יוסי</div>
              <div className="text-amber-400 text-xs font-medium">BarberShop Premium</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#about" className="hover:text-amber-400 transition-colors">אודות</a>
            <a href="#services" className="hover:text-amber-400 transition-colors">שירותים</a>
            <a href="#testimonials" className="hover:text-amber-400 transition-colors">ביקורות</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">תור</a>
          </div>
          <a
            href="#contact"
            className="bg-amber-400 hover:bg-amber-300 text-zinc-950 font-black px-5 py-2.5 rounded text-sm transition-all hover:scale-105"
          >
            קבע תור
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1600&q=80)'}}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-zinc-950/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(217,119,6,0.15),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(120,113,108,0.1),_transparent_50%)]" />

        {/* Vertical stripe lines */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px)"
        }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 border border-amber-400/40 rounded px-4 py-2 text-amber-400 text-xs font-bold uppercase tracking-widest mb-8">
                ✂ Premium Barbershop ✂
              </div>

              <h1 className="text-5xl md:text-7xl font-black leading-none mb-6">
                <span className="block text-white">תספורת</span>
                <span className="block text-white">שמשנה</span>
                <span className="block bg-gradient-to-l from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                  את הכל
                </span>
              </h1>

              <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-md">
                20 שנה של ניסיון. תספורות גברים, עיצוב זקן, ושירותים פרימיום לגבר המודרני.
                כי כשנראים טוב — מרגישים טוב.
              </p>

              <div className="flex gap-4">
                <a
                  href="#contact"
                  className="group bg-amber-400 hover:bg-amber-300 text-zinc-950 font-black px-8 py-4 rounded text-base transition-all hover:scale-105"
                >
                  קבע תור עכשיו
                  <span className="mr-2 group-hover:translate-x-1 inline-block transition-transform">←</span>
                </a>
                <a
                  href="#services"
                  className="border border-zinc-700 hover:border-amber-400 text-zinc-400 hover:text-amber-400 font-bold px-8 py-4 rounded text-base transition-all"
                >
                  השירותים שלנו
                </a>
              </div>

              <div className="flex gap-10 mt-12 pt-8 border-t border-zinc-800">
                {[
                  { num: "20+", label: "שנות ניסיון" },
                  { num: "5,000+", label: "לקוחות מרוצים" },
                  { num: "100%", label: "שביעות רצון" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-black text-amber-400">{s.num}</div>
                    <div className="text-zinc-500 text-xs mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side SVG illustration */}
            <div className="hidden md:flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" fill="none" className="w-full max-w-md mx-auto">
                {/* Background */}
                <rect width="800" height="600" fill="#F0F4F8"/>

                {/* Barber pole */}
                <rect x="680" y="80" width="40" height="380" rx="20" fill="#FFFFFF" stroke="#DDDDDD" strokeWidth="2"/>
                <clipPath id="poleClip">
                  <rect x="680" y="80" width="40" height="380" rx="20"/>
                </clipPath>
                <g clipPath="url(#poleClip)">
                  <path d="M680 80 L720 120 L720 160 L680 120 Z" fill="#E63946"/>
                  <path d="M680 120 L720 160 L720 200 L680 160 Z" fill="#FFFFFF"/>
                  <path d="M680 160 L720 200 L720 240 L680 200 Z" fill="#2196F3"/>
                  <path d="M680 200 L720 240 L720 280 L680 240 Z" fill="#E63946"/>
                  <path d="M680 240 L720 280 L720 320 L680 280 Z" fill="#FFFFFF"/>
                  <path d="M680 280 L720 320 L720 360 L680 320 Z" fill="#2196F3"/>
                  <path d="M680 320 L720 360 L720 400 L680 360 Z" fill="#E63946"/>
                  <path d="M680 360 L720 400 L720 440 L680 400 Z" fill="#FFFFFF"/>
                  <path d="M680 400 L720 440 L720 460 L680 440 Z" fill="#2196F3"/>
                </g>
                <ellipse cx="700" cy="80" rx="20" ry="8" fill="#CCCCCC"/>
                <ellipse cx="700" cy="460" rx="20" ry="8" fill="#CCCCCC"/>

                {/* Shop front */}
                <rect x="80" y="150" width="520" height="360" rx="12" fill="#FFFFFF" stroke="#E0E0E0" strokeWidth="2"/>

                {/* Shop window */}
                <rect x="120" y="200" width="440" height="220" rx="8" fill="#E8F4FD"/>
                <line x1="340" y1="200" x2="340" y2="420" stroke="#BBBBBB" strokeWidth="3"/>
                <line x1="120" y1="310" x2="560" y2="310" stroke="#BBBBBB" strokeWidth="3"/>

                {/* Chair base */}
                <rect x="270" y="370" width="100" height="12" rx="6" fill="#4A4A6A"/>
                <rect x="310" y="340" width="20" height="30" fill="#4A4A6A"/>
                {/* Chair seat */}
                <rect x="255" y="310" width="130" height="35" rx="8" fill="#8B1A2E"/>
                {/* Chair back */}
                <rect x="265" y="240" width="110" height="75" rx="8" fill="#8B1A2E"/>
                {/* Headrest */}
                <rect x="295" y="225" width="50" height="20" rx="6" fill="#8B1A2E"/>
                {/* Armrests */}
                <rect x="245" y="315" width="20" height="8" rx="4" fill="#6A1420"/>
                <rect x="375" y="315" width="20" height="8" rx="4" fill="#6A1420"/>

                {/* Customer in chair */}
                <circle cx="320" cy="235" r="28" fill="#F5C5A3"/>
                {/* Cape */}
                <path d="M275 280 Q320 300 365 280 L370 345 Q320 360 270 345 Z" fill="#FFFFFF" stroke="#DDDDDD" strokeWidth="1"/>

                {/* Barber */}
                <circle cx="450" cy="255" r="30" fill="#D4A574"/>
                <rect x="428" y="285" width="44" height="70" rx="6" fill="#2D2D4A"/>
                {/* Barber arm with scissors */}
                <rect x="468" y="295" width="55" height="8" rx="4" fill="#2D2D4A"/>
                {/* Scissors */}
                <path d="M520 285 L535 305 M520 305 L535 285" stroke="#B8B8B8" strokeWidth="3" strokeLinecap="round"/>
                <circle cx="518" cy="288" r="5" fill="none" stroke="#B8B8B8" strokeWidth="2"/>
                <circle cx="518" cy="302" r="5" fill="none" stroke="#B8B8B8" strokeWidth="2"/>

                {/* Hair clippings */}
                <path d="M300 265 Q305 258 310 265" stroke="#5A3A1A" strokeWidth="1.5" fill="none"/>
                <path d="M315 260 Q322 253 328 260" stroke="#5A3A1A" strokeWidth="1.5" fill="none"/>
                <path d="M330 267 Q336 260 342 267" stroke="#5A3A1A" strokeWidth="1.5" fill="none"/>

                {/* Mirror on wall */}
                <rect x="140" y="220" width="120" height="170" rx="4" fill="#D8EAF5" stroke="#AAAAAA" strokeWidth="2"/>

                {/* Shop sign */}
                <rect x="150" y="155" width="380" height="50" rx="8" fill="#2D2D4A"/>
                <text x="340" y="188" textAnchor="middle" fontFamily="serif" fontSize="20" fill="#FFFFFF">הספר של יוסי ✂</text>

                {/* Floor tiles */}
                <rect x="80" y="480" width="520" height="30" rx="4" fill="#E8E8E8"/>
                <line x1="160" y1="480" x2="160" y2="510" stroke="#CCCCCC" strokeWidth="1"/>
                <line x1="240" y1="480" x2="240" y2="510" stroke="#CCCCCC" strokeWidth="1"/>
                <line x1="320" y1="480" x2="320" y2="510" stroke="#CCCCCC" strokeWidth="1"/>
                <line x1="400" y1="480" x2="400" y2="510" stroke="#CCCCCC" strokeWidth="1"/>
                <line x1="480" y1="480" x2="480" y2="510" stroke="#CCCCCC" strokeWidth="1"/>
                <line x1="560" y1="480" x2="560" y2="510" stroke="#CCCCCC" strokeWidth="1"/>

                {/* Shelf with products */}
                <rect x="140" y="410" width="160" height="12" rx="3" fill="#AAAAAA"/>
                <rect x="148" y="378" width="25" height="32" rx="4" fill="#E63946"/>
                <rect x="178" y="372" width="20" height="38" rx="4" fill="#2196F3"/>
                <rect x="203" y="382" width="22" height="28" rx="4" fill="#4CAF50"/>
                <rect x="230" y="376" width="18" height="34" rx="4" fill="#FF9800"/>
                <rect x="253" y="385" width="22" height="25" rx="4" fill="#9C27B0"/>

                {/* Star rating */}
                <text x="340" y="540" textAnchor="middle" fontFamily="sans-serif" fontSize="28" fill="#FFB800">★★★★★</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest">למה לבחור בנו</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3 text-white">
              הניסיון שמדבר בעד עצמו
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "✂️",
                title: "ידי זהב",
                desc: "יוסי למד את המקצוע אצל האחים הגדולים בברוקלין ניו יורק. כל תספורת היא אמנות — חדה, מדויקת, ומחמיאה.",
                color: "amber",
              },
              {
                icon: "🪒",
                title: "גילוח פרימיום",
                desc: "גילוח רטוב עם סכין ישרה, מגבת חמה ותכשירים מהטובים בעולם. חוויה כמו בסלון מיוקרה לונדוני.",
                color: "amber",
              },
              {
                icon: "🕐",
                title: "קביעת תורים קלה",
                desc: "אפליקציה, וואטסאפ או טלפון — תור בתוך דקות. ללא המתנה, ללא בזבוז זמן. מכבדים את הזמן שלכם.",
                color: "amber",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-zinc-800/50 border border-zinc-700 hover:border-amber-400/50 rounded-xl p-8 transition-all group"
              >
                <div className="text-4xl mb-5">{card.icon}</div>
                <h3 className="text-white font-bold text-xl mb-3 group-hover:text-amber-400 transition-colors">
                  {card.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services / Pricing */}
      <section id="services" className="py-24 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest">מחירון</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3 text-white">השירותים והמחירים</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "בייסיק",
                price: "₪60",
                features: ["תספורת גברים", "עיצוב בסיסי", "שטיפה"],
                highlight: false,
              },
              {
                title: "פרימיום",
                price: "₪110",
                features: ["תספורת גברים", "עיצוב זקן", "גילוח צוואר", "שטיפה + מסכה", "מגבת חמה"],
                highlight: true,
              },
              {
                title: "VIP",
                price: "₪170",
                features: ["חבילת פרימיום מלאה", "גילוח רטוב עם סכין", "עיסוי קרקפת 10 דק'", "מוצרי סטיילינג", "משקה ברוסטרי"],
                highlight: false,
              },
            ].map((plan) => (
              <div
                key={plan.title}
                className={`rounded-xl p-8 border transition-all ${
                  plan.highlight
                    ? "bg-gradient-to-b from-amber-400/20 to-amber-400/5 border-amber-400 scale-105"
                    : "bg-zinc-900 border-zinc-800 hover:border-zinc-600"
                }`}
              >
                {plan.highlight && (
                  <div className="text-center mb-4">
                    <span className="bg-amber-400 text-zinc-950 text-xs font-black px-4 py-1 rounded-full uppercase">
                      הכי פופולרי
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <div className={`text-5xl font-black ${plan.highlight ? "text-amber-400" : "text-white"}`}>
                    {plan.price}
                  </div>
                  <div className="text-zinc-400 text-sm mt-1">{plan.title}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <span className="text-amber-400 font-black">✓</span>
                      <span className="text-zinc-300">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block text-center font-bold py-3 rounded transition-all ${
                    plan.highlight
                      ? "bg-amber-400 hover:bg-amber-300 text-zinc-950"
                      : "border border-zinc-600 hover:border-amber-400 text-zinc-400 hover:text-amber-400"
                  }`}
                >
                  קבע תור
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest">עבודות שלנו</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3 text-white">גלריית תספורות</h2>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&q=80",
              "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&q=80",
              "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&q=80",
            ].map((src, i) => (
              <div key={i} className="overflow-hidden rounded-xl aspect-square">
                <img
                  src={src}
                  alt={`תספורת ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-zinc-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest">מה אומרים עלינו</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3 text-white">הלקוחות מדברים</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "רוני שמעון",
                role: "תל אביב",
                text: "יוסי הוא פשוט הספר הכי טוב שהייתי אצלו. מדויק, מקצועי, ותמיד יודע בדיוק מה אני רוצה. כבר 4 שנים רק אליו.",
              },
              {
                name: "אורן מזרחי",
                role: "גבעתיים",
                text: "חוויית VIP מדהימה — הגילוח עם הסכין הישרה זה משהו אחר. מרגישים כאילו יצאתם מסרט. מומלץ בחום!",
              },
              {
                name: "יעקב ביטון",
                role: "רמת גן",
                text: "המקום הכי נוח לשבת בו ולדבר תוך כדי תספורת. האווירה פצצה, הקפה טעים, וההוצאה שווה כל שקל.",
              },
            ].map((r) => (
              <div key={r.name} className="bg-zinc-800 border border-zinc-700 rounded-xl p-8">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-amber-400">★</span>
                  ))}
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed mb-6">{r.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center text-zinc-950 font-black text-sm">
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{r.name}</div>
                    <div className="text-zinc-500 text-xs">{r.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Book */}
      <section id="contact" className="py-24 bg-zinc-950">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest">קביעת תור</span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-4 text-white">
            מוכן לשדרג את המראה?
          </h2>
          <p className="text-zinc-400 mb-12">קבע תור עכשיו — מגיבים תוך דקות</p>

          <div className="space-y-4 text-right">
            <input
              type="text"
              placeholder="שם מלא"
              className="w-full bg-zinc-900 border border-zinc-700 focus:border-amber-400 rounded-lg px-5 py-4 text-white placeholder-zinc-500 outline-none transition-colors"
            />
            <input
              type="tel"
              placeholder="מספר טלפון"
              className="w-full bg-zinc-900 border border-zinc-700 focus:border-amber-400 rounded-lg px-5 py-4 text-white placeholder-zinc-500 outline-none transition-colors"
              dir="ltr"
            />
            <select className="w-full bg-zinc-900 border border-zinc-700 focus:border-amber-400 rounded-lg px-5 py-4 text-zinc-400 outline-none transition-colors">
              <option>בחר שירות</option>
              <option>בייסיק - ₪60</option>
              <option>פרימיום - ₪110</option>
              <option>VIP - ₪170</option>
            </select>
            <textarea
              placeholder="הערות נוספות (אופציונלי)"
              rows={3}
              className="w-full bg-zinc-900 border border-zinc-700 focus:border-amber-400 rounded-lg px-5 py-4 text-white placeholder-zinc-500 outline-none transition-colors resize-none"
            />
          </div>

          <button className="mt-6 w-full bg-amber-400 hover:bg-amber-300 text-zinc-950 font-black py-4 rounded-lg text-lg transition-all hover:scale-[1.02]">
            שלח בקשת תור
          </button>

          <div className="flex justify-center gap-10 mt-12 text-zinc-500 text-sm">
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>שינקין 48, תל אביב</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📞</span>
              <span dir="ltr">050-555-9876</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-zinc-600 text-sm">© 2024 הספר של יוסי. כל הזכויות שמורות.</div>
          <div className="text-zinc-700 text-xs">
            נבנה על ידי{" "}
            <a href="/" className="text-amber-400 hover:text-amber-300">אתר בקליק</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
