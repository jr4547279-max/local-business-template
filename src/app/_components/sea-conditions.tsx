"use client";

import { useEffect, useState } from "react";

type WeatherState = { temperature: number; wind: number; gusts: number; rainChance: number; updated: string };
const EASTBOURNE = { latitude: 50.768, longitude: 0.29 };

export function SeaConditions() {
  const [weather, setWeather] = useState<WeatherState | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${EASTBOURNE.latitude}&longitude=${EASTBOURNE.longitude}&current=temperature_2m,wind_speed_10m,wind_gusts_10m&hourly=precipitation_probability&forecast_days=1&timezone=Europe%2FLondon`, { signal: controller.signal })
      .then((response) => { if (!response.ok) throw new Error("Weather unavailable"); return response.json(); })
      .then((data) => {
        const hour = new Date().getHours();
        setWeather({
          temperature: Math.round(data.current.temperature_2m),
          wind: Math.round(data.current.wind_speed_10m),
          gusts: Math.round(data.current.wind_gusts_10m),
          rainChance: data.hourly.precipitation_probability?.[hour] ?? 0,
          updated: new Date(data.current.time).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }),
        });
      })
      .catch((requestError) => { if (requestError.name !== "AbortError") setError(true); });
    return () => controller.abort();
  }, []);

  return (
    <section className="border-y border-white/10 bg-[#081217] px-6 py-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/70">Today on the water</p>
          <h2 className="mt-2 text-2xl font-medium tracking-tight">Check the conditions before you paddle.</h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-white/40">A quick Eastbourne forecast snapshot. Conditions can change quickly; the team has the final say on whether it is safe to launch.</p>
        </div>
        {weather ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:min-w-[560px]">
            {[["Air", `${weather.temperature}°C`], ["Wind", `${weather.wind} km/h`], ["Gusts", `${weather.gusts} km/h`], ["Rain chance", `${weather.rainChance}%`]].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4"><p className="text-xs text-white/30">{label}</p><p className="mt-2 text-xl font-semibold">{value}</p></div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 text-sm text-white/40">{error ? "Conditions are unavailable right now." : "Loading today's conditions…"}</div>
        )}
      </div>
      {weather && <p className="mx-auto mt-4 max-w-7xl text-[11px] uppercase tracking-[0.2em] text-white/20">Forecast updated {weather.updated} · Indicative only</p>}
    </section>
  );
}
