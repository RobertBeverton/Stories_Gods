# The Staff Room Gods

Stories for the twins Alex and Felix (5, Year 1). A god or legend from a different mythology joins their school as new staff in each story. Narrated with ElevenLabs. Published by the separate Stories app.

**Read first, always:** `docs/Story_Bible.md` (cast, standing rules, staff roster, running threads), then `docs/Story_Archive.md` (what has been written and how each ended), then `docs/God_Tracker.md` (what is next). The method is in `docs/Story_Guide.md`.

**Writing a new story:** use the `god-story-process` skill under `.claude/skills/`. It calls `story-consistency-check`, `listener-review` and `audio-narration-prep` at the right points.

**Non-negotiables** (details in the Bible):
- Alex and Felix get equal weight in every scene.
- The cast is Alex, Felix, Willow, Maya, with Dot, Kenji, Ollie, Mister Harris and others as needed. Elfine and Marion appear (where they fit) in stories 2 to 29 only, and are retired from story 30 unless the user asks.
- At least about 4,000 words, and up to about 6,000 when a story deserves the room. Short parts (the 16 to 18 part recipe is a rough guide, not a rule; vary the shape, see the Guide's "Story shapes"), a child "we" narrator, Year 2 to 3 reading level. Exceptions: a story may be told from one twin's point of view, and one story only (story 39, done; do not repeat) is told in the third person from Willow's point of view. Keep the twins' parents out of the stories.
- Pick the feeling first, then the god; do not repeat the lesson of the last five stories.
- An affirmation woven into the story, no notes page, no questions for the children afterwards.
- End with a hook for the next god and the twins saying "Monday" at exactly the same time, then "The End."
- Kid-appropriate; respectful to living religions; no child sacrifice (Moloch was declined).

**How this fits:** this repo is a content source: the stories, lore, canon and the docs on how they are written. The app, hosting and narrator live in the `RobertBeverton/Stories` repo (checked out beside this one as `../Stories`). This world is `legend-lane` in its `content-sources.json`. Narration audio is hosted on Cloudflare R2; no mp3s live here and none may be added.

**Checking:** `node ../Stories/scripts/validate-world-data.mjs --strict --world legend-lane` (this is also the CI check).

**Narration:** from the Stories checkout, `npm run narrate -- ../Gods-PrimarySchool/stories/<name>.md --dry-run` first, then without `--dry-run` (needs `ELEVENLABS_API_KEY` and ffmpeg; local only, never CI), then `npm run upload-audio`. Commit the story's changed front matter (`audioUrl`, `audioDuration`, `parts`) here. Story paths and filenames are load-bearing (they key listeners' saved progress), so never rename, move or delete a story file. Respellings live in `narration/pronunciations.json`; do not put them in the story text.
