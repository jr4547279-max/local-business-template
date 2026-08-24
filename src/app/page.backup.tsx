export default function Home() {
  const services = [
    {
      number: "01",
      title: "Professional Service",
      text: "Reliable, high-quality work tailored around exactly what you need."
    },
    {
      number: "02",
      title: "Personal Approach",
      text: "A friendly local service with clear communication from start to finish."
    },
    {
      number: "03",
      title: "Quality Results",
      text: "Attention to detail, dependable workmanship and results you can trust."
    },
  ]

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="text-2xl font-black tracking-tight">
          YOUR<span className="text-amber-500">BUSINESS</span>
        </div>

        <a
          href="#contact"
          className="rounded-full bg-amber-600 px-6 py-3 text-sm font-bold transition hover:bg-amber-500"
        >
          Get Started
        </a>
      </nav>

      <section className="mx-auto max-w-6xl px-6 pb-24 pt-20">
        <div className="mb-8 inline-flex rounded-full border border-white/10 px-5 py-3 text-sm text-amber-400">
          ★ Trusted local business
        </div>

        <h1 className="max-w-4xl text-6xl font-black leading-[0.95] tracking-tight md:text-8xl">
          Great service.
          <br />
          <span className="text-amber-500">Beautiful results.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-8 text-white/55">
          Professional service from a local business that genuinely cares
          about its customers. Quality, reliability and a personal touch.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-full bg-amber-700 px-8 py-4 text-center text-lg font-bold transition hover:bg-amber-600"
          >
            Book / Enquire
          </a>

          <a
            href="#services"
            className="rounded-full border border-white/10 px-8 py-4 text-center text-lg font-bold transition hover:bg-white/5"
          >
            Explore Services
          </a>
        </div>
      </section>

      <section id="services" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-500">
            What we do
          </p>

          <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-4xl font-black tracking-tight md:text-6xl">
              A service you can rely on.
            </h2>

            <p className="max-w-md text-white/45">
              Everything you need, delivered with care, professionalism and
              attention to detail.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.number}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:bg-white/[0.06]"
              >
                <div className="text-sm font-bold text-amber-500">
                  {service.number}
                </div>

                <h3 className="mt-12 text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-white/45">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-14">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-500">
            Let's talk
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-black md:text-6xl">
            Ready to get started?
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/45">
            Get in touch today and let's see how we can help.
          </p>

          <a
            href="mailto:hello@yourbusiness.co.uk"
            className="mt-8 inline-block rounded-full bg-amber-700 px-8 py-4 text-lg font-bold transition hover:bg-amber-600"
          >
            Contact Us
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-sm text-white/40 md:flex-row">
          <p>© 2026 Your Business. All rights reserved.</p>
          <p>Local • Professional • Trusted</p>
        </div>
      </footer>
    </main>
  )
}
