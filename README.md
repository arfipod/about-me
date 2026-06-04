# about-me

Personal bilingual portfolio for GitHub Pages, built with React + Vite and ready to be published as a project site at `https://arfipod.github.io/about-me/`.

## What's Included

- Bilingual ES/EN interface with persistent selector.
- Project catalog organized by areas: Firmware & Embedded, IoT & Hardware, Wear OS & Mobile, Finance & Data, Web & Apps, Games & Retro, Tools & Automation, and Misc.
- Search by name, language, description, and tags.
- Featured projects filter.
- Client-side synchronization with GitHub's public API to refresh public repositories from `arfipod`.
- Local fallback in `src/data/projects.js` if GitHub API is unavailable or rate-limited.
- PDF CV served from `public/CV_Angel_Rafael_Rubio_Fernandez_EN.pdf`.
- GitHub Actions workflow for publishing to GitHub Pages.

## Structure

```txt
about-me/
├─ .github/workflows/deploy.yml
├─ public/
│  ├─ CV_Angel_Rafael_Rubio_Fernandez_EN.pdf
│  ├─ favicon.svg
│  └─ og-image.svg
├─ src/
│  ├─ data/
│  │  ├─ i18n.js
│  │  ├─ profile.js
│  │  └─ projects.js
│  ├─ utils/github.js
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ styles.css
├─ index.html
├─ package.json
└─ vite.config.js
```

## Publishing to GitHub Pages

1. Create or open the `arfipod/about-me` repository.
2. Extract this zip and upload the contents of the `about-me/` folder to the `main` branch.
3. In GitHub: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
4. Push to `main`. The `.github/workflows/deploy.yml` workflow will build the app and publish `dist/`.
5. The expected site URL is `https://arfipod.github.io/about-me/`.

## Local Development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Editing Profile, CV, and Projects

- Profile: `src/data/profile.js`.
- Translations: `src/data/i18n.js`.
- Projects and categories: `src/data/projects.js`.
- CV: Replace `public/CV_Angel_Rafael_Rubio_Fernandez_EN.pdf` with a new PDF while keeping the same filename, or change the path in `src/data/profile.js`.

The site excludes `about-me` from the catalog so the portfolio doesn't list itself. The call to `https://api.github.com/users/arfipod/repos` only returns public repositories; however, the curated local metadata is limited to public projects.

## Changing the Repository Name

If the repository is no longer named `about-me`, update the `base` property in `vite.config.js`:

```js
export default defineConfig({
  base: '/new-name/',
  plugins: [react()]
});
```
