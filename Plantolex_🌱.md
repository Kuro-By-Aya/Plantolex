# Plantolex 🌱
**The Agricultural Knowledge Encyclopedia**

Plantolex is a planned bilingual Arabic–English agricultural knowledge platform designed to connect scientific research, reliable references, and practical agricultural knowledge in one accessible place.
It aims to help farmers, agricultural engineers, students, researchers, educators, and agriculture enthusiasts find, understand, and apply agricultural information through an organized encyclopedia, research resources, learning materials, a bilingual glossary, and a community for sharing questions and field experiences.

## 🌍 Vision
To build a trusted, accessible agricultural knowledge hub that bridges the gap between scientific research and real-world agricultural practice across languages, experience levels, and agricultural contexts.

## 🔎 The Problem
- Agricultural knowledge is scattered across websites, research papers, institutional publications, and social media.
- Online recommendations may lack reliable sources or overlook important differences in crops, growing conditions, and local regulations.
- Finding and understanding relevant scientific research can be challenging, especially for beginners.
- Language barriers can limit access to valuable agricultural information.
- Users need clearer ways to distinguish documented information, community experiences, and advice reviewed by qualified specialists.

## 📚 Core Sections
1. **Agricultural Encyclopedia:** Structured articles covering crops, plant health, pests and diseases, integrated pest management (IPM), biological control, soil, plant nutrition, irrigation, protected agriculture, hydroponics, seeds, genetics, and relevant food-safety topics.
2. **Ask the Agri Community (planned):** A future question-and-answer space for agricultural problems and field observations. Posting, replies, accounts, image uploads, and moderation are not implemented in this Batch 0 foundation.
3. **Research & References:** An organized directory of scientific papers, university resources, extension guides, official publications, and legally accessible books, with links to original sources whenever available.
4. **Learning Hub:** Beginner-friendly explanations, educational resources, and structured learning paths.
5. **Agricultural Glossary:** An Arabic–English glossary with clear definitions and links to related topics.
6. **Practical Tools (planned):** Educational conversion tools, calculators, and a plant-symptom report builder; these tools are not implemented in Batch 0.
7. **Source-Grounded Knowledge:** Answers and articles that show where information came from and how certain it is.

## ✨ What Makes Plantolex Different?
- Reference-based information is linked to its supporting sources.
- Community contributions are identified as user-shared experiences or answers.
- Specialist-reviewed content is labeled as reviewed only after an actual review.
- Automated responses are treated as informational assistance, not confirmed diagnoses.

## 🛡️ Guiding Principles
- **Evidence before certainty:** Claims should be supported by appropriate sources whenever possible.
- **Transparency:** Sources, publication details, update dates, and review status should be shown where available.
- **No guessing:** When essential information is missing, the platform should communicate uncertainty or request clarification.
- **Responsible recommendations:** Plant-protection advice must consider the crop, pest or disease, local registration, label instructions, and applicable regulations.
- **Clear review status:** Content must never be presented as specialist-approved unless the review has actually taken place.
- **Respect for intellectual property:** Research materials are linked, cited, or shared only in ways permitted by their licenses and applicable law.

## 🌐 Languages & Accessibility
- Right-to-left (RTL) Arabic and left-to-right (LTR) English layouts with a persistent language switch.
- Search supports Arabic and English terms, including Arabic text normalization.
- Mobile-first responsive layouts, keyboard accessibility, visible focus states, and reduced-motion support.

## 🗂️ Project structure
```
index.html          → homepage (Batch 0 foundation)
styles.css          → design system (light/dark themes, RTL-safe)
app.js              → language, theme, navigation, directory, search
404.html            → bilingual not-found page (GitHub Pages)
content/ui.js       → ALL interface wording (Arabic + English) — edit text here
content/categories.js → ALL encyclopedia categories & subcategories — edit directory here
CHANGELOG.md        → honest record of each build batch and its test results
.nojekyll           → tells GitHub Pages to publish raw static files
```

## 🧭 Development Roadmap (build batches)
1. **Batch 0 — Foundation** ✅: design system, bilingual interface, 15-category directory (156 subcategories), ranked bilingual search, themes, navigation, 404. See `CHANGELOG.md`.
2. **Batch 1 — Encyclopedia & articles:** category pages, article template, first verified articles (Arabic + English).
3. **Batch 2 — Glossary** · **Batch 3 — Research & references** · **Batch 4 — Learning Hub** · **Batch 5 — Practical tools** · **Batch 6 — Search & SEO** · **Batch 7 — Policies & contact** · **Batch 8 — Community (accounts, questions, answers, comments, moderation)** · **Batch 9 — Launch QA & deployment.**

The current bundle is a static Batch 0 foundation. The directory and search cover category names and subcategories only; article pages, a searchable article corpus, references library, glossary, learning content, calculators, accounts, image uploads, community posting/replies, and backend services are not implemented. Do not treat planned sections as working features.

## 💚 Cost & Sustainability Strategy
- **Cost-aware approach:** keep the first version static and portable; do not assume that a free tier is unlimited or permanently available.
- Hosting and any future backend are undecided; compare current limits, data export, privacy, and billing risks before choosing.
- No paid services or deployment were created as part of this bundle.
- No paid AI APIs. No vendor lock-in: all source code lives in this repository.

## 🚧 Current Status
**Batch 0 foundation bundle — prepared for owner review; not deployed.**
- Verified in local tests: bilingual shell, 15-category / 156-subcategory directory, category-name/subcategory search with filters, theme toggle, responsive navigation controls, build-status section, and bilingual 404 page.
- Search is a local category/subcategory index, not a search of articles, references, or a backend.
- What is being built next: article pages, glossary, research library, learning hub, tools, community — each arriving in its batch and recorded in `CHANGELOG.md`.
- Not yet: article content, research records, learning modules, glossary entries, working agricultural calculators, community backend/accounts, or GitHub Pages deployment. See `CHANGELOG.md` for the precise test scope.

## 🤝 Future Contributions
Potential contributions include agricultural content, source verification, translations, educational resources, usability feedback, and software development. Contribution guidelines will be added when the project is ready to accept contributions.
