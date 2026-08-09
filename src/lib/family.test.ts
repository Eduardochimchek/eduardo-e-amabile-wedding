import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { getFamilyDescription } from "./family.ts";

describe("getFamilyDescription", () => {
  it("builds description from configured members", () => {
    const text = getFamilyDescription(
      [
        { id: "a", name: "Amábile", role: "partner" },
        { id: "b", name: "Eduardo", role: "partner" },
        { id: "c", name: "Mili", role: "child" },
        { id: "d", name: "Nina", role: "child" },
      ],
      "Amábile & Eduardo",
    );

    assert.match(text, /Amábile & Eduardo/);
    assert.match(text, /Mili & Nina/);
  });
});
