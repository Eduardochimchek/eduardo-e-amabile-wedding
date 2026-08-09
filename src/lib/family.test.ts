import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { getFamilyDescription } from "./family.ts";

describe("getFamilyDescription", () => {
  it("builds description from configured members", () => {
    const text = getFamilyDescription(
      [
        { id: "a", name: "Amábile", role: "partner" },
        { id: "b", name: "Eduardo", role: "partner" },
        { id: "c", name: "Nina", role: "child" },
        { id: "d", name: "Mili", role: "child" },
      ],
      "Amábile & Eduardo",
    );

    assert.match(text, /Amábile & Eduardo/);
    assert.match(text, /Nina & Mili/);
  });
});
