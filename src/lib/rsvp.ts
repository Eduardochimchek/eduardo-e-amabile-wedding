export type RsvpGuestResponse = {
  guestId: string;
  name: string;
  attending: boolean;
};

export type RsvpInput = {
  invitationId?: unknown;
  searchedName?: unknown;
  responses?: unknown;
  notes?: unknown;
  /** Honeypot - must be empty when present */
  website?: unknown;
};

export type ValidRsvp = {
  invitationId: string;
  searchedName: string;
  responses: RsvpGuestResponse[];
  attendingCount: number;
  decliningCount: number;
  notes: string | null;
};

export type InvitationLike = {
  id: string;
  guests: Array<{ id: string; name: string }>;
};

const MIN_NAME = 2;
const MAX_NAME = 120;
const MAX_NOTES = 500;
const MAX_GUESTS = 20;

export type RsvpValidationResult =
  | { ok: true; data: ValidRsvp }
  | { ok: false; message: string; code?: "HONEYPOT" };

function asTrimmedString(value: unknown): string | null {
  if (typeof value !== "string") return null;
  return value.trim().replace(/\s+/g, " ");
}

function parseResponses(
  value: unknown,
  invitation: InvitationLike,
): RsvpGuestResponse[] | null {
  if (!Array.isArray(value) || value.length === 0) return null;
  if (value.length > MAX_GUESTS) return null;

  const allowed = new Map(
    invitation.guests.map((guest) => [guest.id, guest.name] as const),
  );
  const seen = new Set<string>();
  const responses: RsvpGuestResponse[] = [];

  for (const item of value) {
    if (!item || typeof item !== "object") return null;
    const row = item as Record<string, unknown>;
    if (typeof row.guestId !== "string" || typeof row.attending !== "boolean") {
      return null;
    }
    const guestId = row.guestId.trim();
    if (!allowed.has(guestId) || seen.has(guestId)) return null;
    seen.add(guestId);

    const expectedName = allowed.get(guestId)!;
    const name =
      typeof row.name === "string" && row.name.trim()
        ? row.name.trim().replace(/\s+/g, " ")
        : expectedName;

    if (name !== expectedName) return null;

    responses.push({
      guestId,
      name: expectedName,
      attending: row.attending,
    });
  }

  if (responses.length !== invitation.guests.length) return null;

  return responses;
}

export function validateRsvpPayload(
  body: RsvpInput,
  list: InvitationLike[],
): RsvpValidationResult {
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return {
      ok: false,
      message: "Não foi possível processar a solicitação.",
      code: "HONEYPOT",
    };
  }

  const invitationId = asTrimmedString(body.invitationId);
  if (!invitationId) {
    return { ok: false, message: "Convite inválido." };
  }

  const invitation = list.find((item) => item.id === invitationId);
  if (!invitation) {
    return {
      ok: false,
      message: "Não encontramos esse convite. Confira o nome e tente de novo.",
    };
  }

  const searchedName = asTrimmedString(body.searchedName);
  if (!searchedName || searchedName.length < MIN_NAME) {
    return { ok: false, message: "Informe um nome válido para a busca." };
  }
  if (searchedName.length > MAX_NAME) {
    return {
      ok: false,
      message: `O nome deve ter no máximo ${MAX_NAME} caracteres.`,
    };
  }

  const responses = parseResponses(body.responses, invitation);
  if (!responses) {
    return {
      ok: false,
      message: "Selecione quem do convite estará presente.",
    };
  }

  let notes: string | null = null;
  if (body.notes !== undefined && body.notes !== null && body.notes !== "") {
    if (typeof body.notes !== "string") {
      return { ok: false, message: "Mensagem inválida." };
    }
    const trimmed = body.notes.trim();
    if (trimmed.length > MAX_NOTES) {
      return {
        ok: false,
        message: `A mensagem deve ter no máximo ${MAX_NOTES} caracteres.`,
      };
    }
    notes = trimmed || null;
  }

  const attendingCount = responses.filter((item) => item.attending).length;
  const decliningCount = responses.length - attendingCount;

  return {
    ok: true,
    data: {
      invitationId,
      searchedName,
      responses,
      attendingCount,
      decliningCount,
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
