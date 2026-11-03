# The Staff Room Gods

**Read the stories: https://robertbeverton.github.io/Stories_Gods/** (once Pages is switched on, see below)

Bedtime stories for Alex and Felix. In each one, a god or legend from a different part of the world turns up at their school as a new member of staff, the children work out who they are, and a school-sized version of the old myth has to be put right. About 4,000 words each, told by a group of classmates in the "we" voice, with an affirmation woven in and a hook for the next god.

This repo holds the stories, the guides behind them, the narration tooling and the small static site that publishes it all. It is built the same way as the Isles of Yum repo (11ty site, ElevenLabs narration, Claude Code skills).

## What's in here

| Path | What it is |
|---|---|
| `stories/` | The stories, as Markdown with front matter. A story's audio is the `.mp3` next to it with the same name (`some-story.md` plays `some-story.mp3`). |
| `docs/Story_Guide.md` | The method: the 17-part recipe, voice rules, fairness between twins, affirmations, choosing a god. Written so it can be handed to someone else. |
| `docs/Story_Bible.md` | The cast, standing rules, staff roster and running threads for this family. |
| `docs/Story_Archive.md` | Every story written, with details and the hook it ended on. |
| `docs/God_Tracker.md` | Who is next (Janus), who has been covered, ideas not yet used. |
| `audio-pipeline/` | ElevenLabs narration script, pronunciation list and notes. |
| `.claude/skills/` | Claude Code skills: `god-story-process`, `story-consistency-check`, `listener-review`, `audio-narration-prep`. |
| `site/`, `eleventy.config.js`, `scripts/` | The 11ty site, build helpers and content validation. |

## Using the site locally

```bash
npm install
npm run serve      # local dev server with live reload
npm run validate   # check story content (missing audio is a warning, not a failure)
npx vitest run     # run the test suite
npm run build      # validate, run contrast checks, build the site into _site/
```

## Publishing

1. Create the GitHub repo (the files assume it is called `Stories_Gods` under the `RobertBeverton` account) and push this folder to `main`.
2. In the repo, go to Settings, then Pages, and set Source to **GitHub Actions**.
3. Every push to `main` builds and deploys through `.github/workflows/build.yml`. Pull requests build without deploying.

If you use a different repo name, search and replace `Stories_Gods` across the project. The places that matter are `PATH_PREFIX` in `scripts/stories-lib.mjs`, the `pathPrefix` in `eleventy.config.js`, `site/manifest.webmanifest`, and `package.json`.

## Writing a new story

1. In Claude Code, say "write the next story". The `god-story-process` skill reads the bible, archive and tracker, plans the story from the previous hook, drafts it, runs the checks and files it.
2. Or by hand: save to `stories/<kebab-name>.md` with this front matter:

   ```yaml
   ---
   title: "The Man Who Opened Every Door"
   description: "One sentence for the story card."
   series: "The Staff Room Gods"
   seriesOrder: 20
   tags: ["mythology", "roman", "beginnings"]
   gods: ["Janus (Roman)"]
   characters: ["Alex", "Felix", "Willow", "Maya"]
   icon: sun            # one of: sun, boat, berry, shell, cloud
   publishDate: 2026-11-04
   draft: false
   ---
   ```

   Chapters are `## Part N. Title` headings. A line containing only `• • •` also works as a scene break.
3. Run `npm run validate` and `npx vitest run`, then update the archive, bible and tracker.

## Narration

```bash
export ELEVENLABS_API_KEY=...        # needs ffmpeg on your PATH too
node audio-pipeline/narrate-single-voice.mjs stories/some-story.md --dry-run   # preview the exact text the voice will read
node audio-pipeline/narrate-single-voice.mjs stories/some-story.md             # writes stories/some-story.mp3
```

The script turns headings into spoken lines ("Part Three. The Old Myth."), strips italics markers, and swaps in respellings from `audio-pipeline/pronunciations.json` (so the page keeps "Quetzalcoatl" while the voice says "Ketsalkoatl"). It runs locally only, never in CI. Commit the `.mp3` next to its `.md`; the site finds it by filename and `npm run validate` fills in the duration. See `audio-pipeline/README.md`.

## The stories so far

Quetzalcoatl, Maui, Anansi, Raven, Coyote, Hadad, Pele, Lakshmi, Baba Yaga, Väinämöinen, Father Frost, Bast, Oshun, Simurgh, Nuwa, Amaterasu, Pachamama, Hwanung and Ungnyeo, and Idun. Next: Janus.
