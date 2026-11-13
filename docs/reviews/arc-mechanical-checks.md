# Finale arc: Phase 2 mechanical checks

Script: `scratchpad/metrics.mjs` (node; reads the story files directly). Baseline = stories 20 to 39 (20 stories). All numbers are raw script output; "flag" means outside the baseline range or repeated across chapters. Word counts include part headings but not front matter. These are measurements, not verdicts.

## Size and shape
| Ch | Words | Parts |
|---|---|---|
| 40 | 4,138 | 16 |
| 41 | 4,046 | 13 |
| 42 | 3,939 | 14 |
| 43 | 3,895 | 11 |
| 44 | 3,770 | 14 |
| 45 | 4,158 | 13 |
| 46 | 4,656 | 17 |
| 47 | 4,802 | 14 |
| baseline median [range] | 4,582 [4,108 to 5,585] | 16 [15 to 18] |

**Flags:** 42, 43 and 44 are under 4,000 words (CLAUDE.md: "at least about 4,000"); 44 is lowest at 3,770. All of 42 to 44 are below the baseline minimum. Chapter 43 has 11 parts against a baseline minimum of 15 (the Guide says shape may vary).

## Tics and repeated similes (raw counts per chapter 40 to 47)
| Item | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | Baseline median [range] | Flag |
|---|---|---|---|---|---|---|---|---|---|---|
| "very" | 11 | 20 | 19 | 16 | 15 | 24 | 30 | 28 | 22 [7 to 34] | none by count. Per 1,000 words 46 is 6.44 vs baseline max 6.27; 45 and 47 are 5.8 |
| "That's when" | 1 | 1 | 1 | 2 | 1 | 1 | 1 | 1 | 1 [0 to 4] | none |
| "at exactly the same time" | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 1 [1 to 2] | none (one per chapter = ritual; 47 correctly has none) |
| "looked at each other/one another" | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 [0 to 2] | none |
| "hot-water bottle" | 0 | 0 | 1 | 1 | 0 | 0 | 1 | 0 | 0 [0 to 1] | **3 uses in the arc**, all Willow: 42.12 «She was exactly as heavy as a hot-water bottle», 43.8 «like a hot-water bottle that had given up the argument», 46.14 «like a hot-water bottle» |
| "full cup / full bowl" | 0 | 1 | 1 | 0 | 1 | 0 | 0 | 0 | 0 [0 to 0] | **3 uses**: 41.11 «a very full cup of tea», 42.3 «carry a full bowl», 44.7 «carrying a full cup»; 46.3 adds «an enormous glass of water» (a fourth variant) |
| "dinner plate" | 2 | 1 | 0 | 0 | 0 | 1 | 0 | 0 | 0 [0 to 1] | **4 uses**: 40.11 paws, 40.1 moon («like a dinner plate»), 41.9 paws, 45.12 paw prints |
| "dignity / dignified" | 0 | 1 | 1 | 1 | 2 | 0 | 0 | 1 | 0 [0 to 1] | **6 uses**: 41.6, 42.8 (dignity), 43.7 (most dignified blink), 44.2 (Ganglöt «with great dignity»), 44.14 (Willow «with great dignity»), 47.11 (Odin «with dignity») |
| "(speed/size) of a bus" | 0 | 0 | 1 | 0 | 1 | 1 | 0 | 0 | 0 [0 to 1] | **3 uses**: 42.4 «a fire as big as a bus», 44.4 «size of a bus», 45.3 «the speed of a bus» |
| "size of a baby" | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | intentional echo (40.3, 47.9); keep or vary, user's call |

## Ages and year groups (lines found)
No numeric ages remain. Year-group words: "Reception" for Dot at 40.2, 41.1, 47.6; "top class" 41.4; «who are in the class above ours» 47.5; "Reading Buddies" 47.5 and 47.6. Baseline stories use "Reception" for Dot as canon. 45.1 «exactly your own size» is a size, not an age. **Decision for you:** your brief says "no ages/year groups in text". Dot's "Reception" is established canon in 9 earlier stories; I propose to leave it unless you say otherwise.

## Name spelling
- Consistent: Ganglöt (26 + 3 + 1, no variants), Quilla, Fenris, Tyr, Gleipnir, Heimdall.
- Title forms: "Missus Ibbs" in 40 to 46, but «Mrs Ibbs» appears once in 47 (47.14). Bible says canon is mixed and narration converts "Mrs" to "Missus", so this is cosmetic. Also "Mrs Nuwa" (8), "Mrs Pachamama", "Mrs Oshun" in 47 and "Missus Ungnyeo" in 42 follow the Bible's forms for those people.
- No "Mr " or "Ms " forms in the arc. No "Quilla" variants, no "Tye".

## Long sentences (over about 35 words)
| Ch | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 |
|---|---|---|---|---|---|---|---|---|
| Count | 1 | 3 | 2 | 3 | 2 | 8 | 8 | 7 |
| Per 1,000 words | 0.24 | 0.74 | 0.51 | 0.77 | 0.53 | 1.92 | 1.72 | 1.46 |

Baseline: median 0.22, maximum 0.81. **Flag: chapters 45, 46 and 47 are about two to three times the baseline maximum.** Longest: 47.11 (60 words, the line-up of the game: «Behind him, in a long line, were the little ones with their rabbits, and Alex and Felix and the cousins...»), 46.14 (57 words, the heap on the hilltop), 45.12 (51), 47.14 (51), 43.8 (50), 42.1 (49), 41.8 (47). Full list is in the script output.

## Quote balance
Two paragraphs have an odd number of double quotes, both in 46.8 («The first. I will never again...» and «The second. I will visit you...»). This is correct punctuation for a speech continued across paragraphs; the final paragraph («And the third.»...) closes it. No genuine unmatched quote found.

## Speaker tags and ambiguous pronouns
Pronoun tags per chapter (he/she): 40 3/8, 41 9/3, 42 8/0, 43 9/4, 44 4/4, 45 8/7, 46 6/5, 47 6/11, against 80 to 100 named tags per chapter. The script lists every such line (output saved). On a first pass the tag is clear from the previous line in nearly all. Two candidates to test in Phase 3, because a male speaker could be Alex, Felix or Tyr: 43.6 «"Does anyone listen to her?" he said.» and 43.7 «"What's that one for?" he said.» No speaker-tag run longer than three was found by this crude check (I have not written a true run detector; see below).

## Twin hand count (tagged speech lines "said/whispered/asked/shouted")
| Ch | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | Total |
|---|---|---|---|---|---|---|---|---|---|
| Alex | 20 | 18 | 30 | 23 | 24 | letters | 15 | 14 | 145 |
| Felix | 17 | 20 | 28 | 25 | 26 | letters | 14 | 14 | 145 |

Level in total and within 3 in every chapter. Chapter 45 has equal letter paragraphs (Alex, Felix, Alex, Felix, Both). Key actions are for Phase 4.

## Voice check by contractions (spoken lines tagged to the character)
Hel 12 contractions in 292 words (4.1 per 100); Tyr 11 in 902 (1.2); Odin 18 in 608 (3.0); Skadi 9 in 276 (3.3). Hel is the most contracted of the four, mostly from her refrain «It's not personal» (45.2, 47.9) and 46.4 «It's not a game... It's a person». Her other lines are formal. Phase 4 question: is the refrain deliberate and acceptable?

## Not covered by Phase 2
A true consecutive-speaker-tag run detector, simile detection beyond the listed phrases, and reading-aloud tongue-twisters.

## Decisions needed from you (running list)
1. Chapters 42, 43, 44 are under 4,000 words (3,939, 3,895, 3,770). Lengthen toward 4,000, or accept? (Your brief also asks to keep 4,000+ and says 7 and 8 are longer than 1 to 6.)
2. Dot's "Reception": keep (canon) or remove?
3. Repeated similes (hot-water bottle x3, full cup/bowl x3 to 4, dinner plate x4, "dignity" x6, bus x3): I propose to vary all but one use of each in Phase 5. OK?
4. Late-chapter long sentences (45 to 47): I propose to split the five or six longest where they affect reading aloud. OK?
