"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { GiftItem } from "@/types/wedding";
import { weddingConfig } from "@/config/wedding";
import { copyToClipboard, formatCurrencyBRL } from "@/lib/utils";

type PaymentModalProps = {
  gift: GiftItem | null;
  open: boolean;
  onClose: () => void;
};

export function PaymentModal({ gift, open, onClose }: PaymentModalProps) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const [copied, setCopied] = useState(false);
  const { payment } = weddingConfig;
  const pixKey = payment.pix.key?.trim();
  const hasPaymentInfo = payment.enabled && Boolean(pixKey);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setCopied(false);
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open || !gift) return null;

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
      className="fixed inset-0 z-[60] flex items-end justify-center p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <button
        type="button"
        className="absolute inset-0 bg-deep/55 backdrop-blur-[2px]"
        aria-label="Fechar modal"
        onClick={handleClose}
      />

      <div className="relative z-10 w-full max-w-md rounded-lg bg-warm p-6 shadow-lift sm:p-8">
        <button
          ref={closeRef}
          type="button"
          onClick={handleClose}
          className="absolute right-4 top-4 text-sm uppercase tracking-[0.14em] text-muted transition-colors hover:text-deep"
        >
          Fechar
        </button>

        <p className="eyebrow">Presentear</p>
        <h3 id={titleId} className="mt-3 font-display text-3xl text-deep">
          {gift.title}
        </h3>
        <p className="mt-3 body-copy text-sm">{gift.description}</p>

        {typeof gift.amount === "number" ? (
          <p className="mt-5 font-display text-2xl text-royal">
            {gift.fromPrice
              ? `A partir de ${formatCurrencyBRL(gift.amount)}`
              : formatCurrencyBRL(gift.amount)}
          </p>
        ) : (
          <p className="mt-5 text-sm text-muted">
            Valor a combinar / livre — escolha o valor que fizer sentido para você.
          </p>
        )}

        <div className="mt-6 border-t border-line pt-6">
          {hasPaymentInfo ? (
            <div className="space-y-4">
              <p className="text-sm text-muted">
                Pagamento via PIX
                {payment.pix.beneficiaryName
                  ? ` — ${payment.pix.beneficiaryName}`
                  : ""}
              </p>
              <div className="rounded-sm border border-line bg-white px-4 py-3">
                <p className="break-all text-sm text-deep">{pixKey}</p>
              </div>
              <button type="button" className="btn-primary w-full" onClick={handleCopy}>
                {copied ? "Chave copiada" : "Copiar chave PIX"}
              </button>
              {payment.pix.instructions ? (
                <p className="text-sm leading-relaxed text-muted">
                  {payment.pix.instructions}
                </p>
              ) : null}
            </div>
          ) : (
            <div className="space-y-3 text-sm leading-relaxed text-muted">
              <p>
                As informações de pagamento serão disponibilizadas em breve.
              </p>
              <p>
                Quando a chave PIX estiver configurada em{" "}
                <code className="text-deep">src/config/wedding.ts</code>, este
                modal exibirá a chave e a opção de copiar automaticamente.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
