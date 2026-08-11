import { NextResponse } from "next/server";
import { invitations } from "@/data/guests";
import { checkRateLimit, getClientKey } from "@/lib/rate-limit";
import { validateRsvpPayload, type RsvpInput } from "@/lib/rsvp";

/**
 * RSVP endpoint for invitation-based confirmations.
 *
 * Set RSVP_WEBHOOK_URL to forward submissions.
 * Guest list lives in src/data/guests.ts until a backend is wired.
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

  const validated = validateRsvpPayload(body, invitations);
  if (!validated.ok) {
    if (validated.code === "HONEYPOT") {
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

  const payload = validated.data;
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
        invitationId: payload.invitationId,
        searchedName: payload.searchedName,
        responses: payload.responses,
        attendingCount: payload.attendingCount,
        decliningCount: payload.decliningCount,
        notes: payload.notes,
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
