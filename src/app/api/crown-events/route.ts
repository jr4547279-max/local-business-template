import { NextRequest, NextResponse } from "next/server";

const fallbackEvents = [
  { id: "demo-quiz", type: "QUIZ", title: "Themed quiz night", event_date: "2026-09-04", event_time: "7:30pm", description: "A proper pub quiz with complimentary hot buffet.", recurrence: "Regular — check the latest pub update for confirmation." },
  { id: "demo-music", type: "MUSIC", title: "Live music & garden session", event_date: "2026-09-12", event_time: "8:00pm", description: "Live music in the enclosed rear garden when scheduled.", recurrence: "Occasional — dates announced by the pub." },
  { id: "demo-festival", type: "FESTIVAL", title: "Beer festival", event_date: "2026-10-03", event_time: "12:00pm", description: "A celebration of changing beers and good company.", recurrence: "Regular seasonal event." },
];

function config() {
  return {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    key: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    secret: process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY,
  };
}

export async function GET() {
  const { url, key } = config();
  if (!url || !key) return NextResponse.json({ events: fallbackEvents, source: "demo" });

  const response = await fetch(`${url}/rest/v1/crown_events?select=*&published=eq.true&order=event_date.asc`, {
    headers: { apikey: key, Authorization: `Bearer ${key}` },
    next: { revalidate: 60 },
  });
  if (!response.ok) return NextResponse.json({ events: fallbackEvents, source: "demo-fallback" });
  return NextResponse.json({ events: await response.json(), source: "live" });
}

export async function POST(request: NextRequest) {
  const adminToken = process.env.CROWN_ADMIN_TOKEN;
  const suppliedToken = request.headers.get("x-crown-admin-token");
  if (!adminToken || suppliedToken !== adminToken) return NextResponse.json({ error: "Unauthorised" }, { status: 401 });

  const { url, secret } = config();
  if (!url || !secret) return NextResponse.json({ error: "Live database is not configured yet." }, { status: 503 });

  const body = await request.json();
  const response = await fetch(`${url}/rest/v1/crown_events`, {
    method: "POST",
    headers: { apikey: secret, Authorization: `Bearer ${secret}`, "Content-Type": "application/json", Prefer: "return=representation" },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return NextResponse.json(data, { status: response.status });
}
