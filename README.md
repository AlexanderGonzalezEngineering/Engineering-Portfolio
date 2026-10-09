# Alex Gonzalez / Engineering Project Portfolio

A clean, editable, static portfolio website inspired by the approved
charcoal-and-gold Damascus-steel visual reference.

## Website pages
- `index.html` — hero, three navigation cards, and project gallery
- `about.html` — "Who I Am" page
- `future.html` — reserved third page
- `project.html` — reusable brochure-style project page for future projects

## Source files
- `style.css` — colors, layout, Damascus background, animations
- `script.js` — navigation, project cards, and brochure rendering
- `projects.js` — **empty** until your projects are ready
- `assets/damascus-texture.webp` — actual Damascus-inspired background texture
- `assets/design-reference.webp` — approved visual reference for comparison

## Editing
1. Edit the colors at the very top of `style.css`.
2. Replace `you@example.com` in the HTML files with your email.
3. Update the biography in `about.html`.
4. Add real projects to `projects.js` when ready.
5. To swap the Damascus background, replace `assets/damascus-texture.webp`.

## Publish with GitHub Pages
1. Extract this ZIP.
2. Upload all files and the `assets` folder to your repository root.
3. Go to Settings → Pages and publish the `main` branch from `/ (root)`.
4. Wait for deployment, then refresh your website.

No dependencies, build tools, or frameworks required.

## Damascus background visibility fix

The texture is now embedded directly inside `style.css` as a data URL.
This means it will appear even if the `assets/` folder was uploaded
incorrectly. The original image is still included in `assets/`.

To update an existing GitHub Pages website, replace `style.css`.
For the complete website, upload the entire contents of this ZIP.
After deployment, hard-refresh with Ctrl + Shift + R.
