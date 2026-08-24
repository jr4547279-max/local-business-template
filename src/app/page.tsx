"use client";

import { useEffect, useState } from "react";
import { business } from "../config/business";
import { media } from "../config/media";
import { EnquiryForm } from "./_components/enquiry-form";

const serviceDetails = [
  ["01", "Repointing", "Traditional lime or modern sand & cement systems, selected to suit the building."],
  ["02", "Brickwork", "Repairs, rebuilding, walls, steps and exterior masonry carried out with care."],
  ["03", "Patios & masonry", "Practical outdoor spaces and masonry work designed to look right and last."],
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#f1eee7] text-[#171715] selection:bg-[#b96b32] selection:text-white">
      <header className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-[#f1eee7]/92 shadow-[0_10px_40px_rgba(0,0,0,.08)] backdrop-blur-xl" : "bg-transparent"}`}>
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <a href="#top" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#171715] text-sm font-semibold text-[#f1eee7]">J/J</span>
            <span className="hidden text-sm font-semibold tracking-[0.08em] sm:block">JOINT TO JOINT</span>
          </a>
          <div className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.18em] text-[#171715]/60 md:flex">
            <a href="#services" className="hover:text-[#171715]">Services</a>
            <a href="#approach" className="hover:text-[#171715]">Our approach</a>
            <a href="#work" className="hover:text-[#171715]">Work</a>
            <a href="#enquire" className="hover:text-[#171715]">Contact</a>
          </div>
          <a href="#enquiry-form" className="rounded-full bg-[#b96b32] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-lg shadow-[#b96b32]/15 transition hover:-translate-y-0.5">Free quote</a>
        </nav>
      </header>

      <section id="top" className="relative min-h-[92vh] overflow-hidden px-5 pb-12 pt-28 sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[#dcd7cb]" />
        <div className="absolute inset-y-0 right-0 w-full lg:w-[57%]" style={{ backgroundImage: `linear-gradient(90deg,rgba(241,238,231,1) 0%,rgba(241,238,231,.38) 25%,rgba(241,238,231,.02) 55%),url(${media.hero.src})`, backgroundPosition: "center", backgroundSize: "cover" }} />
        <div className="relative mx-auto flex min-h-[calc(92vh-8rem)] max-w-7xl items-end">
          <div className="max-w-3xl pb-6 sm:pb-12 lg:pb-16">
            <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#b96b32]"><span className="h-px w-12 bg-[#b96b32]" />{business.location}</p>
            <h1 className="text-[18vw] font-semibold leading-[0.82] tracking-[-0.075em] sm:text-8xl lg:text-[8.5rem]">Good work.<br /><span className="text-[#b96b32]">Done properly.</span></h1>
            <p className="mt-9 max-w-xl text-lg leading-8 text-[#171715]/65 sm:text-xl">{business.description}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#enquiry-form" className="rounded-full bg-[#171715] px-7 py-4 text-center text-sm font-semibold text-white transition hover:-translate-y-1">Request a quote ↗</a>
              <a href={`tel:${business.phone.replace(/\s/g, "")}`} className="rounded-full border border-[#171715]/20 bg-[#f1eee7]/60 px-7 py-4 text-center text-sm font-semibold backdrop-blur transition hover:bg-white">Call {business.phone}</a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#171715]/10 bg-[#171715] px-5 py-5 text-[#f1eee7] sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-3 text-xs font-medium uppercase tracking-[0.2em] text-white/65">
          <span>Family run</span><span className="text-[#b96b32]">●</span><span>40+ years experience</span><span className="text-[#b96b32]">●</span><span>Eastbourne & Sussex</span><span className="text-[#b96b32]">●</span><span>Free quotes</span>
        </div>
      </section>

      <section id="services" className="px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
            <div><p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b96b32]">What we do</p><h2 className="mt-5 text-5xl font-semibold tracking-[-0.06em] sm:text-6xl">Built for the<br />long term.</h2></div>
            <div className="divide-y divide-[#171715]/10 border-y border-[#171715]/10">
              {serviceDetails.map(([number, title, text]) => <article key={number} className="grid gap-5 py-8 sm:grid-cols-[70px_1fr_1.4fr] sm:items-start"><span className="text-sm font-semibold text-[#b96b32]">{number}</span><h3 className="text-2xl font-medium tracking-tight">{title}</h3><p className="text-sm leading-7 text-[#171715]/55">{text}</p></article>)}
            </div>
          </div>
        </div>
      </section>

      <section id="approach" className="bg-[#ded8cc] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div><p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b96b32]">The Joint to Joint way</p><h2 className="mt-6 text-5xl font-semibold tracking-[-0.06em] sm:text-7xl">Restore it.<br /><span className="text-[#171715]/35">Don't just cover it.</span></h2><p className="mt-8 max-w-xl text-lg leading-8 text-[#171715]/60">From traditional lime pointing to modern repairs, the right method matters. We take the time to understand the building before deciding what it needs.</p></div>
            <div className="grid grid-cols-2 gap-4"><div className="rounded-[2rem] bg-[#171715] p-7 text-[#f1eee7] sm:p-9"><p className="text-5xl font-semibold text-[#b96b32]">01</p><p className="mt-20 text-sm leading-6 text-white/55">Inspect carefully</p></div><div className="mt-12 rounded-[2rem] bg-[#f1eee7] p-7 shadow-sm sm:p-9"><p className="text-5xl font-semibold">02</p><p className="mt-20 text-sm leading-6 text-[#171715]/45">Recommend honestly</p></div><div className="rounded-[2rem] bg-[#b96b32] p-7 text-white sm:p-9"><p className="text-5xl font-semibold">03</p><p className="mt-20 text-sm leading-6 text-white/75">Build properly</p></div><div className="mt-12 rounded-[2rem] border border-[#171715]/15 p-7 sm:p-9"><p className="text-5xl font-semibold">04</p><p className="mt-20 text-sm leading-6 text-[#171715]/45">Leave it tidy</p></div></div>
          </div>
        </div>
      </section>

      <section id="work" className="px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl"><div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b96b32]">Work & detail</p><h2 className="mt-5 text-5xl font-semibold tracking-[-0.06em] sm:text-7xl">Craft is<br />in the detail.</h2></div><p className="max-w-sm text-sm leading-7 text-[#171715]/45">A gallery ready for genuine project photography — the finished site can showcase their actual work here.</p></div>
          <div className="grid gap-5 md:grid-cols-[1.35fr_.65fr]"><div className="min-h-[520px] rounded-[2rem] bg-cover bg-center" style={{ backgroundImage: `linear-gradient(180deg,transparent 45%,rgba(0,0,0,.55)),url(${media.gallery[0].src})` }}><div className="flex h-full items-end p-7"><span className="rounded-full bg-[#f1eee7]/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em]">Demo imagery · replace before launch</span></div></div><div className="grid gap-5 sm:grid-cols-2 md:grid-cols-1"><div className="min-h-[250px] rounded-[2rem] bg-cover bg-center" style={{ backgroundImage: `url(${media.gallery[1].src})` }} /><div className="min-h-[250px] rounded-[2rem] bg-cover bg-center" style={{ backgroundImage: `url(${media.gallery[2].src})` }} /></div></div>
        </div>
      </section>

      <section id="enquire" className="bg-[#171715] px-5 py-24 text-[#f1eee7] sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-6xl"><div className="mb-14 grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b96b32]">Start with a conversation</p><h2 className="mt-5 text-5xl font-semibold tracking-[-0.06em] sm:text-7xl">Tell us what<br />needs doing.</h2></div><p className="max-w-lg text-lg leading-8 text-white/45">Whether it's a small repair or a larger restoration project, send the details and we'll take it from there.</p></div><div className="rounded-[2rem] bg-[#f1eee7] p-5 text-[#171715] sm:p-8 lg:p-10"><EnquiryForm /></div><div className="mt-7 flex flex-col gap-3 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between"><span>Prefer a direct conversation?</span><a className="font-semibold text-[#b96b32]" href={`tel:${business.phone.replace(/\s/g, "")}`}>{business.phone}</a><a className="font-semibold text-[#b96b32]" href={`mailto:${business.email}`}>{business.email}</a></div></div>
      </section>

      <footer className="bg-[#171715] px-5 pb-10 text-[#f1eee7] sm:px-8 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 border-t border-white/10 pt-7 text-xs uppercase tracking-[0.18em] text-white/25 sm:flex-row"><span>© 2026 {business.name}</span><span>{business.location}</span></div></footer>
    </main>
  );
}
