import { describe, it, expect } from "vitest";
import {
  parseScenes,
  packChunks,
  getArgValue,
  cleanForNarration,
  applyPronunciations,
} from "./narrate-single-voice.mjs";

describe("parseScenes", () => {
  it("splits on scene-break lines", () => {
    const md = "Scene one.\n\n• • •\n\nScene two.";
    expect(parseScenes(md)).toEqual(["Scene one.", "Scene two."]);
  });

  it("returns a single scene when there is no break", () => {
    expect(parseScenes("Just one scene.")).toEqual(["Just one scene."]);
  });
});

describe("parseScenes with headings", () => {
  it("starts a new scene at each markdown heading", () => {
    const md = "## Part One. A\n\nText a.\n\n## Part Two. B\n\nText b.";
    expect(parseScenes(md)).toEqual([
      "## Part One. A\n\nText a.",
      "## Part Two. B\n\nText b.",
    ]);
  });
});

describe("cleanForNarration", () => {
  it("turns headings into spoken lines ending in a full stop", () => {
    expect(cleanForNarration("## Part Three. The Old Myth\n\nOnce.")).toBe(
      "Part Three. The Old Myth.\n\nOnce."
    );
  });

  it("does not double up punctuation already on a heading", () => {
    expect(cleanForNarration("## Part Four. Who?")).toBe("Part Four. Who?");
  });

  it("strips bold and italic markers", () => {
    expect(cleanForNarration("A *quiet* and **loud** day, said _she_.")).toBe(
      "A quiet and loud day, said she."
    );
  });

  it("leaves apostrophes and snake_case-free text alone", () => {
    expect(cleanForNarration("Alex's hat")).toBe("Alex's hat");
  });
});

describe("applyPronunciations", () => {
  it("replaces whole words only", () => {
    expect(applyPronunciations("Oshun and Oshunland", { Oshun: "Oh-shoon" })).toBe(
      "Oh-shoon and Oshunland"
    );
  });

  it("handles possessives and prefers the longest key", () => {
    const map = { Mrs: "Missus", "Mrs Oshun": "Missus Oh-shoon" };
    expect(applyPronunciations("Mrs Oshun's pond, said Mrs Tibbs.", map)).toBe(
      "Missus Oh-shoon's pond, said Missus Tibbs."
    );
  });

  it("matches accented names", () => {
    expect(applyPronunciations("Mister Väinö sang", { "Väinö": "Vai-no" })).toBe(
      "Mister Vai-no sang"
    );
  });

  it("returns the text unchanged for an empty map", () => {
    expect(applyPronunciations("Hello", {})).toBe("Hello");
  });
});

describe("packChunks", () => {
  it("keeps everything in one chunk when the whole story fits under the limit", () => {
    const scenes = ["Scene one.", "Scene two.", "Scene three."];
    const chunks = packChunks(scenes, 9000);
    expect(chunks).toHaveLength(1);
    expect(chunks[0]).toBe("Scene one.\n\nScene two.\n\nScene three.");
  });

  it("starts a new chunk at a scene break once the limit would be exceeded", () => {
    const scenes = ["a".repeat(50), "b".repeat(50), "c".repeat(50)];
    const chunks = packChunks(scenes, 110);
    expect(chunks).toHaveLength(2);
    expect(chunks[0]).toBe(`${"a".repeat(50)}\n\n${"b".repeat(50)}`);
    expect(chunks[1]).toBe("c".repeat(50));
  });

  it("splits a single scene longer than the limit on sentence boundaries, never mid-sentence", () => {
    const longScene = `${"a".repeat(60)}. ${"b".repeat(60)}. ${"c".repeat(60)}.`;
    const chunks = packChunks([longScene], 70);
    expect(chunks.join(" ").replace(/\s+/g, " ")).toContain("a".repeat(60));
    expect(chunks.join(" ").replace(/\s+/g, " ")).toContain("b".repeat(60));
    expect(chunks.join(" ").replace(/\s+/g, " ")).toContain("c".repeat(60));
    for (const chunk of chunks) {
      expect(chunk.length).toBeLessThanOrEqual(70 + 2); // +2 for trailing punctuation/space slack
    }
  });

  it("returns an empty array for no scenes", () => {
    expect(packChunks([])).toEqual([]);
  });
});

describe("getArgValue", () => {
  it("returns the value following the flag when present", () => {
    expect(getArgValue(["--voice-id", "abc123"], "--voice-id", "default")).toBe("abc123");
  });

  it("returns the default when the flag is absent", () => {
    expect(getArgValue(["--out", "story.mp3"], "--voice-id", "default")).toBe("default");
  });

  it("returns the default when the flag is the last element with no following value", () => {
    expect(getArgValue(["--voice-id"], "--voice-id", "default")).toBe("default");
  });
});
