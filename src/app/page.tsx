import { business } from "../config/business";
import { media } from "../config/media";

const features = [
  ["01", "Changing taps", "A rotating selection of craft beer, cider and interesting pours — there is always something new to discover."],
  ["02", "Boards & bites", "Cheese, charcuterie and easy-going food made for sharing while you settle in."],
  ["03", "Events", "Live music, DJs, tasting nights and creative sessions give the taproom a reason to come back."],
];

const eventUrl = "https://www.thepaintclub.co.uk/locations/eastbourne-painting-workshops";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#11100e] text-[#f5efe4] selection:bg-[#e6b86a] selection:text-black">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#11100e]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
          <a href="#top" className="font-serif text-2xl tracking-[-.04em]">NINKACI</a>
          <div className="hidden gap-8 text-sm text-white/55 md:flex">
            <a href="#why" className="hover:text-white">Why Ninkaci</a><a href="#events" className="hover:text-white">Events</a><a href="#visit" className="hover:text-white">Visit</a>
          </div>
          <a href="tel:+441323573528" className="rounded-full bg-[#e6b86a] px-5 py-2.5 text-sm font-semibold text-black">Call to reserve</a>
        </div>
      </nav>

      <section id="top" className="relative min-h-[88vh] overflow-hidden px-5 py-20 lg:px-10 lg:py-28">
        <div className="absolute inset-0 bg-cover bg-center opacity-70" style={{ backgroundImage: `url(${media.hero.src})` }} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#11100e_0%,rgba(17,16,14,.82)_38%,rgba(17,16,14,.25)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,#11100e_0%,transparent_40%)]" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-7xl items-end">
          <div className="max-w-4xl">
            <p className="mb-6 text-xs uppercase tracking-[.45em] text-[#e6b86a]">Independent craft beer store & taproom · Eastbourne</p>
            <h1 className="font-serif text-[18vw] leading-[.78] tracking-[-.08em] sm:text-8xl lg:text-[10rem]">Good beer.<br/><em className="text-[#e6b86a]">Good people.</em></h1>
            <p className="mt-9 max-w-xl text-lg leading-8 text-white/60 sm:text-xl">A relaxed little Eastbourne spot for changing craft pours, wine, food, music and nights worth staying out for.</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row"><a href="tel:+441323573528" className="rounded-full bg-[#e6b86a] px-8 py-4 text-center font-semibold text-black">Call 01323 573528</a><a href="#events" className="rounded-full border border-white/20 px-8 py-4 text-center text-white/75">See what's on ↓</a></div>
          </div>
        </div>
      </section>

      <section id="why" className="border-y border-white/10 bg-[#171512] px-5 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl"><div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="text-xs uppercase tracking-[.35em] text-[#e6b86a]">Why Ninkaci</p><h2 className="mt-4 font-serif text-5xl tracking-[-.05em] sm:text-7xl">A bar with<br/><em className="text-white/30">something to say.</em></h2></div><p className="max-w-sm text-sm leading-7 text-white/40">Independent, local and a little bit different. Ninkaci sits inside the Enterprise Centre, right by Eastbourne station.</p></div>
          <div className="grid gap-5 md:grid-cols-3">{features.map(([n,title,text],i)=><article key={n} className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/20"><div className="h-56 bg-cover bg-center" style={{backgroundImage:`url(${media.services[i].src})`}}/><div className="p-7"><span className="text-sm text-[#e6b86a]">{n}</span><h3 className="mt-10 font-serif text-3xl">{title}</h3><p className="mt-3 text-sm leading-7 text-white/40">{text}</p></div></article>)}</div>
        </div>
      </section>

      <section id="events" className="px-5 py-28 lg:px-10"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center"><div><p className="text-xs uppercase tracking-[.35em] text-[#e6b86a]">More than a taproom</p><h2 className="mt-5 font-serif text-6xl leading-[.9] tracking-[-.05em] sm:text-8xl">Come for<br/><em className="text-[#e6b86a]">the beer.</em><br/>Stay for the night.</h2><p className="mt-8 max-w-xl text-lg leading-8 text-white/45">Ninkaci hosts a changing mix of live music, DJs and creative events. The monthly Paint Club nights are an easy excuse to bring a friend — or come on your own.</p><a href={eventUrl} className="mt-9 inline-flex rounded-full border border-[#e6b86a]/40 px-7 py-3.5 text-sm text-[#e6b86a] hover:bg-[#e6b86a] hover:text-black">View Paint Club events →</a></div><div className="min-h-[540px] rounded-[2rem] border border-white/10 bg-cover bg-center" style={{backgroundImage:`linear-gradient(180deg,transparent 30%,rgba(17,16,14,.8)),url(${media.gallery[2].src})`}}><div className="flex h-full items-end p-8"><p className="text-xs uppercase tracking-[.25em] text-white/45">Demo photography · replace with genuine venue photography</p></div></div></div></section>

      <section className="bg-[#e6b86a] px-5 py-20 text-black lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center"><div><p className="text-xs uppercase tracking-[.35em] text-black/55">Planning a night out?</p><h2 className="mt-3 font-serif text-5xl tracking-[-.05em] sm:text-6xl">Bring the group.</h2><p className="mt-3 max-w-xl text-black/65">For group enquiries, reservations and event questions, give Ninkaci a call.</p></div><a href="tel:+441323573528" className="rounded-full bg-black px-8 py-4 text-center font-semibold text-white">Call 01323 573528</a></div></section>

      <section id="visit" className="px-5 py-28 lg:px-10"><div className="mx-auto max-w-7xl"><div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr]"><div><p className="text-xs uppercase tracking-[.35em] text-[#e6b86a]">Find us</p><h2 className="mt-5 font-serif text-6xl tracking-[-.05em] sm:text-8xl">Right by<br/><em className="text-[#e6b86a]">the station.</em></h2><p className="mt-8 max-w-xl text-lg leading-8 text-white/45">Unit 9, The Enterprise Centre, Station Parade, Eastbourne BN21 1BD.</p><a className="mt-8 inline-block text-sm underline decoration-[#e6b86a]/60 underline-offset-8" href="https://www.google.com/maps/search/?api=1&query=Unit+9+The+Enterprise+Centre+Station+Parade+Eastbourne+BN21+1BD">Get directions →</a></div><div className="rounded-[2rem] border border-white/10 bg-[#171512] p-8 sm:p-10"><p className="text-xs uppercase tracking-[.3em] text-white/35">Opening hours</p><div className="mt-8 space-y-4 text-sm">{[["Monday","Closed"],["Tuesday","12:00 – 23:00"],["Wednesday","12:00 – 23:00"],["Thursday","12:00 – 23:00"],["Friday","12:00 – 23:00"],["Saturday","12:00 – 23:00"],["Sunday","Closed"]].map(([day,hours])=><div key={day} className="flex justify-between border-b border-white/[.07] pb-3"><span className="text-white/50">{day}</span><span>{hours}</span></div>)}</div><a href="tel:+441323573528" className="mt-8 block rounded-full border border-[#e6b86a]/40 px-6 py-3 text-center text-[#e6b86a]">01323 573528</a></div></div></div></section>

      <footer className="border-t border-white/10 px-5 py-10 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-xs uppercase tracking-[.2em] text-white/25 sm:flex-row"><p>Ninkaci · Eastbourne</p><p>Demo concept · 2026</p></div></footer>
    </main>
  );
}
