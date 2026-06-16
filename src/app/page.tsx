"use client";

import { useEffect, useRef } from "react";

const PROJECTS = [
  {
    n: "01",
    name: "YouHook",
    tag: "Peer-to-Peer Marketplace",
    url: "https://youhook-one.vercel.app/",
    blurb:
      "A two-sided rental marketplace where owners list items to earn and renters book on-demand — featuring AI-assisted management tools, real-time tracking, insurance, and zero-fee payouts.",
    stack: ["Next.js", "Tailwind", "Marketplace"],
  },
  {
    n: "02",
    name: "Play Lounge",
    tag: "Venue Discovery · Booking",
    url: "https://www.playlounge.city/",
    blurb:
      "A venue-discovery and booking platform for finding and reserving the best lounge venues for nights out, celebrations, and events — complete with a personalized event concierge.",
    stack: ["Next.js", "Tailwind", "Booking"],
  },
  {
    n: "03",
    name: "YesJobs",
    tag: "Job Board · Recruitment",
    url: "https://yesjobs.com.au/",
    blurb:
      "An Australian job-matching platform connecting candidates with thousands of roles and employers with qualified talent — fast search, rich profiles, and a company directory.",
    stack: ["Next.js", "Tailwind", "Responsive"],
  },
  {
    n: "04",
    name: "Hoy Hoy Ibiza",
    tag: "Hospitality · Events",
    url: "https://hoyhoyibiza.com/",
    blurb:
      "A vibrant events and lifestyle site for an Ibiza brand — immersive visuals with smooth, responsive layouts.",
    stack: ["React", "Tailwind", "Responsive"],
  },
  {
    n: "05",
    name: "E-Rec",
    tag: "Recruitment Platform",
    url: "https://e-rec.com.au/",
    blurb:
      "A recruitment platform with structured, accessible flows and a clean, professional interface.",
    stack: ["React", "Bootstrap", "Responsive"],
  },
  {
    n: "06",
    name: "Brou",
    tag: "Brand · Marketing",
    url: "https://brou.info/",
    blurb:
      "A crisp marketing presence translating a Figma vision into a pixel-perfect, conversion-minded experience.",
    stack: ["Next.js", "Figma → Code"],
  },
];

const MARQUEE = [
  "Next.js",
  "React.js",
  "TypeScript",
  "Tailwind CSS",
  "Shadcn/UI",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Bootstrap",
  "Figma → Code",
  "Git",
  "GitHub",
];

const SKILLS = [
  { group: "Frameworks", items: ["Next.js", "React.js"] },
  { group: "Languages", items: ["JavaScript", "HTML5", "CSS3"] },
  { group: "Styling & UI", items: ["Tailwind CSS", "Shadcn/UI", "Bootstrap"] },
  {
    group: "Workflow",
    items: ["Figma → Code", "Responsive Design", "Git", "GitHub"],
  },
];

const STATS = [
  { k: "3+", v: "Years building for the web" },
  { k: "7+", v: "Production sites shipped" },
  { k: "100%", v: "Responsive, hand-tuned" },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const els = Array.from(root.querySelectorAll<HTMLElement>(".reveal"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

export default function Home() {
  const ref = useReveal();

  return (
    <div ref={ref} className="grain relative min-h-screen bg-ink text-bone">
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(198,242,78,0.10) 0%, rgba(198,242,78,0) 70%)",
        }}
      />

      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a
            href="#top"
            className="font-display text-xl font-semibold tracking-tight"
          >
            Imran<span className="text-lime">.</span>
          </a>
          <div className="hidden items-center gap-8 font-mono text-xs uppercase tracking-widest text-bone-dim sm:flex">
            <a href="#work" className="transition-colors hover:text-bone">
              Work
            </a>
            <a href="#about" className="transition-colors hover:text-bone">
              About
            </a>
            <a href="#contact" className="transition-colors hover:text-bone">
              Contact
            </a>
          </div>
          <a
            href="/Imran-Rasheed-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-line bg-ink-2/60 px-4 py-2 font-mono text-xs uppercase tracking-widest backdrop-blur transition-colors hover:border-lime hover:text-lime"
          >
            Resume
            <span className="transition-transform group-hover:translate-x-0.5">
              ↗
            </span>
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section
        id="top"
        className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 pt-28 pb-16 sm:px-8"
      >
        <div className="reveal mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-bone-dim">
          <span
            className="h-2 w-2 rounded-full bg-lime"
            style={{ animation: "pulse-dot 2.4s ease-in-out infinite" }}
          />
          Available for new projects · Karachi, PK
        </div>

        <h1 className="font-display text-[15vw] leading-[0.86] font-semibold tracking-tight sm:text-[12vw] lg:text-[10.5rem]">
          <span
            className="reveal block"
            style={{ ["--reveal-delay" as string]: "60ms" }}
          >
            Imran
          </span>
          <span
            className="reveal block text-stroke italic"
            style={{ ["--reveal-delay" as string]: "160ms" }}
          >
            Rasheed
          </span>
        </h1>

        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p
            className="reveal max-w-xl text-lg leading-relaxed text-bone-dim sm:text-xl"
            style={{ ["--reveal-delay" as string]: "260ms" }}
          >
            Front-End Developer turning Figma &amp; Adobe XD designs into{" "}
            <span className="text-bone">fast, accessible, pixel-perfect</span>{" "}
            web experiences with Next.js, React &amp; Tailwind CSS.
          </p>

          <div
            className="reveal flex shrink-0 items-center gap-4"
            style={{ ["--reveal-delay" as string]: "360ms" }}
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 font-mono text-xs font-medium uppercase tracking-widest text-ink transition-transform hover:-translate-y-0.5"
            >
              View Work
              <span className="transition-transform group-hover:translate-y-0.5">
                ↓
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-mono text-xs uppercase tracking-widest text-bone transition-colors hover:border-bone"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee relative overflow-hidden border-y border-line bg-ink-2 py-5">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
          {[...MARQUEE, ...MARQUEE].map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-10 font-display text-2xl italic text-bone-dim sm:text-3xl"
            >
              {t}
              <span className="text-lime not-italic">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto max-w-6xl px-5 py-28 sm:px-8 sm:py-36"
      >
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="reveal">
            <p className="font-mono text-xs uppercase tracking-widest text-lime">
              (01) — About
            </p>
            <h2 className="mt-6 font-display text-4xl leading-tight font-medium sm:text-5xl">
              Design-minded developer who sweats the details.
            </h2>
          </div>
          <div
            className="reveal"
            style={{ ["--reveal-delay" as string]: "120ms" }}
          >
            <p className="text-lg leading-relaxed text-bone-dim">
              I&apos;m a results-oriented Front-End Developer with{" "}
              <span className="text-bone">3+ years</span> of hands-on
              experience designing, building, and maintaining responsive
              websites and applications. I specialize in the React and Next.js
              ecosystem, with deep expertise translating Figma and Adobe XD
              designs into production-ready interfaces using Tailwind CSS,
              Shadcn/UI, and Bootstrap.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-bone-dim">
              I care about performance, accessibility, and the small
              interactions that make a product feel considered — and I work
              closely with cross-functional teams to ship work that drives real
              business results.
            </p>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-line pt-10">
              {STATS.map((s) => (
                <div key={s.v}>
                  <div className="font-display text-4xl font-semibold text-lime sm:text-5xl">
                    {s.k}
                  </div>
                  <div className="mt-2 text-xs leading-snug text-bone-faint sm:text-sm">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="reveal mb-14 flex items-end justify-between border-b border-line pb-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-lime">
              (02) — Selected Work
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium sm:text-6xl">
              Things I&apos;ve shipped
            </h2>
          </div>
          <span className="hidden font-mono text-xs uppercase tracking-widest text-bone-faint sm:block">
            06 Projects
          </span>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal group relative flex flex-col justify-between gap-10 bg-ink p-7 transition-colors duration-300 hover:bg-ink-2 sm:p-9"
              style={{ ["--reveal-delay" as string]: `${(i % 2) * 90}ms` }}
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-bone-faint">{p.n}</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-lime">
                  {p.tag}
                </span>
              </div>

              <div>
                <h3 className="font-display text-3xl font-medium tracking-tight transition-colors group-hover:text-lime sm:text-4xl">
                  {p.name}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-bone-dim">
                  {p.blurb}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-bone-faint"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-7 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-bone transition-colors group-hover:text-lime">
                  Visit live site
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="mx-auto max-w-6xl px-5 py-28 sm:px-8 sm:py-36">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="reveal">
            <p className="font-mono text-xs uppercase tracking-widest text-lime">
              (03) — Toolkit
            </p>
            <h2 className="mt-6 font-display text-4xl leading-tight font-medium sm:text-5xl">
              The stack I build with.
            </h2>
            <p className="mt-6 max-w-sm leading-relaxed text-bone-dim">
              A focused, modern front-end toolkit — chosen for speed,
              maintainability, and design fidelity.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {SKILLS.map((s, i) => (
              <div
                key={s.group}
                className="reveal bg-ink p-7 sm:p-8"
                style={{ ["--reveal-delay" as string]: `${(i % 2) * 90}ms` }}
              >
                <h3 className="font-mono text-xs uppercase tracking-widest text-bone-faint">
                  {s.group}
                </h3>
                <ul className="mt-5 space-y-3">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 font-display text-xl text-bone"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="mx-auto max-w-6xl px-5 pb-28 sm:px-8 sm:pb-36">
        <div className="reveal mb-12 border-b border-line pb-6">
          <p className="font-mono text-xs uppercase tracking-widest text-lime">
            (04) — Experience
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium sm:text-6xl">
            Where I&apos;ve worked
          </h2>
        </div>

        <div className="reveal grid gap-8 rounded-2xl border border-line bg-ink-2 p-8 sm:grid-cols-[1fr_2fr] sm:p-12">
          <div>
            <div className="font-display text-2xl font-medium">
              Hashone Digital
            </div>
            <div className="mt-2 font-mono text-xs uppercase tracking-widest text-lime">
              Front-End Developer
            </div>
            <div className="mt-1 font-mono text-xs text-bone-faint">
              Feb 2023 — Present · Karachi
            </div>
          </div>
          <ul className="space-y-4 text-bone-dim">
            {[
              "Built and maintained responsive web apps with Next.js and React.js, delivering against client requirements and deadlines.",
              "Converted Figma & Adobe XD designs into pixel-perfect, fully responsive components.",
              "Developed reusable, accessible UI with Shadcn/UI, Tailwind CSS, and Bootstrap.",
              "Optimized for performance, scalability, Core Web Vitals, and SEO-friendly markup.",
              "Collaborated with designers, back-end devs, and PMs to align deliverables with business goals.",
            ].map((b) => (
              <li key={b} className="flex gap-4 leading-relaxed">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative mx-auto max-w-6xl px-5 pb-20 sm:px-8"
      >
        <div className="reveal rounded-3xl border border-line bg-ink-2 px-7 py-16 text-center sm:px-12 sm:py-24">
          <p className="font-mono text-xs uppercase tracking-widest text-lime">
            (05) — Contact
          </p>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-medium leading-tight sm:text-6xl">
            Have a project in mind? Let&apos;s make it{" "}
            <span className="italic text-lime">fast &amp; beautiful.</span>
          </h2>

          <a
            href="mailto:itsimranwebdev@gmail.com"
            className="group mt-12 inline-flex items-center gap-3 rounded-full bg-lime px-8 py-4 font-mono text-sm font-medium uppercase tracking-widest text-ink transition-transform hover:-translate-y-0.5"
          >
            itsimranwebdev@gmail.com
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-widest text-bone-dim">
            <a
              href="https://wa.me/923351275273"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-bone"
            >
              WhatsApp · 0335-1275273
            </a>
            <span className="text-bone-faint">/</span>
            <a
              href="https://linkedin.com/in/imran-rasheed-4a332b1b7"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-bone"
            >
              LinkedIn
            </a>
            <span className="text-bone-faint">/</span>
            <a
              href="/Imran-Rasheed-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-bone"
            >
              Download Résumé
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-4 border-t border-line pt-8 font-mono text-xs uppercase tracking-widest text-bone-faint sm:flex-row">
          <span>© 2026 Imran Rasheed</span>
          <span>Built with Next.js &amp; Tailwind CSS</span>
          <a href="#top" className="transition-colors hover:text-bone">
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}
