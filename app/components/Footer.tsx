export default function Footer() {
  return (
    <footer className="bg-[#070e22] border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-white">אתר</span>
            <span className="text-2xl font-black text-[#8b5cf6]">בקליק</span>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/50 text-sm">
            <a href="#how" className="hover:text-white transition-colors">
              איך זה עובד
            </a>
            <a href="#pricing" className="hover:text-white transition-colors">
              מחירים
            </a>
            <a href="#examples" className="hover:text-white transition-colors">
              דוגמאות
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              צור קשר
            </a>
          </div>

          {/* Contact */}
          <div className="text-white/40 text-sm text-center md:text-left" dir="ltr">
            <div>054-352-3776</div>
            <div>jordangoren123@gmail.com</div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-8 pt-6 text-center">
          <p className="text-white/30 text-sm">
            כל הזכויות שמורות © אתר בקליק 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
