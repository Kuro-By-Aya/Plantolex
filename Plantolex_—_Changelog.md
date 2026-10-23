# Plantolex — Changelog

This log describes the nine-file Batch 0 bundle assembled from the supplied code snapshot. It does not claim that a GitHub repository was edited or that the site was deployed.

## Batch 0 — Foundation bundle (2026-10-23)

### Included
- `index.html`, `404.html`, and `styles.css` — bilingual static interface, design system, navigation, directory, and not-found page.
- `app.js` — language and theme switching, category directory, local category/subcategory search and filters, mobile navigation, and progressive-reveal behavior.
- `content/ui.js` — Arabic and English interface strings.
- `content/categories.js` — 15 bilingual category records and 156 subcategories.
- `.nojekyll` — intentionally empty (0 bytes) for GitHub Pages.
- `README.md` and this changelog.

### Corrections made in this bundle
- Emptied `.nojekyll`; it must contain no explanatory text.
- Corrected Arabic agricultural terms, including nematodes (الديدان الخيطية), parasitoids (أشباه الطفيليات), soil amendments (محسّنات التربة), phytoplasmas (الفيتوبلازما), bacteriophages (العاثيات البكتيرية), and protected agriculture wording.
- Corrected the Arabic hero wording.
- Made progressive reveal fail open: the `js` class is applied only after the app initializes, so a JavaScript failure does not hide `.rv` content.
- Made initial language preference reading tolerate blocked browser storage.
- Clarified in `README.md` that the article corpus, reference library, learning content, glossary entries, practical tools, and community functions are planned, not implemented.

### Checks actually run
- `node --check` passed for `app.js`, `content/ui.js`, and `content/categories.js`.
- Static consistency check passed: 15 categories, 156 subcategories, referenced HTML IDs, in-page anchors, translated HTML keys in both dictionaries, script order (`ui.js`, `categories.js`, then `app.js`), and matching CSS brace counts.
- jsdom interaction tests passed for initial Arabic/RTL state, Arabic↔English direction switching, category rendering, English and Arabic category search, no-results state, category accordion, encyclopedia dropdown, mobile menu control, and absence of runtime errors. Scroll APIs were stubbed because jsdom does not implement browser scrolling.
- Progressive-enhancement check passed: without scripts, the HTML has no `.js` class that would hide reveal sections.
- Chromium headless smoke render succeeded at a 390 × 844 viewport.
- `.nojekyll` was verified as 0 bytes.

### Not verified
- Rendering and touch behavior on a physical Android device, assistive-technology testing, and a full manual keyboard/accessibility audit.
- GitHub Pages deployment, external link availability, or changes to the live GitHub repository.
- Scientific review of all category wording by a subject-matter expert. The listed wording corrections are editorial, not a substitute for expert review.
- Articles, source records, a backend, user accounts, image uploads, or community features; these are not part of this static foundation.

### Next
Review the bundle before committing it. Do not start Batch 1 until the owner approves the foundation and the remaining checks appropriate to the repository have been completed.
