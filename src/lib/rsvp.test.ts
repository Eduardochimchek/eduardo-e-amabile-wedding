import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { validateRsvpPayload } from "./rsvp.ts";

describe("validateRsvpPayload", () => {
  it("accepts a valid yes payload and clamps guests", () => {
    const result = validateRsvpPayload({
      fullName: "  Maria Silva  ",
      attendance: "yes",
      guests: 3,
      notes: "  Chegamos cedo  ",
    });

    assert.equal(result.ok, true);
    if (!result.ok) return;
    assert.equal(result.data.fullName, "Maria Silva");
    assert.equal(result.data.guests, 3);
    assert.equal(result.data.notes, "Chegamos cedo");
  });

  it("forces guests to 0 when attendance is no", () => {
    const result = validateRsvpPayload({
      fullName: "João",
      attendance: "no",
      guests: 7,
    });

    assert.equal(result.ok, true);
    if (!result.ok) return;
    assert.equal(result.data.guests, 0);
  });

  it("clamps guests above 10", () => {
    const result = validateRsvpPayload({
      fullName: "Ana Costa",
      attendance: "yes",
      guests: 99,
    });

    assert.equal(result.ok, true);
    if (!result.ok) return;
    assert.equal(result.data.guests, 10);
  });

  it("rejects short names", () => {
    const result = validateRsvpPayload({
      fullName: "A",
      attendance: "yes",
      guests: 0,
    });
    assert.equal(result.ok, false);
  });

  it("rejects invalid attendance", () => {
    const result = validateRsvpPayload({
      fullName: "Pedro",
      attendance: "maybe",
      guests: 0,
    });
    assert.equal(result.ok, false);
  });

  it("flags honeypot without revealing it as validation failure to bots", () => {
    const result = validateRsvpPayload({
      fullName: "Bot User",
      attendance: "yes",
      guests: 0,
      website: "https://spam.test",
    });
    assert.equal(result.ok, false);
    if (result.ok) return;
    assert.equal(result.code, "HONEYPOT");
  });

  it("rejects oversized notes", () => {
    const result = validateRsvpPayload({
      fullName: "Carla",
      attendance: "yes",
      guests: 0,
      notes: "x".repeat(501),
    });
    assert.equal(result.ok, false);
  });
});
