# Alberto35M Portfolio

Minimalist pixel-art portfolio for Minecraft Bedrock projects. Built with **Eleventy 3**, plain CSS/JS, and Markdown content. The site defaults to English.

## Local development

Requirements: Node.js 20.11+ (22 recommended).

```bash
npm install
npm run dev
```

Open the URL printed by Eleventy (usually `http://localhost:8080`).

Build for production:

```bash
npm run build
```

Eleventy generates the deployable site in `_site/`.

## Deploy with GitHub + Cloudflare Pages

1. Create a GitHub repository (for example `Alberto35M-Portfolio`).
2. Upload **this project's source files**. Do not upload `node_modules`, `_site`, or `.env` files.
3. In Cloudflare Dashboard > Workers & Pages, create a **Pages** project connected to your GitHub repository (Git integration).
4. Use production branch `main`, build command `npm run build`, output directory `_site`, root directory `/`.
5. Deploy. Cloudflare will provide a `*.pages.dev` address. Future commits to `main` rebuild the site.

No GitHub Pages workflow is needed. Cloudflare's build handles publishing.

## Add or update a project

Create a Markdown file in `content/proyectos/`, using an existing project as a template. The fields include:

- `title`: project title
- `category`: `Addon`, `Map`, or `Tool`
- `version`: Minecraft compatibility
- `shortDescription`: short text under the card title
- `summary`: general summary for the detail page
- `cover`: image path, e.g. `/images/my-cover.png`
- `published`: `true` to show the project, `false` to hide it
- `order`: display order
- `curseforge`: official download URL (leave empty to show Coming Soon)
- `trailer`, `features`, `gallery`: optional content

Write the full description after the front matter (`---` separator). Store cover images in `public/images/`. Push changes to GitHub to trigger Cloudflare deployment.

**The included LuckyWars and Advanced Mission System projects are examples.** Replace their placeholder cover art and add real CurseForge links before announcing the site.

## Decap CMS administration (`/admin`)

`src/admin/` is retained for the future content editor, but **the editor is NOT ready for secure publishing yet**. GitHub OAuth must be configured separately. Cloudflare Pages hosting alone does not enable login.

1. Set the real GitHub username/repository and Cloudflare Pages URL in `src/admin/config.yml`.
2. Deploy a compatible, properly secured GitHub OAuth service and configure Decap's `backend.base_url` and `backend.auth_endpoint` as directed by that service.
3. Only GitHub accounts with repository write access should be able to publish. Never commit OAuth secrets or tokens to this public repository.

Documentation: https://decapcms.org/docs/github-backend/

Until authentication is configured, edit project Markdown files in VS Code/GitHub instead.

## Project structure

- `src/index.njk` — homepage and project cards
- `src/project.njk` — individual project pages
- `src/_includes/base.njk` — shared layout
- `src/assets/css/style.css` — **one consolidated stylesheet**
- `src/assets/js/main.js` — search and category filters
- `src/assets/images/` — active decorative assets
- `content/proyectos/` — project content
- `public/images/` — project covers and fallback
- `src/admin/` — Decap CMS configuration (OAuth pending)
- `.eleventy.js` — Eleventy setup

## Important

The CSS was consolidated in its original loading order to preserve the existing appearance and hover behavior. Removed files were legacy versions, unused image assets, and the GitHub Pages deployment workflow.
