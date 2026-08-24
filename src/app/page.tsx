"use client";

import { useEffect, useState } from "react";

const services = [
  ["01", "Exceptional service", "Professional, reliable work delivered with care and attention to every detail."],
  ["02", "Personal approach", "A genuinely local service built around understanding what each customer needs."],
  ["03", "Beautiful results", "Quality you can see, experience and recommend. Nothing rushed. Nothing ordinary."],
];

export default function Home() {
  const [position, setPosition] = useState({ x: 50, y: 45 });

  useEffect(() => {
    const move = (x: number, y: number) => {
      setPosition({
        x: (x / window.innerWidth) * 100,
        y: (y / window.innerHeight) * 100,
      });
    };

    const mouse = (e: MouseEvent) => move(e.clientX, e.clientY);
    const touch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) move(t.clientX, t.clientY);
    };

    window.addEventListener("mousemove", mouse);
    window.addEventListener("touchmove", touch, { passive: true });

    return () => {
      window.removeEventListener("mousemove", mouse);
      window.removeEventListener("touchmove", touch);
    };
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white selection:bg-amber-400 selection:text-black">

      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/[0.07] bg-[#050505]/70 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#" className="text-xl font-semibold tracking-[-0.04em]">
            YOUR<span className="text-amber-400">BUSINESS</span>
          </a>

          <div className="hidden items-center gap-9 text-sm text-white/45 md:flex">
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2.5 text-sm font-medium text-amber-300 transition hover:bg-amber-400 hover:text-black"
          >
            Get Started
          </a>
        </div>
      </nav>

      <section
        className="relative flex min-h-screen items-center px-6 pt-28 lg:px-10"
        style={{
          background: `radial-gradient(circle 420px at ${position.x}% ${position.y}%, rgba(245,158,11,0.13), transparent 70%)`,
        }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_75%)]" />

        <div className="relative mx-auto w-full max-w-7xl">

          <div className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-white/35">
            <span className="h-px w-10 bg-amber-400/60" />
            Independent · Local · Trusted
          </div>

          <h1 className="max-w-6xl text-[15vw] font-semibold leading-[0.82] tracking-[-0.075em] sm:text-8xl lg:text-[9rem]">
            Great
            <br />
            <span className="relative">
              service
              <span className="absolute -bottom-2 left-1 h-px w-24 bg-amber-400/80 sm:w-40" />
            </span>
            <span className="text-amber-400">.</span>
          </h1>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_340px] lg:items-end">
            <p className="max-w-xl text-lg leading-8 text-white/45 sm:text-xl">
              Professional service from a local business that genuinely cares
              about the details, the experience and the final result.
            </p>

            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/25">
                The standard
              </p>

              <p className="text-3xl font-medium tracking-tight">
                Beautiful
                <span className="text-amber-400"> results.</span>
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="group relative overflow-hidden rounded-full bg-amber-400 px-8 py-4 text-center font-semibold text-black transition duration-300 hover:-translate-y-1"
            >
              <span className="relative z-10">Book / Enquire</span>
              <span className="absolute inset-0 -translate-x-full bg-white transition-transform duration-500 group-hover:translate-x-0" />
            </a>

            <a
              href="#services"
              className="rounded-full border border-white/10 px-8 py-4 text-center font-medium text-white/70 transition hover:border-white/25 hover:bg-white/[0.04] hover:text-white"
            >
              Discover what we do ↓
            </a>
          </div>

          <div className="mt-20 flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-white/20">
            <span className="h-8 w-px bg-white/10" />
            Scroll to explore
          </div>
        </div>
      </section>

      <section id="services" className="border-t border-white/[0.07] px-6 py-32 lg:px-10">
        <div className="mx-auto max-w-7xl">

          <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-amber-400">
                What we do
              </p>
              <h2 className="mt-5 max-w-2xl text-5xl font-semibold tracking-[-0.05em] sm:text-7xl">
                Less ordinary.
                <br />
                <span className="text-white/25">More memorable.</span>
              </h2>
            </div>

            <p className="max-w-xs text-sm leading-6 text-white/30">
              A carefully considered service from first contact to final result.
            </p>
          </div>

          <div className="grid border-y border-white/[0.08] md:grid-cols-3 md:divide-x md:divide-white/[0.08]">
            {services.map(([number, title, text]) => (
              <article
                key={number}
                className="group min-h-[330px] border-b border-white/[0.08] p-8 transition duration-500 hover:bg-white/[0.025] md:border-b-0 md:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm text-amber-400/60">{number}</span>
                  <span className="text-xl text-white/10 transition duration-500 group-hover:text-amber-400">↗</span>
                </div>

                <div className="mt-24">
                  <h3 className="text-2xl font-medium tracking-tight transition group-hover:text-amber-400">
                    {title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/35">
                    {text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-8 sm:p-14 lg:p-20">

            <div
              className="pointer-events-none absolute h-96 w-96 rounded-full bg-amber-400/[0.07] blur-3xl transition-all duration-1000"
              style={{
                left: `${position.x - 20}%`,
                top: `${position.y - 40}%`,
              }}
            />

            <div className="relative max-w-4xl">
              <p className="text-xs uppercase tracking-[0.35em] text-amber-400">
                Why choose us
              </p>

              <h2 className="mt-6 text-5xl font-semibold tracking-[-0.055em] sm:text-7xl">
                Premium isn't
                <br />
                <span className="text-white/25">a price tag.</span>
              </h2>

              <p className="mt-10 max-w-2xl text-lg leading-8 text-white/40">
                It's the feeling that someone cared. Every interaction,
                every detail and every finished result should feel considered.
              </p>

              <div className="mt-14 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-3">
                <div>
                  <p className="text-4xl font-semibold">01</p>
                  <p className="mt-2 text-sm text-white/30">Personal</p>
                </div>
                <div>
                  <p className="text-4xl font-semibold">02</p>
                  <p className="mt-2 text-sm text-white/30">Professional</p>
                </div>
                <div>
                  <p className="text-4xl font-semibold">03</p>
                  <p className="mt-2 text-sm text-white/30">Precise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative px-6 py-36 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.08),transparent_45%)]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-amber-400">
            Start a conversation
          </p>

          <h2 className="mt-7 text-6xl font-semibold tracking-[-0.065em] sm:text-8xl">
            Let's make
            <br />
            <span className="text-amber-400">something great.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-lg text-lg leading-8 text-white/35">
            Questions, quotes or ready to get started?
            We'd love to hear from you.
          </p>

          <a
            href="mailto:hello@yourbusiness.co.uk"
            className="mt-10 inline-flex rounded-full border border-amber-400/30 bg-amber-400 px-9 py-4 font-semibold text-black transition duration-300 hover:-translate-y-1 hover:bg-amber-300"
          >
            hello@yourbusiness.co.uk
          </a>
        </div>
      </section>

      <footer className="border-t border-white/[0.07] px-6 py-10 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-xs uppercase tracking-[0.2em] text-white/20 sm:flex-row">
          <p>© 2026 Your Business</p>
          <p>Local · Professional · Trusted</p>
        </div>
      </footer>

    </main>
  );
}
