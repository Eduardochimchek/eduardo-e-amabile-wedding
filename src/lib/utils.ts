import type { WeddingDetailsConfig } from "@/types/wedding";

export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export function formatCurrencyBRL(amount: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
}

export type VisibleWeddingDetail = {
  label: string;
  value: string;
  href?: string;
};

/** Only returns fields that are actually configured — never invents data. */
export function getVisibleWeddingDetails(
  details: WeddingDetailsConfig,
  dateDisplay: string,
): VisibleWeddingDetail[] {
  const items: VisibleWeddingDetail[] = [
    { label: "Data", value: dateDisplay },
  ];

  if (details.time?.trim()) {
    items.push({ label: "Horário", value: details.time.trim() });
  }

  if (details.venue.name?.trim()) {
    items.push({ label: "Local", value: details.venue.name.trim() });
  }

  const addressParts = [details.venue.address, details.venue.city]
    .map((part) => part?.trim())
    .filter(Boolean);

  if (addressParts.length > 0) {
    items.push({
      label: "Endereço",
      value: addressParts.join(" — "),
      href: details.venue.mapUrl?.trim() || undefined,
    });
  }

  if (details.dressCode?.trim()) {
    items.push({ label: "Traje", value: details.dressCode.trim() });
  }

  if (details.additionalNotes?.trim()) {
    items.push({ label: "Observações", value: details.additionalNotes.trim() });
  }

  return items;
}

export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }

    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(textarea);
    return ok;
  } catch {
    return false;
  }
}
