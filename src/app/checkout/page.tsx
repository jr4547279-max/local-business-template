"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type BasketItem = { name: string; price: number; quantity: number };
const STORAGE_KEY = "sultan-demo-basket";

export default function CheckoutPage() {
  const [basket, setBasket] = useState<Record<string, BasketItem>>({});
  const [orderType, setOrderType] = useState<"collection" | "delivery">("collection");
  const [submitted, setSubmitted] = useState(false);
  const [details, setDetails] = useState({ name: "", phone: "", address: "", notes: "" });

  useEffect(() => {
    try { setBasket(JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}")); } catch {}
  }, []);

  const items = Object.values(basket);
  const subtotal = useMemo(() => items.reduce((sum, item) => sum + item.price * item.quantity, 0), [items]);
  const delivery = orderType === "delivery" ? 2.5 : 0;
  const total = subtotal + delivery;

  const remove = (name: string) => setBasket((current) => { const next = { ...current }; delete next[name]; localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); return next; });
  const change = (name: string, amount: number) => setBasket((current) => {
    const item = current[name]; if (!item) return current;
    const quantity = item.quantity + amount;
    const next = { ...current };
    if (quantity <= 0) delete next[name]; else next[name] = { ...item, quantity };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    return next;
  });

  if (submitted) return <main className="min-h-screen bg-[#100d0a] px-5 py-20 text-[#fff8ec]"><div className="mx-auto max-w-xl rounded-[2rem] border border-white/10 bg-white/[.03] p-8 text-center sm:p-12"><p className="text-xs uppercase tracking-[.35em] text-orange-400">Demo order</p><h1 className="mt-5 text-5xl font-semibold tracking-tight">Order ready.</h1><p className="mt-5 leading-7 text-white/50">This is a demonstration checkout, so no payment or restaurant submission has taken place.</p><div className="my-8 rounded-2xl bg-orange-400 p-5 text-black"><p className="text-xs uppercase tracking-widest">Demo order number</p><p className="mt-1 text-3xl font-bold">STG-{Math.floor(100000 + Math.random() * 900000)}</p></div><Link href="/menu" className="block rounded-full bg-white px-6 py-4 font-semibold text-black">Back to menu</Link></div></main>;

  return <main className="min-h-screen bg-[#100d0a] pb-20 text-[#fff8ec]"><header className="border-b border-white/10"><div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 lg:px-10"><Link href="/menu" className="text-sm text-white/50">← Back to menu</Link><span className="text-xl font-semibold">Sultan <span className="text-orange-400">To Go</span></span><span className="text-sm text-white/40">Checkout</span></div></header><div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 lg:grid-cols-[1fr_420px] lg:px-10"><section><p className="text-xs uppercase tracking-[.35em] text-orange-400">Your order</p><h1 className="mt-4 text-5xl font-semibold tracking-tight">Review before you pay.</h1><p className="mt-4 text-white/45">Everything you've added is shown here. Change quantities or remove anything you've changed your mind about.</p><div className="mt-8 space-y-3">{items.length ? items.map((item) => <article key={item.name} className="rounded-2xl border border-white/10 bg-white/[.03] p-5"><div className="flex justify-between gap-5"><div><h2 className="font-medium">{item.name}</h2><p className="mt-1 text-sm text-white/40">£{item.price.toFixed(2)} each</p></div><strong className="text-orange-400">£{(item.price * item.quantity).toFixed(2)}</strong></div><div className="mt-4 flex items-center justify-between"><div className="flex items-center gap-3"><button onClick={() => change(item.name, -1)} className="h-9 w-9 rounded-full bg-white/10">−</button><span>{item.quantity}</span><button onClick={() => change(item.name, 1)} className="h-9 w-9 rounded-full bg-orange-400 text-black">+</button></div><button onClick={() => remove(item.name)} className="text-sm font-semibold text-red-300">Remove item</button></div></article>) : <div className="rounded-2xl border border-dashed border-white/10 p-10 text-center text-white/40">Your basket is empty. <Link href="/menu" className="text-orange-400">Return to the menu.</Link></div>}</div></section><aside className="h-fit rounded-[2rem] border border-white/10 bg-white/[.03] p-6 sm:p-8"><h2 className="text-2xl font-semibold">Order details</h2><div className="mt-6 grid grid-cols-2 gap-2 rounded-2xl bg-white/[.04] p-2"><button onClick={() => setOrderType("collection")} className={`rounded-xl px-4 py-3 text-sm font-semibold ${orderType === "collection" ? "bg-orange-400 text-black" : "text-white/50"}`}>Collection</button><button onClick={() => setOrderType("delivery")} className={`rounded-xl px-4 py-3 text-sm font-semibold ${orderType === "delivery" ? "bg-orange-400 text-black" : "text-white/50"}`}>Delivery</button></div><div className="mt-6 space-y-4"><input value={details.name} onChange={(e) => setDetails({ ...details, name: e.target.value })} placeholder="Your name" className="w-full rounded-xl border border-white/10 bg-white/[.04] px-4 py-3 outline-none" /><input value={details.phone} onChange={(e) => setDetails({ ...details, phone: e.target.value })} placeholder="Phone number" className="w-full rounded-xl border border-white/10 bg-white/[.04] px-4 py-3 outline-none" />{orderType === "delivery" && <textarea value={details.address} onChange={(e) => setDetails({ ...details, address: e.target.value })} placeholder="Delivery address" rows={3} className="w-full rounded-xl border border-white/10 bg-white/[.04] px-4 py-3 outline-none" />}<textarea value={details.notes} onChange={(e) => setDetails({ ...details, notes: e.target.value })} placeholder="Order notes (optional)" rows={3} className="w-full rounded-xl border border-white/10 bg-white/[.04] px-4 py-3 outline-none" /></div><div className="mt-7 space-y-3 border-t border-white/10 pt-5"><div className="flex justify-between text-sm text-white/50"><span>Subtotal</span><span>£{subtotal.toFixed(2)}</span></div>{orderType === "delivery" && <div className="flex justify-between text-sm text-white/50"><span>Delivery</span><span>£{delivery.toFixed(2)}</span></div>}<div className="flex justify-between text-xl font-semibold"><span>Total</span><span className="text-orange-400">£{total.toFixed(2)}</span></div></div><button disabled={!items.length} onClick={() => setSubmitted(true)} className="mt-6 w-full rounded-full bg-orange-400 px-6 py-4 font-semibold text-black disabled:cursor-not-allowed disabled:opacity-30">Place demo order · £{total.toFixed(2)}</button><p className="mt-3 text-center text-xs leading-5 text-white/30">Demo only. No payment is taken and no order is sent to the restaurant.</p></aside></div></main>;
}
