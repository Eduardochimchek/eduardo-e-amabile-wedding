"use client";

import { FormEvent, useState } from "react";
import { weddingConfig } from "@/config/wedding";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

type RsvpStatus = "idle" | "filling" | "submitting" | "success" | "error" | "not_configured";

type FormState = {
  fullName: string;
  attendance: "yes" | "no" | "";
  guests: string;
  notes: string;
};

const initialForm: FormState = {
  fullName: "",
  attendance: "",
  guests: "0",
  notes: "",
};

export function RSVP() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<RsvpStatus>("idle");
  const [message, setMessage] = useState<string>("");

  const isBusy = status === "submitting";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.fullName.trim() || !form.attendance) {
      setStatus("error");
      setMessage("Preencha nome e confirmação para continuar.");
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName.trim(),
          attendance: form.attendance,
          guests: Number(form.guests) || 0,
          notes: form.notes.trim() || undefined,
        }),
      });

      const data = (await response.json()) as {
        ok?: boolean;
        code?: string;
        message?: string;
      };

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
      className="section-pad bg-deep text-warm"
      aria-labelledby="rsvp-title"
    >
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            id="rsvp-title"
            title={weddingConfig.copy.rsvpTitle}
            description={weddingConfig.copy.rsvpSubtitle}
            tone="light"
          />
        </Reveal>

        <Reveal className="mx-auto mt-12 max-w-xl" delayMs={80}>
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
            noValidate
            onChange={() => {
              if (status === "idle") setStatus("filling");
            }}
          >
            <div>
              <label htmlFor="fullName" className="mb-2 block text-sm text-warm/85">
                Nome completo
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                required
                disabled={isBusy}
                value={form.fullName}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, fullName: e.target.value }))
                }
                className="field border-warm/15 bg-warm/95"
              />
            </div>

            <fieldset>
              <legend className="mb-3 text-sm text-warm/85">Confirmação</legend>
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
                        : "border-warm/20 hover:border-warm/40",
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
              <label htmlFor="guests" className="mb-2 block text-sm text-warm/85">
                Quantidade de acompanhantes
              </label>
              <select
                id="guests"
                name="guests"
                disabled={isBusy || form.attendance === "no"}
                value={form.attendance === "no" ? "0" : form.guests}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, guests: e.target.value }))
                }
                className="field border-warm/15 bg-warm/95"
              >
                {Array.from({ length: 6 }, (_, i) => (
                  <option key={i} value={i}>
                    {i === 0 ? "Nenhum" : String(i)}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="notes" className="mb-2 block text-sm text-warm/85">
                Observação <span className="text-warm/55">(opcional)</span>
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                disabled={isBusy}
                value={form.notes}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, notes: e.target.value }))
                }
                className="field min-h-[7rem] resize-y border-warm/15 bg-warm/95"
              />
            </div>

            <button
              type="submit"
              className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
              disabled={isBusy}
            >
              {isBusy ? "Enviando..." : "Confirmar presença"}
            </button>

            <div aria-live="polite" className="min-h-[1.5rem] text-center text-sm">
              {status === "success" ? (
                <p className="text-champagne">{message}</p>
              ) : null}
              {status === "error" ? (
                <p className="text-champagne">{message}</p>
              ) : null}
              {status === "not_configured" ? (
                <p className="text-champagne/95">{message}</p>
              ) : null}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
