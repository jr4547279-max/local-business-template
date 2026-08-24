"use client";

import { useEffect, useMemo, useState } from "react";

type Event = { id: string; type: string; title: string; event_date: string; event_time: string; description: string; recurrence: string };
const dateLabel = (date: string) => new Intl.DateTimeFormat("en-GB", { weekday: "short", day: "numeric", month: "short" }).format(new Date(`${date}T12:00:00`));

export default function WhatsOn() {
  const [events, setEvents] = useState<Event[]>([]);
  const [filter, setFilter] = useState("ALL");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [source, setSource] = useState("loading");

  useEffect(() => { fetch("/api/crown-events").then(r => r.json()).then(data => { setEvents(data.events ?? []); setSource(data.source ?? "demo"); }); }, []);
  const visible = useMemo(() => filter === "ALL" ? events : events.filter(e => e.type === filter), [events, filter]);

  function ask() {
    const q = question.toLowerCase();
    if (!q.trim()) return setAnswer("Ask me about quizzes, music, festivals, or what's happening this weekend.");
    const matching = q.includes("quiz") ? events.filter(e=>e.type==="QUIZ") : q.includes("music") || q.includes("band") ? events.filter(e=>e.type==="MUSIC") : q.includes("festival") || q.includes("beer") ? events.filter(e=>e.type==="FESTIVAL") : events;
    if (!matching.length) return setAnswer("I can't see a matching event in the current calendar. Call the pub on 01323 724654 for the latest update.");
    const first = matching[0];
    setAnswer(`${first.title} is listed for ${dateLabel(first.event_date)} at ${first.event_time}. ${first.description} Check with the pub before travelling if the event is marked occasional.`);
  }

  return <main className="min-h-screen bg-[#17120e] px-5 py-10 text-[#fff8eb]"><div className="mx-auto max-w-5xl"><div className="flex items-end justify-between gap-5"><div><p className="text-xs uppercase tracking-[.3em] text-[#e6ad58]">The Crown · Live calendar</p><h1 className="mt-3 font-serif text-6xl tracking-[-.05em]">What's on.</h1><p className="mt-4 max-w-2xl text-white/45">The calendar can be managed separately from the public website. Ask a question and the assistant answers from the current event data.</p></div><a href="/" className="text-sm text-[#e6ad58]">← Back</a></div>

<div className="mt-10 rounded-3xl border border-white/10 bg-[#201812] p-6 sm:p-8"><div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"><div><span className="text-xs uppercase tracking-[.3em] text-[#e6ad58]">AI What's On</span><h2 className="mt-3 font-serif text-4xl">Ask the Crown.</h2><p className="mt-2 text-sm text-white/35">Calendar data is the source of truth.</p></div><div className="flex w-full max-w-xl gap-2"><input value={question} onChange={e=>setQuestion(e.target.value)} onKeyDown={e=>e.key==='Enter'&&ask()} placeholder="What's on this weekend?" className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none"/><button onClick={ask} className="rounded-xl bg-[#e6ad58] px-5 py-3 font-semibold text-[#17120e]">Ask</button></div></div>{answer&&<div className="mt-5 rounded-xl border border-[#e6ad58]/20 bg-[#e6ad58]/5 p-4 text-sm leading-6 text-white/70">{answer}</div>}
<div className="mt-8 flex flex-wrap gap-2">{["ALL","QUIZ","MUSIC","FESTIVAL","OTHER"].map(item=><button key={item} onClick={()=>setFilter(item)} className={`rounded-full border px-4 py-2 text-xs font-semibold tracking-[.18em] ${filter===item?"border-[#e6ad58] bg-[#e6ad58] text-[#17120e]":"border-white/10 text-white/40"}`}>{item}</button>)}</div>
<div className="mt-5 space-y-3">{visible.map(event=><article key={event.id} className="rounded-2xl border border-white/10 p-5"><p className="text-xs uppercase tracking-[.22em] text-[#e6ad58]">{dateLabel(event.event_date)} · {event.event_time} · {event.type}</p><h3 className="mt-3 font-serif text-2xl">{event.title}</h3><p className="mt-2 text-sm text-white/40">{event.description}</p><p className="mt-3 text-xs text-white/25">{event.recurrence}</p></article>)}{visible.length===0&&<p className="py-10 text-center text-white/25">No events in this category.</p>}</div><p className="mt-6 text-xs text-white/20">Data source: {source}. Demo events are unpublished placeholders until confirmed by the business.</p></div>
<div className="mt-6 flex flex-col gap-3 sm:flex-row"><a href="/admin/crown-events" className="rounded-full border border-white/10 px-6 py-3 text-center text-sm text-white/60">Owner: manage events</a><a href="tel:+441323724654" className="rounded-full bg-[#e6ad58] px-6 py-3 text-center text-sm font-semibold text-[#17120e]">Call the Crown</a></div></div></main>;
}
