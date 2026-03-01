# Humanizer v2.2.0: Tone Presets + Humanization Score

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Extend the Humanizer skill with tone presets (casual, professional, editorial, conversational) and a humanization scoring system (0-100).

**Architecture:** Documentation-first plugin — all changes are to Markdown reference files. The skill definition in `docs/SKILLS.md` gets new sections for tone presets and scoring. The command reference in `docs/COMMANDS.md` gets new `--tone` and `--score-only` flags. Version tracked in changelog, README, and site package.json.

**Tech Stack:** Markdown documentation, Astro docs site (version bump only)

---

### Task 1: Update SKILLS.md — Add Tone Presets section

**Files:**
- Modify: `docs/SKILLS.md:241-256` (between "Voice Injection" and "Workflow" sections)

**Step 1: Add tone presets section after Voice Injection (line 249)**

Insert the following after line 249 (`- **Specificity** — replaces vague descriptions...`):

```markdown

### Tone Presets (New in v2.2)

Control the voice direction after AI patterns are removed:

| Preset | Style | Best for |
|--------|-------|----------|
| `casual` | Short sentences, contractions, colloquial phrasing, "you/I" | Blog posts, social media, newsletters |
| `professional` | Clean and direct, no fluff but no slang | B2B content, whitepapers, case studies |
| `editorial` | Opinionated, structured arguments, confident voice | Thought leadership, opinion pieces, columns |
| `conversational` (default) | Natural mix, like explaining to a colleague | General content, landing pages, guides |

Usage: `/humanize --tone editorial <text>`
```

**Step 2: Verify the edit**

Read `docs/SKILLS.md` lines 249-265 to confirm the new section is correctly placed between Voice Injection and Workflow.

**Step 3: Commit**

```bash
git add docs/SKILLS.md
git commit -m "feat(humanizer): add tone presets section to SKILLS.md"
```

---

### Task 2: Update SKILLS.md — Add Humanization Score section

**Files:**
- Modify: `docs/SKILLS.md` (after the new Tone Presets section, before Workflow)

**Step 1: Add scoring section after Tone Presets**

Insert the following after the Tone Presets section:

```markdown

### Humanization Score (New in v2.2)

A 0-100 score measuring AI-detectability, shown before and after humanization:

**Scoring factors:**

| Factor | Weight | What it measures |
|--------|--------|-----------------|
| AI vocabulary density | 25% | Frequency of known AI words ("delve", "crucial", "leverage", etc.) |
| Sentence structure variety | 20% | Standard deviation of sentence lengths and structure types |
| Pattern repetition | 15% | Rule-of-three, negative parallelisms, formulaic constructions |
| Voice presence | 15% | Opinions, first-person, specificity, personality markers |
| Transitional padding | 15% | "Furthermore", "Moreover", "In conclusion" density |
| Punctuation patterns | 10% | Em dash frequency, uniform punctuation habits |

**Output example:**
```
Humanization Score: 34 → 87

  AI vocabulary:      2/10 → 8/10
  Sentence variety:   4/10 → 9/10
  Pattern repetition: 3/10 → 8/10
  Voice presence:     5/10 → 9/10
  Transition padding: 3/10 → 9/10
  Punctuation:        4/10 → 8/10
```

Use `--score-only` to get the score without rewriting.
```

**Step 2: Verify the edit**

Read the updated section to confirm correct placement and formatting.

**Step 3: Commit**

```bash
git add docs/SKILLS.md
git commit -m "feat(humanizer): add humanization score section to SKILLS.md"
```

---

### Task 3: Update SKILLS.md — Update Workflow section

**Files:**
- Modify: `docs/SKILLS.md` (Workflow section, currently lines ~251-256)

**Step 1: Update the workflow to include scoring and tone steps**

Replace the existing Workflow section content:

```markdown
### Workflow

1. **Score** — calculate initial humanization score (0-100)
2. **Scan** — detect all nine AI pattern categories
3. **Rewrite** — replace flagged sections with natural alternatives
4. **Inject** — add personality using the selected tone preset (default: conversational)
5. **Final pass** — ask "What makes this obviously AI-generated?" and fix remaining tells
6. **Re-score** — calculate final humanization score, show before/after comparison
```

**Step 2: Verify the edit**

Read the Workflow section to confirm it has 6 steps.

**Step 3: Commit**

```bash
git add docs/SKILLS.md
git commit -m "feat(humanizer): update workflow with scoring and tone steps"
```

---

### Task 4: Update COMMANDS.md — Add new flags to `/humanize`

**Files:**
- Modify: `docs/COMMANDS.md:491-521` (the `/humanize` command section)

**Step 1: Update the syntax line**

Replace the existing syntax block:

```markdown
**Syntax:**
```
/humanize [--tone casual|professional|editorial|conversational] [--score-only] <text, file path, or URL>
```
```

**Step 2: Update "What it does" to include scoring and tone**

Replace the existing "What it does" section:

```markdown
**What it does:**
1. **Initial scoring** — calculates a humanization score (0-100) measuring AI-detectability
2. **Pattern detection** — scans for all nine AI writing categories (inflated significance, promotional language, vague attributions, em dash overuse, rule of three, AI vocabulary, negative parallelisms, conjunctive padding, superficial -ing analyses)
3. **Targeted rewrites** — replaces flagged sections with natural, direct alternatives
4. **Tone application** — applies the selected tone preset (casual, professional, editorial, or conversational [default])
5. **Voice injection** — adds opinions, rhythm variation, first-person perspective, and specificity where appropriate
6. **Final anti-AI pass** — asks "What makes this obviously AI-generated?" and fixes remaining tells
7. **Re-scoring** — calculates final score and shows before/after comparison

**Flags:**
- `--tone <preset>` — Set the voice direction: `casual`, `professional`, `editorial`, or `conversational` (default)
- `--score-only` — Show the humanization score without rewriting (diagnostic mode)
```

**Step 3: Update the output section**

Replace the existing output:

```markdown
**Output:**
- Humanization score (before → after)
- Fully humanized version of the content in the selected tone
- Optional change log showing what was flagged and why
```

**Step 4: Verify the edit**

Read `docs/COMMANDS.md` lines 491-530 to confirm correct formatting.

**Step 5: Commit**

```bash
git add docs/COMMANDS.md
git commit -m "feat(humanizer): add --tone and --score-only flags to /humanize command"
```

---

### Task 5: Update CHANGELOG.md — Add v2.2.0 entry

**Files:**
- Modify: `docs/CHANGELOG.md:1-7` (insert new entry after line 5)

**Step 1: Insert v2.2.0 entry after the `---` on line 5**

Insert between line 5 (`---`) and line 7 (`## [2.1.0]`):

```markdown

## [2.2.0] — 2026-03-01

### Added

**Humanizer Enhancements:**
- **Tone Presets** — four voice direction presets for humanized content: `casual` (blog posts, social), `professional` (B2B, whitepapers), `editorial` (thought leadership, opinion), `conversational` (default, general content)
- **Humanization Score** — 0-100 AI-detectability score shown before and after humanization, based on six weighted factors: AI vocabulary density (25%), sentence variety (20%), pattern repetition (15%), voice presence (15%), transitional padding (15%), punctuation patterns (10%)
- **`--score-only` flag** — diagnostic mode that shows the humanization score without rewriting
- **`--tone` flag** — set the voice direction for `/humanize` output

### Changed
- Humanizer workflow updated from 4 steps to 6 steps (adds initial scoring and re-scoring)
- `SKILLS.md` — Added Tone Presets and Humanization Score sections to Humanizer skill
- `COMMANDS.md` — Updated `/humanize` syntax with new flags

---

```

**Step 2: Verify the edit**

Read `docs/CHANGELOG.md` lines 1-30 to confirm the new entry appears correctly.

**Step 3: Commit**

```bash
git add docs/CHANGELOG.md
git commit -m "docs: add v2.2.0 changelog entry"
```

---

### Task 6: Update README.md — Bump version

**Files:**
- Modify: `README.md:61` (version line)

**Step 1: Update version line**

Replace line 61:
```markdown
**v2.1.0** — nowy skill Humanizer + komenda `/humanize` do usuwania wzorców AI z treści.
```

With:
```markdown
**v2.2.0** — Humanizer z presetami tonu (`--tone`) i oceną humanizacji (`--score-only`).
```

**Step 2: Verify the edit**

Read `README.md` lines 59-62 to confirm.

**Step 3: Commit**

```bash
git add README.md
git commit -m "docs: bump version to v2.2.0 in README"
```

---

### Task 7: Update site/package.json — Bump version

**Files:**
- Modify: `site/package.json:4` (version field)

**Step 1: Update version**

Replace:
```json
"version": "2.0.0",
```

With:
```json
"version": "2.2.0",
```

**Step 2: Verify the edit**

Read `site/package.json` lines 1-5 to confirm.

**Step 3: Commit**

```bash
git add site/package.json
git commit -m "chore: bump site version to 2.2.0"
```

---

### Task 8: Tag the release

**Step 1: Create annotated git tag**

```bash
git tag -a v2.2.0 -m "v2.2.0: Humanizer tone presets and humanization score"
```

**Step 2: Verify tag**

```bash
git tag --sort=-v:refname | head -3
```

Expected: `v2.2.0` at top.

---

### Task 9: Update COMMANDS.md header — Bump command count note (if needed)

**Files:**
- Modify: `docs/COMMANDS.md:1`

**Step 1: Verify command count**

The header says "17 commands" — this release adds no new commands (only new flags to existing `/humanize`), so no change needed. Skip this task if count is still 17.

---
