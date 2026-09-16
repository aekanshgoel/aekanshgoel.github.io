# Aekansh Goel — Personal Writing Site

A minimal, text-first website for publishing and organizing articles. Calm,
fast, and readable — no images, no tracking, no dependencies beyond the
build tool itself.

Everything is editable in plain files. If you are comfortable with GitHub,
you can maintain this site without ever touching “web development”.

---

## Why this stack (Astro, briefly)

You asked for the simplest reliable option for GitHub Pages. Two serious
candidates exist:

- **Jekyll** — built into GitHub Pages, no build step at all. The catch:
  you must install Ruby + Jekyll to preview anything locally, which is the
  most common stumbling block for people who are not web developers.
- **Astro** *(chosen)* — a modern static-site generator that runs on Node.js
  (one install, `npm install`). It has first-class Markdown support, checks
  each article’s frontmatter at build time (so a typo can’t silently break a
  page), and deploys to GitHub Pages through a single, standard workflow
  file that is already included in this repository (`.github/workflows/deploy.yml`).

The day-to-day maintenance loop is the same either way: **add a Markdown
file → push → the site updates.** Astro just makes local preview and
validation far less painful, and the deployment is fully automated.

The site uses **zero** databases, authentication, analytics, ads, or
trackers. The only JavaScript is a ~40-line tag filter on the writing page,
and without it the site still works completely.

## What you need

- **Git** (you already have it, since you use GitHub)
- **Node.js 20 or newer** — download the LTS installer from
  <https://nodejs.org> and run it. Once.

That’s it. No Ruby, no CMS, no account.

## Local development

From this repository’s folder:

```bash
npm install     # once, downloads the build tool
npm run dev     # starts a local preview
```

Then open **http://localhost:4321** in your browser. As you edit files and
save, the page updates automatically.

Other useful commands:

```bash
npm run build     # produces the final site in dist/ (what GitHub Pages serves)
npm run preview   # serves the built site locally, exactly like production
```

## How to add an article

**This is the main thing you’ll do.** No code involved:

1. In `src/content/posts/`, create a new file named
   `YYYY-MM-DD-short-name.md`, for example:
   `2026-09-20-new-process.md`

2. Start it with this frontmatter block (the site validates every field):

   ```markdown
   ---
   title: "My New Article"
   description: "One short sentence that appears under the title on the listing pages."
   date: 2026-09-20
   tags:
     - manufacturing
     - continuous improvement
   ---

   Write your article in Markdown below. Headings, lists, bold, links,
   quotes, and fenced code blocks are all styled for you.
   ```

3. Save, then `git add . && git commit -m "Add article" && git push`.

Notes on the fields:

| Field           | Required | Notes                                                              |
| --------------- | :------: | ------------------------------------------------------------------ |
| `title`         |    yes   | Shown on the article page and in listings.                          |
| `description`   |    yes   | The one-line excerpt on the home and writing pages.                 |
| `date`          |    yes   | `YYYY-MM-DD`. Controls ordering (newest first).                     |
| `tags`          |    no    | Lowercase words. New tags appear automatically in the filter.       |
| `readingTime`   |    no    | Fixed minutes (e.g. `readingTime: 5`). Omit to auto-estimate from word count. |

- The article’s URL is the filename **without** the date prefix and
  extension: `2026-09-20-new-process.md` → `/writing/new-process/`.
  Keep filenames unique.
- New articles appear automatically on the home page (latest 3) and the
  writing page (all of them). Nothing else to wire up.
- To remove an article, delete its file. The 404 page takes over gracefully.
- The three articles currently in `src/content/posts/` are **placeholder
  examples** — each begins with a `PLACEHOLDER ARTICLE` comment. Replace
  their bodies (and the titles/dates) with your own writing, or delete them.

## How to customize the site

Almost everything personal lives in **one file: `src/config.ts`**.
Open it and edit the values:

| Setting       | Where it appears                                    |
| ------------- | --------------------------------------------------- |
| `name`        | Header, home page, footer (the © line)              |
| `bio`         | One-line intro under your name on the home page     |
| `location`    | Small line under the bio (set to `""` to hide)      |
| `title`       | Browser tab on the home page                        |
| `description` | Search results / link previews                      |
| `email`       | Footer + about page (`mailto:` link)                |
| `github`      | Footer + about page — your GitHub profile URL       |
| `linkedin`    | Footer + about page — your LinkedIn profile URL     |

The professional bio on the **About** page lives in
`src/pages/about.astro` (marked with a `REPLACE` comment), as does the
“Areas of focus” list. The favicon in `public/favicon.svg` is a simple
“AG” monogram — replace it with any `.svg` if you like.

Every placeholder is marked in the source with `REPLACE` or
`PLACEHOLDER` comments, so a quick search for those words finds everything
that still needs your details.

## Deploying to GitHub Pages

The repository already contains the deployment workflow
(`.github/workflows/deploy.yml`). You only have to point GitHub Pages at it:

1. Open the repository on GitHub: **Settings → Pages**
   (left sidebar, under *Code and automation*).
2. Under **Build and deployment → Source**, select
   **GitHub Actions** (not “Deploy from a branch” — this repo started life
   with Jekyll, so you’ll see that option preselected).
3. Push your changes to the `main` branch:
   `git push origin main`
4. Watch the build: **Actions** tab → *Deploy to GitHub Pages*.
   If this is the first run, GitHub may ask you to create a
   `github-pages` environment — accept the prompt, or create it under
   **Settings → Environments → New environment** with the exact name
   `github-pages`.
5. In about 1–3 minutes the site is live at
   `https://aekanshgoel.github.io`.

From then on, **every push to `main` deploys automatically.** You never
touch this again.

(If you ever switch the repo’s default branch from `main`, update the
`branches:` line in `.github/workflows/deploy.yml` to match.)

## Site structure

```
├── .github/workflows/deploy.yml   ← GitHub Pages deployment (leave alone)
├── astro.config.mjs               ← Build settings (leave alone)
├── package.json                   ← Only dependency: astro
├── public/
│   ├── favicon.svg                ← The little "AG" tab icon
│   └── robots.txt
└── src/
    ├── config.ts                  ← ★ YOUR NAME, BIO, LINKS — edit this
    ├── content.config.ts          ← Article frontmatter rules (leave alone)
    ├── content/posts/             ← ★ YOUR ARTICLES LIVE HERE (*.md)
    ├── components/                ← Header, footer, article list item
    ├── layouts/Base.astro         ← The page shell (nav, footer, title)
    ├── lib/format.ts              ← Date + reading-time helpers
    ├── pages/
    │   ├── index.astro            ← Home
    │   ├── writing/index.astro    ← All articles + tag filter
    │   ├── writing/[slug].astro   ← One article (prev/next nav)
    │   ├── about.astro            ← ★ Your bio — edit this
    │   └── 404.astro              ← Friendly not-found page
    └── styles/global.css          ← All the styling (light + dark)
```

## Design decisions

The look is deliberately restrained — a quiet, editorial, Apple-inspired
approach interpreted originally, with no imagery at all:

- **Text is the design.** No photos, gradients, or decorative shapes.
  Visual interest comes from typography, whitespace, hairline dividers, and
  neutral surfaces.
- **Native typography.** The system font stack (`-apple-system`, `SF Pro`,
  `Segoe UI`, …) renders as the OS’s own typeface — crisp and fast, with no
  font downloads. A warm near-white background, near-black text, soft-gray
  metadata, and one muted indigo accent used only for links, focus, and
  active states.
- **Built for long-form reading.** Article text sits in a ~660px measure
  (roughly 65–75 characters per line) at a comfortable size and 1.7
  line-height. Headings, lists, quotes, and code blocks are all styled to
  stay calm but distinct.
- **Dark mode is designed, not inverted.** Separate hand-tuned colors for
  surfaces, dividers, code blocks, and accent — chosen via
  `prefers-color-scheme`, no JavaScript, no toggle to break.
- **Editorial over “dashboard”.** Articles are rows separated by thin
  hairlines rather than rounded cards; the only persistent chrome is a
  slim, translucent sticky header.
- **Subtle, fast interaction.** 140 ms color transitions on hover; nothing
  animates position or layout. Everything respects `prefers-reduced-motion`.
- **Accessibility is structural.** Skip link, semantic landmarks
  (`header`/`nav`/`main`/`footer`), correct heading order, visible keyboard
  focus rings, AA-contrast text in both themes, and a tag filter that is
  pure progressive enhancement — with JavaScript disabled, the full
  article list simply stays visible.
- **Nothing tracked, nothing third-party.** One CSS file, one small script,
  no analytics, no fonts to fetch, no service workers.
