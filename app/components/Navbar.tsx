"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-[#050B14]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-white">אתר</span>
            <span className="text-2xl font-black text-[#d4a843]">בקליק</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo("how")} className="text-white/80 hover:text-white transition-colors text-sm font-medium">
              איך זה עובד
            </button>
            <button onClick={() => scrollTo("pricing")} className="text-white/80 hover:text-white transition-colors text-sm font-medium">
              מחירים
            </button>
            <button onClick={() => scrollTo("examples")} className="text-white/80 hover:text-white transition-colors text-sm font-medium">
              דוגמאות
            </button>
            <button onClick={() => scrollTo("contact")} className="text-white/80 hover:text-white transition-colors text-sm font-medium">
              צור קשר
            </button>
            <Link
              href="/gallery"
              className="text-white/80 hover:text-[#d4a843] transition-colors text-sm font-medium"
            >
              גלריה
            </Link>
            <button
              onClick={() => scrollTo("contact")}
              className="bg-[#d4a843] hover:bg-[#f0c866] text-[#0f1e4a] font-bold px-5 py-2 rounded-full transition-all duration-200 text-sm"
            >
              רוצה אתר?
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="פתח תפריט"
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f1e4a] border-t border-white/10 py-4 px-4 space-y-3">
          {[
            { id: "how", label: "איך זה עובד" },
            { id: "pricing", label: "מחירים" },
            { id: "examples", label: "דוגמאות" },
            { id: "contact", label: "צור קשר" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="block w-full text-right text-white/80 hover:text-white py-2 text-base font-medium"
            >
              {item.label}
            </button>
          ))}
          <Link
            href="/gallery"
            className="block w-full text-right text-[#d4a843] hover:text-[#f0c866] py-2 text-base font-medium"
          >
            גלריה
          </Link>
          <button
            onClick={() => scrollTo("contact")}
            className="block w-full text-center bg-[#d4a843] hover:bg-[#f0c866] text-[#0f1e4a] font-bold px-5 py-2.5 rounded-full transition-all duration-200 mt-2"
          >
            רוצה אתר?
          </button>
        </div>
      )}
    </nav>
  );
}
