"use client";

import { useMemo, useState } from "react";
import type { MenuSection } from "../../config/menu";

type CartItem = { name: string; price: number; quantity: number };
type Fulfilment = "collection" | "delivery";

type OrderSystemProps = {
  restaurantName: string;
  menu: MenuSection[];
  minimumDelivery?: number;
  collectionMessage?: string;
};

export function OrderSystem({ restaurantName, menu, minimumDelivery = 15, collectionMessage = "Ready in around 20–30 minutes." }: OrderSystemProps) {
  const [cart, setCart] = useState<Record<string, CartItem>>({});
  const [step, setStep] = useState<"menu" | "details" | "review" | "complete">("menu");
  const [fulfilment, setFulfilment] = useState<Fulfilment>("collection");
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [customer, setCustomer] = useState({ name: "", phone: "", email: "", address: "", notes: "" });
  const [orderNumber] = useState(() => `DEMO-${Math.floor(100000 + Math.random() * 900000)}`);

  const categories = ["All", ...menu.map((section) => section.title)];
  const visible = useMemo(() => {
    const source = activeCategory === "All" ? menu : menu.filter((section) => section.title === activeCategory);
    const q = query.trim().toLowerCase();
    if (!q) return source;
    return source.map((section) => ({ ...section, items: section.items.filter((item) => `${item.name} ${item.description ?? ""}`.toLowerCase().includes(q)) })).filter((section) => section.items.length);
  }, [activeCategory, menu, query]);

  const items = Object.values(cart);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const delivery = fulfilment === "delivery" && subtotal > 0 ? 2.5 : 0;
  const total = subtotal + delivery;

  function add(item: { name: string; price: number }) {
    setCart((current) => ({ ...current, [item.name]: { ...current[item.name], name: item.name, price: item.price, quantity: (current[item.name]?.quantity ?? 0) + 1 } }));
  }
  function change(name: string, amount: number) {
    setCart((current) => {
      const item = current[name];
      if (!item) return current;
      const quantity = item.quantity + amount;
      if (quantity <= 0) { const next = { ...current }; delete next[name]; return next; }
      return { ...current, [name]: { ...item, quantity } };
    });
  }
  function canContinue() {
    return customer.name.trim() && customer.phone.trim() && (fulfilment === "collection" || customer.address.trim());
  }

  if (step === "complete") return <main className="min-h-screen bg-[#100d0a] px-5 py-20 text-[#fff8ec]"><div className="mx-auto max-w-2xl rounded-[2rem] border border-white/10 bg-white/[.03] p-8 text-center sm:p-12"><div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-400 text-2xl text-black">✓</div><p className="mt-7 text-xs uppercase tracking-[.35em] text-orange-400">Demo confirmation</p><h1 className="mt-3 text-4xl font-semibold">Order prepared.</h1><p className="mx-auto mt-5 max-w-lg leading-7 text-white/50">Order <strong className="text-white">{orderNumber}</strong> has been prepared as a demonstration. Nothing has been sent to {restaurantName} and no payment has been taken.</p><div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5 text-left"><div className="flex justify-between"><span className="text-white/40">Items</span><span>{itemCount}</span></div><div className="mt-3 flex justify-between"><span className="text-white/40">Fulfilment</span><span className="capitalize">{fulfilment}</span></div><div className="mt-3 flex justify-between font-semibold"><span>Total</span><span>£{total.toFixed(2)}</span></div></div><button onClick={() => { setCart({}); setStep("menu"); }} className="mt-8 rounded-full bg-orange-400 px-7 py-3.5 font-semibold text-black">Start another demo order</button></div></main>;

  return <main className="min-h-screen bg-[#100d0a] pb-28 text-[#fff8ec]">
    <header className="border-b border-white/10 px-5 py-6"><div className="mx-auto flex max-w-7xl items-center justify-between"><div><p className="text-xs uppercase tracking-[.3em] text-orange-400">{restaurantName}</p><h1 className="mt-1 text-2xl font-semibold">Order online</h1></div><div className="rounded-full bg-white/5 px-4 py-2 text-sm">{itemCount} item{itemCount === 1 ? "" : "s"} · £{total.toFixed(2)}</div></div></header>
    {step === "menu" && <>
      <div className="sticky top-0 z-40 border-b border-white/10 bg-[#100d0a]/95 backdrop-blur-xl"><div className="mx-auto max-w-7xl px-5 py-3"><div className="mb-3 flex gap-2 overflow-x-auto pb-1">{categories.map((category) => <button key={category} onClick={() => setActiveCategory(category)} className={`shrink-0 rounded-full px-4 py-2 text-sm ${activeCategory === category ? "bg-orange-400 text-black" : "bg-white/5 text-white/60"}`}>{category}</button>)}</div><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search the menu..." className="w-full rounded-2xl border border-white/10 bg-white/[.04] px-4 py-3 text-sm outline-none placeholder:text-white/30 focus:border-orange-400/60" /></div></div>
      <section className="mx-auto max-w-7xl space-y-5 px-5 py-8">{visible.map((section) => <div key={section.title} className="rounded-[2rem] border border-white/10 bg-white/[.025] p-5 sm:p-8"><h2 className="border-b border-white/10 pb-5 text-2xl font-semibold">{section.title}</h2><div className="grid sm:grid-cols-2 sm:gap-x-10">{section.items.map((item) => <article key={item.name} className="border-b border-white/10 py-5"><div className="flex items-center justify-between gap-4"><div><h3 className="font-medium">{item.name}</h3>{item.description && <p className="mt-1 text-sm leading-6 text-white/35">{item.description}</p>}</div><div className="shrink-0 text-right"><p className="text-orange-400">£{item.price.toFixed(2)}</p><button onClick={() => add(item)} className="mt-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold hover:bg-orange-400 hover:text-black">+ Add</button></div></div></article>)}</div></div>)}</section>
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#17110d]/95 p-4 backdrop-blur-xl"><div className="mx-auto flex max-w-2xl items-center justify-between gap-4"><div><p className="text-xs text-white/40">Your order</p><p className="font-semibold">£{total.toFixed(2)} · {itemCount} item{itemCount === 1 ? "" : "s"}</p></div><button disabled={!itemCount} onClick={() => setStep("details")} className="rounded-full bg-orange-400 px-6 py-3 font-semibold text-black disabled:cursor-not-allowed disabled:opacity-30">Continue</button></div></div>
    </>}
    {step === "details" && <section className="mx-auto max-w-3xl px-5 py-10"><button onClick={() => setStep("menu")} className="text-sm text-white/50">← Back to menu</button><p className="mt-10 text-xs uppercase tracking-[.3em] text-orange-400">Step 1 of 2</p><h2 className="mt-2 text-4xl font-semibold">How should we get it to you?</h2><div className="mt-8 grid grid-cols-2 gap-3"><button onClick={() => setFulfilment("collection")} className={`rounded-2xl border p-5 text-left ${fulfilment === "collection" ? "border-orange-400 bg-orange-400/10" : "border-white/10"}`}><strong>Collection</strong><span className="mt-1 block text-sm text-white/40">{collectionMessage}</span></button><button onClick={() => setFulfilment("delivery")} className={`rounded-2xl border p-5 text-left ${fulfilment === "delivery" ? "border-orange-400 bg-orange-400/10" : "border-white/10"}`}><strong>Delivery</strong><span className="mt-1 block text-sm text-white/40">£2.50 delivery demo</span></button></div><div className="mt-8 space-y-4">{[["name","Name","Your name"],["phone","Phone","07..."] , ["email","Email","you@example.com"]].map(([key,label,placeholder]) => <label key={key} className="block"><span className="mb-2 block text-sm text-white/50">{label}</span><input value={customer[key as keyof typeof customer]} onChange={(e) => setCustomer({ ...customer, [key]: e.target.value })} placeholder={placeholder} className="w-full rounded-2xl border border-white/10 bg-white/[.04] px-4 py-4 outline-none focus:border-orange-400/60" /></label>)}{fulfilment === "delivery" && <label className="block"><span className="mb-2 block text-sm text-white/50">Delivery address</span><textarea value={customer.address} onChange={(e) => setCustomer({ ...customer, address: e.target.value })} rows={3} className="w-full rounded-2xl border border-white/10 bg-white/[.04] px-4 py-4 outline-none focus:border-orange-400/60" /></label>}<label className="block"><span className="mb-2 block text-sm text-white/50">Order notes</span><textarea value={customer.notes} onChange={(e) => setCustomer({ ...customer, notes: e.target.value })} rows={3} placeholder="Allergies, preferences, collection notes..." className="w-full rounded-2xl border border-white/10 bg-white/[.04] px-4 py-4 outline-none focus:border-orange-400/60" /></label></div><button disabled={!canContinue()} onClick={() => setStep("review")} className="mt-8 w-full rounded-full bg-orange-400 px-6 py-4 font-semibold text-black disabled:opacity-30">Review order</button></section>}
    {step === "review" && <section className="mx-auto max-w-3xl px-5 py-10"><button onClick={() => setStep("details")} className="text-sm text-white/50">← Back</button><p className="mt-10 text-xs uppercase tracking-[.3em] text-orange-400">Step 2 of 2</p><h2 className="mt-2 text-4xl font-semibold">Check your order.</h2><div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[.03] p-6">{items.map((item) => <div key={item.name} className="flex items-center justify-between border-b border-white/10 py-4"><div><p className="font-medium">{item.name}</p><p className="text-sm text-white/40">{item.quantity} × £{item.price.toFixed(2)}</p></div><div className="flex items-center gap-3"><button onClick={() => change(item.name, -1)} className="rounded-full bg-white/10 px-3 py-1">−</button><button onClick={() => change(item.name, 1)} className="rounded-full bg-white/10 px-3 py-1">+</button><span className="w-16 text-right">£{(item.price * item.quantity).toFixed(2)}</span></div></div>)}<div className="mt-5 space-y-2 text-sm"><div className="flex justify-between text-white/50"><span>Subtotal</span><span>£{subtotal.toFixed(2)}</span></div>{delivery > 0 && <div className="flex justify-between text-white/50"><span>Delivery</span><span>£{delivery.toFixed(2)}</span></div>}<div className="flex justify-between pt-3 text-lg font-semibold"><span>Total</span><span>£{total.toFixed(2)}</span></div></div></div><div className="mt-5 rounded-2xl border border-white/10 p-5 text-sm text-white/60"><p><strong className="text-white">{fulfilment === "delivery" ? "Delivery" : "Collection"}</strong> for {customer.name}</p>{fulfilment === "delivery" && <p className="mt-1">{customer.address}</p>}<p className="mt-1">{customer.phone}</p></div>{fulfilment === "delivery" && subtotal < minimumDelivery && <p className="mt-4 rounded-2xl border border-orange-400/30 bg-orange-400/10 p-4 text-sm text-orange-200">Demo rule: delivery requires a £{minimumDelivery.toFixed(2)} minimum. Add another item or switch to collection.</p>}<button disabled={fulfilment === "delivery" && subtotal < minimumDelivery} onClick={() => setStep("complete")} className="mt-6 w-full rounded-full bg-orange-400 px-6 py-4 font-semibold text-black disabled:opacity-30">Place demo order · £{total.toFixed(2)}</button><p className="mt-3 text-center text-xs text-white/30">Demo only — no payment or real order is submitted.</p></section>}
  </main>;
}
