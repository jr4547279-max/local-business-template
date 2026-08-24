"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { menuSections } from "../../config/menu";

type BasketItem = { name: string; price: number; quantity: number };
const STORAGE_KEY = "sultan-demo-basket";

export default function MenuPage() {
  const [active, setActive] = useState("Most popular");
  const [query, setQuery] = useState("");
  const [basket, setBasket] = useState<Record<string, BasketItem>>({});
  const [showBasket, setShowBasket] = useState(false);

  useEffect(() => {
    try { setBasket(JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}")); } catch {}
  }, []);
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(basket));
  }, [basket]);

  const sections = useMemo(() => {
    const source = active === "All" ? menuSections : menuSections.filter((section) => section.title === active);
    if (!query.trim()) return source;
    return source.map((section) => ({ ...section, items: section.items.filter((item) => `${item.name} ${item.description || ""}`.toLowerCase().includes(query.toLowerCase())) })).filter((section) => section.items.length);
  }, [active, query]);

  const add = (name: string, price: number) => setBasket((current) => ({ ...current, [name]: { name, price, quantity: (current[name]?.quantity || 0) + 1 } }));
  const change = (name: string, amount: number) => setBasket((current) => {
    const item = current[name]; if (!item) return current;
    const quantity = item.quantity + amount;
    if (quantity <= 0) { const next = { ...current }; delete next[name]; return next; }
    return { ...current, [name]: { ...item, quantity } };
  });
  const remove = (name: string) => setBasket((current) => { const next = { ...current }; delete next[name]; return next; });
  const items = Object.values(basket);
  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return <main className="min-h-screen bg-[#100d0a] text-[#fff8ec] pb-28">
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#100d0a]/90 backdrop-blur-xl"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10"><Link href="/" className="text-xl font-semibold">Sultan <span className="text-orange-400">To Go</span></Link><div className="hidden gap-7 text-sm text-white/60 md:flex"><Link href="/menu" className="text-white">Menu</Link><Link href="/about">Our story</Link><Link href="/offers">Offers</Link><Link href="/contact">Contact</Link></div><button onClick={() => setShowBasket(true)} className="rounded-full bg-orange-400 px-5 py-2.5 text-sm font-semibold text-black">Basket {count > 0 && `(${count})`}</button></div></nav>
    <header className="mx-auto max-w-7xl px-5 pb-10 pt-20 lg:px-10"><p className="text-xs uppercase tracking-[.4em] text-orange-400">The menu</p><h1 className="mt-5 text-6xl font-semibold tracking-[-.07em] sm:text-8xl">The real<br/><span className="text-orange-400">Sultan menu.</span></h1><p className="mt-7 max-w-2xl text-lg leading-8 text-white/45">Browse the menu, build your basket and review everything before checkout.</p></header>
    <div className="sticky top-[73px] z-40 border-y border-white/10 bg-[#100d0a]/95 backdrop-blur-xl"><div className="mx-auto max-w-7xl overflow-x-auto px-5 py-3 lg:px-10"><div className="flex min-w-max gap-2"><button onClick={() => setActive("All")} className={`rounded-full px-4 py-2 text-sm ${active === "All" ? "bg-orange-400 text-black" : "bg-white/5 text-white/60"}`}>All</button>{menuSections.map((section) => <button key={section.title} onClick={() => setActive(section.title)} className={`rounded-full px-4 py-2 text-sm ${active === section.title ? "bg-orange-400 text-black" : "bg-white/5 text-white/60"}`}>{section.title}</button>)}</div></div></div>
    <section className="mx-auto max-w-7xl px-5 pt-7 lg:px-10"><div className="mb-6 flex flex-col gap-3 sm:flex-row"><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search dishes..." className="w-full rounded-2xl border border-white/10 bg-white/[.04] px-5 py-4 text-sm outline-none placeholder:text-white/30 focus:border-orange-400/60" />{(query || active !== "Most popular") && <button onClick={() => { setQuery(""); setActive("Most popular"); }} className="rounded-2xl border border-white/10 px-5 py-4 text-sm text-white/60">Reset</button>}</div></section>
    <section className="mx-auto max-w-7xl space-y-5 px-5 pb-10 lg:px-10">{sections.map((section) => <div key={section.title} className="rounded-[2rem] border border-white/10 bg-white/[.025] p-6 sm:p-9"><div className="mb-8 border-b border-white/10 pb-5"><h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{section.title}</h2></div><div className="grid gap-x-10 sm:grid-cols-2">{section.items.map((item) => <article key={item.name} className="border-b border-white/10 py-5"><div className="flex items-center justify-between gap-5"><div><h3 className="font-medium">{item.name}</h3>{item.description && <p className="mt-2 text-sm leading-6 text-white/35">{item.description}</p>}</div><div className="flex shrink-0 flex-col items-end gap-2"><span className="text-orange-400">£{item.price.toFixed(2)}</span><button onClick={() => add(item.name, item.price)} className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold transition hover:bg-orange-400 hover:text-black">+ Add</button></div></div></article>)}</div></div>)}</section>
    <section className="bg-orange-400 px-5 py-14 text-black lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 md:flex-row md:items-center"><div><p className="text-xs uppercase tracking-[.35em] text-black/60">Your order</p><h2 className="mt-2 text-4xl font-semibold tracking-tight">{count ? `${count} item${count === 1 ? "" : "s"} in your basket.` : "Build your order."}</h2><p className="mt-2 text-sm text-black/60">{count ? `Basket total £${total.toFixed(2)}` : "Add your favourites above."}</p></div><button onClick={() => setShowBasket(true)} className="rounded-full bg-black px-7 py-4 font-semibold text-white">Review basket {count > 0 && `· £${total.toFixed(2)}`}</button></div></section>
    {showBasket && <div className="fixed inset-0 z-[70] bg-black/70 p-4 backdrop-blur-sm" onClick={() => setShowBasket(false)}><aside onClick={(event) => event.stopPropagation()} className="ml-auto flex h-full w-full max-w-md flex-col rounded-[2rem] border border-white/10 bg-[#17110d] p-6 shadow-2xl"><div className="flex items-center justify-between"><div><p className="text-xs uppercase tracking-[.3em] text-orange-400">Review your order</p><h2 className="mt-2 text-3xl font-semibold">{count} item{count === 1 ? "" : "s"}</h2></div><button onClick={() => setShowBasket(false)} className="rounded-full bg-white/10 px-4 py-2 text-sm">Close</button></div><div className="mt-8 flex-1 space-y-3 overflow-y-auto">{items.length ? items.map((item) => <div key={item.name} className="rounded-2xl border border-white/10 bg-white/[.03] p-4"><div className="flex justify-between gap-4"><div><p className="font-medium">{item.name}</p><p className="mt-1 text-sm text-white/40">£{item.price.toFixed(2)} each</p></div><p className="text-orange-400">£{(item.price * item.quantity).toFixed(2)}</p></div><div className="mt-3 flex items-center justify-between"><div className="flex items-center gap-3"><button onClick={() => change(item.name, -1)} className="h-8 w-8 rounded-full bg-white/10">−</button><span className="w-5 text-center">{item.quantity}</span><button onClick={() => change(item.name, 1)} className="h-8 w-8 rounded-full bg-orange-400 text-black">+</button></div><button onClick={() => remove(item.name)} className="text-xs font-semibold text-red-300 hover:text-red-200">Remove</button></div></div>) : <div className="rounded-2xl border border-dashed border-white/10 p-8 text-center text-white/40">Your basket is empty.</div>}</div><div className="border-t border-white/10 pt-5"><div className="mb-4 flex justify-between text-lg"><span>Total</span><strong>£{total.toFixed(2)}</strong></div>{items.length > 0 && <Link href="/checkout" onClick={() => setShowBasket(false)} className="block rounded-full bg-orange-400 px-6 py-4 text-center font-semibold text-black">Checkout · £{total.toFixed(2)}</Link>}<p className="mt-3 text-center text-xs leading-5 text-white/30">Demo checkout only — no payment is taken.</p></div></aside></div>}
  </main>;
}
