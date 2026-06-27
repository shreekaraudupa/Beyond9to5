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

### Current setup (manual)

1. Make changes locally
2. `npm run build` — outputs to `_site/`
3. Push to GitHub: `git push`
4. Deploy to Cloudflare manually — two options:
   - **Dashboard:** [dash.cloudflare.com](https://dash.cloudflare.com) → Workers & Pages → `beyond9to5` → Deployments → upload `_site/`
   - **CLI:** `npx wrangler deploy`

Live URL: `beyond9to5.shreekaraudupa.workers.dev`

### Planned: Cloudflare Pages (auto-deploy)

When the site is ready for auto-deploy, switch from Workers to **Cloudflare Pages**:

- Connect the GitHub repo in the Cloudflare Pages dashboard
- Build command: `npm run build`
- Output directory: `_site`
- Every `git push` to `main` will trigger a build and deploy automatically

Until then, deployments are intentional and manual — push code often, deploy only when there's something significant.

---

## Stories Published

| Story | Category | Status |
|---|---|---|
| Bali Pass | Trekking | In progress |
| Kuari Pass 2023 | Trekking | Coming soon |
| Brahmatal Trek 2021 | Trekking | Coming soon |
| Scrambler Stories | Biking | Coming soon |
