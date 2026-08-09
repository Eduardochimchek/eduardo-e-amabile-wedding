import { NextResponse } from "next/server";
import { checkRateLimit, getClientKey } from "@/lib/rate-limit";
import { validateRsvpPayload, type RsvpInput } from "@/lib/rsvp";

/**
 * RSVP endpoint prepared for future integration.
 *
 * Set RSVP_WEBHOOK_URL in the environment to forward submissions.
 * Never put secrets in client-side code.
 *
 * Protections: honeypot, field validation/clamp, best-effort in-memory rate limit.
 * Rate limit is per serverless instance - see src/lib/rate-limit.ts.
 */
export async function POST(request: Request) {
  const clientKey = getClientKey(request);
  const rate = checkRateLimit(`rsvp:${clientKey}`);
  if (!rate.allowed) {
    return NextResponse.json(
      {
        ok: false,
        message: "Muitas tentativas. Aguarde um momento e tente novamente.",
      },
      {
        status: 429,
        headers: { "Retry-After": String(rate.retryAfterSec) },
      },
    );
  }

  let body: RsvpInput;
  try {
    body = (await request.json()) as RsvpInput;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Payload inválido." },
      { status: 400 },
    );
  }

  const validated = validateRsvpPayload(body);
  if (!validated.ok) {
    if (validated.code === "HONEYPOT") {
      // Silent success-shaped response to avoid teaching bots.
      return NextResponse.json({
        ok: true,
        message: "Presença registrada. Obrigado por celebrar conosco!",
      });
    }
    return NextResponse.json(
      { ok: false, message: validated.message },
      { status: 400 },
    );
  }

  const { fullName, attendance, notes } = validated.data;
  const webhookUrl = process.env.RSVP_WEBHOOK_URL?.trim();

  if (!webhookUrl) {
    return NextResponse.json(
      {
        ok: false,
        code: "NOT_CONFIGURED",
        message:
          "Recebemos seu interesse com carinho. A confirmação online ainda está sendo conectada. Em breve você poderá enviar por aqui.",
      },
      { status: 501 },
    );
  }

  try {
    const upstream = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName,
        attendance,
        notes,
        submittedAt: new Date().toISOString(),
        source: "eduardo-e-amabile-wedding",
      }),
    });

    if (!upstream.ok) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "Não foi possível registrar agora. Tente novamente em instantes.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      ok: true,
      message: "Presença registrada. Obrigado por celebrar conosco!",
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "Erro ao conectar com o serviço de confirmação.",
      },
      { status: 502 },
    );
  }
}
