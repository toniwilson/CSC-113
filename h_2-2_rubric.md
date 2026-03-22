# H.2.2 Rubric — The Better Bot

**Total Points: 30**

---

## The One Change (10 points)

| Score | What It Looks Like |
|-------|-------------------|
| **9–10** | Student made exactly one clear, specific change. The change targets an identified problem from H.2.1. The updated prompt is provided with the change visibly marked. The bot retains its original personality. |
| **7–8** | One change, clearly described, but the connection to a specific problem is weak (e.g., "I thought it would be better" rather than identifying a friction point). Or the change is reasonable but the marking in the prompt is unclear. |
| **5–6** | The change is vague or arguably more than one thing. Or the student effectively rewrote the prompt rather than iterating. Bot personality is mostly gone. |
| **Below 5** | Multiple changes without acknowledgment, complete rewrite, or no updated prompt submitted. |

---

## Testing Quality (10 points)

| Score | What It Looks Like |
|-------|-------------------|
| **9–10** | All 3 tests reuse the same questions from H.2.1. Before/after comparisons are specific enough to show real differences. Verdicts (Better/Worse/Same) are supported by the summaries. "What Happened" section honestly addresses both improvements and unintended consequences. |
| **7–8** | All 3 tests present with comparisons, but summaries are thin or verdicts don't clearly follow from the evidence. "What Happened" section is filled in but lacks specificity. |
| **5–6** | Fewer than 3 tests, or tests use different questions than H.2.1 (defeating the comparison purpose). Or results are present but clearly fabricated. |
| **Below 5** | Testing section mostly empty, or no connection to H.2.1 tests at all. |

---

## Reflection Quality (5 points)

| Score | What It Looks Like |
|-------|-------------------|
| **5** | All reflection prompts answered with specifics. Student articulates a genuine insight in the "taught me" sentence. Shows evidence of thinking through trade-offs rather than just reporting outcomes. |
| **3–4** | Reflection prompts answered but responses are generic ("I learned AI is hard") or surface-level. The "useful scenario" is vague. |
| **1–2** | Most reflection prompts empty or answered with single words. |
| **0** | Reflection section missing. |

---

## Submission & Documentation (5 points)

| Score | What It Looks Like |
|-------|-------------------|
| **5** | Both files (`better-bot-prompt.md` and `better-bot-report.md`) are in the GitHub repository, correctly named, and follow the provided format. Change is clearly marked in the prompt file. |
| **3–4** | Files present but naming issues, missing sections, or change not clearly marked. |
| **1–2** | Only one file submitted, or files are mostly incomplete. |
| **0** | Nothing submitted to GitHub. |

---

## Quick Grading Guide for Instructors

The three things to check first:

1. **Was it actually one change?** Open `better-bot-prompt.md` and look for the marked change. If you can describe it in one sentence, it counts. If you need a paragraph, they changed too much.

2. **Did they reuse their H.2.1 tests?** Open `better-bot-report.md` and cross-reference with their `bad-bot-tests.md`. Same questions = good comparison. Different questions = they missed the point of controlled testing.

3. **Are they honest about trade-offs?** Look at the "What else changed?" and "Unintended consequences" answers. If everything is positive with zero downsides, they are either not testing carefully or not being honest. Real iteration always surfaces surprises.

**Common deductions:**
- Changed multiple things but claims it was one: cap at 6/10 on Change
- Tests use new questions instead of H.2.1 questions: cap at 6/10 on Testing
- "Reflection" is all positive with no trade-offs or surprises: cap at 3/5 on Reflection
- Bot personality completely removed: cap at 5/10 on Change (they started over, not iterated)

**Bonus consideration (not extra points, but worth noting in feedback):**
- Student identifies a scenario where the Better Bot is genuinely useful — this signals they are starting to think like a designer, not just a student completing an assignment
