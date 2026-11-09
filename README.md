# The Staff Room Gods

**Read and hear the stories in the Stories app:** https://robertbeverton.github.io/Stories/ (this world appears there as Legend Lane).

Stories for Alex and Felix. In each one, a god or legend from a different part of the world turns up at their school as a new member of staff, the children work out who they are, and a school-sized version of the old myth has to be put right. About 4,000 words each, told by a group of classmates in the "we" voice, with an affirmation woven in and a hook for the next god.

This repo holds the stories, the lore, the guides behind them and this world's narration settings. The app, hosting and narrator live in the [Stories repo](https://github.com/RobertBeverton/Stories).

## What's in here

| Path | What it is |
|---|---|
| `stories/` | The stories, as Markdown with front matter (`audioUrl`, `audioDuration` and `parts` once narrated). Paths and filenames are permanent: they key listeners' saved progress. |
| `lore/` | One short lore entry per god, linked from each story. |
| `docs/Story_Guide.md` | The method: the 17-part recipe, voice rules, fairness between twins, affirmations, choosing a god. Written so it can be handed to someone else. |
| `docs/Story_Bible.md` | The cast, standing rules, staff roster and running threads for this family. |
| `docs/Story_Archive.md` | Every story written, with details and the hook it ended on. |
| `docs/God_Tracker.md` | Who is next (Brigid, story 39), who has been covered, ideas not yet used. |
| `narration/` | This world's narration settings: `pronunciations.json` (respellings for names the voice mangles). |
| `.claude/skills/` | Claude Code skills: `god-story-process`, `story-consistency-check`, `listener-review`, `audio-narration-prep`. |

## How this fits

Stories live here. The app, the hosting and the narrator live in the Stories repo, checked out beside this one as `../Stories`. This world is `legend-lane` there, and the Stories build reads this checkout. Audio is hosted on Cloudflare R2; no mp3s are kept in this repo.

CI runs `node ../Stories/scripts/validate-world-data.mjs --strict --world legend-lane` on every push and pull request. It builds and deploys nothing.

## Writing a new story

1. In Claude Code, say "write the next story". The `god-story-process` skill reads the bible, archive and tracker, plans the story from the previous hook, drafts it, runs the checks and files it.
2. Or by hand: save to `stories/<kebab-name>.md` with this front matter:

   ```yaml
   ---
   title: "The Lady Who Kept the Fire"
   description: "One sentence for the story card."
   series: "The Staff Room Gods"
   seriesOrder: 39
   tags: ["mythology", "irish", "fire"]
   gods: ["Brigid (Irish)"]
   characters: ["Alex", "Felix", "Willow", "Maya"]
   icon: sun            # one of: sun, boat, berry, shell, cloud
   publishDate: 2026-11-05
   draft: false
   ---
   ```

   Chapters are `## Part N. Title` headings. A line containing only `• • •` also works as a scene break.
3. Run the validate command above, then update the archive, bible and tracker.

## Narration

From the Stories checkout:

```bash
export ELEVENLABS_API_KEY=...        # needs ffmpeg on your PATH too
npm run narrate -- ../Gods-PrimarySchool/stories/some-story.md --dry-run   # read what the voice will say
npm run narrate -- ../Gods-PrimarySchool/stories/some-story.md             # spends ElevenLabs credits
npm run upload-audio -- --apply --world legend-lane --story some-story     # host it on R2
```

Then commit the story's changed front matter here. Respellings (so the page keeps "Quetzalcoatl" while the voice says "Ketsalkoatl") live in `narration/pronunciations.json`. See `narrator/README.md` in the Stories repo.

## The stories so far

Thirty-eight so far, in order: Thor, Shiva, Anubis, Felicitas, the Seven Lucky Gods, Loki, Thoth, Persephone, Hermes, Hephaestus, Pan, Hanuman, the Summer Fair, Athena, Prometheus, Pandora, Nuwa (pottery), Yu the Great, Quetzalcoatl, Maui, Anansi, Raven, Coyote, Hadad, Pele, Lakshmi, Baba Yaga, Väinämöinen, Father Frost, Bast, Oshun, Simurgh, Nuwa (art), Amaterasu, Pachamama, Hwanung and Ungnyeo, Idun, and Janus. Next: Brigid, which will be story 39.
