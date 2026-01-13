# mindscape

A minimal static website (HTML, CSS, JavaScript) intended for hosting on GitHub Pages. No build step required.

## Features
- Single-page static site
- Zero build tooling — just HTML/CSS/JS
- Ready to publish with GitHub Pages

## Local usage
1. Clone the repo:
   ```bash
   git clone https://github.com/Tian362/mindscape-cards.git
   cd mindscape-cards
   ```
2. Open `index.html` in your browser (double-click or `open index.html` / `xdg-open index.html`).

## Publish on GitHub Pages
1. Push the repo to GitHub (see commands in the repo root).
2. On GitHub, go to Settings → Pages and select:
   - Branch: `main`
   - Folder: `/ (root)`
3. Save — the site will be available at:
   ```
   https://Tian362.github.io/mindscape-cards/
   ```

## Files
- `index.html` — entry page
- `styles.css` — stylesheet
- `script.js` — JavaScript
- `README.md`, `.gitignore`, `LICENSE`

## Custom domain
To use a custom domain, add a `CNAME` file with your domain root and configure DNS records (A/ALIAS or CNAME depending on provider).

## License
This project is offered under the MIT License. See `LICENSE` for details.
