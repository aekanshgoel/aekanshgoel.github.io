import { defineConfig } from "astro/config";

/**
 * Minimal configuration — this site intentionally has no integrations.
 *
 * If you ever move the site to a custom domain, you can add:
 *   site: "https://yourname.com",
 * — the current setup works as-is for GitHub Pages at
 *   https://aekanshgoel.github.io
 */
export default defineConfig({
  markdown: {
    shikiConfig: {
      // Light + dark code themes so blocks match the page palette in
      // both color schemes (see the .astro-code rules in global.css).
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
    },
  },
  server: {
    /**
     * Allow any hostname when running `astro dev` / `astro preview`
     * behind a reverse proxy (e.g. a sandboxed live preview).
     * Only affects local servers — the deployed site is static files.
     */
    allowedHosts: true,
  },
});
