# Release Versioning Design

## Goal

Semi-automated release workflow: user decides when to release, script handles version bumping, changelog generation, tagging, and GitHub Release creation.

## Approach

Single shell script (`scripts/release.sh`) with zero external dependencies beyond `gh` CLI.

## Release Script Flow

1. **Prerequisites check**: `gh` CLI installed, clean working tree, on `main` branch
2. **Read current version** from `site/package.json`
3. **Prompt** for bump type (major / minor / patch)
4. **Calculate** new version using semver arithmetic
5. **Auto-generate changelog** from commits since last tag, grouped by conventional commit prefix
6. **Update files**:
   - `site/package.json` — version field
   - `docs/CHANGELOG.md` — prepend new version section
   - `README.md` — version badge + version line
7. **Git commit** with message `release: vX.Y.Z`
8. **Git tag** `vX.Y.Z`
9. **Push** commit + tag to remote
10. **Create GitHub Release** via `gh release create` with changelog body

## Files Modified by Script

| File | Change |
|------|--------|
| `site/package.json` | `"version"` field bumped |
| `docs/CHANGELOG.md` | New section prepended with auto-generated entries |
| `README.md` | Version badge updated, version line updated |

## Changelog Auto-Generation

Commits since last tag collected via `git log`. Grouped by prefix:

- `feat:` → Added
- `fix:` → Fixed
- `docs:`, `style:`, `refactor:`, `chore:`, etc. → Changed
- No prefix → Changes

## Additional Work

- Translate README.md from Polish to English
- Add version badge to README top
- Wire script as `npm run release` in `site/package.json`
- Tag current v2.0.0 as baseline

## Prerequisites

- `gh` CLI authenticated
- Clean git working tree
- On `main` branch
