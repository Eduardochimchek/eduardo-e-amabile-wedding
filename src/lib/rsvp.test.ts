import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { validateRsvpPayload } from "./rsvp.ts";

describe("validateRsvpPayload", () => {
  it("accepts a valid yes payload", () => {
    const result = validateRsvpPayload({
      fullName: "  Maria Silva  ",
      attendance: "yes",
      notes: "  Chegamos cedo  ",
    });

    assert.equal(result.ok, true);
    if (!result.ok) return;
    assert.equal(result.data.fullName, "Maria Silva");
    assert.equal(result.data.attendance, "yes");
    assert.equal(result.data.notes, "Chegamos cedo");
  });

  it("accepts a valid no payload", () => {
    const result = validateRsvpPayload({
      fullName: "João",
      attendance: "no",
    });

    assert.equal(result.ok, true);
    if (!result.ok) return;
    assert.equal(result.data.attendance, "no");
  });

  it("rejects short names", () => {
    const result = validateRsvpPayload({
      fullName: "A",
      attendance: "yes",
    });
    assert.equal(result.ok, false);
  });

  it("rejects invalid attendance", () => {
    const result = validateRsvpPayload({
      fullName: "Pedro",
      attendance: "maybe",
    });
    assert.equal(result.ok, false);
  });

  it("flags honeypot without revealing it as validation failure to bots", () => {
    const result = validateRsvpPayload({
      fullName: "Bot User",
      attendance: "yes",
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
      notes: "x".repeat(501),
    });
    assert.equal(result.ok, false);
  });
});
