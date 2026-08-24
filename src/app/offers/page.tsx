import Link from "next/link";
import { business } from "../../config/business";

const offers = [
  ["01", "Build your own night", "Pick a starter, main, side and rice or bread. A flexible meal-deal concept designed to lift average order value."],
  ["02", "Family feast", "A larger sharing bundle for busy households and weekends. Final dishes and price to be confirmed with the business."],
  ["03", "Midweek curry night", "A simple Tuesday–Thursday offer concept to give quieter nights a reason to order."],
];

export default function OffersPage() {
  return <main className="min-h-screen bg-[#100d0a] text-[#fff8ec]"><nav className="sticky top-0 z-50 border-b border-white/10 bg-[#100d0a]/90 backdrop-blur-xl"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10"><Link href="/" className="text-xl font-semibold">Sultan <span className="text-orange-400">To Go</span></Link><div className="hidden gap-7 text-sm text-white/60 md:flex"><Link href="/menu">Menu</Link><Link href="/about">Our story</Link><Link href="/offers" className="text-white">Offers</Link><Link href="/contact">Contact</Link></div><a href={business.bookingUrl} target="_blank" rel="noreferrer" className="rounded-full bg-orange-400 px-5 py-2.5 text-sm font-semibold text-black">Order now</a></div></nav>
  <header className="mx-auto max-w-7xl px-5 py-24 lg:px-10"><p className="text-xs uppercase tracking-[.4em] text-orange-400">Offers</p><h1 className="mt-5 max-w-4xl text-6xl font-semibold tracking-[-.07em] sm:text-8xl">Good reasons to<br/><span className="text-orange-400">order again.</span></h1><p className="mt-7 max-w-xl text-lg leading-8 text-white/40">A flexible offers page gives the business a place to promote bundles and quieter-night deals without changing the core menu.</p></header>
  <section className="mx-auto max-w-7xl space-y-5 px-5 pb-28 lg:px-10">{offers.map(([n,title,description])=><article key={n} className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/[.025] p-7 sm:p-10 md:grid-cols-[120px_1fr_1.2fr] md:items-center"><span className="text-5xl font-semibold text-orange-400">{n}</span><h2 className="text-3xl font-semibold tracking-tight">{title}</h2><p className="text-sm leading-7 text-white/40">{description}</p></article>)}</section>
  <section className="bg-orange-400 px-5 py-16 text-black lg:px-10"><div className="mx-auto flex max-w-7xl items-center justify-between gap-7"><h2 className="text-4xl font-semibold tracking-tight">See the menu first.</h2><Link href="/menu" className="rounded-full bg-black px-7 py-4 font-semibold text-white">View menu →</Link></div></section>
  </main>;
}
