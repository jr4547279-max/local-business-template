"use client";

import { useEffect, useState } from "react";
import { business } from "../config/business";
import { media } from "../config/media";
import { EnquiryForm } from "./_components/enquiry-form";

const serviceCopy = [
  "Careful, practical work that keeps your property looking its best.",
  "Reliable exterior maintenance, repairs and improvements from a local team.",
  "Straightforward service, clear communication and a tidy finish.",
];

export default function Home() {
  const [position, setPosition] = useState({ x: 50, y: 45 });

  useEffect(() => {
    const move = (x: number, y: number) =>
      setPosition({ x: (x / window.innerWidth) * 100, y: (y / window.innerHeight) * 100 });
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
          <a href="#" className="max-w-[220px] text-sm font-semibold uppercase tracking-[0.18em] sm:text-base">{business.name}</a>
          <div className="hidden items-center gap-9 text-sm text-white/45 md:flex">
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#work" className="transition hover:text-white">Our work</a>
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#enquiry-form" className="transition hover:text-white">Enquire</a>
          </div>
          <a href="#enquiry-form" className="rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2.5 text-sm font-medium text-amber-300 transition hover:bg-amber-400 hover:text-black">Free quote</a>
        </div>
      </nav>

      <section className="relative flex min-h-screen items-end px-6 pb-16 pt-28 lg:px-10 lg:pb-20" style={{ background: `radial-gradient(circle 420px at ${position.x}% ${position.y}%, rgba(245,158,11,0.14), transparent 70%)` }}>
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.15)_0%,rgba(5,5,5,0.42)_45%,#050505_100%)]" />
        <div className="absolute inset-0 opacity-60" style={{ backgroundImage: `url(${media.hero.src})`, backgroundPosition: "center", backgroundSize: "cover" }} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.93)_0%,rgba(5,5,5,0.58)_48%,rgba(5,5,5,0.22)_100%)]" />
        <div className="relative mx-auto w-full max-w-7xl">
          <div className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-white/55"><span className="h-px w-10 bg-amber-400/70" />{business.tagline}</div>
          <h1 className="max-w-6xl text-[14vw] font-semibold leading-[0.82] tracking-[-0.075em] sm:text-8xl lg:text-[8.5rem]">Property<br /><span className="relative">maintenance<span className="absolute -bottom-2 left-1 h-px w-24 bg-amber-400/80 sm:w-40" /></span><span className="text-amber-400">.</span></h1>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_340px] lg:items-end">
            <p className="max-w-xl text-lg leading-8 text-white/65 sm:text-xl">{business.description}</p>
            <div><p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">Serving</p><p className="text-3xl font-medium tracking-tight">{business.location}</p></div>
          </div>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <a href="#enquiry-form" className="group relative overflow-hidden rounded-full bg-amber-400 px-8 py-4 text-center font-semibold text-black transition duration-300 hover:-translate-y-1"><span className="relative z-10">Get a free quote</span><span className="absolute inset-0 -translate-x-full bg-white transition-transform duration-500 group-hover:translate-x-0" /></a>
            <a href={`tel:${business.phone.replace(/\s/g, "")}`} className="rounded-full border border-white/20 bg-black/20 px-8 py-4 text-center font-medium text-white/80 backdrop-blur transition hover:border-white/35 hover:bg-white/[0.06] hover:text-white">Call {business.phone}</a>
          </div>
        </div>
      </section>

      <section id="services" className="border-t border-white/[0.07] px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="text-xs uppercase tracking-[0.35em] text-amber-400">What we do</p><h2 className="mt-5 max-w-2xl text-5xl font-semibold tracking-[-0.05em] sm:text-7xl">Jobs done<br /><span className="text-white/25">properly.</span></h2></div><p className="max-w-xs text-sm leading-6 text-white/35">A friendly local service with practical expertise and attention to detail.</p></div>
          <div className="grid gap-5 md:grid-cols-3">
            {business.services.slice(0, 3).map((service, index) => <article key={service} className="group overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.025] transition duration-500 hover:-translate-y-1 hover:border-amber-400/20"><div className="h-56 overflow-hidden" style={{ backgroundImage: `linear-gradient(180deg,rgba(5,5,5,0.05),rgba(5,5,5,0.6)),url(${media.services[index].src})`, backgroundPosition: "center", backgroundSize: "cover" }} /><div className="min-h-[250px] p-8"><div className="flex items-start justify-between"><span className="text-sm text-amber-400/70">0{index + 1}</span><span className="text-xl text-white/15 transition duration-500 group-hover:text-amber-400">↗</span></div><div className="mt-16"><h3 className="text-2xl font-medium tracking-tight transition group-hover:text-amber-400">{service}</h3><p className="mt-4 text-sm leading-7 text-white/40">{serviceCopy[index]}</p></div></div></article>)}
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">{business.services.slice(3).map((service) => <div key={service} className="rounded-2xl border border-white/[0.07] bg-white/[0.02] px-5 py-4 text-sm text-white/55">{service}</div>)}</div>
        </div>
      </section>

      <section id="work" className="px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-end justify-between gap-6"><div><p className="text-xs uppercase tracking-[0.35em] text-amber-400">Our work</p><h2 className="mt-4 text-5xl font-semibold tracking-[-0.05em] sm:text-7xl">Good work<br /><span className="text-white/25">speaks.</span></h2></div><p className="hidden max-w-xs text-sm leading-6 text-white/30 sm:block">A gallery ready for genuine Peter & Son project photography.</p></div>
          <div className="grid gap-5 md:grid-cols-[1.15fr_0.85fr]">
            <div className="min-h-[430px] rounded-[2rem] border border-white/10 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(180deg,transparent 45%,rgba(5,5,5,0.7)),url(${media.gallery[0].src})` }}><div className="flex h-full items-end p-8"><span className="rounded-full border border-white/15 bg-black/30 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/65 backdrop-blur">Project gallery · Demo imagery</span></div></div>
            <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-1">{media.gallery.slice(1).map((image) => <div key={image.src} className="min-h-[205px] rounded-[2rem] border border-white/10 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(180deg,transparent 30%,rgba(5,5,5,0.5)),url(${image.src})` }} />)}</div>
          </div>
          <p className="mt-5 text-xs uppercase tracking-[0.25em] text-white/20">Demo photography only · replace with genuine project photography before launch</p>
        </div>
      </section>

      <section id="about" className="px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl"><div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-8 sm:p-14 lg:p-20"><div className="pointer-events-none absolute h-96 w-96 rounded-full bg-amber-400/[0.07] blur-3xl" style={{ left: `${position.x - 20}%`, top: `${position.y - 40}%` }} /><div className="relative max-w-4xl"><p className="text-xs uppercase tracking-[0.35em] text-amber-400">Why Peter & Son</p><h2 className="mt-6 text-5xl font-semibold tracking-[-0.055em] sm:text-7xl">Local people.<br /><span className="text-white/25">Proper service.</span></h2><p className="mt-10 max-w-2xl text-lg leading-8 text-white/40">A father-and-son team based in Eastbourne, focused on honest communication, careful work and leaving customers happy with the result.</p><div className="mt-14 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-3"><div><p className="text-4xl font-semibold">5.0<span className="text-amber-400">★</span></p><p className="mt-2 text-sm text-white/30">MyBuilder rating</p></div><div><p className="text-4xl font-semibold">14</p><p className="mt-2 text-sm text-white/30">MyBuilder reviews</p></div><div><p className="text-4xl font-semibold">Eastbourne</p><p className="mt-2 text-sm text-white/30">& East Sussex</p></div></div></div></div></div>
      </section>

      <section id="contact" className="relative px-6 py-36 lg:px-10"><div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.08),transparent_45%)]" /><div className="relative mx-auto max-w-5xl"><div className="mb-16 text-center"><p className="text-xs uppercase tracking-[0.4em] text-amber-400">Free quotes</p><h2 className="mt-7 text-6xl font-semibold tracking-[-0.065em] sm:text-8xl">Tell us<br /><span className="text-amber-400">what you need.</span></h2><p className="mx-auto mt-8 max-w-lg text-lg leading-8 text-white/35">Send the details of your job and Peter & Son can get back to you about your requirements.</p></div><EnquiryForm /><p className="mt-6 text-center text-sm text-white/25">Prefer to call? <a className="text-amber-400/80 hover:text-amber-300" href={`tel:${business.phone.replace(/\s/g, "")}`}>{business.phone}</a></p></div></section>

      <footer className="border-t border-white/[0.07] px-6 py-10 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-xs uppercase tracking-[0.2em] text-white/20 sm:flex-row"><p>© 2026 {business.name}</p><p>{business.location}</p></div></footer>
    </main>
  );
}
