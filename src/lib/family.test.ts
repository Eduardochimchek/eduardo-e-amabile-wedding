import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { getFamilyDescription } from "./family.ts";

describe("getFamilyDescription", () => {
  it("builds description from configured members", () => {
    const text = getFamilyDescription(
      [
        { id: "a", name: "Eduardo", role: "partner" },
        { id: "b", name: "Amábile", role: "partner" },
        { id: "c", name: "Lili", role: "child" },
        { id: "d", name: "Mili", role: "child" },
      ],
      "Eduardo & Amábile",
    );

    assert.match(text, /Eduardo & Amábile/);
    assert.match(text, /Lili & Mili/);
  });
});
