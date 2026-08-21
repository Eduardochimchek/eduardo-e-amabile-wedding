"use client";

import { useEffect, useId, useRef, useState } from "react";
import { weddingConfig } from "@/config/wedding";
import { cn } from "@/lib/utils";
import { lockBodyScroll, unlockBodyScroll } from "@/lib/scroll-lock";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 24;
      setScrolled((prev) => (prev === next ? prev : next));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    lockBodyScroll();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      unlockBodyScroll();
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={cn(
        "nav-shell fixed inset-x-0 top-0 z-50",
        scrolled || open
          ? "bg-warm/92 shadow-[0_1px_0_var(--color-line)] backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <nav
        className={cn(
          "section-shell flex items-center justify-between transition-[height] duration-300",
          scrolled ? "h-14 md:h-16" : "h-16 md:h-[4.25rem]",
        )}
        aria-label="Navegação principal"
      >
        <a
          href="#topo"
          className={cn(
            "font-display normal-case text-2xl transition-colors md:text-[1.6rem]",
            scrolled || open ? "text-deep" : "text-warm",
          )}
          onClick={close}
        >
          {weddingConfig.couple.partnerOne.firstName}
          <span className="mx-1.5 text-gold">&</span>
          {weddingConfig.couple.partnerTwo.firstName}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {weddingConfig.navigation.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  "text-[0.72rem] font-medium uppercase tracking-[0.16em] transition-colors",
                  scrolled
                    ? "text-deep/80 hover:text-royal"
                    : "text-warm/90 hover:text-warm",
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          ref={toggleRef}
          type="button"
          className={cn(
            "inline-flex h-11 w-11 items-center justify-center rounded-sm md:hidden",
            scrolled || open ? "text-deep" : "text-warm",
          )}
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="relative block h-3.5 w-5" aria-hidden="true">
            <span
              className={cn(
                "absolute left-0 h-px w-full bg-current transition-transform duration-300",
                open ? "top-1.5 rotate-45" : "top-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-1.5 h-px w-full bg-current transition-opacity duration-200",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 h-px w-full bg-current transition-transform duration-300",
                open ? "top-1.5 -rotate-45" : "top-3",
              )}
            />
          </span>
        </button>
      </nav>

      <div
        id={menuId}
        className={cn(
          "md:hidden overflow-hidden border-t border-line/70 bg-warm transition-[max-height,opacity] duration-300",
          open ? "max-h-[min(70vh,24rem)] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="section-shell flex flex-col gap-1 py-4">
          {weddingConfig.navigation.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block py-3 font-sans text-2xl text-deep transition-colors hover:text-royal"
                onClick={close}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
