import { NextResponse } from "next/server";

type RsvpPayload = {
  fullName?: string;
  attendance?: "yes" | "no";
  guests?: number;
  notes?: string;
};

/**
 * RSVP endpoint prepared for future integration.
 *
 * Set RSVP_WEBHOOK_URL in the environment to forward submissions
 * (e.g. to a form service, Notion, or serverless webhook).
 * Never put secrets in client-side code.
 */
export async function POST(request: Request) {
  let body: RsvpPayload;

  try {
    body = (await request.json()) as RsvpPayload;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Payload inválido." },
      { status: 400 },
    );
  }

  const fullName = body.fullName?.trim();
  const attendance = body.attendance;

  if (!fullName || (attendance !== "yes" && attendance !== "no")) {
    return NextResponse.json(
      { ok: false, message: "Nome e confirmação são obrigatórios." },
      { status: 400 },
    );
  }

  const webhookUrl = process.env.RSVP_WEBHOOK_URL?.trim();

  if (!webhookUrl) {
    return NextResponse.json(
      {
        ok: false,
        code: "NOT_CONFIGURED",
        message:
          "Recebemos seu interesse com carinho. A confirmação online ainda está sendo conectada — em breve você poderá enviar por aqui.",
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
        guests: Number.isFinite(body.guests) ? body.guests : 0,
        notes: body.notes?.trim() || null,
        submittedAt: new Date().toISOString(),
        source: "eduardo-e-amabile-wedding",
      }),
    });

    if (!upstream.ok) {
      return NextResponse.json(
        {
          ok: false,
          message: "Não foi possível registrar agora. Tente novamente em instantes.",
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
