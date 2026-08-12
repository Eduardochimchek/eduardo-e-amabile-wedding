/**
 * Lista de convites do casamento.
 *
 * Cada item em `invitations` é um convite (grupo).
 * Quem está no mesmo grupo pode confirmar / desmarcar uns aos outros.
 */

export type Guest = {
  id: string;
  name: string;
  /** Grafias alternativas que também encontram este convite */
  aliases?: string[];
};

export type Invitation = {
  id: string;
  guests: Guest[];
};

export type GuestMatch = {
  guest: Guest;
  invitation: Invitation;
  score: number;
};

function guestId(name: string): string {
  return normalizeGuestName(name)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function invite(
  id: string,
  names: string[],
): Invitation {
  return {
    id,
    guests: names.map((name) => ({
      id: guestId(name),
      name,
    })),
  };
}

/** Grupos conforme lista enviada (enter = convites separados). */
export const invitations: Invitation[] = [
  invite("chimchek-jeronimo", [
    "Sirlene Chimchek",
    "Reginaldo Jeronimo",
    "Julia Chimchek Jeronimo",
  ]),
  invite("nair-nelson", ["Nair Prudencio", "Nelson Jeronimo"]),
  invite("daniela-jeronimo", ["Daniela Jeronimo"]),
  invite("leonardo-jeronimo", ["Leonardo Jeronimo"]),
  invite("regiane-matos", [
    "Regiane Jeronimo",
    "Indionei Caetano de Matos",
    "Cauã Jeronimo de Matos",
    "Nicolas Jeronimo de Matos",
  ]),
  invite("idalcio", ["Idalcio"]),
  invite("lizmeier-sobczak", [
    "Robson Junior Lizmeier",
    "Vanessa Sobczak",
  ]),
  invite("tais-gabriel", [
    "Tais Lizmeier David De Lima",
    "Gabriel David De Lima",
  ]),
  invite("sueli-cristiano", ["Sueli Lizmeier", "Cristiano Lizmeier"]),
  invite("simone-chimchek", [
    "Simone Chimchek",
    "Alexsandro De Jesus Rosa",
    "Enzo Chimchek",
  ]),
  invite("marcos-goudinho", ["Marcos Goudinho Da Silva"]),
  invite("joao-vitoria", ["João Paulo Wessler", "Vitória Speck"]),
];

export function normalizeGuestName(value: string): string {
  return value
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ");
}

function guestSearchNames(guest: Guest): string[] {
  return [guest.name, ...(guest.aliases ?? [])].map(normalizeGuestName);
}

function scoreName(query: string, name: string): number {
  if (!query || !name) return 0;
  if (name === query) return 100;
  if (name.startsWith(`${query} `) || name.startsWith(query)) return 90;

  const qTokens = query.split(" ").filter(Boolean);
  const nTokens = name.split(" ").filter(Boolean);
  if (qTokens.length === 0) return 0;

  // "Nicolas" → "Nicolas Jeronimo de Matos"
  if (qTokens.length === 1 && nTokens[0] === qTokens[0]) return 80;

  // Tokens muito curtos (ex.: "de") não devem abrir busca ampla
  if (qTokens.length === 1 && qTokens[0].length < 3) return 0;

  // Todos os tokens digitados aparecem no nome, na ordem
  let cursor = 0;
  let matched = 0;
  for (const token of qTokens) {
    if (token.length < 2) continue;
    const idx = nTokens.findIndex(
      (part, i) => i >= cursor && part.startsWith(token),
    );
    if (idx === -1) {
      matched = 0;
      break;
    }
    matched += 1;
    cursor = idx + 1;
  }
  if (matched > 0 && matched === qTokens.filter((t) => t.length >= 2).length) {
    return 60 + Math.min(20, matched * 4);
  }

  // Contém a busca como substring (mín. 3 chars)
  if (query.length >= 3 && name.includes(query)) return 40;

  return 0;
}

function bestGuestScore(query: string, guest: Guest): number {
  return Math.max(0, ...guestSearchNames(guest).map((name) => scoreName(query, name)));
}

/**
 * Busca convidados por nome parcial ou completo.
 * Retorna matches ordenados do mais relevante para o menos.
 */
export function searchGuests(
  rawName: string,
  list: Invitation[] = invitations,
): GuestMatch[] {
  const query = normalizeGuestName(rawName);
  if (query.length < 2) return [];

  const matches: GuestMatch[] = [];
  for (const invitation of list) {
    for (const guest of invitation.guests) {
      const score = bestGuestScore(query, guest);
      if (score > 0) {
        matches.push({ guest, invitation, score });
      }
    }
  }

  return matches.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return a.guest.name.localeCompare(b.guest.name, "pt-BR");
  });
}

/** Atalho: um único match → convite; ambíguo ou vazio → null. */
export function findInvitationByName(
  rawName: string,
  list: Invitation[] = invitations,
): Invitation | null {
  const matches = searchGuests(rawName, list);
  if (matches.length === 0) return null;

  const top = matches[0];
  const ambiguous = matches.filter(
    (item) =>
      item.score >= top.score - 5 &&
      item.guest.id !== top.guest.id,
  );
  if (ambiguous.length > 0) return null;

  return top.invitation;
}

export function getInvitationById(
  id: string,
  list: Invitation[] = invitations,
): Invitation | null {
  return list.find((invitation) => invitation.id === id) ?? null;
}

export function isGuestListReady(list: Invitation[] = invitations): boolean {
  return list.length > 0;
}
