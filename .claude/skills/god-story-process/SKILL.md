---
name: god-story-process
description: Use when asked to write, plan, outline, draft or continue a Staff Room Gods story (the twins Alex and Felix, a god or legend joining their school as new staff). Also use for "next story", "another one", or picking a god. Orchestrates the whole pipeline from choosing the god to filing the finished story, and calls story-consistency-check, listener-review and audio-narration-prep. Do not use for unrelated creative writing.
---

# Staff Room Gods: story writing process

You are writing the next story in a series of stories for Alex and Felix (twins, 5, Year 1). This skill sequences the work. The craft rules live in `docs/Story_Guide.md` and the family facts in `docs/Story_Bible.md`; do not restate them from memory.

## 0. Read first, every time

1. `docs/Story_Bible.md`: cast, standing rules, staff roster, running threads. It changes between sessions (cast changes especially), so read it fresh.
2. `docs/Story_Archive.md`: the "What to watch for" list at the top, and the last three entries (especially their hooks).
3. `docs/God_Tracker.md`: who is next, who has been covered.
4. `docs/Story_Guide.md`: the 17-part recipe, voice, affirmations, fairness.

If the user has just given a cast instruction ("take out the cousins", "bring back Maya"), that overrides the Bible. Say so, and update the Bible's cast section when the story is filed.

## 1. Choose the god

- Default: the god promised by the previous story's hook (see the last Archive entry and the tracker's "Next up"). Work out who the clue points to before naming them.
- If the user names a god or tradition, use that. If they say "surprise me", pick a tradition not yet covered, from the tracker's ideas list.
- Apply the three tests: memorable look, story with one clear heart, and a modern school job that gives the game away (write the badge: "Title, School Job").
- Sensitivity check: no child sacrifice, torture or graphic death; gods from living religions are warm, wise and respected; no romance. If the myth has a dark part, choose a gentler episode or soften it. If the god cannot be made suitable, say so and offer alternatives (Moloch was declined this way).
- Pick one real myth to be the engine, and one affirmation or moral that has not been the main one recently.

## 2. Outline

Write the outline as the 17-part recipe from the Guide, one line per part. Include:
- The badge and the school job.
- The myth the explainer (Maya) tells, in two sentences.
- The school problem that echoes it, the escalating peril, and the Willow moment.
- The twin split: which big moments go to Alex, to Felix, and which they do together. Swap who leads from the last story.
- Where the affirmation lands, in the god's mouth, late.
- The hook: a strange sign of the next god, unnamed, then "Monday".
- A tension tag for every part (mystery, problem to solve, physical jeopardy, social and emotional), with no two the same back to back, the biggest beat near the climax, a quiet "catching your breath" beat after the scariest moment, and a quiet part before the hook.
- The plant list: every late fix, joke or twist with the part that seeds it and the part that pays it off (the school problem itself is planted by Part Three). Include the learning beat if the children do something new (fail, wobble, work).

Run `listener-review` on the outline (twin fairness, five-year-old, sensitivity) before drafting. If the user is away or has asked for a straight run, carry on and note any assumptions at the top of your reply.

## 3. Draft

- At least about 4,000 words (up to about 6,000 if the story earns it), usually 16 to 18 short parts as a rough guide, each with a `## Part N. Title` heading. Child "we" narrator, deadpan kid logic, a few "That's when" turns, short paragraphs, lots of dialogue, Year 2 to 3 vocabulary.
- Write in stages for a long story: outline, then sections, then one full read-through.
- Keep normal spelling in the text (Quetzalcoatl, Väinämöinen). Pronunciation fixes go in `narration/pronunciations.json`, not the story.
- No notes page, no questions for the children, no moral box. Nothing after "The End."

## 4. Check

1. Run `story-consistency-check` on the draft. Fix every real issue.
2. Run `listener-review` on the draft. Cross-review the notes against each other before editing; where two lenses flag the same passage, make one edit that serves both. Not everything flagged needs fixing.
3. Count words (at least about 4,000, up to about 6,000 if earned) and parts (16 to 18 is a guide, not a rule).
4. Read the Guide's 'Tension, stakes and peril', 'Plant and pay off' and 'Common problems to catch before filing' sections against the draft, one item at a time.

## 5. File it

1. Save to `stories/<kebab-title>.md` with this front matter (copy an existing story for the exact shape):
   ```yaml
   ---
   title: "..."
   description: "One sentence for the story card."
   series: "The Staff Room Gods"
   seriesOrder: <last seriesOrder + 1>
   tags: ["mythology", "<tradition>", "<theme>"]
   gods: ["<God> (<Tradition>)"]
   characters: ["Alex", "Felix", "Willow", "Maya", ...]
   icon: sun | boat | berry | shell | cloud
   publishDate: <today, YYYY-MM-DD>
   draft: false
   ---
   ```
2. Run `node ../Stories/scripts/validate-world-data.mjs --strict --world legend-lane` (needs the Stories repo checked out beside this one). Check the front matter by eye against a recent story too.
3. Append an entry to `docs/Story_Archive.md` (same shape as the others: file, god, badge, cast, length, summary, closing scene, hook) plus one honest line on what to watch for next time. Update the "What to watch for" list if a new pattern showed up.
4. Update `docs/God_Tracker.md`: add the god to the covered table, set "Next up" from the new hook, move any used idea out of "Ideas not yet used".
5. Update `docs/Story_Bible.md`: add the staff roster row and any new running threads or changed cast rules.
6. If the user wants audio, hand off to `audio-narration-prep`.

## 6. Reply

Give the user the story (in chat if they asked for that, otherwise say where the file is), then one or two lines: which god, which hook comes next, and anything you softened or assumed. Do not recap the process.

## Anti-patterns

- Drafting before the outline has passed the twin-fairness check.
- Making one twin the hero and the other the helper for a whole story.
- Naming the next god in the hook.
- A speech that explains the moral for more than a few lines, or any questions to the reader.
- Reusing the same set-piece (a tower about to fall, a small child in peril, a staff meeting that goes wrong) when the last two stories used it.
- Adding Elfine and Marion without being asked.
