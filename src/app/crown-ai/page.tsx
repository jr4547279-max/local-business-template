"use client";

import { useState } from "react";

const events = [
  { type: "QUIZ", title: "Themed quiz night", date: "2026-09-04", time: "7:30pm", description: "A proper pub quiz with complimentary hot buffet.", published: true },
  { type: "MUSIC", title: "Live music & garden session", date: "2026-09-12", time: "8:00pm", description: "Live music in the enclosed rear garden when scheduled.", published: true },
  { type: "FESTIVAL", title: "Beer festival", date: "2026-10-03", time: "12:00pm", description: "A celebration of changing beers and good company.", published: true },
];

export default function CrownAIPage() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function ask() {
    if (!question.trim() || loading) return;
    setLoading(true);
    setAnswer("");
    try {
      const response = await fetch("/api/crown-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, events }),
      });
      const data = await response.json();
      setAnswer(data.answer || "I couldn't find that information.");
    } catch {
      setAnswer("I'm having trouble connecting right now. Please call The Crown on 01323 724654.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#17120e] px-5 py-16 text-[#fff8eb]">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs uppercase tracking-[.35em] text-[#e6ad58]">The Crown · AI concierge</p>
        <h1 className="mt-5 font-serif text-6xl tracking-[-.06em] sm:text-8xl">Ask the<br/><span className="text-[#e6ad58]">Crown.</span></h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/50">A real AI layer grounded in the pub's verified business information and current event data. It is designed to say “I don't know” rather than make something up.</p>
        <div className="mt-10 rounded-[2rem] border border-white/10 bg-[#201812] p-5 sm:p-7">
          <div className="flex gap-2">
            <input value={question} onChange={(event) => setQuestion(event.target.value)} onKeyDown={(event) => event.key === "Enter" && ask()} placeholder="What's on this weekend?" className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-white placeholder:text-white/25 outline-none focus:border-[#e6ad58]/60" />
            <button onClick={ask} disabled={loading} className="rounded-xl bg-[#e6ad58] px-5 font-semibold text-[#17120e] disabled:opacity-50">{loading ? "Thinking…" : "Ask"}</button>
          </div>
          {answer && <div className="mt-5 rounded-2xl border border-[#e6ad58]/20 bg-[#e6ad58]/5 p-5 text-base leading-7 text-white/80">{answer}</div>}
          <div className="mt-6 flex flex-wrap gap-2">
            {["When's the next quiz?", "Is there live music?", "What's on this weekend?"].map((prompt) => <button key={prompt} onClick={() => { setQuestion(prompt); }} className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/45 hover:border-[#e6ad58]/40 hover:text-white/70">{prompt}</button>)}
          </div>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {events.map((event) => <div key={event.type} className="rounded-2xl border border-white/10 bg-white/[.02] p-5"><p className="text-xs uppercase tracking-[.2em] text-[#e6ad58]">{event.type}</p><h2 className="mt-3 font-serif text-2xl">{event.title}</h2><p className="mt-2 text-sm text-white/35">{event.date} · {event.time}</p></div>)}
        </div>
        <p className="mt-8 text-xs leading-5 text-white/25">Demo data only. Before launch, this page should read published events directly from the business database and use confirmed dates.</p>
      </div>
    </main>
  );
}
