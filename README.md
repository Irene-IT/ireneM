# Irene Myronova — Portfolio & Blog

[![License](https://img.shields.io/github/license/Irene-IT/ireneM)](https://github.com/Irene-IT/ireneM/blob/main/LICENSE) [![Version](https://img.shields.io/github/v/release/Irene-IT/ireneM?label=version)](https://github.com/Irene-IT/ireneM) [![Deployed on Netlify](https://img.shields.io/badge/deployed%20on-Netlify-00C7B7)](https://irenemyronova-b2b.netlify.app/) [![Build (GitHub Actions)](https://img.shields.io/github/actions/workflow/status/Irene-IT/ireneM/ci.yml?branch=main)](https://github.com/Irene-IT/ireneM/actions)

---

## Contents

1. [Project description](#project-description)
2. [Comparison with the template (design-code.tips)](#comparison-with-the-template-design-codetips)
3. [Installation instructions](#installation-instructions)
4. [Usage examples](#usage-examples)
5. [Developer guide](#developer-guide)
6. [License](#license)
7. [Badges and statuses](#badges-and-statuses)
8. [Contacts and acknowledgements](#contacts-and-acknowledgements)

---

## Project description

**Irene Myronova — Portfolio & Blog** — a personal portfolio site and blog, created based on an open template and adapted to a personal brand and services in the field of B2B SaaS content writing.
The project is built using Next.js, Tailwind CSS, Framer Motion, and Decap CMS, deployed on Netlify. ([GitHub][1])

**Live site (portfolio demo):**
* 👉 [https://irenemyronova-b2b.netlify.app/](https://irenemyronova-b2b.netlify.app)
* 👉 ([Irene Myronova | B2B SaaS Content Writer][2])

**Original template used as a base:**
* 👉 [https://design-code.tips/](https://design-code.tips)
* 👉 ([Nuno Marques][4])

### Key features

* 🛠️ **Next.js  15** — modern React framework with App Router
* 🎨 **Tailwind CSS** — utility-first styling for fast UI building
* 🎞️ **Framer Motion** — smooth page transitions and animations
* 📝 **Decap CMS** — easy blog & content management via Git-based CMS
* 🌗 **Dark/Light Mode** — automatic theme switching based on user system
* 🖼️ **Optimized Images** — served from `/public` for performance

### Technical updates

* **Base:** Next 15, React 18, Tailwind v4.
* **Content layer:** Contentlayer 2 (The original template used Next 14.)
* **CMS:** Decap CMS (via Git Gateway + Netlify Identity)

> Note: these updates reflect the current technical base of the project after migrations/updates — check `package.json`, `next.config.js`, and `tailwind.config.js` in the repository to confirm versions when working locally.

---

## Comparison with the template (design-code.tips)

Below is a brief comparison between the custom portfolio (live) and the original template. Note that conclusions are based on current public pages.

### Common elements

* Both sites use a simple content structure: menu, blocks with publications/posts, a tools/resources section (in the original template). ([design-code.tips][3])

### Main differences ([irenemyronova-b2b.netlify.app][2])

1. **Content focus**

   * The `design-code.tips` template is an educational/informational resource with a blog, tools, and curated articles. ([design-code.tips][3])
   * Irene’s site is a personal portfolio and services (B2B SaaS content writer): custom sections "Hero", "Services", “My works”, "Testimonials", "FAQ", and "Contacts". Content is fully personalized.
   * Headings, photos, and work samples have been replaced with personal ones (name, email, description of services, work samples). ([Irene Myronova | B2B SaaS Content Writer][2])

2. **Navigation and page structure**

   * Simplified navigation focused on "Testimonials", "FAQ", and "Contacts". ([Irene Myronova | B2B SaaS Content Writer][2])

3. **Content management**

   * Decap CMS is integrated (admin panel `/admin`) and a `content` structure for "Hero", "Services", “My works”, "Testimonials", "FAQ" and "Contacts" is set up for convenient blog/portfolio management. ([GitHub content][content])

4. **License and authorship**

   * The footer of the site indicates that the original belongs to Nuno Marques (OSITAKA), and changes — © Irene Myronova. The MIT license is also indicated. ([Irene Myronova | B2B SaaS Content Writer][2])

---

## Installation instructions

> The steps below match the structure and scripts described in the repository. ([GitHub][1])

1. Clone the repository:

```bash
git clone https://github.com/Irene-IT/ireneM.git
cd ireneM
```

2. Install dependencies:

```bash
npm install
# or, optionally
# pnpm install
# yarn install
```

> Tip: if the project is updated to Next 15 / React 18 / Tailwind v4 and you use `pnpm` or specific `node` versions, make sure your local Node.js version is compatible with the requirements (use `nvm` if needed).

3. Run the development environment:

```bash
npm run dev
# open http://localhost:3000
```

4. Build for production:

```bash
npm run build
npm run start
```

5. The Decap CMS admin panel is available at `/admin`. For local CMS testing, open `public/admin/config.yml` and set `local_backend: true` (if needed). ([GitHub][1])

> Note: this README assumes you have Node.js (LTS) installed. If a specific Node version is required, add it to `engines` in `package.json` or use nvm.

---

## Usage examples

### 1) Adding a new post (via filesystem)

* Create a file in the `content/posts/` folder (Markdown / MDX format depending on configuration).
* Add frontmatter (title, date, tags, excerpt) and content.
* Commit and push — Netlify will automatically deploy a new version (if CI is configured).

### 2) Adding an item to the portfolio

* Add an entry/file in `content/projects/` or the corresponding directory (see the `content` structure in the repository).
* Add the image to `public/` and specify the path in the frontmatter.
* Commit → Push → deploy.

### 3) Working with Decap CMS (GUI)

* Open `/admin` on the local server or on production (if Netlify Identity / Git Gateway is configured).
* Create/edit posts and pages through the interface; changes will be saved to the repository (Git-based CMS). ([GitHub][1])

---

## Developer guide

### Workflow

1. **Fork/clone** the repository.
2. Create a feature branch:

   ```bash
   git checkout -b feat/feature-name
   ```
3. Write clean commits and open a PR to `main`.
4. Follow code style (there is a `.prettierrc` in the repository). Before pushing, run formatting:

   ```bash
   npm run format
   ```

### Project structure (brief)

```
/
├── app/         # Next.js App Router (pages, layout)
├── components/  # UI components
├── content/     # Blog/portfolio (CMS)
├── public/      # Static media (images, favicon)
├── styles/      # Tailwind / global styles
├── package.json
└── README.md
```

(Full structure — in the repository.) ([GitHub][1])

### Local CMS setup

* To test Decap CMS locally, in `public/admin/config.yml`:

  * set `local_backend: true`
  * then run `npm run dev` and open `/admin`.

### Rules for making changes

* New UI components — put them in `components/`.
* Content — in `content/`. Please do not alter the history of others’ posts without their consent.
* Major style changes — via the Tailwind config (`tailwind.config.js`).

### CI / Deploy

* Deployment is configured via Netlify (continuous deployment from main). Check `netlify.toml` in the root. ([GitHub][1])

---

## License

The project is licensed under the **MIT License**. (The repository and the site indicate MIT.) ([GitHub][1])

If you use materials from the original template, follow the original author’s license terms (the template footer mentions the original author). ([design-code.tips][3])

---

## Badges and statuses

* **License**: ![License](https://img.shields.io/github/license/Irene-IT/ireneM)
* **Releases / Version**: ![Version](https://img.shields.io/github/v/release/Irene-IT/ireneM?label=version)
* **Deployment**: ![Netlify](https://img.shields.io/badge/deployed%20on-Netlify-00C7B7)
* **CI (GitHub Actions)**: ![Actions](https://img.shields.io/github/actions/workflow/status/Irene-IT/ireneM/ci.yml?branch=main)

> Note: the badges above are dynamic — if you do not have a `ci.yml` workflow or releases, badges may show the corresponding state. You can add your own GitHub Actions if needed (for example: test → build → deploy).

---

## Contacts and acknowledgements

* **Author/developer:** Irene-IT
* **Email:** [irene.dev.sp@gmail.com](mailto:irene.dev.sp@gmail.com)
* **Site:** [irenemyronova-b2b.netlify.app](https://irenemyronova-b2b.netlify.app)
* **LinkedIn:** [https://www.linkedin.com/in/irene-dev](https://www.linkedin.com/in/irene-dev)

**Acknowledgements:** the original template and author ([design-code.tips][3] / [Nuno Marques][4]), and the open libraries (Next.js, Tailwind CSS, Framer Motion, Decap CMS).

[1]: https://github.com/Irene-IT/ireneM "GitHub - Irene-IT/ireneM"
[2]: https://irenemyronova-b2b.netlify.app/ "Irene Myronova | B2B SaaS Content Writer"
[3]: https://design-code.tips/ "Learn design, coding, web tools, and get inspired!"
[4]: https://github.com/ositaka/nextjs-blog-tailwind-starter "GitHub - Nuno Marques"
[content]: https://github.com/Irene-IT/ireneM/tree/main/content "GitHub - content folder"
