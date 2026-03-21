export default function Contact() {
  const phone = "054-352-3776";
  const phoneFormatted = "+972543523776";
  const email = "jordangoren123@gmail.com";

  return (
    <section id="contact" className="py-24 gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-gold/10 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-white/10 border border-white/20 text-white/80 font-bold text-sm px-4 py-2 rounded-full mb-4">
            דברו איתנו
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            מוכן לאתר שלך?
          </h2>
          <p className="text-xl text-white/70 max-w-xl mx-auto">
            שלח לנו הודעה וקבל הצעה תוך שעה. לא מחייב, לא מסובך
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* WhatsApp / Bit */}
          <a
            href={`https://wa.me/${phoneFormatted}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 backdrop-blur-sm rounded-3xl p-8 text-center transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="text-5xl mb-4">📱</div>
            <h3 className="text-xl font-black text-white mb-2">וואטסאפ / Bit</h3>
            <p className="text-2xl font-bold text-[#d4a843] mb-3" dir="ltr">
              {phone}
            </p>
            <p className="text-white/60 text-sm mb-4">
              שלח הודעה ב-WhatsApp<br />
              שלם ב-Bit לאותו מספר
            </p>
            <div className="bg-[#25D366] text-white font-bold py-2.5 px-6 rounded-xl inline-block group-hover:bg-[#20bd5a] transition-colors">
              שלח הודעה ב-WhatsApp
            </div>
          </a>

          {/* Email */}
          <a
            href={`mailto:${email}`}
            className="group bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 backdrop-blur-sm rounded-3xl p-8 text-center transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="text-5xl mb-4">✉️</div>
            <h3 className="text-xl font-black text-white mb-2">מייל</h3>
            <p className="text-lg font-bold text-[#d4a843] mb-3 break-all" dir="ltr">
              {email}
            </p>
            <p className="text-white/60 text-sm mb-4">
              כתוב לנו מה העסק שלך<br />
              ונחזור אליך תוך שעה
            </p>
            <div className="bg-[#1e3a8a] hover:bg-[#1e40af] text-white font-bold py-2.5 px-6 rounded-xl inline-block transition-colors">
              שלח מייל
            </div>
          </a>
        </div>

        {/* Bottom note */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-2xl px-6 py-3">
            <span className="text-2xl">💳</span>
            <span className="text-white/80 text-sm">
              תשלום נוח דרך Bit · מחיר קבוע ₪500 · ללא הפתעות
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
