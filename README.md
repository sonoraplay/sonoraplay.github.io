# SonoraPlay documentation portal

Published at **https://sonoraplay.github.io/** (English) and **https://sonoraplay.github.io/es/** (Spanish).

This repository contains the project portal built with [Docusaurus](https://docusaurus.io/): a general, non-technical overview of SonoraPlay (vision, how it works, business rules, architecture, data, APIs, decisions and status). The detailed technical records, in Spanish, stay in the code repository [`sonoraplay/main`](https://github.com/sonoraplay/main), and the portal links to them.

## Structure

| Path | Contents |
|---|---|
| `docs/` | Pages in English (default language) |
| `i18n/es/docusaurus-plugin-content-docs/current/` | The same pages in Spanish (same file names) |
| `i18n/es/*.json` | Spanish labels for the menu, footer and theme |
| `sidebars.js` | Side menu |
| `docusaurus.config.js` | Site configuration |
| `static/img/` | Images (architecture diagram, icon) |

**Rule:** every page exists in both languages. When you change a page in `docs/`, change the file with the same name in the Spanish folder in the same pull request.

## Publishing

`.github/workflows/publicar.yml` builds both languages on every pull request and publishes to GitHub Pages on every push to `main`. It can also be run manually from **Actions → Publicar documentación → Run workflow**.

## Run locally

Requires Node.js 20 or newer.

```bash
npm ci
npm run docs:start                 # English
npm run docs:start -- --locale es  # Spanish
npm run docs:build                 # both languages, as in CI
```
