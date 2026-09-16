import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Every .md file in src/content/posts/ becomes an article.
 *
 * The schema below validates each article's frontmatter at build time —
 * if a required field is missing, the build fails with a clear message,
 * which makes typos impossible to ship.
 */
const posts = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/posts",
    /**
     * The article's URL is the filename without the date prefix:
     *   2026-06-14-small-improvements.md  →  /writing/small-improvements/
     * Files without a date prefix use their full filename as the URL.
     */
    generateId: ({ entry }) =>
      entry
        .replace(/\.[^.]+$/, "") // drop the .md extension
        .replace(/^\d{4}-\d{2}-\d{2}-/, ""), // drop the date prefix
  }),
  schema: z.object({
    title: z.string(),
    /** One-line summary, shown on the home and writing pages. */
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    /**
     * Optional. A fixed reading time in minutes.
     * Omit it and the site estimates the time from the word count.
     */
    readingTime: z.number().int().positive().optional(),
  }),
});

export const collections = { posts };
