import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  findInvitationByName,
  normalizeGuestName,
  searchGuests,
  invitations,
} from "../data/guests.ts";

describe("guest lookup", () => {
  it("normalizes accents and spaces", () => {
    assert.equal(normalizeGuestName("  João   Paulo "), "joao paulo");
  });

  it("finds invitation by partial first name when unique", () => {
    const matches = searchGuests("Nicolas", invitations);
    assert.equal(matches.length, 1);
    assert.equal(matches[0].guest.name, "Nicolas Jeronimo de Matos");
    assert.equal(matches[0].invitation.id, "regiane-matos");
  });

  it("finds invitation by exact name", () => {
    const found = findInvitationByName("Sirlene Chimchek", invitations);
    assert.ok(found);
    assert.equal(found?.id, "chimchek-jeronimo");
    assert.equal(found?.guests.length, 3);
  });

  it("returns multiple matches when first name is shared", () => {
    // "Jeronimo" alone would match many; use a shared first pattern carefully
    const matches = searchGuests("Chimchek", invitations);
    assert.ok(matches.length >= 2);
  });

  it("returns empty for unknown names", () => {
    assert.equal(searchGuests("Fulano de Tal", invitations).length, 0);
    assert.equal(findInvitationByName("Fulano de Tal", invitations), null);
  });

  it("groups Regiane family together", () => {
    // "Cauã" alone is now shared with Cauã Freitas Borges, so disambiguate.
    const found = findInvitationByName("Cauã Jeronimo", invitations);
    assert.ok(found);
    assert.equal(found?.id, "regiane-matos");
    assert.equal(found?.guests.length, 4);
  });
});
