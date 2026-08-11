import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { validateRsvpPayload } from "./rsvp.ts";
import type { Invitation } from "../data/guests.ts";

const sampleList: Invitation[] = [
  {
    id: "familia-silva",
    guests: [
      { id: "maria-silva", name: "Maria da Silva" },
      { id: "joao-silva", name: "João da Silva" },
      { id: "pedro-silva", name: "Pedro da Silva" },
    ],
  },
];

const validResponses = [
  { guestId: "maria-silva", name: "Maria da Silva", attending: true },
  { guestId: "joao-silva", name: "João da Silva", attending: false },
  { guestId: "pedro-silva", name: "Pedro da Silva", attending: true },
];

describe("validateRsvpPayload", () => {
  it("accepts a valid invitation response", () => {
    const result = validateRsvpPayload(
      {
        invitationId: "familia-silva",
        searchedName: "  Maria da Silva  ",
        responses: validResponses,
        notes: "  Chegamos cedo  ",
      },
      sampleList,
    );

    assert.equal(result.ok, true);
    if (!result.ok) return;
    assert.equal(result.data.invitationId, "familia-silva");
    assert.equal(result.data.searchedName, "Maria da Silva");
    assert.equal(result.data.attendingCount, 2);
    assert.equal(result.data.decliningCount, 1);
    assert.equal(result.data.notes, "Chegamos cedo");
  });

  it("accepts all declining", () => {
    const result = validateRsvpPayload(
      {
        invitationId: "familia-silva",
        searchedName: "Maria da Silva",
        responses: validResponses.map((item) => ({
          ...item,
          attending: false,
        })),
      },
      sampleList,
    );

    assert.equal(result.ok, true);
    if (!result.ok) return;
    assert.equal(result.data.attendingCount, 0);
    assert.equal(result.data.decliningCount, 3);
  });

  it("rejects unknown invitation", () => {
    const result = validateRsvpPayload(
      {
        invitationId: "nao-existe",
        searchedName: "Maria",
        responses: validResponses,
      },
      sampleList,
    );
    assert.equal(result.ok, false);
  });

  it("rejects forged guest ids", () => {
    const result = validateRsvpPayload(
      {
        invitationId: "familia-silva",
        searchedName: "Maria da Silva",
        responses: [
          ...validResponses.slice(0, 2),
          {
            guestId: "intruso",
            name: "Acompanhante",
            attending: true,
          },
        ],
      },
      sampleList,
    );
    assert.equal(result.ok, false);
  });

  it("rejects incomplete guest responses", () => {
    const result = validateRsvpPayload(
      {
        invitationId: "familia-silva",
        searchedName: "Maria da Silva",
        responses: validResponses.slice(0, 2),
      },
      sampleList,
    );
    assert.equal(result.ok, false);
  });

  it("flags honeypot", () => {
    const result = validateRsvpPayload(
      {
        invitationId: "familia-silva",
        searchedName: "Maria da Silva",
        responses: validResponses,
        website: "https://spam.test",
      },
      sampleList,
    );
    assert.equal(result.ok, false);
    if (result.ok) return;
    assert.equal(result.code, "HONEYPOT");
  });

  it("rejects oversized notes", () => {
    const result = validateRsvpPayload(
      {
        invitationId: "familia-silva",
        searchedName: "Maria da Silva",
        responses: validResponses,
        notes: "x".repeat(501),
      },
      sampleList,
    );
    assert.equal(result.ok, false);
  });
});
