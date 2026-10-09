# Alex Gonzalez Engineering Portfolio — Circular Scroll Indicator (v6)

## Change made
Replaced the vertical SCROLL rail with the approved **thin gold circle / down arrow / horizontal SCROLL label** design. The circle softly pulses its outer glow while idle. The text and arrow do not blink, and there is no gold-sweep on this control.

Kept the existing 108% centered hover enlargement, fixed viewport positioning, and existing fade-away-on-scroll behavior. All other pages and Damascus background are unchanged.

## Install: choose one package
**Update ZIP:** Upload all six files (index.html, about.html, contact.html, future.html, project.html, style.css) to the root of the `Engineering-Portfolio` GitHub repository, replacing the files with those names. HTML pages have a new CSS version query to avoid stale caching. `script.js` is unchanged.

**Complete ZIP:** Contains the entire source site and background assets, useful for backup or a fresh installation.

After committing, wait for the GitHub Pages deployment and then press Ctrl+Shift+R on the live site.

## Customize
In `style.css`, edit `.scroll-cue` for position, `.scroll-cue-ring` for circle size or thickness, and `@keyframes scroll-circle-glow` for the pulse strength/speed. Scroll disappearance is handled in the unchanged `script.js`.
