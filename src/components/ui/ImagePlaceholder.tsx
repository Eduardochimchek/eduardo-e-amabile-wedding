import { cn } from "@/lib/utils";

type ImagePlaceholderProps = {
  label: string;
  className?: string;
  aspect?: "portrait" | "square" | "landscape";
};

/**
 * Elegant placeholder until real photos are added under /public/images.
 * When imageSrc is provided in config, prefer next/image instead.
 */
export function ImagePlaceholder({
  label,
  className,
  aspect = "portrait",
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-gradient-to-br from-serenity/25 via-warm to-champagne/30",
        aspect === "portrait" && "aspect-[3/4]",
        aspect === "square" && "aspect-square",
        aspect === "landscape" && "aspect-[4/3]",
        className,
      )}
      role="img"
      aria-label={label}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, color-mix(in srgb, var(--color-soft-gold) 35%, transparent), transparent 45%), radial-gradient(circle at 80% 70%, color-mix(in srgb, var(--color-sage) 25%, transparent), transparent 40%)",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="text-center text-[0.65rem] font-medium uppercase tracking-[0.18em] text-deep/55">
          {label}
        </p>
      </div>
      <div
        className="pointer-events-none absolute inset-4 border border-gold/25"
        aria-hidden="true"
      />
    </div>
  );
}
