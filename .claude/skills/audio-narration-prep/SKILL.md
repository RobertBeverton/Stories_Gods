---
name: audio-narration-prep
description: Use when a finished Staff Room Gods story needs narrating with ElevenLabs. Checks the text for narration problems, adds pronunciation respellings, previews exactly what the voice will read, and runs the narrator from the Stories repo. Do not use on unfinished drafts.
---

# Audio narration prep

Prepares a finished, filed story for single-voice ElevenLabs narration. The story file keeps normal spelling; the narrator (in the Stories repo, checked out beside this one as `../Stories`) handles the rest at generation time.

## Steps

1. Confirm the story is in `stories/` and has an entry in `docs/Story_Archive.md`.
2. Read the story for **names and words a voice will get wrong**: gods' names, places, foreign words, "Mrs" and "Ms" (those two are already in the shared list). Add each to `narration/pronunciations.json` as `"Written": "Spoken"` (whole words, case-sensitive). Use simple English-looking respellings with hyphens between syllables (for example `"Pachamama": "Pah-chah-mah-mah"`). Do not change the story file.
3. Preview the exact text the voice will read:
   ```bash
   cd ../Stories && npm run narrate -- ../Gods-PrimarySchool/stories/<name>.md --dry-run
   ```
   It should report the world `legend-lane` and list your respellings. Check that headings read as "Part Three. The Old Myth.", that no asterisks or symbols remain, and that respellings applied. Check the chunk sizes are under about 9,000 characters.
4. Narrate (needs `ELEVENLABS_API_KEY` and ffmpeg; never in CI, and ask the user before spending credits if they have not asked for audio):
   ```bash
   cd ../Stories && npm run narrate -- ../Gods-PrimarySchool/stories/<name>.md
   npm run upload-audio -- --apply --world legend-lane --story <name>
   ```
   The MP3 goes to the Stories repo's git-ignored `narrator/out/` and is hosted on R2. No mp3 is ever committed here. The narrator writes `audioDuration` and `parts` into the story's front matter; commit that change here.
5. Run `node ../Stories/scripts/validate-world-data.mjs --strict --world legend-lane` to check the new `audioUrl`, `audioDuration` and `parts`.
6. Tell the user to listen for mispronounced names. Corrections go in `narration/pronunciations.json`; re-running regenerates only the chunks whose text changed.

## Notes

- The text rules for narration: no markdown symbols, headings spoken as plain lines, titles spelled out (the script turns "Mrs" into "Missus" via the pronunciation list), no ALL-CAPS shouting or stage directions in the story, dialogue in quotation marks.
- One voice reads everything, so the story must make sense without different voices for different characters.
- The narrator's cache and output live in the Stories repo and are git-ignored there.
