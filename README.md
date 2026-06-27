# Beyond 9 TO 5 Stories

Personal blog by Shreekara Udupa — documenting treks, bike rides, and travels beyond the desk.

---

## Stack

| Layer | Tool |
|---|---|
| Site generator | [Eleventy v3](https://www.11ty.dev/) |
| Templating | Nunjucks (`.njk`) |
| Stories | Markdown (`.md`) with YAML frontmatter |
| Fonts | Playfair Display + Inter (Google Fonts) |
| Homepage styles | Tailwind CDN + inline CSS |
| Story styles | Custom CSS in `_includes/post.njk` |
| Hosting | Cloudflare (Workers today → Pages soon) |
| Repo | [github.com/shreekaraudupa/Beyond9to5](https://github.com/shreekaraudupa/Beyond9to5) |

---

## Folder Structure

```
/
├── index.html                  # Homepage — self-contained, all styles inline
├── _includes/
│   └── post.njk                # Story layout template — edit this to change all stories
│
├── trekking/
│   └── bali-pass/
│       ├── index.md            # Story content + frontmatter
│       └── photos/             # cover.jpg, day1.jpg, summit.jpg, etc.
│
├── biking/                     # Same structure as trekking/
├── traveling/                  # Same structure as trekking/
│
├── brand_assets/               # Logo, bike.jpg, color refs — use these, not placeholders
├── eleventy.config.js          # Passthrough copy config for photos
├── package.json
│
├── _site/                      # ⚠️ Built output — never edit files here directly
└── node_modules/               # gitignored
```

---

## Local Development

Requires Node.js. Load nvm first if `node` isn't found:

```bash
export NVM_DIR="$HOME/.nvm" && source "$NVM_DIR/nvm.sh"
```

Start the dev server (auto-rebuilds on file save, live at `http://localhost:8080`):

```bash
npm run start
```

One-off build (no server):

```bash
npm run build
```

---

## Adding a New Story

1. Create the folder: `trekking/story-name/` (or `biking/` / `traveling/`)
2. Add `index.md` with the correct frontmatter (see template below)
3. Drop photos into `trekking/story-name/photos/` — name the hero shot `cover.jpg`
4. Run `npm run build` to verify it builds cleanly
5. Push to GitHub (see Deployment below)

### Frontmatter Template

```yaml
---
layout: post.njk
title: "Trek Name"
subtitle: "One line. Italic. Appears below the title."
category: Trekking
year: 2026
readtime: 12
cover: photos/cover.jpg
intro: 2–3 sentence opener that drops the reader into the moment.
stats:
  - label: Max Altitude
    value: "4,940"
    unit: m
  - label: Distance
    value: "52"
    unit: km
  - label: Duration
    value: "7"
    unit: days
  - label: Elevation Gain
    value: "3,200"
    unit: m
---
```

- `cover` — relative path to the hero photo. Remove the line entirely if there's no photo yet.
- `stats` — optional. Remove the block for biking/traveling stories where trek stats don't apply.
- `subtitle` and `intro` — both optional but strongly recommended.
- Use `<em>word</em>` inside `title` or `subtitle` to highlight a word in amber.

### Story Body (Markdown)

Write in plain Markdown. These HTML snippets are available anywhere in the body:

```html
<!-- Single full-width photo -->
<img src="photos/day1-summit.jpg" alt="Summit view" />
<p class="photo-caption">Caption text here.</p>

<!-- Two-photo grid -->
<div class="photo-grid">
  <img src="photos/camp.jpg" alt="Camp" />
  <img src="photos/trail.jpg" alt="Trail" />
</div>

<!-- Pull quote -->
<div class="pull-quote">
  <p>"One sentence from the trail that stuck with you."</p>
</div>
```

Photos automatically break out wider than the text column on desktop.

---

## Deployment

Live URL: **[beyond9to5.pages.dev](https://beyond9to5.pages.dev)**

### Deploy manually (current workflow)

```bash
npm run build
npx wrangler pages deploy _site --project-name beyond9to5 --commit-dirty=true
```

That's it. Build → deploy. Push to GitHub separately with `git push`.

### Switch to auto-deploy (when ready)

Connect the GitHub repo to Cloudflare Pages so every `git push` deploys automatically:

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → `beyond9to5` → **Settings** → **Builds & Deployments**
2. Connect to GitHub → select `shreekaraudupa/Beyond9to5`
3. Build command: `npm run build`
4. Output directory: `_site`
5. Save — from then on every push to `main` deploys automatically

---

## Stories Published

| Story | Category | Status |
|---|---|---|
| Bali Pass | Trekking | In progress |
| Kuari Pass 2023 | Trekking | Coming soon |
| Brahmatal Trek 2021 | Trekking | Coming soon |
| Scrambler Stories | Biking | Coming soon |
