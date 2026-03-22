"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const ParticleSphere = dynamic(() => import("./components/ParticleSphere"), {
  ssr: false,
});
const CustomCursor = dynamic(() => import("./components/CustomCursor"), {
  ssr: false,
});

/* ─── Reveal wrapper ─── */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 1,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Animated line ─── */
function AnimatedLine({ delay = 0 }: { delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ scaleX: 0 }}
      animate={inView ? { scaleX: 1 } : {}}
      transition={{ duration: 1.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className="w-full h-px bg-current opacity-10 origin-left"
    />
  );
}

/* ─── Navigation dots ─── */
function NavDots({ active }: { active: number }) {
  const sections = ["Hero", "About", "Work", "Contact"];

  const scrollTo = (index: number) => {
    const container = document.querySelector(".snap-container");
    const section = document.querySelectorAll(".snap-section")[index];
    if (container && section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 max-md:hidden">
      {sections.map((name, i) => (
        <button
          key={name}
          onClick={() => scrollTo(i)}
          className="group flex items-center gap-3 justify-end"
          aria-label={`Go to ${name}`}
        >
          <span className="text-label opacity-0 group-hover:opacity-60 transition-opacity duration-300">
            {name}
          </span>
          <span
            className={`block rounded-full transition-all duration-500 ${
              active === i
                ? "w-3 h-3 bg-copper"
                : "w-1.5 h-1.5 bg-cream/30 group-hover:bg-cream/60"
            }`}
          />
        </button>
      ))}
    </nav>
  );
}

/* ─── Main Page ─── */
export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Track active section (throttled)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollTop = container.scrollTop;
        const vh = window.innerHeight;
        const index = Math.round(scrollTop / vh);
        setActiveSection(index);
        ticking = false;
      });
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        const sections = document.querySelectorAll(".snap-section");
        const next =
          e.key === "ArrowDown"
            ? Math.min(activeSection + 1, sections.length - 1)
            : Math.max(activeSection - 1, 0);
        sections[next]?.scrollIntoView({ behavior: "smooth" });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeSection]);

  return (
    <>
      <CustomCursor />
      <ParticleSphere />

      {/* Grain overlay */}
      <div className="grain" />

      {/* Navigation dots */}
      <NavDots active={activeSection} />

      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-8 md:px-16 py-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <span className="text-label tracking-mega" data-cursor-text>
            Jordan Goren
          </span>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.7 }}
          className="flex gap-8 max-md:hidden"
        >
          {[
            { label: "About", idx: 1 },
            { label: "Work", idx: 2 },
            { label: "Contact", idx: 3 },
          ].map(({ label, idx }) => (
            <button
              key={label}
              onClick={() => {
                document
                  .querySelectorAll(".snap-section")
                  [idx]?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-label tracking-wide opacity-50 hover:opacity-100 transition-opacity duration-500"
            >
              {label}
            </button>
          ))}
        </motion.nav>
      </header>

      {/* Snap scroll container */}
      <div ref={containerRef} className="snap-container">
        {/* ═══════════════════════════════════════════
            SECTION 1 — HERO
        ═══════════════════════════════════════════ */}
        <section className="snap-section section-dark flex-col px-8 md:px-16 overflow-hidden">
          <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
            {/* Spacer for top bar */}
            <div className="flex-1" />

            {/* Main name */}
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.4,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="overflow-hidden"
              >
                <h1
                  className="text-mega font-display tracking-tight"
                  data-cursor-hover
                >
                  Jordan
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.4,
                  delay: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="overflow-hidden"
              >
                <h1
                  className="text-mega font-display italic text-copper"
                  data-cursor-hover
                >
                  Goren
                </h1>
              </motion.div>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 1.5, delay: 1.2 }}
              className="text-label tracking-mega mt-12 md:mt-16"
            >
              AI &middot; Design &middot; Technology
            </motion.p>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
              className="flex flex-col items-center gap-4 pb-12"
            >
              <span className="text-label tracking-mega opacity-30">
                Scroll
              </span>
              <div className="scroll-line" />
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 2 — ABOUT
        ═══════════════════════════════════════════ */}
        <section className="snap-section section-light flex-col px-8 md:px-16 lg:px-32">
          <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-24">
            <Reveal>
              <span className="text-label tracking-mega opacity-40 mb-8 block">
                About
              </span>
            </Reveal>

            <AnimatedLine delay={0.2} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mt-16 lg:mt-24">
              {/* Left column — statement */}
              <div className="lg:col-span-7">
                <Reveal delay={0.3}>
                  <p className="text-statement font-display leading-snug">
                    I build things at the intersection of{" "}
                    <em className="text-copper not-italic">
                      artificial intelligence
                    </em>{" "}
                    and human creativity.
                  </p>
                </Reveal>
              </div>

              {/* Right column — details */}
              <div className="lg:col-span-5 flex flex-col justify-end">
                <Reveal delay={0.5}>
                  <p className="font-body text-base leading-relaxed opacity-60 mb-8">
                    Focused on crafting digital experiences that feel alive —
                    where technology disappears and only the experience
                    remains. Every project is a pursuit of that invisible
                    threshold where code becomes craft.
                  </p>
                </Reveal>

                <Reveal delay={0.6}>
                  <div className="flex gap-16">
                    <div>
                      <p className="font-display text-4xl md:text-5xl text-copper">
                        &infin;
                      </p>
                      <p className="text-label tracking-wide mt-2 opacity-40">
                        Curiosity
                      </p>
                    </div>
                    <div>
                      <p className="font-display text-4xl md:text-5xl">AI</p>
                      <p className="text-label tracking-wide mt-2 opacity-40">
                        Powered
                      </p>
                    </div>
                    <div>
                      <p className="font-display text-4xl md:text-5xl">
                        &lt;/&gt;
                      </p>
                      <p className="text-label tracking-wide mt-2 opacity-40">
                        Full Stack
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 3 — SELECTED WORK
        ═══════════════════════════════════════════ */}
        <section className="snap-section section-dark flex-col px-8 md:px-16 lg:px-32 !min-h-screen">
          <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col justify-center h-full py-24">
            <Reveal>
              <span className="text-label tracking-mega opacity-40 mb-8 block">
                Selected Work
              </span>
            </Reveal>

            <AnimatedLine delay={0.2} />

            <div className="mt-8">
              {[
                {
                  num: "01",
                  title: "Neural Canvas",
                  tag: "AI / Generative Art",
                  desc: "Real-time generative art powered by neural networks",
                },
                {
                  num: "02",
                  title: "Spatial Interface",
                  tag: "3D / WebGL",
                  desc: "Immersive 3D web experiences with spatial computing",
                },
                {
                  num: "03",
                  title: "Voice Architect",
                  tag: "AI / NLP",
                  desc: "Natural language interfaces that understand context",
                },
                {
                  num: "04",
                  title: "Data Sculpture",
                  tag: "Visualization / D3",
                  desc: "Turning complex datasets into visual narratives",
                },
              ].map((project, i) => (
                <Reveal key={project.num} delay={0.2 + i * 0.1}>
                  <div className="work-item group" data-cursor-hover>
                    <div className="flex items-baseline justify-between gap-8">
                      <div className="flex items-baseline gap-6 md:gap-12 flex-1 min-w-0">
                        <span className="work-number shrink-0">
                          {project.num}
                        </span>
                        <div className="min-w-0">
                          <h3 className="work-title truncate">
                            {project.title}
                          </h3>
                          <p className="font-body text-sm opacity-0 group-hover:opacity-40 transition-opacity duration-500 mt-1 max-md:opacity-40">
                            {project.desc}
                          </p>
                        </div>
                      </div>
                      <span className="work-tag shrink-0 max-md:hidden">
                        {project.tag}
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 4 — CONTACT
        ═══════════════════════════════════════════ */}
        <section className="snap-section section-dark flex-col px-8 md:px-16 lg:px-32">
          <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col justify-center items-center h-full text-center">
            <Reveal>
              <span className="text-label tracking-mega opacity-40 mb-16 block">
                Get in Touch
              </span>
            </Reveal>

            <Reveal delay={0.2}>
              <h2 className="text-statement font-display max-w-3xl">
                Let&apos;s create something{" "}
                <em className="italic text-copper">extraordinary</em>
              </h2>
            </Reveal>

            <Reveal delay={0.4}>
              <a
                href="mailto:jordangoren123@gmail.com"
                className="mt-16 font-display text-2xl md:text-4xl opacity-40 hover:opacity-100 hover:text-copper transition-all duration-700 border-b border-transparent hover:border-copper pb-2"
                data-cursor-hover
              >
                jordangoren123@gmail.com
              </a>
            </Reveal>

            <Reveal delay={0.6}>
              <div className="flex gap-12 mt-16">
                <a
                  href="https://github.com/jordangoren"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-label tracking-wide opacity-30 hover:opacity-80 hover:text-copper transition-all duration-500"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/jordangoren"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-label tracking-wide opacity-30 hover:opacity-80 hover:text-copper transition-all duration-500"
                >
                  LinkedIn
                </a>
                <a
                  href="https://twitter.com/jordangoren"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-label tracking-wide opacity-30 hover:opacity-80 hover:text-copper transition-all duration-500"
                >
                  Twitter
                </a>
              </div>
            </Reveal>

            {/* Footer */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-between items-center px-0 opacity-20">
              <span className="text-label">
                &copy; {new Date().getFullYear()}
              </span>
              <span className="text-label">Jordan Goren</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
