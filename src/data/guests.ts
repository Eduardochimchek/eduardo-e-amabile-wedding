/**
 * Lista de convites do casamento.
 *
 * Como preencher:
 * 1. Cada objeto em `invitations` é um convite (família / grupo).
 * 2. `guests` são as pessoas incluídas naquele convite.
 * 3. A busca usa o nome completo (e aliases, se houver).
 *
 * Exemplo:
 * {
 *   id: "familia-silva",
 *   guests: [
 *     { id: "maria-silva", name: "Maria da Silva" },
 *     { id: "joao-silva", name: "João da Silva", aliases: ["Joao da Silva"] },
 *     { id: "pedro-silva", name: "Pedro da Silva" },
 *   ],
 * }
 *
 * Deixe o array vazio até a lista final estar pronta.
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

/** Preencha aqui quando a lista estiver pronta. */
export const invitations: Invitation[] = [];

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

export function findInvitationByName(
  rawName: string,
  list: Invitation[] = invitations,
): Invitation | null {
  const query = normalizeGuestName(rawName);
  if (query.length < 2) return null;

  const exact = list.find((invitation) =>
    invitation.guests.some((guest) => guestSearchNames(guest).includes(query)),
  );
  if (exact) return exact;

  // Fallback: nome digitado é o início do nome completo (mín. 5 chars)
  if (query.length < 5) return null;

  const partialMatches = list.filter((invitation) =>
    invitation.guests.some((guest) =>
      guestSearchNames(guest).some(
        (name) => name.startsWith(query) || query.startsWith(name),
      ),
    ),
  );

  return partialMatches.length === 1 ? partialMatches[0] : null;
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
