"use client";

import { useEffect, useState } from "react";
import { business } from "../config/business";
import { media } from "../config/media";
import { EnquiryForm } from "./_components/enquiry-form";
import { SeaConditions } from "./_components/sea-conditions";

const services = [
  ["01", "Sit-on kayaks", "Easy-going kayak hire for exploring the Eastbourne coastline from Wish Tower Beach."],
  ["02", "SUP boards", "Stand-up paddleboard hire for a relaxed way to experience the coast."],
  ["03", "Looked-after launch", "A local, family-run operation with a safety-first approach and lifeguarded location."],
];

export default function Home() {
  const [position, setPosition] = useState({ x: 50, y: 45 });
  useEffect(() => {
    const move = (x: number, y: number) => setPosition({ x: (x / window.innerWidth) * 100, y: (y / window.innerHeight) * 100 });
    const mouse = (e: MouseEvent) => move(e.clientX, e.clientY);
    window.addEventListener("mousemove", mouse);
    return () => window.removeEventListener("mousemove", mouse);
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#061014] text-white selection:bg-cyan-300 selection:text-black">
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/[0.08] bg-[#061014]/75 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#" className="text-xl font-semibold tracking-[-0.04em]">{business.name}</a>
          <div className="hidden gap-9 text-sm text-white/45 md:flex"><a href="#hire" className="hover:text-white">Hire</a><a href="#conditions" className="hover:text-white">Conditions</a><a href="#location" className="hover:text-white">Find us</a><a href="#enquiry-form" className="hover:text-white">Book</a></div>
          <a href="#enquiry-form" className="rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-[#061014] transition hover:bg-white">Check availability</a>
        </div>
      </nav>

      <section className="relative flex min-h-screen items-end px-6 pb-16 pt-28 lg:px-10 lg:pb-20" style={{ background: `radial-gradient(circle 420px at ${position.x}% ${position.y}%, rgba(103,232,249,0.14), transparent 70%)` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#061014]/20 via-[#061014]/45 to-[#061014]" />
        <div className="absolute inset-0 opacity-65" style={{ backgroundImage: `url(${media.hero.src})`, backgroundPosition: "center", backgroundSize: "cover" }} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,16,20,0.94)_0%,rgba(6,16,20,0.52)_48%,rgba(6,16,20,0.2)_100%)]" />
        <div className="relative mx-auto w-full max-w-7xl">
          <p className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-white/55"><span className="h-px w-10 bg-cyan-300/80" />{business.tagline}</p>
          <h1 className="max-w-6xl text-[15vw] font-semibold leading-[0.82] tracking-[-0.075em] sm:text-8xl lg:text-[9rem]">Get out.<br /><span className="text-cyan-300">Get on.</span><span> Get wet.</span></h1>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_340px] lg:items-end"><p className="max-w-xl text-lg leading-8 text-white/65 sm:text-xl">Kayak and stand-up paddleboard hire from Wish Tower Beach. Discover Eastbourne from the water with a friendly local crew.</p><p className="text-2xl font-medium">Wish Tower Beach<br /><span className="text-cyan-300">Eastbourne</span></p></div>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row"><a href="#enquiry-form" className="rounded-full bg-cyan-300 px-8 py-4 text-center font-semibold text-[#061014] transition hover:-translate-y-1 hover:bg-white">Book / check availability</a><a href="#conditions" className="rounded-full border border-white/20 bg-black/20 px-8 py-4 text-center font-medium text-white/80 backdrop-blur hover:border-white/35 hover:text-white">See today's conditions ↓</a></div>
        </div>
      </section>

      <section id="hire" className="border-t border-white/[0.07] px-6 py-28 lg:px-10"><div className="mx-auto max-w-7xl"><div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="text-xs uppercase tracking-[0.35em] text-cyan-300">On the water</p><h2 className="mt-5 text-5xl font-semibold tracking-[-0.05em] sm:text-7xl">Simple hire.<br /><span className="text-white/25">Big coastline.</span></h2></div><p className="max-w-xs text-sm leading-6 text-white/35">Choose your craft, pick your day and let the coast do the rest.</p></div><div className="grid gap-5 md:grid-cols-3">{services.map(([number, title, text], index) => <article key={number} className="group overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.025] transition hover:-translate-y-1 hover:border-cyan-300/25"><div className="h-56" style={{ backgroundImage: `linear-gradient(180deg,rgba(6,16,20,0.05),rgba(6,16,20,0.65)),url(${media.services[index].src})`, backgroundPosition: "center", backgroundSize: "cover" }} /><div className="min-h-[250px] p-8"><span className="text-sm text-cyan-300/70">{number}</span><div className="mt-16"><h3 className="text-2xl font-medium tracking-tight group-hover:text-cyan-300">{title}</h3><p className="mt-4 text-sm leading-7 text-white/40">{text}</p></div></div></article>)}</div></div></section>

      <div id="conditions"><SeaConditions /></div>

      <section id="location" className="px-6 py-28 lg:px-10"><div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1.1fr_0.9fr]"><div className="min-h-[460px] rounded-[2rem] border border-white/10 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(180deg,transparent 35%,rgba(6,16,20,0.85)),url(${media.gallery[0].src})` }}><div className="flex h-full items-end p-8"><div><p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Find us</p><h2 className="mt-3 text-4xl font-semibold">Wish Tower Beach</h2><p className="mt-3 text-white/55">King Edwards Parade, Eastbourne, BN21 4BY</p></div></div></div><div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-8 sm:p-12"><p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Local & looked after</p><h2 className="mt-6 text-5xl font-semibold tracking-[-0.05em]">Meet the sea<br /><span className="text-white/25">from Eastbourne.</span></h2><p className="mt-8 leading-8 text-white/45">Bourne to Kayak is a family business hiring sit-on kayaks and SUP boards from the seafront. Public listings describe the location as lifeguarded, safe and professional, while recent visitor feedback highlights the welcoming service.</p><div className="mt-10 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-2"><div><p className="text-2xl font-semibold">Local</p><p className="mt-1 text-sm text-white/30">Eastbourne seafront</p></div><div><p className="text-2xl font-semibold">Safety-first</p><p className="mt-1 text-sm text-white/30">Conditions checked</p></div></div></div></div></section>

      <section className="px-6 py-28 lg:px-10"><div className="mx-auto max-w-7xl"><div className="mb-10"><p className="text-xs uppercase tracking-[0.3em] text-cyan-300">The coastline</p><h2 className="mt-4 text-5xl font-semibold tracking-[-0.05em] sm:text-7xl">Your next hour<br /><span className="text-white/25">starts here.</span></h2></div><div className="grid gap-5 md:grid-cols-[1.15fr_0.85fr]"><div className="min-h-[420px] rounded-[2rem] border border-white/10 bg-cover bg-center" style={{ backgroundImage: `url(${media.gallery[1].src})` }} /><div className="grid gap-5"><div className="min-h-[200px] rounded-[2rem] border border-white/10 bg-cover bg-center" style={{ backgroundImage: `url(${media.gallery[2].src})` }} /><div className="rounded-[2rem] border border-cyan-300/20 bg-cyan-300/[0.06] p-8"><p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Good to know</p><p className="mt-5 text-xl leading-8 text-white/75">Weather and sea conditions can change. A booking request is a request to check availability; launch decisions remain with the operator.</p></div></div></div><p className="mt-5 text-xs uppercase tracking-[0.25em] text-white/20">Concept imagery only · replace with genuine client photography before launch</p></div></section>

      <section className="relative px-6 py-36 lg:px-10"><div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(103,232,249,0.08),transparent_45%)]" /><div className="relative mx-auto max-w-5xl"><div className="mb-16 text-center"><p className="text-xs uppercase tracking-[0.4em] text-cyan-300">Ready to paddle?</p><h2 className="mt-7 text-6xl font-semibold tracking-[-0.065em] sm:text-8xl">Let's get you<br /><span className="text-cyan-300">on the water.</span></h2><p className="mx-auto mt-8 max-w-lg text-lg leading-8 text-white/35">Tell us what you'd like to hire and when. We'll check availability and get back to you.</p></div><EnquiryForm /><p className="mt-6 text-center text-sm text-white/25">Call <a className="text-cyan-300/80 hover:text-cyan-200" href={`tel:${business.phone.replace(/\s/g, "")}`}>{business.phone}</a> · <a className="text-cyan-300/80 hover:text-cyan-200" href={`mailto:${business.email}`}>{business.email}</a></p></div></section>

      <footer className="border-t border-white/[0.07] px-6 py-10 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-xs uppercase tracking-[0.2em] text-white/20 sm:flex-row"><p>© 2026 {business.name}</p><p>Eastbourne · Wish Tower Beach</p></div></footer>
    </main>
  );
}
