import { cn } from "@/lib/utils";

type BotanicalAccentProps = {
  className?: string;
  tone?: "sage" | "gold" | "serenity";
};

/** Lightweight SVG foliage - decorative, no external assets. */
export function BotanicalAccent({
  className,
  tone = "sage",
}: BotanicalAccentProps) {
  const stroke =
    tone === "gold"
      ? "var(--color-soft-gold)"
      : tone === "serenity"
        ? "var(--color-serenity)"
        : "var(--color-sage)";

  return (
    <svg
      viewBox="0 0 120 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none select-none", className)}
      aria-hidden="true"
    >
      <path
        d="M60 150C60 150 58 110 40 88C22 66 18 40 28 22"
        stroke={stroke}
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M60 150C60 150 62 108 82 84C102 60 104 36 94 18"
        stroke={stroke}
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.45"
      />
      <path
        d="M42 92C34 78 30 60 36 46"
        stroke={stroke}
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.4"
      />
      <ellipse
        cx="34"
        cy="54"
        rx="10"
        ry="5"
        transform="rotate(-35 34 54)"
        stroke={stroke}
        strokeWidth="1"
        opacity="0.35"
      />
      <ellipse
        cx="88"
        cy="48"
        rx="11"
        ry="5.5"
        transform="rotate(40 88 48)"
        stroke={stroke}
        strokeWidth="1"
        opacity="0.35"
      />
      <ellipse
        cx="48"
        cy="78"
        rx="9"
        ry="4.5"
        transform="rotate(-28 48 78)"
        stroke={stroke}
        strokeWidth="1"
        opacity="0.3"
      />
    </svg>
  );
}
