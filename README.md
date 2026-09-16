# Aekansh Goel

Personal writing site. Live at [https://aekanshgoel.github.io](https://aekanshgoel.github.io).

This is a **Jekyll** site. GitHub Pages builds it. You do not need Node, a database, or extra hosting. To publish an article, add a Markdown file. To change your name or links, edit `_config.yml`.

## What you need

- A GitHub account (you already have this)
- [Ruby](https://www.ruby-lang.org/) only if you want to preview on your computer

You do not need Ruby to publish. GitHub can build the site for you.

## Customize your name, bio, and links

Open `_config.yml`.

| Field | What it changes |
| --- | --- |
| `name` | Header, footer, and home heading |
| `initials` | Small monogram |
| `tagline` | The italic line on the home page |
| `description` | Text used in browser previews |
| `location` | “Notes from …” line. Leave empty to hide it |
| `email` | Footer email |
| `github_url` | Footer GitHub |
| `linkedin_url` | Footer LinkedIn |

Also edit:

- `about.html` — the About page
- `assets/favicon.svg` — the two letters in the browser tab

## Add an article

1. Create a file in `_posts`.
2. Name it `YYYY-MM-DD-my-article-title.md`
   - The date in the filename is required.
   - Use lowercase letters, numbers, and hyphens in the title part.
3. Start the file with:

```yaml
---
layout: post
title: "My article title"
date: 2026-09-16
description: "One or two sentences that appear on the home page."
tags:
  - manufacturing
  - learning
---
```

4. Write the article in Markdown under that header.
5. Commit and push to `main`. The home page, Writing page, and article page update automatically.

`description` is the short excerpt on lists. `tags` are optional. Reading time is estimated from word count unless you add `reading_time: 4`.

To remove a placeholder article, delete its file from `_posts`.

## Preview on your computer

Skip this if you only want to publish.

```bash
cd aekanshgoel.github.io
bundle install
bundle exec jekyll serve
```

Open [http://127.0.0.1:4000](http://127.0.0.1:4000).

If `bundle` is missing:

```bash
gem install bundler
```

## Deploy on GitHub Pages

This repo name (`aekanshgoel.github.io`) is a user site. The live URL is `https://aekanshgoel.github.io` with no extra path.

1. Make the repository **public** if it is private. Free GitHub Pages needs a public repo.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, either:
   - **Source: GitHub Actions** (uses `.github/workflows/pages.yml`), or
   - **Deploy from a branch**, branch `main`, folder `/ (root)`
4. Wait a minute, then open [https://aekanshgoel.github.io](https://aekanshgoel.github.io).

If a deploy is yellow and waiting, open **Actions** and approve the `github-pages` environment.

Each push to `main` republishes the site.

## Project structure

```
_config.yml                 ← name, bio, links, homepage line
_posts/                     ← articles (add Markdown here)
_layouts/                   ← page wrappers
_includes/                  ← header, footer, article list item
assets/css/main.css         ← design
assets/js/writing.js        ← tag filter on /writing/
index.html                  ← home
writing.html                ← all articles
about.html                  ← about page
404.html                    ← not-found page
.github/workflows/pages.yml ← GitHub Pages deploy
```

## License

Personal site. Replace placeholder articles before treating them as finished writing.
