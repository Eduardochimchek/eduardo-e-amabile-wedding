import { weddingConfig } from "@/config/wedding";

export function Footer() {
  return (
    <footer className="border-t border-line bg-warm py-12">
      <div className="section-shell text-center">
        <p className="font-display text-2xl text-deep sm:text-3xl">
          {weddingConfig.couple.shortNames}
        </p>
        <p className="mt-3 tracking-[0.28em] text-muted">
          {weddingConfig.date.displayCompact}
        </p>
        <p className="mt-5 text-sm italic text-muted">
          {weddingConfig.copy.footerMessage}
        </p>
      </div>
    </footer>
  );
}
