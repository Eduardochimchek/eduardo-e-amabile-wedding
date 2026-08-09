import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  tone?: "default" | "light";
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "center",
  className,
  tone = "default",
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        "mx-auto max-w-2xl",
        align === "center" ? "text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
      <h2
        id={id}
        className={cn(
          "display-title text-4xl sm:text-5xl md:text-[3.35rem]",
          tone === "light" && "text-warm",
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          "gold-rule mt-6",
          align === "center" ? "mx-auto" : "mx-0",
        )}
        aria-hidden="true"
      />
      {description ? (
        <p
          className={cn(
            "body-copy mt-6 text-base sm:text-lg",
            tone === "light" && "text-warm/85",
          )}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}
