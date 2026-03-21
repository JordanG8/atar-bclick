"use client";

export default function Pricing() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const features = [
    "דף נחיתה מקצועי ומרשים",
    "עיצוב מותאם לעסק שלך",
    "גרסה מלאה למובייל",
    "מהיר וטעינה מהירה",
    "SSL מאובטח",
    "אחסון ודומיין לשנה הראשונה",
    "תמיכה ב-RTL עברית",
    "שינויים ותיקונים ללא הגבלה",
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-yellow-50 text-yellow-700 font-bold text-sm px-4 py-2 rounded-full mb-4">
            מחיר שקוף
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#0f1e4a] mb-4">
            מחיר אחד, ללא הפתעות
          </h2>
          <p className="text-xl text-gray-600 max-w-xl mx-auto">
            אין תשלומים חוזרים, אין עלויות נסתרות — מחיר קבוע ובהיר
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Main pricing card */}
          <div className="relative bg-[#0f1e4a] rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4a843]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              {/* Badge */}
              <div className="flex justify-center mb-6">
                <span className="bg-[#d4a843]/20 border border-[#d4a843]/30 text-[#f0c866] text-sm font-bold px-4 py-2 rounded-full">
                  הכי פופולרי
                </span>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <p className="text-white/60 text-lg mb-2">דף נחיתה מקצועי</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-7xl font-black text-[#d4a843]">₪500</span>
                </div>
                <p className="text-white/50 text-sm mt-2">תשלום חד-פעמי · אין דמי מנוי</p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#d4a843] flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 12 12" className="w-3 h-3 fill-[#0f1e4a]">
                        <path d="M10 3L5 8.5 2 5.5 1 6.5 5 10.5 11 4z" />
                      </svg>
                    </div>
                    <span className="text-white/85 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={scrollToContact}
                className="w-full bg-[#d4a843] hover:bg-[#f0c866] text-[#0f1e4a] font-black text-xl py-4 rounded-2xl transition-all duration-300 hover:scale-[1.02] shadow-lg"
              >
                רוצה אתר? לחץ כאן
              </button>

              {/* Payment info */}
              <p className="text-center text-white/40 text-sm mt-4">
                תשלום דרך Bit לנייד 054-352-3776
              </p>
            </div>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            {[
              { icon: "🔒", text: "תשלום מאובטח" },
              { icon: "⚡", text: "מוכן תוך 24ש׳" },
              { icon: "💯", text: "שביעות רצון" },
            ].map((badge, i) => (
              <div key={i} className="text-center bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="text-2xl mb-1">{badge.icon}</div>
                <div className="text-xs font-semibold text-gray-600">{badge.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
