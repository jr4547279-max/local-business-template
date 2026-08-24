import Link from "next/link";
import { business } from "../config/business";
import { media } from "../config/media";

const highlights = [
  ["01", "Classic curries", "Korma, masala, madras, jalfrezi and more — from mild to properly fiery."],
  ["02", "Tandoori", "Chargrilled favourites with bold spices and that unmistakable tandoor finish."],
  ["03", "Sharing made easy", "Generous meal options designed for nights in, family dinners and hungry groups."],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#100d0a] text-[#fff8ec] selection:bg-orange-400 selection:text-black">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#100d0a]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
          <Link href="/" className="text-xl font-semibold tracking-[-0.04em]">Sultan <span className="text-orange-400">To Go</span></Link>
          <div className="hidden items-center gap-7 text-sm text-white/60 md:flex">
            <Link href="/menu" className="hover:text-white">Menu</Link><Link href="/about" className="hover:text-white">Our story</Link><Link href="/offers" className="hover:text-white">Offers</Link><Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
          <a href={business.bookingUrl} target="_blank" rel="noreferrer" className="rounded-full bg-orange-400 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-orange-300">Order now</a>
        </div>
      </nav>

      <section className="relative min-h-[88vh] overflow-hidden px-5 py-20 lg:px-10 lg:py-28">
        <div className="absolute inset-0 bg-cover bg-center opacity-55" style={{ backgroundImage: `url(${media.hero.src})` }} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#100d0a_0%,rgba(16,13,10,.82)_38%,rgba(16,13,10,.25)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,#100d0a_0%,transparent_35%,rgba(0,0,0,.2)_100%)]" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-7xl items-end">
          <div className="max-w-3xl">
            <p className="mb-6 text-xs uppercase tracking-[0.4em] text-orange-300">{business.tagline}</p>
            <h1 className="text-[17vw] font-semibold leading-[.82] tracking-[-.08em] sm:text-8xl lg:text-[9rem]">Good food.<br /><span className="text-orange-400">No fuss.</span></h1>
            <p className="mt-9 max-w-xl text-lg leading-8 text-white/65 sm:text-xl">Bold Indian favourites, generous portions and an easier way to order your next night in.</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href={business.bookingUrl} target="_blank" rel="noreferrer" className="rounded-full bg-orange-400 px-8 py-4 text-center font-semibold text-black hover:bg-orange-300">Order online ↗</a>
              <Link href="/menu" className="rounded-full border border-white/20 bg-black/20 px-8 py-4 text-center font-medium text-white/80 hover:border-white/40 hover:text-white">Explore the menu</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#18120d] px-5 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl"><div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="text-xs uppercase tracking-[0.35em] text-orange-400">The menu</p><h2 className="mt-4 text-5xl font-semibold tracking-[-.055em] sm:text-7xl">Your favourites.<br /><span className="text-white/25">Done properly.</span></h2></div><Link href="/menu" className="text-sm text-orange-300 hover:text-orange-200">View full menu →</Link></div>
          <div className="grid gap-5 md:grid-cols-3">{highlights.map(([n,t,d],i)=><article key={n} className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/20"><div className="h-60 bg-cover bg-center" style={{backgroundImage:`url(${media.services[i].src})`}}/><div className="p-7"><span className="text-sm text-orange-400">{n}</span><h3 className="mt-10 text-2xl font-medium">{t}</h3><p className="mt-3 text-sm leading-7 text-white/45">{d}</p></div></article>)}</div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-10"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.1fr_.9fr] lg:items-center"><div><p className="text-xs uppercase tracking-[.35em] text-orange-400">Made for nights in</p><h2 className="mt-5 text-5xl font-semibold tracking-[-.06em] sm:text-7xl">Pick your<br /><span className="text-orange-400">perfect feast.</span></h2><p className="mt-7 max-w-xl text-lg leading-8 text-white/45">From a quick curry after work to a table full of sharing dishes, the menu is built around the food people actually want to order.</p><div className="mt-9 flex flex-wrap gap-3"><span className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/60">Mild → hot</span><span className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/60">Vegetarian choices</span><span className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/60">Collection</span><span className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/60">Delivery</span></div></div><div className="min-h-[520px] rounded-[2rem] border border-white/10 bg-cover bg-center" style={{backgroundImage:`linear-gradient(180deg,transparent 30%,rgba(16,13,10,.7)),url(${media.gallery[1].src})`}}><div className="flex h-full items-end p-8"><p className="text-xs uppercase tracking-[.3em] text-white/50">Demo photography · replace before launch</p></div></div></div></section>

      <section className="bg-orange-400 px-5 py-20 text-black lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center"><div><p className="text-xs uppercase tracking-[.35em] text-black/60">Hungry?</p><h2 className="mt-3 text-5xl font-semibold tracking-[-.06em] sm:text-6xl">Let's sort dinner.</h2></div><a href={business.bookingUrl} target="_blank" rel="noreferrer" className="rounded-full bg-black px-8 py-4 text-center font-semibold text-white hover:bg-black/80">Order now ↗</a></div></section>

      <footer className="border-t border-white/10 px-5 py-10 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col gap-4 text-xs uppercase tracking-[.2em] text-white/30 sm:flex-row sm:justify-between"><p>{business.name} · {business.location}</p><p>Demo concept · 2026</p></div></footer>
    </main>
  );
}
