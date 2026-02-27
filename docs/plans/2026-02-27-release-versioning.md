# Release Versioning Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a semi-automated release script that bumps versions, generates changelog entries, tags, and creates GitHub Releases.

**Architecture:** Single shell script (`scripts/release.sh`) with zero external dependencies beyond `gh` CLI. Updates three files: `site/package.json`, `docs/CHANGELOG.md`, `README.md`. Also translates README to English and adds a version badge.

**Tech Stack:** Bash, git, gh CLI, sed, jq (macOS built-in or brew)

---

### Task 1: Create the release shell script

**Files:**
- Create: `scripts/release.sh`

**Step 1: Create scripts directory and release.sh**

```bash
#!/usr/bin/env bash
set -euo pipefail

# --- Configuration ---
REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PACKAGE_JSON="$REPO_ROOT/site/package.json"
CHANGELOG="$REPO_ROOT/docs/CHANGELOG.md"
README="$REPO_ROOT/README.md"

# --- Colors ---
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# --- Prerequisites ---
echo -e "${BLUE}Checking prerequisites...${NC}"

if ! command -v gh &>/dev/null; then
  echo -e "${RED}Error: gh CLI is not installed. Install it: brew install gh${NC}"
  exit 1
fi

if ! gh auth status &>/dev/null 2>&1; then
  echo -e "${RED}Error: gh CLI is not authenticated. Run: gh auth login${NC}"
  exit 1
fi

if ! git diff --quiet || ! git diff --cached --quiet; then
  echo -e "${RED}Error: Working tree is not clean. Commit or stash your changes first.${NC}"
  exit 1
fi

CURRENT_BRANCH="$(git rev-parse --abbrev-ref HEAD)"
if [[ "$CURRENT_BRANCH" != "main" ]]; then
  echo -e "${RED}Error: Must be on 'main' branch. Currently on '${CURRENT_BRANCH}'.${NC}"
  exit 1
fi

# --- Read current version ---
CURRENT_VERSION="$(grep '"version"' "$PACKAGE_JSON" | sed 's/.*"\([0-9]*\.[0-9]*\.[0-9]*\)".*/\1/')"
echo -e "${GREEN}Current version: v${CURRENT_VERSION}${NC}"

# --- Parse version components ---
IFS='.' read -r MAJOR MINOR PATCH <<< "$CURRENT_VERSION"

# --- Prompt for bump type ---
echo ""
echo "What type of release is this?"
echo "  1) patch  — bug fixes, docs improvements (${MAJOR}.${MINOR}.$((PATCH + 1)))"
echo "  2) minor  — new features, backward compatible (${MAJOR}.$((MINOR + 1)).0)"
echo "  3) major  — breaking changes ($((MAJOR + 1)).0.0)"
echo ""
read -rp "Select [1/2/3]: " BUMP_TYPE

case "$BUMP_TYPE" in
  1|patch)
    NEW_VERSION="${MAJOR}.${MINOR}.$((PATCH + 1))"
    ;;
  2|minor)
    NEW_VERSION="${MAJOR}.$((MINOR + 1)).0"
    ;;
  3|major)
    NEW_VERSION="$((MAJOR + 1)).0.0"
    ;;
  *)
    echo -e "${RED}Invalid selection. Aborting.${NC}"
    exit 1
    ;;
esac

echo -e "${YELLOW}Bumping: v${CURRENT_VERSION} → v${NEW_VERSION}${NC}"
read -rp "Continue? [y/N]: " CONFIRM
if [[ "$CONFIRM" != "y" && "$CONFIRM" != "Y" ]]; then
  echo "Aborted."
  exit 0
fi

# --- Generate changelog entries from commits ---
TODAY="$(date +%Y-%m-%d)"

LAST_TAG="$(git describe --tags --abbrev=0 2>/dev/null || echo "")"
if [[ -n "$LAST_TAG" ]]; then
  COMMITS="$(git log "${LAST_TAG}..HEAD" --oneline --no-merges)"
else
  echo -e "${YELLOW}No previous tags found. Using all commits.${NC}"
  COMMITS="$(git log --oneline --no-merges -50)"
fi

# Group commits by conventional prefix
ADDED=""
CHANGED=""
FIXED=""
OTHER=""

while IFS= read -r line; do
  [[ -z "$line" ]] && continue
  # Strip commit hash
  MSG="${line#* }"

  if [[ "$MSG" =~ ^feat ]]; then
    ADDED="${ADDED}\n- ${MSG}"
  elif [[ "$MSG" =~ ^fix ]]; then
    FIXED="${FIXED}\n- ${MSG}"
  elif [[ "$MSG" =~ ^(docs|style|refactor|chore|build|ci|perf) ]]; then
    CHANGED="${CHANGED}\n- ${MSG}"
  else
    OTHER="${OTHER}\n- ${MSG}"
  fi
done <<< "$COMMITS"

# Build changelog section
CHANGELOG_ENTRY="## [${NEW_VERSION}] — ${TODAY}"

if [[ -n "$ADDED" ]]; then
  CHANGELOG_ENTRY="${CHANGELOG_ENTRY}\n\n### Added\n${ADDED}"
fi
if [[ -n "$CHANGED" ]]; then
  CHANGELOG_ENTRY="${CHANGELOG_ENTRY}\n\n### Changed\n${CHANGED}"
fi
if [[ -n "$FIXED" ]]; then
  CHANGELOG_ENTRY="${CHANGELOG_ENTRY}\n\n### Fixed\n${FIXED}"
fi
if [[ -n "$OTHER" ]]; then
  CHANGELOG_ENTRY="${CHANGELOG_ENTRY}\n\n### Other\n${OTHER}"
fi

# --- Update site/package.json ---
echo -e "${BLUE}Updating site/package.json...${NC}"
sed -i '' "s/\"version\": \"${CURRENT_VERSION}\"/\"version\": \"${NEW_VERSION}\"/" "$PACKAGE_JSON"

# --- Update docs/CHANGELOG.md ---
echo -e "${BLUE}Updating docs/CHANGELOG.md...${NC}"
# Insert new entry after the first "---" separator (after the header)
TEMP_FILE="$(mktemp)"
INSERTED=false
while IFS= read -r line; do
  echo "$line" >> "$TEMP_FILE"
  if [[ "$INSERTED" == false && "$line" == "---" ]]; then
    echo "" >> "$TEMP_FILE"
    echo -e "$CHANGELOG_ENTRY" >> "$TEMP_FILE"
    echo "" >> "$TEMP_FILE"
    echo "---" >> "$TEMP_FILE"
    INSERTED=true
  fi
done < "$CHANGELOG"
mv "$TEMP_FILE" "$CHANGELOG"

# --- Update README.md ---
echo -e "${BLUE}Updating README.md...${NC}"
# Update version badge
sed -i '' "s/version-v[0-9]*\.[0-9]*\.[0-9]*/version-v${NEW_VERSION}/" "$README"
# Update version line
sed -i '' "s/\*\*v[0-9]*\.[0-9]*\.[0-9]*\*\*/\*\*v${NEW_VERSION}\*\*/" "$README"

# --- Git commit and tag ---
echo -e "${BLUE}Committing changes...${NC}"
git add "$PACKAGE_JSON" "$CHANGELOG" "$README"
git commit -m "release: v${NEW_VERSION}"

echo -e "${BLUE}Creating tag v${NEW_VERSION}...${NC}"
git tag -a "v${NEW_VERSION}" -m "Release v${NEW_VERSION}"

# --- Push ---
echo -e "${BLUE}Pushing to remote...${NC}"
git push origin main
git push origin "v${NEW_VERSION}"

# --- Create GitHub Release ---
echo -e "${BLUE}Creating GitHub Release...${NC}"
RELEASE_BODY="$(echo -e "$CHANGELOG_ENTRY" | tail -n +2)"
gh release create "v${NEW_VERSION}" \
  --title "v${NEW_VERSION}" \
  --notes "$RELEASE_BODY"

echo ""
echo -e "${GREEN}Released v${NEW_VERSION} successfully!${NC}"
echo -e "  Tag:     v${NEW_VERSION}"
echo -e "  Release: $(gh release view "v${NEW_VERSION}" --json url -q .url)"
```

**Step 2: Make the script executable**

Run: `chmod +x scripts/release.sh`

**Step 3: Verify script is syntactically valid**

Run: `bash -n scripts/release.sh`
Expected: No output (no syntax errors)

**Step 4: Commit**

```bash
git add scripts/release.sh
git commit -m "feat: add release script with version bumping, changelog, and GitHub Release"
```

---

### Task 2: Wire npm run release

**Files:**
- Modify: `site/package.json:5-11` (scripts section)

**Step 1: Add release script to package.json**

Add to the `scripts` object in `site/package.json`:

```json
"release": "bash ../scripts/release.sh"
```

**Step 2: Commit**

```bash
git add site/package.json
git commit -m "chore: wire release script as npm run release"
```

---

### Task 3: Translate README to English and add version badge

**Files:**
- Modify: `README.md`

**Step 1: Rewrite README in English with version badge**

Replace the entire README with an English translation. Add a version badge at the top. Keep the same structure. Update the version section to reference the release script.

The badge line at the top:
```markdown
![Version](https://img.shields.io/badge/version-v2.0.0-blue)
```

Translate all Polish content to English equivalents:
- "Najlepszy plugin SEO..." → "The best SEO plugin..."
- "Co to jest" → "What is it"
- "Szybka instalacja" → "Quick Install"
- "Komendy" → "Commands"
- "Szybki start" → "Quick Start"
- "Integracje (MCP)" → "Integrations (MCP)"
- "System scoringowy" → "Scoring System"
- "Dokumentacja" → "Documentation"
- "Wersja" → "Version"
- "Pochodzenie" → "Origin"
- "Licencja" → "License"
- Table headers and descriptions translated
- Update the version section to mention `./scripts/release.sh`

**Step 2: Commit**

```bash
git add README.md
git commit -m "docs: translate README to English and add version badge"
```

---

### Task 4: Tag current v2.0.0 as baseline

**Files:** None (git operation only)

**Step 1: Create the v2.0.0 tag on the current main**

This gives the release script a baseline tag to diff against for changelog generation.

Run: `git tag -a v2.0.0 -m "Release v2.0.0 — baseline tag for release automation"`

Note: Do NOT push this tag yet — it will be pushed when the branch is merged and we're on main.

**Step 2: Verify tag**

Run: `git tag -l`
Expected: `v2.0.0` appears in the list

---

### Task 5: Verify end-to-end (dry run check)

**Files:** None

**Step 1: Verify script runs prerequisite checks**

Run from repo root (will fail on branch check since we're not on main — that's expected):

```bash
bash scripts/release.sh
```

Expected: Error message about not being on `main` branch — confirms prerequisite checks work.

**Step 2: Verify all files are consistent**

- `site/package.json` has `"release"` script
- `scripts/release.sh` is executable
- `README.md` has English content and version badge
- `docs/CHANGELOG.md` is unchanged (no premature entries)
- `v2.0.0` tag exists locally
