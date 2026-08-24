import { NextRequest, NextResponse } from "next/server";
import { buildCrownContext, CROWN_AI_SYSTEM, type CrownEvent } from "../../../lib/ai/crown-brain";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => ({}));
  const question = typeof body.question === "string" ? body.question.trim() : "";
  const events = Array.isArray(body.events) ? (body.events as CrownEvent[]) : [];

  if (!question) {
    return NextResponse.json({ error: "Ask a question about The Crown." }, { status: 400 });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({
      answer: "The live AI concierge is ready, but its AI key has not been connected yet. For the latest event information, please call The Crown on 01323 724654.",
      mode: "fallback",
    });
  }

  const model = process.env.OPENAI_MODEL || "gpt-5.6-luna";
  const context = buildCrownContext(events);

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      instructions: `${CROWN_AI_SYSTEM}\n\nCURRENT VERIFIED BUSINESS DATA:\n${context}`,
      input: question,
      max_output_tokens: 220,
    }),
  });

  if (!response.ok) {
    console.error("Crown AI provider error", response.status);
    return NextResponse.json({
      answer: "I'm having trouble checking that right now. Please call The Crown on 01323 724654 for the latest information.",
      mode: "fallback",
    }, { status: 200 });
  }

  const data = await response.json();
  const answer = typeof data.output_text === "string" ? data.output_text.trim() : "";

  return NextResponse.json({
    answer: answer || "I couldn't find that in the current Crown information. Please call 01323 724654 for confirmation.",
    mode: "ai",
    model,
  });
}
