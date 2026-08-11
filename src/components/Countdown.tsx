"use client";

import { useEffect, useMemo, useState } from "react";
import { weddingConfig } from "@/config/wedding";
import { MotionGroup } from "@/components/motion/Motion";

type Remaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  done: boolean;
};

function getTargetMs(): number {
  const { day, month, year } = weddingConfig.date;
  const y = year ?? new Date().getFullYear();
  const time = weddingConfig.details.time?.trim();
  // America/Sao_Paulo (-03:00); Brazil has no DST
  if (time) {
    const [h = "00", m = "00"] = time.split(":");
    return new Date(
      `${y}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}T${h.padStart(2, "0")}:${m.padStart(2, "0")}:00-03:00`,
    ).getTime();
  }
  return new Date(
    `${y}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}T00:00:00-03:00`,
  ).getTime();
}

function getRemaining(nowMs: number, targetMs: number): Remaining {
  const diff = targetMs - nowMs;
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds, done: false };
}

function pad(value: number): string {
  return String(value).padStart(2, "0");
}

const units: Array<{ key: keyof Omit<Remaining, "done">; label: string }> = [
  { key: "days", label: "Dias" },
  { key: "hours", label: "Horas" },
  { key: "minutes", label: "Minutos" },
  { key: "seconds", label: "Segundos" },
];

export function Countdown() {
  const [remaining, setRemaining] = useState<Remaining | null>(null);
  const targetMs = useMemo(() => getTargetMs(), []);

  useEffect(() => {
    const tick = () => setRemaining(getRemaining(Date.now(), targetMs));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [targetMs]);

  return (
    <section
      id="contagem"
      className="section-anchor relative overflow-hidden border-y border-line/70 bg-deep py-14 text-warm md:py-16"
      aria-labelledby="contagem-title"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, color-mix(in srgb, var(--color-royal-blue) 45%, transparent), transparent 55%)",
        }}
      />

      <div className="section-shell relative z-10">
        <MotionGroup>
          <header data-m="up" className="mx-auto max-w-xl text-center">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-champagne">
              Contagem regressiva
            </p>
            <h2
              id="contagem-title"
              className="mt-4 font-display text-4xl font-normal text-warm sm:text-5xl"
            >
              Até o nosso dia
            </h2>
            <p className="mt-3 font-serif text-sm tracking-wide text-warm/70">
              {weddingConfig.date.displayLong ?? weddingConfig.date.display}
            </p>
          </header>

          <div
            data-m="up"
            className="mx-auto mt-10 flex max-w-3xl items-start justify-center gap-3 sm:gap-6 md:mt-12 md:gap-8"
            aria-live="polite"
            aria-atomic="true"
          >
            {units.map((unit, i) => {
              const value = remaining
                ? unit.key === "days"
                  ? String(remaining.days)
                  : pad(remaining[unit.key])
                : "––";

              return (
                <div
                  key={unit.key}
                  className="flex items-start gap-3 sm:gap-6 md:gap-8"
                >
                  {i > 0 ? (
                    <span
                      className="mt-1 hidden font-serif text-2xl text-gold/55 sm:mt-2 sm:block sm:text-3xl"
                      aria-hidden="true"
                    >
                      :
                    </span>
                  ) : null}
                  <div className="min-w-[3.5rem] text-center sm:min-w-[4.5rem]">
                    <p className="font-serif text-[clamp(2rem,8vw,3.75rem)] font-medium leading-none tracking-wide text-warm tabular-nums">
                      {value}
                    </p>
                    <p className="mt-3 text-[0.62rem] uppercase tracking-[0.2em] text-champagne sm:text-[0.7rem]">
                      {unit.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {remaining?.done ? (
            <p
              data-m="fade"
              className="mt-10 text-center font-display text-xl italic text-gold sm:text-2xl"
            >
              Chegou o nosso dia.
            </p>
          ) : null}
        </MotionGroup>
      </div>
    </section>
  );
}
