# H.2.2 — The Better Bot

**CSC-113 AI Fundamentals**
**Due:** One week after H.2.1 (see Canvas for exact date)
**Points:** 30
**Time Estimate:** About 90 minutes total
**Submission:** Files added to your GitHub repository

---

## What You're Doing

Your Bad Bot is a beautiful disaster. Now you are going to make it *slightly less* of a disaster — on purpose, with evidence.

You will change **exactly one thing** in your Bad Bot's prompt, then run the same tests again to see what that one change actually did.

**Why only one change?** Because real AI improvement works this way. If you change five things at once and the bot gets better, you have no idea which change helped. One change at a time is how you learn what actually matters.

Your bot does not need to become perfect. It just needs to become **a little more useful** while still being recognizably yours.

---

## The Three Parts

| Part | What You Do | Time |
|------|------------|------|
| 1. Pick Your Fix | Identify the worst problem and design one change | 30 min |
| 2. Test Both Versions | Run the same 3 tests on old and new prompts | 30 min |
| 3. Write It Up and Save | Create your files and upload to GitHub | 30 min |

---

## Part 1: Pick Your Fix (30 minutes)

### Step 1: Identify THE Problem

Look back at your Bad Bot test results from H.2.1. You probably noticed several things that were annoying or broken. Pick **the single worst one** — the thing that makes the bot hardest to actually use.

Ask yourself: "If I could only fix one thing, what would make the biggest difference?"

### Step 2: Design Your One Change

You may change **exactly one thing** in your prompt. Not two things. Not "one thing with a few small additions." One clear, specific change.

**Good changes** (one thing, clear target):

| Before | After | Why It Works |
|--------|-------|-------------|
| "Assume the user knows nothing" | "Assume the user knows nothing, but ask what they already know before explaining" | Adds one behavior without removing the personality |
| "Only speak in Gen Z slang" | "Only speak in Gen Z slang, but put technical terms in [brackets]" | Keeps the voice, adds usability |
| "Never give a direct answer" | "Never give a direct answer, but after 3 questions, offer a hint" | Keeps the Socratic style, adds a safety valve |

**Bad changes** (too many things, or giving up):

| Change | Why It's Bad |
|--------|-------------|
| "Be helpful and kind and accurate" | That is three changes, not one |
| "Remove all personality" | That is not iterating — that is starting over |
| Rewriting the whole prompt | Same problem — you cannot tell what helped |

### Step 3: Write Your Updated Prompt

Take your original Bad Bot prompt. Add your one change. **Mark the change clearly** so anyone reading it can see exactly what is different.

---

## Part 2: Test Both Versions (30 minutes)

You are going to run the **same three tests** you ran for H.2.1, but this time on your updated prompt. Then you compare.

### How It Works

For each of your three original tests:

1. **Look at your Bad Bot results** from H.2.1 (you already have these in `bad-bot-tests.md`)
2. **Run the same question** through your updated Better Bot prompt
3. **Write down what changed**

Use this format for each test:

```
**Test [number]: [short description]**
Question: [same question you used in H.2.1]
Bad Bot response (from H.2.1): [2-3 sentence summary]
Better Bot response: [2-3 sentence summary]
What changed: [Did the fix help here? How?]
Verdict: Better / Worse / About the Same
```

### After All Three Tests

Answer these questions:

- **Did the fix work?** Did your one change improve the thing you were targeting?
- **Did anything else break?** Sometimes fixing one thing makes something else worse. Be honest.
- **Is the bot still "yours"?** Does it still have personality, or did your fix accidentally make it generic?

---

## Part 3: Write It Up and Save to GitHub (30 minutes)

You need to create **two files** and add them to your repository.

### File 1: `better-bot-prompt.md`

```markdown
# [Your Bot's Name] — Version 2

## The Original Flaw (from H.2.1)
[1 sentence: what flaw did you build into the Bad Bot?]

## The Problem I Chose to Fix
[1-2 sentences: what specific issue made the bot hardest to use?]

## What I Changed
"I changed ______ to ______."
[Write this as one clear sentence.]

## Full Updated Prompt
[Paste your complete updated prompt here.
 Mark the changed part with **bold** or >>> so it stands out.]
```

### File 2: `better-bot-report.md`

```markdown
# Better Bot Report

## My Bot: [Name]
## AI Tool Used: [Gemini / Claude / ChatGPT / other]
## Date: [Date]

---

## Test Results

### Test 1: [Short description]
**Question:** [same as H.2.1]
**Bad Bot response:** [2-3 sentence summary]
**Better Bot response:** [2-3 sentence summary]
**What changed:** [how did the fix affect this test?]
**Verdict:** Better / Worse / About the Same

### Test 2: [Short description]
**Question:** [same as H.2.1]
**Bad Bot response:** [2-3 sentence summary]
**Better Bot response:** [2-3 sentence summary]
**What changed:** [how did the fix affect this test?]
**Verdict:** Better / Worse / About the Same

### Test 3: [Short description]
**Question:** [same as H.2.1]
**Bad Bot response:** [2-3 sentence summary]
**Better Bot response:** [2-3 sentence summary]
**What changed:** [how did the fix affect this test?]
**Verdict:** Better / Worse / About the Same

---

## What Happened

**Did the fix work?**
[2-3 sentences: did your one change improve the thing you targeted?]

**What else changed?**
[2-3 sentences: did anything unexpected get better or worse?]

**Is it still "your" bot?**
[1-2 sentences: does it still have its personality?]

---

## Reflection

**What made you pick THIS problem over the others?**
[2-3 sentences. As you think back on your decision, what made this feel like the right one?]

**How big was the change compared to its impact?**
[2-3 sentences. You might notice that small adjustments can have larger effects than you expected.]

**Where would your Better Bot actually be useful now?**
[Describe one realistic situation where someone could use this bot and get real value from it — even if the value is small.]

**Complete this sentence:**
"This assignment taught me that AI improvement is really about _______, not _______."

**What question are you left with?**
[One genuine question this experience raised for you.]
```

---

### How to Upload Your Files

**If you are on the Code Builders track:**
Follow your usual workflow — create an Issue, make a branch, add your files, open a Pull Request, and merge.

**If you are on the Prompt Masters track:**
1. Go to your repository on [github.com](https://github.com)
2. Click **Add file** → **Upload files**
3. Drag both files into the upload area (or click "choose your files")
4. In the "Commit changes" box, type something like: `Add Better Bot assignment files`
5. Make sure "Commit directly to the main branch" is selected
6. Click **Commit changes**

---

## Checklist Before You Submit

- [ ] `better-bot-prompt.md` has your updated prompt with the change clearly marked
- [ ] `better-bot-report.md` has all three test comparisons filled out
- [ ] Each test reuses the same question from your H.2.1 Bad Bot tests
- [ ] "What Happened" section is filled in honestly (including anything that got worse)
- [ ] "Reflection" section is complete
- [ ] Both files are in your GitHub repository

---

## What Success Looks Like

**Good submission:**
- Bot still has personality
- One clear, specific improvement
- Honest before/after comparison with evidence
- Acknowledges trade-offs and surprises
- Reflection shows real thinking, not just "it was good"

**Missing the point:**
- Removed all personality (that is starting over, not iterating)
- Changed multiple things (cannot tell what helped)
- Claims everything is perfect now (nothing is)
- No comparison to original test results
- Reflection is vague or empty

---

## Quick Reference

| Term | What It Means |
|------|--------------|
| Iterate | Make a small change, test it, learn from the results, repeat. The core skill of working with AI. |
| Trade-off | When fixing one thing makes something else worse. This is normal and expected. |
| System prompt | The instructions you give an AI before the conversation starts. |
| Vanilla | A plain chatbot with no special instructions — your baseline for comparison. |
