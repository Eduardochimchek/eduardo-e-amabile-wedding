"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import type { GiftItem } from "@/types/wedding";
import { weddingConfig } from "@/config/wedding";
import { copyToClipboard, formatGiftAmount } from "@/lib/utils";
import { lockBodyScroll, unlockBodyScroll } from "@/lib/scroll-lock";

type PaymentModalProps = {
  gift: GiftItem | null;
  open: boolean;
  onClose: () => void;
  returnFocusRef?: React.RefObject<HTMLElement | null>;
};

export function PaymentModal({
  gift,
  open,
  onClose,
  returnFocusRef,
}: PaymentModalProps) {
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [displayGift, setDisplayGift] = useState<GiftItem | null>(gift);
  const { payment } = weddingConfig;

  // Keep last gift while the exit transition plays (gift becomes null on close).
  if (gift && gift !== displayGift) {
    setDisplayGift(gift);
  }

  const current = displayGift;
  const pixKey = payment.pix.key?.trim();
  const qrCodeSrc = payment.pix.qrCodeSrc?.trim();
  const hasPaymentInfo = payment.enabled && Boolean(pixKey);

  useEffect(() => {
    let openFrame = 0;
    let closeTimer = 0;

    if (open) {
      openFrame = window.requestAnimationFrame(() => {
        setMounted(true);
        openFrame = window.requestAnimationFrame(() => setVisible(true));
      });
      return () => window.cancelAnimationFrame(openFrame);
    }

    openFrame = window.requestAnimationFrame(() => setVisible(false));
    closeTimer = window.setTimeout(() => setMounted(false), 280);
    return () => {
      window.cancelAnimationFrame(openFrame);
      window.clearTimeout(closeTimer);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    lockBodyScroll();
    closeRef.current?.focus();
    const focusReturn = returnFocusRef?.current ?? null;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setCopied(false);
        onClose();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      unlockBodyScroll();
      window.removeEventListener("keydown", onKeyDown);
      focusReturn?.focus();
    };
  }, [open, onClose, returnFocusRef]);

  if (!mounted || !current) return null;

  async function handleCopy() {
    if (!pixKey) return;
    const ok = await copyToClipboard(pixKey);
    setCopied(ok);
  }

  function handleClose() {
    setCopied(false);
    onClose();
  }

  return (
    <div
      className="modal-root fixed inset-0 z-[60] flex items-end justify-center p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      data-open={visible ? "true" : "false"}
    >
      <button
        type="button"
        className="modal-overlay absolute inset-0 bg-deep/55 backdrop-blur-[2px]"
        aria-label="Fechar modal"
        onClick={handleClose}
      />

      <div
        ref={panelRef}
        className="modal-panel relative z-10 w-full max-w-md rounded-lg bg-warm p-6 shadow-lift sm:p-8"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={handleClose}
          className="absolute right-4 top-4 text-sm uppercase tracking-[0.14em] text-muted transition-colors hover:text-deep"
        >
          Fechar
        </button>

        <p className="eyebrow">Presentear</p>
        <h3 id={titleId} className="mt-3 font-sans text-3xl text-deep">
          {current.title}
        </h3>
        <p className="mt-3 body-copy text-sm">{current.description}</p>

        {typeof current.amount === "number" ? (
          <p className="mt-5 font-sans text-xl font-medium text-royal sm:text-2xl">
            {formatGiftAmount(current.amount, { fromPrice: current.fromPrice })}
          </p>
        ) : (
          <p className="mt-5 text-sm text-muted">
            Contribuição livre. Escolha o valor que fizer sentido para você.
          </p>
        )}

        <div className="mt-6 border-t border-line pt-6">
          {hasPaymentInfo ? (
            <div className="space-y-4">
              <p className="text-sm text-muted">
                Pagamento via PIX
                {payment.pix.beneficiaryName
                  ? ` (${payment.pix.beneficiaryName})`
                  : ""}
              </p>

              {qrCodeSrc ? (
                <div className="mx-auto flex w-full max-w-[220px] items-center justify-center rounded-sm border border-line bg-white p-3">
                  <div className="relative aspect-square w-full">
                    <Image
                      src={qrCodeSrc}
                      alt="QR Code PIX para presentear"
                      fill
                      className="object-contain"
                      sizes="220px"
                    />
                  </div>
                </div>
              ) : null}

              <div className="rounded-sm border border-line bg-white px-4 py-3">
                <p className="break-all text-sm text-deep">{pixKey}</p>
              </div>
              <button
                type="button"
                className="btn-primary w-full"
                onClick={handleCopy}
                aria-live="polite"
              >
                {copied ? "Chave copiada" : "Copiar chave PIX"}
              </button>
              {payment.pix.instructions ? (
                <p className="text-sm leading-relaxed text-muted">
                  {payment.pix.instructions}
                </p>
              ) : null}
            </div>
          ) : (
            <p className="text-sm leading-relaxed text-muted">
              As informações de pagamento serão disponibilizadas em breve.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
