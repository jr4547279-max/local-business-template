"use client";

import { FormEvent, useState } from "react";
import { business } from "../../config/business";

type FormState = {
  type: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  address: string;
  message: string;
};

const initialState: FormState = {
  type: "Request a quote",
  name: "",
  email: "",
  phone: "",
  service: "",
  date: "",
  time: "",
  address: "",
  message: "",
};

export function EnquiryForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const update = (key: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [key]: value }));
    if (error) setError("");
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || !form.service || !form.message.trim()) {
      setError("Please complete your name, email, phone, service and message.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-[2rem] border border-amber-400/20 bg-amber-400/[0.06] p-8 text-left sm:p-12">
        <p className="text-xs uppercase tracking-[0.35em] text-amber-400">Request prepared</p>
        <h3 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">Thanks, {form.name.split(" ")[0]}.</h3>
        <p className="mt-5 max-w-xl leading-7 text-white/45">
          Your {form.type.toLowerCase()} details have been prepared. No message has been sent yet because no email, CRM or booking provider is connected.
        </p>
        <button
          type="button"
          onClick={() => { setSubmitted(false); setForm(initialState); }}
          className="mt-8 rounded-full border border-white/10 px-6 py-3 text-sm font-medium transition hover:bg-white/[0.05]"
        >
          Start another request
        </button>
      </div>
    );
  }

  return (
    <form id="enquiry-form" onSubmit={submit} className="rounded-[2rem] border border-white/10 bg-[#090909] p-6 text-left shadow-2xl sm:p-10">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.35em] text-amber-400">Request a Quote</p>
        <h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Tell us what you need.</h3>
        <p className="mt-3 text-sm leading-6 text-white/35">Choose a request type and give us enough detail to understand the job.</p>
      </div>

      <fieldset className="mb-8">
        <legend className="mb-3 text-sm font-medium text-white/70">What can we help with?</legend>
        <div className="grid gap-3 sm:grid-cols-3">
          {business.enquiryTypes.map((type) => (
            <label key={type} className={`cursor-pointer rounded-2xl border p-4 transition ${form.type === type ? "border-amber-400/60 bg-amber-400/10" : "border-white/10 bg-white/[0.02] hover:border-white/20"}`}>
              <input className="sr-only" type="radio" name="type" value={type} checked={form.type === type} onChange={(e) => update("type", e.target.value)} />
              <span className="text-sm font-medium">{type}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm text-white/60">Name *<input required value={form.name} onChange={(e) => update("name", e.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-amber-400/60" /></label>
        <label className="text-sm text-white/60">Email *<input required type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-amber-400/60" /></label>
        <label className="text-sm text-white/60">Phone *<input required type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-amber-400/60" /></label>
        <label className="text-sm text-white/60">Service required *<select required value={form.service} onChange={(e) => update("service", e.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-[#111] px-4 py-3 text-white outline-none focus:border-amber-400/60"><option value="">Select a service</option>{business.services.map((service) => <option key={service}>{service}</option>)}</select></label>
        <label className="text-sm text-white/60">Preferred date<input type="date" value={form.date} onChange={(e) => update("date", e.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none focus:border-amber-400/60" /></label>
        <label className="text-sm text-white/60">Preferred time<input type="time" value={form.time} onChange={(e) => update("time", e.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none focus:border-amber-400/60" /></label>
      </div>

      <label className="mt-5 block text-sm text-white/60">Property or address details<input value={form.address} onChange={(e) => update("address", e.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none focus:border-amber-400/60" /></label>
      <label className="mt-5 block text-sm text-white/60">Message *<textarea required rows={5} value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="Tell us a little about the job..." className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none focus:border-amber-400/60" /></label>

      {error && <p role="alert" className="mt-5 rounded-xl border border-red-400/20 bg-red-400/[0.06] px-4 py-3 text-sm text-red-200">{error}</p>}

      <button disabled={loading} type="submit" className="mt-7 w-full rounded-full bg-amber-400 px-7 py-4 font-semibold text-black transition hover:bg-amber-300 disabled:cursor-wait disabled:opacity-60">
        {loading ? "Preparing request…" : "Prepare enquiry"}
      </button>

      <p className="mt-4 text-center text-xs leading-5 text-white/25">Your details stay in this form until a real email, CRM or booking provider is connected.</p>
    </form>
  );
}
