export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: "💬",
      title: "יוצרים קשר",
      description:
        "שולחים לנו הודעה בוואטסאפ או מייל. מספרים לנו על העסק שלך, מה אתה מוכר ולמי.",
      color: "from-blue-500 to-blue-700",
    },
    {
      number: "02",
      icon: "⚡",
      title: "אנחנו בונים",
      description:
        "הצוות שלנו עם כלי AI מתקדמים בונה לך דף נחיתה מקצועי, מותאם לעסק ולקהל שלך.",
      color: "from-purple-500 to-purple-700",
    },
    {
      number: "03",
      icon: "🚀",
      title: "עולה לאוויר",
      description:
        "תוך 24 שעות האתר שלך חי ופעיל ברשת, עם דומיין ו-SSL. לקוחות כבר יכולים למצוא אותך.",
      color: "from-[#d4a843] to-[#b8922e]",
    },
  ];

  return (
    <section id="how" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-50 text-[#1e3a8a] font-bold text-sm px-4 py-2 rounded-full mb-4">
            תהליך פשוט
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#0f1e4a] mb-4">
            איך זה עובד?
          </h2>
          <p className="text-xl text-gray-600 max-w-xl mx-auto">
            שלושה צעדים פשוטים מהרגע שתצור קשר ועד שהאתר שלך עולה לאוויר
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-16 right-[16.66%] left-[16.66%] h-0.5 bg-gradient-to-l from-[#d4a843]/30 via-purple-300/30 to-blue-300/30 z-0" />

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 card-hover text-center z-10"
            >
              {/* Number badge */}
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} text-white font-black text-lg mb-6 shadow-lg`}>
                {step.icon}
              </div>
              <div className="absolute top-6 left-6 text-6xl font-black text-gray-50 leading-none select-none">
                {step.number}
              </div>

              <h3 className="text-2xl font-black text-[#0f1e4a] mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-lg">
            מוכן להתחיל?{" "}
            <a
              href="#contact"
              className="text-[#1e3a8a] font-bold underline underline-offset-2 hover:text-[#d4a843] transition-colors"
            >
              צור קשר עכשיו
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
