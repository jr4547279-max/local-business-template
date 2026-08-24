"use client";

import { useMemo, useState } from "react";
import { business } from "../config/business";

const pubImages = [
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1800&q=85",
  "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1571501679680-de32f1e47a17?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1400&q=85",
];

const events = [
  ["QUIZ", "Themed quiz nights", "A proper pub quiz with complimentary hot buffet — check the latest Facebook post for the next date."],
  ["MUSIC", "Live music & garden sessions", "Occasional live music and summer concerts in the enclosed rear garden."],
  ["FESTIVAL", "Beer festivals", "The Crown hosts regular beer festivals, including a long-running Easter event."],
];

export default function Home() {
  const [filter, setFilter] = useState("ALL");
  const visibleEvents = useMemo(() => filter === "ALL" ? events : events.filter(([type]) => type === filter), [filter]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#17120e] text-[#fff8eb] pb-16 selection:bg-[#e6ad58] selection:text-[#17120e]">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#17120e]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
          <a href="#top" className="font-serif text-2xl font-bold tracking-[-.05em]">THE <span className="text-[#e6ad58]">CROWN</span></a>
          <div className="hidden gap-8 text-sm text-white/55 md:flex"><a href="#story">The pub</a><a href="#whats-on">What's on</a><a href="#garden">Garden</a><a href="#visit">Visit</a></div>
          <a href="tel:+441323724654" className="rounded-full bg-[#e6ad58] px-5 py-2.5 text-sm font-semibold text-[#17120e]">Call the pub</a>
        </div>
      </nav>

      <section id="top" className="relative min-h-[88vh] overflow-hidden px-5 py-24 lg:px-10 lg:py-28">
        <div className="absolute inset-0 bg-cover bg-center opacity-55" style={{backgroundImage:`url(${pubImages[0]})`}} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#17120e_0%,rgba(23,18,14,.82)_42%,rgba(23,18,14,.28)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,#17120e_0%,transparent_45%,rgba(0,0,0,.25)_100%)]" />
        <div className="relative mx-auto flex min-h-[68vh] max-w-7xl items-end">
          <div className="max-w-5xl"><p className="mb-7 text-xs uppercase tracking-[.4em] text-[#e6ad58]">Old Town · Eastbourne · Community Pub</p><h1 className="font-serif text-[20vw] font-bold leading-[.76] tracking-[-.075em] sm:text-8xl lg:text-[9.5rem]">A proper<br/><em className="text-[#e6ad58]">local.</em></h1><p className="mt-9 max-w-2xl text-lg leading-8 text-white/65 sm:text-xl">Real ale, log fires, a big enclosed garden and the kind of pub atmosphere that makes you want to stay for another one.</p><div className="mt-10 flex flex-col gap-3 sm:flex-row"><a href="#whats-on" className="rounded-full bg-[#e6ad58] px-8 py-4 text-center font-semibold text-[#17120e]">See what's on</a><a href="tel:+441323724654" className="rounded-full border border-white/20 bg-black/20 px-8 py-4 text-center font-semibold text-white/80 backdrop-blur">01323 724654</a></div></div>
        </div>
      </section>

      <section id="story" className="border-y border-white/10 px-5 py-24 lg:px-10"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.85fr_1.15fr] lg:items-center"><div><p className="text-xs uppercase tracking-[.35em] text-[#e6ad58]">Why The Crown</p><h2 className="mt-5 font-serif text-5xl tracking-[-.05em] sm:text-7xl">Community<br/><span className="text-white/25">over hype.</span></h2><p className="mt-7 text-lg leading-8 text-white/45">A traditional Old Town pub with separate public and saloon bars, log fires, a pool room and a large enclosed rear garden.</p><div className="mt-8 grid grid-cols-2 gap-3 text-sm text-white/60"><div className="rounded-2xl border border-white/10 p-5">🏆<br/><span className="mt-3 block">2025 Community Pub of the Year</span></div><div className="rounded-2xl border border-white/10 p-5">🍺<br/><span className="mt-3 block">Good Beer Guide regular</span></div></div></div><div className="min-h-[520px] rounded-[2rem] bg-cover bg-center" style={{backgroundImage:`linear-gradient(180deg,transparent,rgba(23,18,14,.55)),url(${pubImages[1]})`}}><div className="flex h-full items-end p-7"><span className="rounded-full border border-white/15 bg-black/30 px-4 py-2 text-xs uppercase tracking-[.22em] text-white/65 backdrop-blur">Demo photography · replace before launch</span></div></div></div></section>

      <section id="whats-on" className="bg-[#201812] px-5 py-24 lg:px-10"><div className="mx-auto max-w-7xl"><div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="text-xs uppercase tracking-[.35em] text-[#e6ad58]">What's on</p><h2 className="mt-4 font-serif text-5xl tracking-[-.05em] sm:text-7xl">There's usually<br/><span className="text-white/25">something happening.</span></h2></div><a href="tel:+441323724654" className="text-sm text-[#e6ad58]">Ask what's next →</a></div><div className="mb-8 flex flex-wrap gap-2">{["ALL","QUIZ","MUSIC","FESTIVAL"].map(item=><button key={item} onClick={()=>setFilter(item)} className={`rounded-full border px-4 py-2 text-xs font-semibold tracking-[.18em] transition ${filter===item?"border-[#e6ad58] bg-[#e6ad58] text-[#17120e]":"border-white/10 text-white/45 hover:border-white/25"}`}>{item}</button>)}</div><div className="grid gap-5 md:grid-cols-3">{visibleEvents.map(([type,title,description])=><article key={type} className="rounded-[1.75rem] border border-white/10 bg-white/[.025] p-7 transition hover:-translate-y-1 hover:border-[#e6ad58]/30"><span className="text-xs tracking-[.3em] text-[#e6ad58]">{type}</span><h3 className="mt-16 font-serif text-3xl">{title}</h3><p className="mt-4 text-sm leading-7 text-white/40">{description}</p></article>)}</div></div></section>

      <section id="garden" className="px-5 py-24 lg:px-10"><div className="mx-auto max-w-7xl"><div className="grid gap-5 md:grid-cols-[1.1fr_.9fr]"><div className="min-h-[560px] rounded-[2rem] bg-cover bg-center" style={{backgroundImage:`linear-gradient(180deg,transparent 30%,rgba(23,18,14,.72)),url(${pubImages[2]})`}}><div className="flex h-full items-end p-8"><div><p className="text-xs uppercase tracking-[.3em] text-[#e6ad58]">The garden</p><h2 className="mt-3 font-serif text-5xl">Summer starts here.</h2><p className="mt-4 max-w-md text-white/55">An enclosed rear garden with children's play equipment, summer BBQs and occasional music concerts.</p></div></div></div><div className="grid gap-5"><div className="rounded-[2rem] border border-white/10 bg-[#201812] p-8"><p className="text-xs uppercase tracking-[.3em] text-[#e6ad58]">Sunday ritual</p><h3 className="mt-4 font-serif text-4xl">Ale prices down.</h3><p className="mt-4 text-sm leading-7 text-white/45">All ale prices are reduced between 12 noon and 3pm on Sundays.</p></div><div className="min-h-[260px] rounded-[2rem] bg-cover bg-center" style={{backgroundImage:`url(${pubImages[3]})`}} /></div></div></div></section>

      <section id="visit" className="bg-[#e6ad58] px-5 py-20 text-[#17120e] lg:px-10"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_auto] md:items-center"><div><p className="text-xs uppercase tracking-[.35em] text-black/55">Come as you are</p><h2 className="mt-3 font-serif text-6xl tracking-[-.06em] sm:text-8xl">No booking.<br/>Just turn up.</h2><p className="mt-5 max-w-xl text-lg leading-8 text-black/65">Current local guidance says The Crown does not take advance bookings — check for a free table when you arrive.</p></div><div className="rounded-[1.75rem] bg-black/90 p-8 text-white"><p className="text-xs uppercase tracking-[.25em] text-[#e6ad58]">Visit us</p><p className="mt-5 text-xl font-semibold">22 Crown Street</p><p className="text-white/55">Old Town, Eastbourne<br/>BN21 1PB</p><a href="tel:+441323724654" className="mt-7 block rounded-full bg-[#e6ad58] px-7 py-3 text-center font-semibold text-black">Call 01323 724654</a></div></div></section>

      <footer className="border-t border-white/10 px-5 py-10 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-xs uppercase tracking-[.2em] text-white/25 sm:flex-row"><p>© 2026 {business.name} · {business.location}</p><p>Demo concept · replace imagery before launch</p></div></footer>
      <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-white/10 bg-[#17120e]/95 px-3 py-2 pb-[calc(.5rem+env(safe-area-inset-bottom))] shadow-[0_-10px_30px_rgba(0,0,0,.25)] backdrop-blur-xl md:hidden"><div className="mx-auto grid max-w-lg grid-cols-3 gap-2 text-[11px] font-medium uppercase tracking-[.12em]"><a href="#whats-on" className="rounded-xl px-2 py-3 text-center text-white/65">📅<span className="mt-1 block">What's on</span></a><a href="#garden" className="rounded-xl bg-[#e6ad58] px-2 py-3 text-center font-semibold text-[#17120e]">🌳<span className="mt-1 block">Garden</span></a><a href="tel:+441323724654" className="rounded-xl px-2 py-3 text-center text-white/65">📞<span className="mt-1 block">Call</span></a></div></div>
    </main>
  );
}
