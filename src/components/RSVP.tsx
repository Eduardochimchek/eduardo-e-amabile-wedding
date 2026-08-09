"use client";

import { FormEvent, useState } from "react";
import { weddingConfig } from "@/config/wedding";
import { MotionGroup } from "@/components/motion/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import { RSVP_LIMITS } from "@/lib/rsvp";

type RsvpStatus =
  | "idle"
  | "filling"
  | "submitting"
  | "success"
  | "error"
  | "not_configured";

type FormState = {
  fullName: string;
  attendance: "yes" | "no" | "";
  guests: string;
  notes: string;
  website: string;
};

const initialForm: FormState = {
  fullName: "",
  attendance: "",
  guests: "0",
  notes: "",
  website: "",
};

export function RSVP() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<RsvpStatus>("idle");
  const [message, setMessage] = useState<string>("");

  const isBusy = status === "submitting";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const fullName = form.fullName.trim();
    if (!fullName || !form.attendance) {
      setStatus("error");
      setMessage("Preencha nome e confirmação para continuar.");
      return;
    }

    const guests =
      form.attendance === "no"
        ? 0
        : Math.min(
            RSVP_LIMITS.MAX_GUESTS,
            Math.max(0, Math.floor(Number(form.guests) || 0)),
          );

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          attendance: form.attendance,
          guests,
          notes: form.notes.trim() || undefined,
          website: form.website,
        }),
      });

      const data = (await response.json()) as {
        ok?: boolean;
        code?: string;
        message?: string;
      };

      if (response.status === 429) {
        setStatus("error");
        setMessage(
          data.message ??
            "Muitas tentativas. Aguarde um momento e tente novamente.",
        );
        return;
      }

      if (response.status === 501 || data.code === "NOT_CONFIGURED") {
        setStatus("not_configured");
        setMessage(
          data.message ??
            "A confirmação ainda está sendo preparada. Em breve você poderá enviar por aqui.",
        );
        return;
      }

      if (!response.ok || !data.ok) {
        setStatus("error");
        setMessage(data.message ?? "Não foi possível enviar. Tente novamente.");
        return;
      }

      setStatus("success");
      setMessage(data.message ?? "Presença registrada. Obrigado!");
      setForm(initialForm);
    } catch {
      setStatus("error");
      setMessage("Falha de conexão. Verifique sua internet e tente novamente.");
    }
  }

  return (
    <section
      id="rsvp"
      className="section-pad section-anchor bg-deep text-warm"
      aria-labelledby="rsvp-title"
    >
      <div className="section-shell">
        <MotionGroup>
          <div data-m="up">
            <SectionHeading
              id="rsvp-title"
              title={weddingConfig.copy.rsvpTitle}
              description={weddingConfig.copy.rsvpSubtitle}
              tone="light"
            />
          </div>
        </MotionGroup>

        <MotionGroup>
          <form
            data-m="up"
            onSubmit={handleSubmit}
            className="relative mx-auto mt-12 max-w-xl space-y-5"
            noValidate
            onChange={() => {
              if (status === "idle") setStatus("filling");
            }}
          >
          {/* Honeypot — hidden from humans */}
          <div className="pointer-events-none absolute left-0 top-0 -z-10 h-0 w-0 overflow-hidden opacity-0" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              id="website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={form.website}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, website: e.target.value }))
              }
            />
          </div>

          <div>
            <label htmlFor="fullName" className="mb-2 block text-sm text-warm/90">
              Nome completo
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              required
              maxLength={RSVP_LIMITS.MAX_NAME}
              disabled={isBusy}
              value={form.fullName}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, fullName: e.target.value }))
              }
              className="field border-warm/15 bg-warm text-deep"
            />
          </div>

          <fieldset>
            <legend className="mb-3 text-sm text-warm/90">Confirmação</legend>
            <div className="grid gap-3 sm:grid-cols-2">
              {(
                [
                  { value: "yes", label: "Estarei presente" },
                  { value: "no", label: "Não poderei ir" },
                ] as const
              ).map((option) => (
                <label
                  key={option.value}
                  className={cn(
                    "flex cursor-pointer items-center gap-3 rounded-sm border px-4 py-3 transition-colors",
                    form.attendance === option.value
                      ? "border-gold bg-warm/10"
                      : "border-warm/25 hover:border-warm/45",
                  )}
                >
                  <input
                    type="radio"
                    name="attendance"
                    value={option.value}
                    checked={form.attendance === option.value}
                    disabled={isBusy}
                    onChange={() =>
                      setForm((prev) => ({
                        ...prev,
                        attendance: option.value,
                        guests: option.value === "no" ? "0" : prev.guests,
                      }))
                    }
                    className="accent-[var(--color-soft-gold)]"
                  />
                  <span className="text-sm text-warm">{option.label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div>
            <label htmlFor="guests" className="mb-2 block text-sm text-warm/90">
              Quantidade de acompanhantes
            </label>
            <select
              id="guests"
              name="guests"
              disabled={isBusy || form.attendance === "no"}
              value={form.guests}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, guests: e.target.value }))
              }
              className="field border-warm/15 bg-warm text-deep"
            >
              {Array.from({ length: RSVP_LIMITS.MAX_GUESTS + 1 }, (_, i) => (
                <option key={i} value={i}>
                  {i === 0 ? "Nenhum" : String(i)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="notes" className="mb-2 block text-sm text-warm/90">
              Observação <span className="text-warm/60">(opcional)</span>
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={4}
              maxLength={RSVP_LIMITS.MAX_NOTES}
              disabled={isBusy}
              value={form.notes}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, notes: e.target.value }))
              }
              className="field min-h-[7rem] resize-y border-warm/15 bg-warm text-deep"
            />
          </div>

          <button
            type="submit"
            className={cn(
              "btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70",
              isBusy && "rsvp-pulse",
            )}
            disabled={isBusy}
          >
            {isBusy ? "Enviando..." : "Confirmar presença"}
          </button>

          <div className="min-h-[1.5rem] text-center text-sm">
            {status === "success" ? (
              <p role="status" className="rsvp-feedback rsvp-feedback--ok text-serenity">
                {message}
              </p>
            ) : null}
            {status === "error" ? (
              <p role="alert" className="rsvp-feedback rsvp-feedback--err text-alert">
                {message}
              </p>
            ) : null}
            {status === "not_configured" ? (
              <p role="status" className="text-serenity">
                {message}
              </p>
            ) : null}
          </div>
          </form>
        </MotionGroup>
      </div>
    </section>
  );
}
