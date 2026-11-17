# Notes for working in this repo

Personal homepage for Kristiina Martin, built with Eleventy and published on GitHub Pages.

- Content is YAML in `src/_data/`; pages are Nunjucks templates in `src/*.njk`; shared layout in `src/_includes/`; CSS and JS in `src/assets/`.
- Pages: About (`index.njk`), Experience, Publications, Education, Contact. The menu is `src/_data/nav.yml`.
- Projects live in `projects.yml` and point at a role through `role: <role id>`. The timeline and role cards are built from `roles.yml`.
- Always build before pushing: `npx @11ty/eleventy`. For the Pages path test use `--pathprefix=/home/`; every internal link must go through the `url` filter.
- YAML front matter and data: quote any string that contains a colon.
- Typeface: common system stack only (Helvetica Neue, Helvetica, Arial). Do not add web fonts or an AI-typical font.
- The repository is public. Do not add unconfirmed or private material (phone, address, birth date, internal client details), even hidden or commented out. Publication items whose author role is unconfirmed (the PROMAR policy brief) stay out until confirmed.
- The "present" end of the current role is computed at build time.
