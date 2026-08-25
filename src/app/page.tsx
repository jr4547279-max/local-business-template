"use client";

import { useMemo, useState } from "react";
import { business } from "../config/business";
import { media } from "../config/media";
import { EnquiryForm } from "./_components/enquiry-form";

const projectTypes = [
  { id: "home", label: "Improve my home", note: "Extension, alteration, conversion or refurbishment" },
  { id: "commercial", label: "Improve a commercial space", note: "Premises, offices, schools or other working environments" },
  { id: "maintenance", label: "Repairs or maintenance", note: "Planned or responsive building work" },
  { id: "newbuild", label: "Start something new", note: "New build or a project from the earliest stage" },
];

const projectStages = ["Just an idea", "Planning / design", "Ready for quotes", "Already underway"];

export default function Home() {
  const [project, setProject] = useState("home");
  const [stage, setStage] = useState("Just an idea");
  const [hasArchitect, setHasArchitect] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const selectedProject = useMemo(() => projectTypes.find((item) => item.id === project) ?? projectTypes[0], [project]);

  const plannerMailto = useMemo(() => {
    const subject = `${selectedProject.label} — project enquiry`;
    const body = [
      `Hi Colbran & Wingrove,`,
      "",
      `I'm looking to: ${selectedProject.label}`,
      `Project stage: ${stage}`,
      `Architect / design support: ${hasArchitect ? "Yes" : "Not yet"}`,
      "",
      "I'd like to discuss the project and understand the next steps.",
      "",
      "Thanks,",
    ].join("\n");
    return `mailto:${business.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [hasArchitect, selectedProject, stage]);

  const ask = () => {
    const q = question.toLowerCase().trim();
    if (!q) return setAnswer("Try asking about extensions, commercial work, project planning, architects, or how the process starts.");
    if (q.includes("architect") || q.includes("design")) return setAnswer("Colbran & Wingrove works with local architectural practices and can help clients decide what support they need. Their project guide says they can also work with a building contractor from an early stage on straightforward projects.");
    if (q.includes("quote") || q.includes("cost") || q.includes("price")) return setAnswer("They offer detailed, transparent quotes and invite clients to discuss projects before proceeding. The site does not publish fixed prices, so this demo won't invent one.");
    if (q.includes("commercial") || q.includes("school") || q.includes("office")) return setAnswer("Their commercial work includes maintenance, refurbishment, repairs, redecorating, replacement windows and roofline systems, and new-build projects across a range of environments.");
    if (q.includes("extension") || q.includes("loft") || q.includes("home")) return setAnswer("Residential work includes extensions and alterations, loft conversions, refurbishment and repairs, with the team able to manage a project from early planning through construction and finishing.");
    if (q.includes("when") || q.includes("1967") || q.includes("experience")) return setAnswer("Colbran & Wingrove says it has operated continuously since 1967 and remains an independent, family-run building contractor.");
    return setAnswer("I can answer from the public business information used for this site. Ask me about the services, project planning, commercial work, residential projects or quotations.");
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#0a0b0c] text-white selection:bg-[#d5b36a] selection:text-black">
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/[0.07] bg-[#0a0b0c]/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#top" className="text-lg font-semibold tracking-[-0.04em]">COLBRAN <span className="text-[#d5b36a]">&</span> WINGROVE</a>
          <div className="hidden items-center gap-8 text-sm text-white/45 md:flex"><a href="#services" className="hover:text-white">What we do</a><a href="#process" className="hover:text-white">Process</a><a href="#planner" className="hover:text-white">Plan a project</a><a href="#contact" className="hover:text-white">Contact</a></div>
          <a href={`tel:${business.phone.replaceAll(" ", "")}`} className="rounded-full bg-[#d5b36a] px-5 py-2.5 text-sm font-semibold text-black">Call {business.phone}</a>
        </div>
      </nav>

      <section id="top" className="relative flex min-h-screen items-end px-6 pb-16 pt-32 lg:px-10 lg:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(213,179,106,0.18),transparent_32%),linear-gradient(135deg,#151719_0%,#0a0b0c_65%)]" />
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `url(${media.hero.src})`, backgroundPosition: "center", backgroundSize: "cover" }} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#0a0b0c_0%,rgba(10,11,12,0.82)_42%,rgba(10,11,12,0.32)_100%)]" />
        <div className="relative mx-auto w-full max-w-7xl">
          <div className="mb-7 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-white/45"><span className="h-px w-10 bg-[#d5b36a]" />{business.tagline}</div>
          <h1 className="max-w-6xl text-[15vw] font-semibold leading-[0.82] tracking-[-0.075em] sm:text-8xl lg:text-[9rem]">Ideas into<br /><span className="text-[#d5b36a]">reality.</span></h1>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_350px] lg:items-end">
            <p className="max-w-xl text-lg leading-8 text-white/60 sm:text-xl">A building partner for residential and commercial projects — from the first conversation to the final finish.</p>
            <div><p className="mb-3 text-xs uppercase tracking-[0.3em] text-white/30">Established</p><p className="text-4xl font-medium tracking-tight">Since <span className="text-[#d5b36a]">1967.</span></p></div>
          </div>
          <div className="mt-11 flex flex-col gap-4 sm:flex-row"><a href="#planner" className="rounded-full bg-[#d5b36a] px-8 py-4 text-center font-semibold text-black transition hover:-translate-y-1">Plan my project</a><a href="#services" className="rounded-full border border-white/15 px-8 py-4 text-center font-medium text-white/75 hover:border-white/30">Explore what we do ↓</a></div>
          <div className="mt-12 grid max-w-2xl grid-cols-3 gap-5 border-t border-white/10 pt-7 text-xs uppercase tracking-[0.18em] text-white/30"><div><strong className="text-white">RESIDENTIAL</strong><br />Homes & improvements</div><div><strong className="text-white">COMMERCIAL</strong><br />Premises & contracts</div><div><strong className="text-white">EAST SUSSEX</strong><br />Local project coverage</div></div>
        </div>
      </section>

      <section id="services" className="border-t border-white/[0.07] px-6 py-28 lg:px-10"><div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="text-xs uppercase tracking-[0.35em] text-[#d5b36a]">What we do</p><h2 className="mt-5 max-w-3xl text-5xl font-semibold tracking-[-0.05em] sm:text-7xl">One partner.<br /><span className="text-white/25">The whole project.</span></h2></div><p className="max-w-sm text-sm leading-7 text-white/35">Design, surveys, analysis, construction and final finish — with an experienced team and long-standing specialist relationships.</p></div>
        <div className="grid gap-5 md:grid-cols-3">
          {[ ["01","Residential","Extensions, alterations, loft conversions, refurbishment and repairs."],["02","Commercial","Planned and responsive maintenance, refurbishment, repairs and new-build work."],["03","Project delivery","A coordinated route from early ideas and surveys through construction and finishing."] ].map(([n,title,text],i)=><article key={n} className="group overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.025] transition duration-500 hover:-translate-y-1 hover:border-[#d5b36a]/30"><div className="h-52 overflow-hidden" style={{backgroundImage:`linear-gradient(180deg,rgba(10,11,12,.08),rgba(10,11,12,.7)),url(${media.services[i].src})`,backgroundPosition:"center",backgroundSize:"cover"}}/><div className="min-h-[250px] p-8"><span className="text-sm text-[#d5b36a]">{n}</span><div className="mt-16"><h3 className="text-2xl font-medium tracking-tight group-hover:text-[#d5b36a]">{title}</h3><p className="mt-4 text-sm leading-7 text-white/40">{text}</p></div></div></article>)}
        </div>
      </div></section>

      <section id="process" className="bg-[#d5b36a] px-6 py-28 text-[#101112] lg:px-10"><div className="mx-auto max-w-7xl"><div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.35em] text-[#5e4b2a]">The process</p><h2 className="mt-5 text-6xl font-semibold leading-[.88] tracking-[-0.06em] sm:text-8xl">Less<br />uncertainty.<br /><em>More control.</em></h2></div><div className="grid gap-4 sm:grid-cols-2">{[["01","Talk","Start with the idea, the problem or the building that needs attention."],["02","Plan","Work through surveys, design, scope and the practical route forward."],["03","Build","A skilled team manages the work with communication throughout."],["04","Finish","Complete the details, documentation and sign-off so you can enjoy the result."]].map(([n,t,d])=><div key={n} className="rounded-[1.5rem] bg-black/[0.07] p-7"><span className="text-sm font-semibold">{n}</span><h3 className="mt-10 text-2xl font-semibold">{t}</h3><p className="mt-3 text-sm leading-6 text-[#101112]/60">{d}</p></div>)}</div></div></div></section>

      <section id="planner" className="px-6 py-28 lg:px-10"><div className="mx-auto max-w-7xl"><div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:items-start"><div><p className="text-xs uppercase tracking-[0.35em] text-[#d5b36a]">Project planner</p><h2 className="mt-5 text-6xl font-semibold leading-[.9] tracking-[-0.06em] sm:text-8xl">Start with<br /><span className="text-[#d5b36a]">where you are.</span></h2><p className="mt-7 max-w-md text-white/40">A guided first step. Pick the kind of project, tell us where you are in the process, then send a ready-made enquiry.</p><div className="mt-8 rounded-[1.75rem] border border-white/10 bg-white/[.025] p-6"><p className="text-xs uppercase tracking-[0.25em] text-white/25">Your route</p><p className="mt-3 text-2xl font-medium">{selectedProject.label}</p><p className="mt-2 text-sm leading-6 text-white/40">{selectedProject.note}</p><p className="mt-6 text-xs uppercase tracking-[0.2em] text-[#d5b36a]">{stage}</p><a href={plannerMailto} className="mt-6 block rounded-full bg-[#d5b36a] px-5 py-3 text-center text-sm font-semibold text-black">Email this project brief →</a></div></div>
        <div className="space-y-5"><div className="rounded-[2rem] border border-white/10 bg-white/[.025] p-7 sm:p-9"><p className="text-xs uppercase tracking-[0.25em] text-white/30">01 · What are you trying to do?</p><div className="mt-6 grid gap-3 sm:grid-cols-2">{projectTypes.map((item)=><button key={item.id} onClick={()=>setProject(item.id)} className={`rounded-2xl border p-5 text-left transition ${project===item.id?"border-[#d5b36a] bg-[#d5b36a] text-black":"border-white/10 hover:border-white/25"}`}><span className="text-xl">{item.id==="home"?"⌂":item.id==="commercial"?"▦":item.id==="maintenance"?"↗":"＋"}</span><p className="mt-7 font-medium">{item.label}</p><p className={`mt-2 text-xs leading-5 ${project===item.id?"text-black/55":"text-white/30"}`}>{item.note}</p></button>)}</div></div>
          <div className="grid gap-5 sm:grid-cols-2"><div className="rounded-[2rem] border border-white/10 bg-white/[.025] p-7"><p className="text-xs uppercase tracking-[0.25em] text-white/30">02 · Where are you now?</p><div className="mt-5 flex flex-wrap gap-2">{projectStages.map((item)=><button key={item} onClick={()=>setStage(item)} className={`rounded-full border px-4 py-2 text-sm ${stage===item?"border-[#d5b36a] bg-[#d5b36a] text-black":"border-white/10 text-white/50"}`}>{item}</button>)}</div></div><div className="rounded-[2rem] border border-white/10 bg-white/[.025] p-7"><p className="text-xs uppercase tracking-[0.25em] text-white/30">03 · Design support?</p><button onClick={()=>setHasArchitect(!hasArchitect)} className={`mt-5 flex w-full items-center justify-between rounded-2xl border p-4 text-left ${hasArchitect?"border-[#d5b36a] bg-[#d5b36a]/10":"border-white/10"}`}><span>{hasArchitect?"Yes — I have an architect":"Not yet / not sure"}</span><span className="text-[#d5b36a]">{hasArchitect?"✓":"+"}</span></button></div></div>
        </div></div></div></section>

      <section className="border-y border-white/[.07] bg-[#101214] px-6 py-24 lg:px-10"><div className="mx-auto max-w-5xl"><div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between"><div><p className="text-xs uppercase tracking-[0.35em] text-[#d5b36a]">Grounded answers</p><h2 className="mt-4 text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">Questions before you call?</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-white/35">A small demo assistant using only the researched business information behind this page. It deliberately avoids inventing prices, dates or claims.</p></div></div><div className="mt-9 flex flex-col gap-3 sm:flex-row"><input value={question} onChange={e=>setQuestion(e.target.value)} onKeyDown={e=>e.key==='Enter'&&ask()} placeholder="e.g. Do you work on commercial buildings?" className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/[.03] px-4 py-3 text-sm text-white placeholder:text-white/20 outline-none focus:border-[#d5b36a]/60"/><button onClick={ask} className="rounded-xl bg-[#d5b36a] px-6 py-3 text-sm font-semibold text-black">Ask</button></div>{answer&&<div className="mt-4 rounded-2xl border border-[#d5b36a]/20 bg-[#d5b36a]/[.05] p-5 text-sm leading-7 text-white/65"><span className="mr-2 text-[#d5b36a]">Answer</span>{answer}</div>}</div></section>

      <section id="contact" className="relative px-6 py-32 lg:px-10"><div className="relative mx-auto max-w-5xl"><div className="mb-14 text-center"><p className="text-xs uppercase tracking-[0.4em] text-[#d5b36a]">Start a conversation</p><h2 className="mt-6 text-6xl font-semibold tracking-[-0.065em] sm:text-8xl">Tell us about<br /><span className="text-[#d5b36a]">the project.</span></h2><p className="mx-auto mt-7 max-w-xl text-lg leading-8 text-white/35">For quotations, project discussions or general enquiries, send a few details and the team can take it from there.</p></div><EnquiryForm /><div className="mt-8 flex flex-col items-center gap-2 text-sm text-white/30"><a className="text-[#d5b36a]" href={`tel:${business.phone.replaceAll(" ", "")}`}>{business.phone}</a><a className="text-[#d5b36a]" href={`mailto:${business.email}`}>{business.email}</a><span>{business.location} · East Sussex · Brighton & Hove · Tunbridge Wells</span></div></div></section>

      <footer className="border-t border-white/[0.07] px-6 py-10 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-xs uppercase tracking-[0.2em] text-white/20 sm:flex-row"><p>© 2026 {business.name}</p><p>Excellence · Integrity · Safe · Collaborative · Sustainable</p></div></footer>
    </main>
  );
}
