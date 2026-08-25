"use client";

import { FormEvent, useEffect, useState } from "react";

type Event = { id: string; type: string; title: string; event_date: string; event_time: string; description: string; recurrence: string };

export default function CrownEventsAdmin() {
  const [events, setEvents] = useState<Event[]>([]);
  const [token, setToken] = useState("");
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({ type: "OTHER", title: "", event_date: "", event_time: "", description: "", recurrence: "" });

  useEffect(() => { fetch("/api/crown-events").then((r) => r.json()).then((data) => setEvents(data.events ?? [])); }, []);

  async function addEvent(e: FormEvent) {
    e.preventDefault(); setMessage("Saving…");
    const response = await fetch("/api/crown-events", { method: "POST", headers: { "Content-Type": "application/json", "x-crown-admin-token": token }, body: JSON.stringify(form) });
    if (!response.ok) return setMessage("Could not save. Check the admin token and database configuration.");
    const saved = await response.json(); setEvents((current) => [...current, saved[0] ?? saved]); setForm({ type: "OTHER", title: "", event_date: "", event_time: "", description: "", recurrence: "" }); setMessage("Event published.");
  }

  return <main className="min-h-screen bg-[#17120e] px-5 py-10 text-[#fff8eb]"><div className="mx-auto max-w-5xl"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-xs uppercase tracking-[.3em] text-[#e6ad58]">The Crown · Owner tools</p><h1 className="mt-3 font-serif text-5xl">What's On manager</h1><p className="mt-3 text-white/45">Add a confirmed event here and the public calendar can read it from the live database.</p></div><a href="/" className="text-sm text-[#e6ad58]">← View website</a></div>

<div className="mt-10 grid gap-8 lg:grid-cols-[.8fr_1.2fr]"><form onSubmit={addEvent} className="rounded-3xl border border-white/10 bg-[#201812] p-7"><h2 className="font-serif text-3xl">Add event</h2><label className="mt-6 block text-sm text-white/50">Admin token<input value={token} onChange={e=>setToken(e.target.value)} type="password" className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none" /></label><label className="mt-4 block text-sm text-white/50">Type<select value={form.type} onChange={e=>setForm({...form,type:e.target.value})} className="mt-2 w-full rounded-xl border border-white/10 bg-[#17120e] px-4 py-3 outline-none"><option>QUIZ</option><option>MUSIC</option><option>FESTIVAL</option><option>OTHER</option></select></label>{(["title","event_date","event_time","description","recurrence"] as const).map(field=><label key={field} className="mt-4 block text-sm capitalize text-white/50">{field.replace("_"," ")}<input required={field!=="recurrence"} type={field==="event_date"?"date":"text"} value={form[field]} onChange={e=>setForm({...form,[field]:e.target.value})} className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none" /></label>)}<button className="mt-6 w-full rounded-full bg-[#e6ad58] px-6 py-4 font-semibold text-[#17120e]">Publish event</button><p className="mt-3 text-xs text-white/25">{message}</p></form>

<div className="rounded-3xl border border-white/10 bg-[#201812] p-7"><div className="flex items-center justify-between"><h2 className="font-serif text-3xl">Current calendar</h2><span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/40">{events.length} events</span></div><div className="mt-6 space-y-3">{events.map(event=><article key={event.id} className="rounded-2xl border border-white/10 p-5"><div className="flex flex-col justify-between gap-2 sm:flex-row"><div><p className="text-xs uppercase tracking-[.2em] text-[#e6ad58]">{event.event_date} · {event.event_time} · {event.type}</p><h3 className="mt-2 text-lg font-semibold">{event.title}</h3><p className="mt-2 text-sm text-white/40">{event.description}</p></div><span className="text-xs text-white/25">{event.recurrence}</span></div></article>)}{events.length===0&&<p className="py-10 text-center text-white/30">No events yet.</p>}</div></div></div></div></main>;
}
