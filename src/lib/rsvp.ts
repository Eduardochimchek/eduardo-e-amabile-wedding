export type RsvpAttendance = "yes" | "no";

export type RsvpInput = {
  fullName?: unknown;
  attendance?: unknown;
  guests?: unknown;
  notes?: unknown;
  /** Honeypot — must be empty when present */
  website?: unknown;
};

export type ValidRsvp = {
  fullName: string;
  attendance: RsvpAttendance;
  guests: number;
  notes: string | null;
};

const MIN_NAME = 2;
const MAX_NAME = 120;
const MAX_NOTES = 500;
const MAX_GUESTS = 10;

export type RsvpValidationResult =
  | { ok: true; data: ValidRsvp }
  | { ok: false; message: string; code?: "HONEYPOT" };

export function validateRsvpPayload(body: RsvpInput): RsvpValidationResult {
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return {
      ok: false,
      message: "Não foi possível processar a solicitação.",
      code: "HONEYPOT",
    };
  }

  if (body.attendance !== "yes" && body.attendance !== "no") {
    return {
      ok: false,
      message: "Confirmação inválida. Escolha se estará presente ou não.",
    };
  }

  if (typeof body.fullName !== "string") {
    return { ok: false, message: "Nome completo é obrigatório." };
  }

  const fullName = body.fullName.trim().replace(/\s+/g, " ");
  if (fullName.length < MIN_NAME) {
    return {
      ok: false,
      message: "Informe um nome completo válido.",
    };
  }
  if (fullName.length > MAX_NAME) {
    return {
      ok: false,
      message: `O nome deve ter no máximo ${MAX_NAME} caracteres.`,
    };
  }

  let notes: string | null = null;
  if (body.notes !== undefined && body.notes !== null && body.notes !== "") {
    if (typeof body.notes !== "string") {
      return { ok: false, message: "Observação inválida." };
    }
    const trimmed = body.notes.trim();
    if (trimmed.length > MAX_NOTES) {
      return {
        ok: false,
        message: `A observação deve ter no máximo ${MAX_NOTES} caracteres.`,
      };
    }
    notes = trimmed || null;
  }

  let guests = 0;
  if (body.attendance === "no") {
    guests = 0;
  } else {
    const raw =
      typeof body.guests === "number"
        ? body.guests
        : typeof body.guests === "string"
          ? Number(body.guests)
          : NaN;

    if (!Number.isFinite(raw)) {
      return {
        ok: false,
        message: "Quantidade de acompanhantes inválida.",
      };
    }

    guests = Math.min(MAX_GUESTS, Math.max(0, Math.floor(raw)));
  }

  return {
    ok: true,
    data: {
      fullName,
      attendance: body.attendance,
      guests,
      notes,
    },
  };
}

export const RSVP_LIMITS = {
  MIN_NAME,
  MAX_NAME,
  MAX_NOTES,
  MAX_GUESTS,
} as const;
