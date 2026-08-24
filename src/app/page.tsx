"use client";

import { useEffect, useState } from "react";
import { business } from "../config/business";
import { media } from "../config/media";
import { EnquiryForm } from "./_components/enquiry-form";

const serviceCards = [
  ["01", "Exceptional service", "Professional, reliable work delivered with care and attention to every detail."],
  ["02", "Personal approach", "A genuinely local service built around understanding what each customer needs."],
  ["03", "Beautiful results", "Quality you can see, experience and recommend. Nothing rushed. Nothing ordinary."],
];

export default function Home() {
  const [position, setPosition] = useState({ x: 50, y: 45 });

  useEffect(() => {
    const move = (x: number, y: number) => setPosition({ x: (x / window.innerWidth) * 100, y: (y / window.innerHeight) * 100 });
    const mouse = (e: MouseEvent) => move(e.clientX, e.clientY);
    const touch = (e: TouchEvent) => e.touches[0] && move(e.touches[0].clientX, e.touches[0].clientY);
    window.addEventListener("mousemove", mouse);
    window.addEventListener("touchmove", touch, { passive: true });
    return () => {
      window.removeEventListener("mousemove", mouse);
      window.removeEventListener("touchmove", touch);
    };
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white selection:bg-amber-400 selection:text-black">
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/[0.07] bg-[#050505]/75 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#" className="text-xl font-semibold tracking-[-0.04em]">{business.name}</a>
          <div className="hidden items-center gap-9 text-sm text-white/45 md:flex">
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#work" className="transition hover:text-white">Our work</a>
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#enquiry-form" className="transition hover:text-white">Enquire</a>
          </div>
          <a href="#enquiry-form" className="rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2.5 text-sm font-medium text-amber-300 transition hover:bg-amber-400 hover:text-black">Get Started</a>
        </div>
      </nav>

      <section className="relative flex min-h-screen items-end px-6 pb-16 pt-28 lg:px-10 lg:pb-20" style={{ background: `radial-gradient(circle 420px at ${position.x}% ${position.y}%, rgba(245,158,11,0.14), transparent 70%)` }}>
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.15)_0%,rgba(5,5,5,0.4)_45%,#050505_100%)]" />
        <div className="absolute inset-0 opacity-55" style={{ backgroundImage: `url(${media.hero.src})`, backgroundPosition: "center", backgroundSize: "cover" }} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.92)_0%,rgba(5,5,5,0.55)_45%,rgba(5,5,5,0.25)_100%)]" />
        <div className="relative mx-auto w-full max-w-7xl">
          <div className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-white/55"><span className="h-px w-10 bg-amber-400/70" />{business.tagline}</div>
          <h1 className="max-w-6xl text-[15vw] font-semibold leading-[0.82] tracking-[-0.075em] sm:text-8xl lg:text-[9rem]">Great<br /><span className="relative">service<span className="absolute -bottom-2 left-1 h-px w-24 bg-amber-400/80 sm:w-40" /></span><span className="text-amber-400">.</span></h1>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_340px] lg:items-end">
            <p className="max-w-xl text-lg leading-8 text-white/65 sm:text-xl">Professional service from a local business that genuinely cares about the details, the experience and the final result.</p>
            <div><p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">The standard</p><p className="text-3xl font-medium tracking-tight">Beautiful <span className="text-amber-400">results.</span></p></div>
          </div>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <a href="#enquiry-form" className="group relative overflow-hidden rounded-full bg-amber-400 px-8 py-4 text-center font-semibold text-black transition duration-300 hover:-translate-y-1"><span className="relative z-10">Book / Enquire</span><span className="absolute inset-0 -translate-x-full bg-white transition-transform duration-500 group-hover:translate-x-0" /></a>
            <a href="#work" className="rounded-full border border-white/20 bg-black/20 px-8 py-4 text-center font-medium text-white/80 backdrop-blur transition hover:border-white/35 hover:bg-white/[0.06] hover:text-white">See the work ↓</a>
          </div>
        </div>
      </section>

      <section id="services" className="border-t border-white/[0.07] px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="text-xs uppercase tracking-[0.35em] text-amber-400">What we do</p><h2 className="mt-5 max-w-2xl text-5xl font-semibold tracking-[-0.05em] sm:text-7xl">Less ordinary.<br /><span className="text-white/25">More memorable.</span></h2></div><p className="max-w-xs text-sm leading-6 text-white/35">A carefully considered service from first contact to final result.</p></div>
          <div className="grid gap-5 md:grid-cols-3">
            {serviceCards.map(([number, title, text], index) => <article key={number} className="group overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.025] transition duration-500 hover:-translate-y-1 hover:border-amber-400/20"><div className="h-56 overflow-hidden" style={{ backgroundImage: `linear-gradient(180deg,rgba(5,5,5,0.05),rgba(5,5,5,0.55)),url(${media.services[index].src})`, backgroundPosition: "center", backgroundSize: "cover" }} /><div className="min-h-[250px] p-8"><div className="flex items-start justify-between"><span className="text-sm text-amber-400/70">{number}</span><span className="text-xl text-white/15 transition duration-500 group-hover:text-amber-400">↗</span></div><div className="mt-16"><h3 className="text-2xl font-medium tracking-tight transition group-hover:text-amber-400">{title}</h3><p className="mt-4 text-sm leading-7 text-white/40">{text}</p></div></div></article>)}
          </div>
        </div>
      </section>

      <section id="work" className="px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-end justify-between gap-6"><div><p className="text-xs uppercase tracking-[0.35em] text-amber-400">Our work</p><h2 className="mt-4 text-5xl font-semibold tracking-[-0.05em] sm:text-7xl">Made to be<br /><span className="text-white/25">noticed.</span></h2></div><p className="hidden max-w-xs text-sm leading-6 text-white/30 sm:block">A visual gallery section ready for genuine client photography.</p></div>
          <div className="grid gap-5 md:grid-cols-[1.15fr_0.85fr]">
            <div className="min-h-[430px] rounded-[2rem] border border-white/10 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(180deg,transparent 45%,rgba(5,5,5,0.6)),url(${media.gallery[0].src})` }}>
              <div className="flex h-full items-end p-8"><span className="rounded-full border border-white/15 bg-black/30 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/65 backdrop-blur">Featured project · Demo imagery</span></div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-1">
              {media.gallery.slice(1).map((image) => <div key={image.src} className="min-h-[205px] rounded-[2rem] border border-white/10 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(180deg,transparent 30%,rgba(5,5,5,0.5)),url(${image.src})` }} />)}
            </div>
          </div>
          <p className="mt-5 text-xs uppercase tracking-[0.25em] text-white/20">Demo photography only · replace with genuine client work before launch</p>
        </div>
      </section>

      <section id="about" className="px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl"><div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-8 sm:p-14 lg:p-20"><div className="pointer-events-none absolute h-96 w-96 rounded-full bg-amber-400/[0.07] blur-3xl" style={{ left: `${position.x - 20}%`, top: `${position.y - 40}%` }} /><div className="relative max-w-4xl"><p className="text-xs uppercase tracking-[0.35em] text-amber-400">Why choose us</p><h2 className="mt-6 text-5xl font-semibold tracking-[-0.055em] sm:text-7xl">Premium isn't<br /><span className="text-white/25">a price tag.</span></h2><p className="mt-10 max-w-2xl text-lg leading-8 text-white/40">It's the feeling that someone cared. Every interaction, every detail and every finished result should feel considered.</p><div className="mt-14 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-3"><div><p className="text-4xl font-semibold">01</p><p className="mt-2 text-sm text-white/30">Personal</p></div><div><p className="text-4xl font-semibold">02</p><p className="mt-2 text-sm text-white/30">Professional</p></div><div><p className="text-4xl font-semibold">03</p><p className="mt-2 text-sm text-white/30">Precise</p></div></div></div></div></div>
      </section>

      <section id="contact" className="relative px-6 py-36 lg:px-10"><div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.08),transparent_45%)]" /><div className="relative mx-auto max-w-5xl"><div className="mb-16 text-center"><p className="text-xs uppercase tracking-[0.4em] text-amber-400">Start a conversation</p><h2 className="mt-7 text-6xl font-semibold tracking-[-0.065em] sm:text-8xl">Let's make<br /><span className="text-amber-400">something great.</span></h2><p className="mx-auto mt-8 max-w-lg text-lg leading-8 text-white/35">Questions, quotes or ready to get started? We'd love to hear from you.</p></div><EnquiryForm /><p className="mt-6 text-center text-sm text-white/25">Prefer email? <a className="text-amber-400/80 hover:text-amber-300" href={`mailto:${business.email}`}>{business.email}</a></p></div></section>

      <footer className="border-t border-white/[0.07] px-6 py-10 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-xs uppercase tracking-[0.2em] text-white/20 sm:flex-row"><p>© 2026 {business.name}</p><p>Local · Professional · Trusted</p></div></footer>
    </main>
  );
}
