"use client";

import { FormEvent, useMemo, useState } from "react";
import { weddingConfig } from "@/config/wedding";
import {
  findInvitationByName,
  isGuestListReady,
  type Invitation,
} from "@/data/guests";
import { MotionGroup } from "@/components/motion/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import { RSVP_LIMITS } from "@/lib/rsvp";

type Step = "search" | "invite" | "success";
type Status = "idle" | "submitting" | "error" | "not_configured";

function GoldHeart({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M12 20.4S3.6 15.1 3.6 9.4A4.4 4.4 0 0 1 12 6.2a4.4 4.4 0 0 1 8.4 3.2C20.4 15.1 12 20.4 12 20.4Z" />
    </svg>
  );
}

export function RSVP() {
  const listReady = isGuestListReady();
  const [step, setStep] = useState<Step>("search");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [searchName, setSearchName] = useState("");
  const [website, setWebsite] = useState("");
  const [notes, setNotes] = useState("");
  const [invitation, setInvitation] = useState<Invitation | null>(null);
  const [attending, setAttending] = useState<Record<string, boolean>>({});
  const [selecting, setSelecting] = useState(false);
  const [readyToSubmit, setReadyToSubmit] = useState(false);

  const isBusy = status === "submitting";
  const attendingCount = useMemo(
    () => Object.values(attending).filter(Boolean).length,
    [attending],
  );

  function resetToSearch() {
    setStep("search");
    setInvitation(null);
    setAttending({});
    setSelecting(false);
    setReadyToSubmit(false);
    setNotes("");
    setStatus("idle");
    setMessage("");
  }

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setStatus("idle");

    if (!listReady) {
      setStatus("error");
      setMessage(
        "A lista de convites ainda está sendo preparada. Em breve você poderá confirmar por aqui.",
      );
      return;
    }

    const name = searchName.trim().replace(/\s+/g, " ");
    if (name.length < RSVP_LIMITS.MIN_NAME) {
      setStatus("error");
      setMessage("Digite seu nome completo para encontrarmos o convite.");
      return;
    }

    const found = findInvitationByName(name);
    if (!found) {
      setStatus("error");
      setMessage(
        "Não encontramos esse nome na lista. Confira a grafia ou fale conosco.",
      );
      return;
    }

    const nextAttending: Record<string, boolean> = {};
    for (const guest of found.guests) {
      nextAttending[guest.id] = true;
    }

    setInvitation(found);
    setAttending(nextAttending);
    setSelecting(false);
    setReadyToSubmit(false);
    setStep("invite");
    setSearchName(name);
  }

  function confirmAll() {
    if (!invitation) return;
    const next: Record<string, boolean> = {};
    for (const guest of invitation.guests) {
      next[guest.id] = true;
    }
    setAttending(next);
    setSelecting(false);
    setReadyToSubmit(true);
  }

  function enableSelecting() {
    setSelecting(true);
    setReadyToSubmit(true);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!invitation) return;

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          invitationId: invitation.id,
          searchedName: searchName.trim(),
          responses: invitation.guests.map((guest) => ({
            guestId: guest.id,
            name: guest.name,
            attending: Boolean(attending[guest.id]),
          })),
          notes: notes.trim() || undefined,
          website,
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

      setStep("success");
      setStatus("idle");
      setMessage(data.message ?? "Presença registrada. Obrigado!");
      setWebsite("");
      setNotes("");
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
          <div data-m="up" className="mx-auto mt-12 max-w-xl">
            {step === "search" ? (
              <form
                onSubmit={handleSearch}
                className="space-y-5"
                noValidate
              >
                <div
                  className="pointer-events-none absolute left-0 top-0 -z-10 h-0 w-0 overflow-hidden opacity-0"
                  aria-hidden="true"
                >
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>

                <div>
                  <label
                    htmlFor="searchName"
                    className="mb-2 block text-sm text-warm/90"
                  >
                    Digite seu nome
                  </label>
                  <input
                    id="searchName"
                    name="searchName"
                    type="text"
                    autoComplete="name"
                    required
                    maxLength={RSVP_LIMITS.MAX_NAME}
                    disabled={isBusy}
                    value={searchName}
                    placeholder="Ex.: Maria da Silva"
                    onChange={(e) => setSearchName(e.target.value)}
                    className="field border-warm/15 bg-warm text-deep"
                  />
                  <p className="mt-2 text-xs leading-relaxed text-warm/60">
                    Use o nome como está no convite para encontrarmos sua lista.
                  </p>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Buscar convite
                </button>
              </form>
            ) : null}

            {step === "invite" && invitation ? (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="text-center">
                  <p className="inline-flex items-center gap-2 font-display text-2xl text-warm sm:text-3xl">
                    Encontramos seu convite
                    <GoldHeart className="h-4 w-4 text-gold" />
                  </p>
                  <p className="mt-2 text-sm text-warm/70">
                    Busca por: {searchName}
                  </p>
                </div>

                <fieldset>
                  <legend className="mb-3 text-sm text-warm/90">
                    Seu convite inclui
                  </legend>
                  <div className="space-y-2">
                    {invitation.guests.map((guest) => {
                      const checked = Boolean(attending[guest.id]);
                      const locked = !selecting;
                      return (
                        <label
                          key={guest.id}
                          className={cn(
                            "flex items-center gap-3 rounded-sm border px-4 py-3 transition-colors",
                            checked
                              ? "border-gold/70 bg-warm/10"
                              : "border-warm/20 bg-warm/5",
                            locked ? "cursor-default" : "cursor-pointer",
                          )}
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            disabled={isBusy || locked}
                            onChange={() =>
                              setAttending((prev) => ({
                                ...prev,
                                [guest.id]: !prev[guest.id],
                              }))
                            }
                            className="h-4 w-4 accent-[var(--color-soft-gold)]"
                          />
                          <span className="text-sm text-warm">{guest.name}</span>
                        </label>
                      );
                    })}
                  </div>
                </fieldset>

                {!readyToSubmit ? (
                  <div className="grid gap-3 sm:grid-cols-2">
                    <button
                      type="button"
                      onClick={confirmAll}
                      className="btn-primary w-full"
                    >
                      Confirmar todos
                    </button>
                    <button
                      type="button"
                      onClick={enableSelecting}
                      className="btn-ghost w-full border-warm/35 text-warm hover:border-gold hover:bg-warm/10"
                    >
                      Vou selecionar quem irá
                    </button>
                  </div>
                ) : (
                  <>
                    {selecting ? (
                      <p className="text-center text-sm text-warm/75">
                        Quem estará presente? Marque ou desmarque abaixo.
                        {attendingCount === 0
                          ? " Ninguém marcado: registraremos que o convite não poderá comparecer."
                          : null}
                      </p>
                    ) : (
                      <p className="text-center text-sm text-warm/75">
                        Todos do convite marcados como presentes.
                      </p>
                    )}

                    <div>
                      <label
                        htmlFor="notes"
                        className="mb-2 block text-sm text-warm/90"
                      >
                        Mensagem aos noivos{" "}
                        <span className="text-warm/60">(opcional)</span>
                      </label>
                      <textarea
                        id="notes"
                        name="notes"
                        rows={4}
                        maxLength={RSVP_LIMITS.MAX_NOTES}
                        disabled={isBusy}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
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
                      {isBusy
                        ? "Enviando..."
                        : attendingCount === 0
                          ? "Confirmar ausência"
                          : attendingCount === invitation.guests.length
                            ? "Confirmar presença"
                            : `Confirmar ${attendingCount} de ${invitation.guests.length}`}
                    </button>
                  </>
                )}

                <button
                  type="button"
                  onClick={resetToSearch}
                  className="mx-auto block text-sm text-warm/65 underline decoration-warm/30 underline-offset-4 transition hover:text-warm"
                >
                  Buscar outro nome
                </button>
              </form>
            ) : null}

            {step === "success" ? (
              <div className="space-y-4 text-center">
                <GoldHeart className="mx-auto h-5 w-5 text-gold" />
                <p
                  role="status"
                  className="rsvp-feedback rsvp-feedback--ok font-display text-2xl text-serenity"
                >
                  {message || "Presença registrada. Obrigado!"}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchName("");
                    resetToSearch();
                  }}
                  className="text-sm text-warm/70 underline decoration-warm/30 underline-offset-4 transition hover:text-warm"
                >
                  Confirmar outro convite
                </button>
              </div>
            ) : null}

            <div className="mt-5 min-h-[1.5rem] text-center text-sm">
              {status === "error" ? (
                <p
                  role="alert"
                  className="rsvp-feedback rsvp-feedback--err text-alert"
                >
                  {message}
                </p>
              ) : null}
              {status === "not_configured" ? (
                <p role="status" className="text-serenity">
                  {message}
                </p>
              ) : null}
            </div>
          </div>
        </MotionGroup>
      </div>
    </section>
  );
}
