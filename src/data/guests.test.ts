import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  findInvitationByName,
  normalizeGuestName,
  type Invitation,
} from "../data/guests.ts";

const sampleList: Invitation[] = [
  {
    id: "familia-silva",
    guests: [
      { id: "maria-silva", name: "Maria da Silva" },
      {
        id: "joao-silva",
        name: "João da Silva",
        aliases: ["Joao da Silva"],
      },
      { id: "pedro-silva", name: "Pedro da Silva" },
    ],
  },
];

describe("guest lookup", () => {
  it("normalizes accents and spaces", () => {
    assert.equal(normalizeGuestName("  João   da   Silva "), "joao da silva");
  });

  it("finds invitation by exact name", () => {
    const found = findInvitationByName("Maria da Silva", sampleList);
    assert.ok(found);
    assert.equal(found?.id, "familia-silva");
  });

  it("finds invitation by alias without accent", () => {
    const found = findInvitationByName("Joao da Silva", sampleList);
    assert.ok(found);
    assert.equal(found?.id, "familia-silva");
  });

  it("returns null for unknown names", () => {
    assert.equal(findInvitationByName("Fulano de Tal", sampleList), null);
  });
});
