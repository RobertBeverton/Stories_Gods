# The Staff Room Gods

Bedtime stories for the twins Alex and Felix (5, Year 1). A god or legend from a different mythology joins their school as new staff in each story. Static 11ty site on GitHub Pages, narrated with ElevenLabs.

**Read first, always:** `docs/Story_Bible.md` (cast, standing rules, staff roster, running threads), then `docs/Story_Archive.md` (what has been written and how each ended), then `docs/God_Tracker.md` (what is next). The method is in `docs/Story_Guide.md`.

**Writing a new story:** use the `god-story-process` skill under `.claude/skills/`. It calls `story-consistency-check`, `listener-review` and `audio-narration-prep` at the right points.

**Non-negotiables** (details in the Bible):
- Alex and Felix get equal weight in every scene.
- The cast is Alex, Felix, Willow, Maya, with Dot, Kenji, Ollie, Mister Harris and others as needed. Elfine and Marion are retired unless the user asks.
- About 4,000 words, 16 to 18 short parts with `## Part N. Title` headings, a child "we" narrator, Year 2 to 3 reading level.
- An affirmation woven into the story, no notes page, no questions for the children afterwards.
- End with a hook for the next god and the twins saying "Monday" at exactly the same time, then "The End."
- Kid-appropriate; respectful to living religions; no child sacrifice (Moloch was declined).

**Local development:**
```bash
npm install
npm run serve      # local dev server
npm run validate   # check story front matter
npx vitest run     # tests
npm run build      # full production build
```

**Narration:** `node audio-pipeline/narrate-single-voice.mjs stories/<name>.md` (needs `ELEVENLABS_API_KEY` and ffmpeg; local only). Use `--dry-run` first. Story and audio filenames must match: `stories/x.md` plays `stories/x.mp3`. Never rename one side without the other. Respellings live in `audio-pipeline/pronunciations.json`; do not put them in the story text.

**Repo name:** the site assumes the repo is `Stories_Gods` (`PATH_PREFIX` in `scripts/stories-lib.mjs`, `pathPrefix` in `eleventy.config.js`, the manifest). Change them together if the repo is renamed.
