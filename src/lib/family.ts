import type { FamilyMember, WeddingConfig } from "@/types/wedding";

function joinNames(names: string[]): string {
  if (names.length === 0) return "";
  if (names.length === 1) return names[0];
  if (names.length === 2) return `${names[0]} & ${names[1]}`;
  return `${names.slice(0, -1).join(", ")} & ${names[names.length - 1]}`;
}

/** Builds family blurb from configured members — no hardcoded names in UI. */
export function getFamilyDescription(
  family: FamilyMember[],
  fallbackCoupleNames: string,
): string {
  const partners = family
    .filter((m) => m.role === "partner")
    .map((m) => m.name);
  const children = family.filter((m) => m.role === "child").map((m) => m.name);

  const partnersLabel = joinNames(partners) || fallbackCoupleNames;
  if (children.length === 0) {
    return `${partnersLabel}, construindo uma vida juntos.`;
  }

  return `${partnersLabel} — e ${joinNames(children)}, que fazem dessa história um lar.`;
}

export function getFamilyDescriptionFromConfig(config: WeddingConfig): string {
  return getFamilyDescription(config.family, config.couple.shortNames);
}
