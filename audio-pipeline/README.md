# Audio pipeline

One script, `narrate-single-voice.mjs`, turns a finished story into one MP3 with a single ElevenLabs voice.

## Use

```bash
export ELEVENLABS_API_KEY=...        # and have ffmpeg on your PATH
node audio-pipeline/narrate-single-voice.mjs stories/some-story.md --dry-run
node audio-pipeline/narrate-single-voice.mjs stories/some-story.md
# optional: --voice-id <id> --model-id <id> --out <path.mp3> --pronunciations <file.json>
```

The output defaults to the story's own filename next to the `.md`, which is how the site finds it.

## What the script does to the text

1. Strips the front matter.
2. Turns each `## Part N. Title` heading into a plain spoken line ending in a full stop, and strips `*italic*` and `**bold**` markers.
3. Swaps in respellings from `pronunciations.json` (whole words only, case-sensitive). The story file itself keeps the proper spelling.
4. Splits into scenes at each heading (or `• • •` line), then packs whole scenes into chunks under 9,000 characters, so chunk boundaries fall between parts.
5. Sends each chunk to ElevenLabs, chaining `previous_request_ids` so the voice stays consistent, caches every chunk by content hash in `stories/.narrate-cache/` (git-ignored), and joins the chunks with ffmpeg.

`--dry-run` prints the exact text the voice will read and the chunk sizes, with no API call and no key needed. Read it through once before spending credits.

## Pronunciations

`pronunciations.json` is a flat `{ "Written": "Spoken" }` map. Add a name the first time a voice mangles it, then re-run: only chunks whose text changed are regenerated. Keys starting with `_` are ignored.

## Notes

- The default voice and model are set at the top of the script. Pass `--voice-id` to use a different voice.
- The multi-voice pipeline from the Isles of Yum repo is not included: these stories are written for one narrator.
- Never run narration in CI.
