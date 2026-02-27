#!/usr/bin/env bash
set -euo pipefail
# NOTE: This script uses macOS BSD sed syntax (sed -i ''). Not compatible with GNU/Linux sed.

# ─────────────────────────────────────────────────────────────
# SEO Machine — Release Script
# Bumps version, generates changelog, tags, and creates
# a GitHub Release in one shot.
# ─────────────────────────────────────────────────────────────

# ── Colors ──────────────────────────────────────────────────
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# ── Helpers ─────────────────────────────────────────────────
info()    { printf "${BLUE}[info]${NC}  %s\n" "$1"; }
success() { printf "${GREEN}[ok]${NC}    %s\n" "$1"; }
warn()    { printf "${YELLOW}[warn]${NC}  %s\n" "$1"; }
die()     { printf "${RED}[error]${NC} %s\n" "$1" >&2; exit 1; }

# Temp file cleanup
_CLEANUP_FILES=()
cleanup() { [[ ${#_CLEANUP_FILES[@]} -gt 0 ]] && rm -f "${_CLEANUP_FILES[@]}" 2>/dev/null; }
trap cleanup EXIT

# ── Resolve repo root ──────────────────────────────────────
REPO_ROOT="$(git rev-parse --show-toplevel 2>/dev/null)" \
  || die "Not inside a git repository."
cd "$REPO_ROOT"

PACKAGE_JSON="site/package.json"
CHANGELOG="docs/CHANGELOG.md"
README="README.md"

# ════════════════════════════════════════════════════════════
# 1. Prerequisites
# ════════════════════════════════════════════════════════════
info "Checking prerequisites..."

# gh CLI
command -v gh >/dev/null 2>&1 \
  || die "gh CLI is not installed. Install from https://cli.github.com"

gh auth status >/dev/null 2>&1 \
  || die "gh CLI is not authenticated. Run: gh auth login"

# Clean working tree
if ! git diff --quiet || ! git diff --cached --quiet; then
  die "Working tree is dirty. Commit or stash your changes first."
fi

if [[ -n "$(git ls-files --others --exclude-standard)" ]]; then
  die "Untracked files present. Commit or remove them first."
fi

# Must be on main
CURRENT_BRANCH="$(git symbolic-ref --short HEAD 2>/dev/null)" \
  || die "Detached HEAD state. Switch to main first."

if [[ "$CURRENT_BRANCH" != "main" ]]; then
  die "You must be on the main branch (currently on: $CURRENT_BRANCH)."
fi

success "All prerequisites met."

# ════════════════════════════════════════════════════════════
# 2. Read current version
# ════════════════════════════════════════════════════════════
[[ -f "$PACKAGE_JSON" ]] \
  || die "$PACKAGE_JSON not found."

CURRENT_VERSION="$(grep -o '"version": *"[^"]*"' "$PACKAGE_JSON" | head -1 | grep -o '[0-9][0-9]*\.[0-9][0-9]*\.[0-9][0-9]*')" \
  || die "Could not parse version from $PACKAGE_JSON."

IFS='.' read -r MAJOR MINOR PATCH <<< "$CURRENT_VERSION"

info "Current version: ${GREEN}${CURRENT_VERSION}${NC}"

# ════════════════════════════════════════════════════════════
# 3. Prompt for bump type
# ════════════════════════════════════════════════════════════
PATCH_NEXT="$MAJOR.$MINOR.$((PATCH + 1))"
MINOR_NEXT="$MAJOR.$((MINOR + 1)).0"
MAJOR_NEXT="$((MAJOR + 1)).0.0"

echo ""
printf "${YELLOW}Select version bump:${NC}\n"
echo "  1) patch  $CURRENT_VERSION -> $PATCH_NEXT"
echo "  2) minor  $CURRENT_VERSION -> $MINOR_NEXT"
echo "  3) major  $CURRENT_VERSION -> $MAJOR_NEXT"
echo ""

read -rp "Choice [1/2/3]: " BUMP_CHOICE

case "$BUMP_CHOICE" in
  1) NEW_VERSION="$PATCH_NEXT" ;;
  2) NEW_VERSION="$MINOR_NEXT" ;;
  3) NEW_VERSION="$MAJOR_NEXT" ;;
  *) die "Invalid choice: $BUMP_CHOICE" ;;
esac

echo ""
printf "Will release ${GREEN}v${NEW_VERSION}${NC} (from v${CURRENT_VERSION})\n"
read -rp "Continue? [y/N]: " CONFIRM
case "$CONFIRM" in
  [yY]|[yY][eE][sS]) ;;
  *) die "Aborted by user." ;;
esac

# ════════════════════════════════════════════════════════════
# 4. Auto-generate changelog from commits
# ════════════════════════════════════════════════════════════
info "Generating changelog..."

# Find last tag — try both v-prefixed and bare formats
LAST_TAG=""
_tag="$(git describe --tags --abbrev=0 HEAD 2>/dev/null || true)"
if [[ "$_tag" =~ ^v?[0-9] ]]; then
  LAST_TAG="$_tag"
fi

if [[ -n "$LAST_TAG" ]]; then
  info "Commits since tag: $LAST_TAG"
  COMMITS="$(git log "${LAST_TAG}..HEAD" --pretty=format:"%s" 2>/dev/null || true)"
else
  warn "No previous tags found. Using last 50 commits."
  COMMITS="$(git log -50 --pretty=format:"%s" 2>/dev/null || true)"
fi

# If no new commits, allow an empty changelog section
if [[ -z "$COMMITS" ]]; then
  warn "No new commits since last tag."
fi

# Group commits by conventional-commit prefix
# NOTE: Category vars use literal \n sequences, converted to real newlines
# by printf '%b' on the CHANGELOG_ENTRY assignment below.
ADDED=""
FIXED=""
CHANGED=""
OTHER=""

while IFS= read -r msg; do
  [[ -z "$msg" ]] && continue
  case "$msg" in
    feat:*|feat\(*|feat!:*) ADDED="${ADDED}- ${msg}\n" ;;
    fix:*|fix\(*|fix!:*)    FIXED="${FIXED}- ${msg}\n" ;;
    docs:*|docs\(*|style:*|style\(*|refactor:*|refactor\(*|chore:*|chore\(*|build:*|build\(*|ci:*|ci\(*|perf:*|perf\(*)
                     CHANGED="${CHANGED}- ${msg}\n" ;;
    *)               OTHER="${OTHER}- ${msg}\n" ;;
  esac
done <<< "$COMMITS"

TODAY="$(date +%Y-%m-%d)"
CHANGELOG_ENTRY="## [${NEW_VERSION}] — ${TODAY}"

[[ -n "$ADDED" ]]  && CHANGELOG_ENTRY="${CHANGELOG_ENTRY}\n\n### Added\n\n${ADDED}"
[[ -n "$FIXED" ]]  && CHANGELOG_ENTRY="${CHANGELOG_ENTRY}\n\n### Fixed\n\n${FIXED}"
[[ -n "$CHANGED" ]] && CHANGELOG_ENTRY="${CHANGELOG_ENTRY}\n\n### Changed\n\n${CHANGED}"
[[ -n "$OTHER" ]]  && CHANGELOG_ENTRY="${CHANGELOG_ENTRY}\n\n### Other\n\n${OTHER}"

# Strip trailing whitespace/newlines from entry
CHANGELOG_ENTRY="$(printf '%b' "$CHANGELOG_ENTRY" | sed -e 's/[[:space:]]*$//')"

echo ""
info "Changelog preview:"
echo "──────────────────────────────────────"
printf '%b\n' "$CHANGELOG_ENTRY"
echo "──────────────────────────────────────"
echo ""

# ════════════════════════════════════════════════════════════
# 5. Update files
# ════════════════════════════════════════════════════════════
info "Updating $PACKAGE_JSON..."
sed -i '' "s/\"version\": *\"${CURRENT_VERSION}\"/\"version\": \"${NEW_VERSION}\"/" "$PACKAGE_JSON"
success "$PACKAGE_JSON -> $NEW_VERSION"

info "Updating $CHANGELOG..."
# Insert new section after the first --- separator line
# Uses a temp-file approach for BSD compatibility (BSD awk does not support
# multiline strings in -v assignments, nor the !var syntax)
ENTRY_FILE="$(mktemp)"
_CLEANUP_FILES+=("$ENTRY_FILE")
printf '%b' "$CHANGELOG_ENTRY" > "$ENTRY_FILE"

TEMP_CHANGELOG="$(mktemp)"
_CLEANUP_FILES+=("$TEMP_CHANGELOG")
INSERTED=false
while IFS= read -r line; do
  echo "$line" >> "$TEMP_CHANGELOG"
  if [[ "$INSERTED" == false && "$line" == "---" ]]; then
    echo "" >> "$TEMP_CHANGELOG"
    cat "$ENTRY_FILE" >> "$TEMP_CHANGELOG"
    echo "" >> "$TEMP_CHANGELOG"
    INSERTED=true
  fi
done < "$CHANGELOG"
mv "$TEMP_CHANGELOG" "$CHANGELOG"

if [[ "$INSERTED" == false ]]; then
  die "Could not find --- separator in $CHANGELOG to insert new entry."
fi
success "$CHANGELOG updated"

info "Updating $README..."
# Update version badge (version-vX.Y.Z pattern)
sed -i '' "s/version-v[0-9][0-9]*\.[0-9][0-9]*\.[0-9][0-9]*/version-v${NEW_VERSION}/g" "$README"
# Update bold version line (**vX.Y.Z**)
sed -i '' "s/\*\*v[0-9][0-9]*\.[0-9][0-9]*\.[0-9][0-9]*\*\*/\*\*v${NEW_VERSION}\*\*/g" "$README"
success "$README updated"

# ════════════════════════════════════════════════════════════
# 6. Git operations
# ════════════════════════════════════════════════════════════
TAG_NAME="v${NEW_VERSION}"

info "Staging changes..."
git add "$PACKAGE_JSON" "$CHANGELOG" "$README"

info "Committing..."
git commit -m "release: ${TAG_NAME}"

info "Tagging ${TAG_NAME}..."
git tag -a "$TAG_NAME" -m "Release ${TAG_NAME}"

info "Pushing to origin main..."
git push origin main

info "Pushing tag ${TAG_NAME}..."
git push origin "$TAG_NAME"

success "Git operations complete."

# ════════════════════════════════════════════════════════════
# 7. Create GitHub Release
# ════════════════════════════════════════════════════════════
info "Creating GitHub Release..."
if ! RELEASE_URL="$(gh release create "${TAG_NAME}" \
  --title "${TAG_NAME}" \
  --notes "$CHANGELOG_ENTRY" 2>&1)"; then
  warn "GitHub Release creation failed. Tag and commit are already pushed."
  warn "To create the release manually, run:"
  warn "  gh release create ${TAG_NAME} --title '${TAG_NAME}' --notes-file <changelog-file>"
  exit 1
fi

echo ""
success "Release ${TAG_NAME} published!"
printf "${GREEN}%s${NC}\n" "$RELEASE_URL"
