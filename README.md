# Engineering Portfolio — Charcoal + Gold

This is a static website for GitHub Pages. No build tools are required.

## Pages
- `index.html` — homepage and Projects grid
- `project.html` — brochure-style project overview (generated from `projects.js`)
- `about.html` — My Background introduction page
- `future.html` — reserved third page
- `style.css` — all colors, fonts, layout, and responsive styling
- `projects.js` — edit the sample projects here
- `script.js` — renders project cards, project pages, and mobile navigation
- `assets/` — project illustrations and images

## Changing colors
At the top of `style.css`, change:
- `--bg` for charcoal background (`#242424`)
- `--accent` for matte gold (`#e5a83b`)
- `--text` for readable light body text

## Editing your projects
Open `projects.js`. Each project has a `slug`, `title`, `subtitle`,
`image`, `overview`, `challenge`, `approach`, and `results`.
Replace the sample text and SVG illustrations with your own real work.
Project cards link to `project.html?slug=...` automatically.

## Editing your background
Open `about.html` and replace the placeholder paragraphs.

## Publishing on GitHub Pages
Upload all files and the `assets` folder into your GitHub Pages repository.
In Settings > Pages, choose Deploy from a branch, `main`, `/ (root)`.
Your site should be at https://YOURUSERNAME.github.io.

All source files are deliberately separated and editable.
