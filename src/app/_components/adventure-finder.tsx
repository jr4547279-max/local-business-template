"use client";

import { useMemo, useState } from "react";

const options = [
  { id: "tiny", label: "Tiny explorers", age: "2–4", title: "Acorn Folk", detail: "A gentle woodland playgroup at Bluebell Wood in Arlington, with stories, nature discovery, making and something to take home.", price: "£8.50 one-off · six from £45", href: "#contact" },
  { id: "home", label: "Home education", age: "5–12", title: "Forest Folk & Forest Fridays", detail: "Hands-on woodland learning covering subjects from fossils and twig identification to foraging, wildlife and bushcraft.", price: "From £9 per child", href: "#contact" },
  { id: "after", label: "After school", age: "5–7", title: "Nature Adventures", detail: "A weekly outdoor group based at Motcombe School with exploring, cooking, bushcraft, bug hunting, crafts and caring for nature.", price: "£7.50 per session from Sept 2026", href: "#contact" },
  { id: "wild", label: "Wildlife & bushcraft", age: "10–12", title: "Wild Wednesdays", detail: "Focused wildlife and bushcraft studies for home-educated children, based at The Nest once a month.", price: "£10 per child", href: "#contact" },
  { id: "grown", label: "Grown-ups", age: "Adults", title: "Woodland Ways", detail: "Just under two hours in the woods to escape, discover and be inspired, with a themed activity, tea and something yummy to eat.", price: "£14 per adult", href: "#contact" },
  { id: "family", label: "Family event", age: "Families", title: "Wild events & guided walks", detail: "Seasonal adventures, nature hunts and guided woodland experiences for adults and children, with different themes throughout the year.", price: "Event pricing varies", href: "#contact" },
];

export function AdventureFinder() {
  const [selected, setSelected] = useState("tiny");
  const result = useMemo(() => options.find((option) => option.id === selected) ?? options[0], [selected]);

  return (
    <div className="overflow-hidden rounded-[2rem] border border-[#294638] bg-[#10261c] shadow-[0_30px_100px_rgba(16,38,28,0.28)]">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
        <div className="border-b border-[#294638] p-7 sm:p-10 lg:border-b-0 lg:border-r">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c7d9a5]">Find your adventure</p>
          <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#f6f1df] sm:text-4xl">Where do you fit in the woods?</h3>
          <p className="mt-4 text-sm leading-6 text-[#b7c6b9]">Pick the group that sounds most like you and we’ll point you towards the most relevant Cherry Wood experience.</p>
          <div className="mt-8 grid grid-cols-2 gap-2">
            {options.map((option) => (
              <button key={option.id} type="button" onClick={() => setSelected(option.id)} className={`rounded-2xl border px-4 py-3 text-left transition ${selected === option.id ? "border-[#d8b86a] bg-[#d8b86a] text-[#13251b]" : "border-[#31523f] bg-white/[0.025] text-[#d7dfd5] hover:border-[#6e8b72]"}`}>
                <span className="block text-sm font-semibold">{option.label}</span>
                <span className={`mt-1 block text-xs ${selected === option.id ? "text-[#3e4f3d]" : "text-[#91a496]"}`}>{option.age}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="relative p-7 sm:p-10 lg:p-12">
          <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-[#a7c08b]/10 blur-3xl" />
          <div className="relative">
            <div className="flex items-center justify-between gap-4"><span className="rounded-full border border-[#536b55] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[#c7d9a5]">{result.age}</span><span className="text-sm text-[#819789]">Your match</span></div>
            <h4 className="mt-8 text-4xl font-semibold tracking-[-0.045em] text-[#f6f1df]">{result.title}</h4>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#b7c6b9]">{result.detail}</p>
            <div className="mt-8 border-t border-[#294638] pt-6"><p className="text-xs uppercase tracking-[0.22em] text-[#819789]">From the current programme</p><p className="mt-2 text-lg font-medium text-[#e5dfca]">{result.price}</p></div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href={result.href} className="rounded-full bg-[#d8b86a] px-6 py-3 text-center text-sm font-semibold text-[#13251b] transition hover:bg-[#ead18b]">Ask about this</a><a href="https://www.cherrywoodadventures.co.uk/events.html" target="_blank" rel="noreferrer" className="rounded-full border border-[#536b55] px-6 py-3 text-center text-sm font-medium text-[#e1e7de] transition hover:border-[#9fb49d]">See events ↗</a></div>
          </div>
        </div>
      </div>
    </div>
  );
}
