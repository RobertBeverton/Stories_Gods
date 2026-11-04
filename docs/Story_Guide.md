# The Staff Room Gods: Story Guide

How to write a story in this series. It is written so that anyone (a parent, a Claude Code session, a friend writing for their own children) can pick it up cold. `Story_Bible.md` holds the specifics for this family's cast; this guide holds the method.

## The idea

A god or legend from a different world mythology turns up as a new member of school staff. The children work out who they are, tell the real myth, and help the god and the school through a problem that echoes the myth. Each story is about 4,000 words (a 25 to 30 minute read-aloud), told by a group of classmates saying "we", and ends on a hook for the next god.

## The recipe: about 16 to 18 short parts (a rough guide)

Each part is a short chapter of about 200 to 300 words with a plain heading, for example `## Part Three. The Sixteen and the One`. Short chapters keep young listeners with you and give natural stopping points.

| Part | What happens |
|---|---|
| 1. Something odd arrives | A strange sign of the god turns up on Monday morning: a golden pond, a giant feather, a smell of woodsmoke. Nobody knows why. |
| 2. The new staff member | A new teacher or helper appears with a badge showing a school job ("Mrs Oshun, Pond and Puddings"). The job hints at who the god really is. |
| 3. The explainer works it out | The bookish friend gathers evidence ("Evidence number one: a mirror") and says who the god is, where they are from, and what they are famous for. |
| 4. The old myth | The explainer tells one real, child-friendly myth from the tradition. This is the engine of the story. |
| 5. The school gets a problem | Something at school echoes the myth: a committee leaves someone out, a tower leans, a fog comes down. |
| 6 to 8. Things go wrong | The problem grows. Grown-ups argue or panic. Real peril builds, with the children on the edge of it. |
| 9. The children see what is needed | The twins realise the myth holds the answer and notice what the adults missed. |
| 10. They ask the god for help | A brave, kind request, usually with a sorry or a please. The children go first, not the adults. |
| 11 to 13. The rescue | The god shows their true shape. The pet or a small friend does something heroic. The twins do the key action together. |
| 14. The grown-ups learn | The adults take the lesson. Nobody is shamed. |
| 15. Things are put right | The school ends up better than before: a new playground, a new tree, a new rule. |
| 16. The god's words | At sunset the god says something wise in plain words. The affirmation lands here. |
| 17. The hook | A strange sign of the next god. The twins say "Monday" at exactly the same time. "The End." |

Parts 6 to 8 and 11 to 13 can run longer, because that is where the action is. The series has used 7 to 24 sections (the short early stories at the low end, the later ones 12 to 21 parts); 16 to 18 is the sweet spot, but the recipe is a guide and not a rule. Aim for at least about 4,000 words; a story that deserves the room can run to about 6,000.

## Voice and style

The feel is Pamela Butchart's "Wigglesbottom Primary": funny, breathless, and told by the children. Capture the spirit; never copy her text.

- **A child "we" narrator.** A group of classmates tells it ("We all stood round it in a ring"). They notice everything and understand about half of it.
- **Deadpan kid logic.** Strange things are reported flatly. "Nobody had put it there. But somebody had to have, because it had definitely not been there on Friday."
- **"That's when" pacing.** Use it three or four times per story to turn a quiet moment into a surprise.
- **Short sentences, short paragraphs, lots of dialogue.** Two to four sentences per paragraph. Easy to read aloud and easy to voice.
- **Reading level above their age.** The children are in Year 1, but the language is pitched at Year 2 to 3. A few big words are fine; context carries them.
- **Specific, funny details.** A lunchbox from 1987. A cat sneezing at the moment of heroism. A sandwich that was not his.
- **Real peril, always resolved.** Something genuinely frightening happens, the children are scared and brave at once, and nobody is truly hurt.
- **Kindness beats force.** The answer is almost never a fight. It is asking, sharing, saying sorry, listening, or being gentle.
- **A happy ending.** Always. Bedtime stories end warm.

## Fairness between siblings

If there is more than one child hero, they must share the spotlight evenly, or one will notice. Check as you write:

- Each child speaks about the same amount.
- They split the big moments (one holds one end of the feather and the other holds the other, one swings one club and the other swings the second).
- They say important things together, in the same breath, as often as separately.
- Neither is "the brave one" across a whole story. Swap roles from story to story.

## Affirmations

The stories teach self-belief without lecturing.

- Put them in the god's mouth, late in the story, after the action.
- Keep them short and concrete: one or two sentences a child could say back.
- Tie each to what just happened, so the plot earns it.
- No notes page, no quiz, no moral box afterwards. Do not ask the children questions at the end.
- Let a child echo it in their own words.

Examples used so far: "Everybody needs a chair." "A sweet heart is not a soft one." "Being lost is not something wrong with you. It is only a place you happen to be standing for a while." "A thank you is a seed." "The ground holds you up." "Hard things take as long as they take." "Ask for what you need. You would be amazed how often the answer is yes." Rotate themes: sharing, asking for help, saying sorry, including everyone, patience, being brave while scared, being gentle and strong at once, trusting that someone always comes.

## The hook ending

The last scene shows a strange sign of the next god, never naming them: a giant feather and a voice, a crack in the sky, a llama in a woven hat. The twins then say "Monday" at exactly the same time. The next story must pick up that hook, unless the person asking chooses another god.

## Choosing the god

Pick a different tradition each time. A good choice has three things:

1. A **memorable look** (a feather, a snake's tail, a golden pond).
2. A **story with a clear heart**, one idea a child can hold.
3. A **modern school job** that gives the game away (Lost Property, Pond and Puddings, Soup Club).

Skip or soften:

- Anything involving child sacrifice, torture or graphic death. Moloch was declined for this reason.
- Gods from living religions get a warm, respectful portrayal: good and wise, never silly or mocked.
- Sexual or romantic storylines. Stay with friendship, courage, craft, weather, animals and the natural world.
- If a myth has a dark part, choose a gentler episode, or soften it (for example, Thiazi is not killed in the Idun story; he is given a job).

## Narration

Stories are narrated by one ElevenLabs voice. The Markdown keeps normal spelling, italics and `## Part` headings, and the narrator (in the Stories repo) cleans these up and applies `narration/pronunciations.json` at generation time.

## Starting your own version

1. Fork or copy this repo.
2. Rewrite `docs/Story_Bible.md` with your own children, pet, friends and school.
3. Empty `stories/` and `docs/Story_Archive.md`, and keep `docs/God_Tracker.md`'s candidate list.
4. Ask Claude Code to "write the next story" and the `god-story-process` skill takes over.
5. Publishing and narration are handled by the separate Stories app repo (see the README).
