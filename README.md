# Kristiina Martin, personal homepage

Five pages: About, Experience, Publications, Education, Contact. The text lives in small data files; a template turns them into pages whenever something is saved on `main`.

## Where to edit what

| To change | Edit this file (in `src/_data/`) |
|---|---|
| Intro, headline, facts, LinkedIn link, public email | `site.yml` |
| A role (and the career timeline) | `roles.yml` |
| A project (shown under its role on Experience) | `projects.yml` |
| A publication | `publications.yml` |
| Degrees and certificates | `education.yml` |
| Topic filters on the Experience page | `themes.yml` |
| Menu names and order | `nav.yml` |

Each file starts with comments that explain its fields.

## Edit in the browser (no tools needed)

1. Open the file on github.com, click the pencil icon, and edit.
2. Click **Commit changes**. The site rebuilds and is live in about a minute.

Copy an existing block when adding something, then change the text. Rules that avoid mistakes:

- Keep the indentation (two spaces per level) and the dashes at the start of list items.
- Put any text that contains a colon in double quotes, for example `title: "Policy brief: Marine litter"`.
- Dates are `"YYYY-MM"`. A current role has a start and no end.
- Never type your phone number or home address into these files. The repository is public.

If the site does not update, open the **Actions** tab and look for a red cross; the message names the file and line with the problem.

## Publish with GitHub Pages (one-time)

Repository **Settings, Pages, Source: GitHub Actions**. After that, every change on `main` is published by `.github/workflows/deploy.yml`.

## Preview on your computer

```
npm install
npm start
```

Then open the address it prints. Changes appear as you save.

## Adding a page later

Copy `src/contact.njk` to a new name, change its front matter (`title`, `description`), write the content, and add the page to `src/_data/nav.yml`.

## Print or save as PDF

Print any page from the browser. The print layout opens every role and hides the menu.
