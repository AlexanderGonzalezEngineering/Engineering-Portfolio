# Alex Gonzalez / Damascus Portfolio — True Gold Sweep V2

## What this fixes
The earlier sweep was hidden by an `::before` pseudo-element using
`z-index: -1`. The text still changed color, creating an abrupt golden
flash instead of a left-to-right animation.

The replacement renders the bar as a real CSS background image and
animates its visible width from `0%` to `100%` over 650 milliseconds.
At the same time the entire menu item grows uniformly to 108% around
its center. Both effects reverse as the pointer leaves.

The same behavior applies to navigation links, buttons, the homepage
section cards, and future project tiles. The mobile menu opens with
an animated slide/fade, and keyboard focus triggers the same visual.
Reduced-motion accessibility settings are supported.

## Fastest update for your published site
Use the **CSS-only ZIP**. Extract `style.css` and replace the file in
GitHub repository root (next to `index.html`). Commit the replacement.
Wait for deployment, then do Ctrl+Shift+R in the browser.

The high-resolution Damascus background is still embedded in `style.css`,
so no image upload is needed. All other website files can stay unchanged.

## Complete archive
If you want the entire editable site, the complete ZIP contains all HTML,
JS, CSS and background assets. Upload the extracted *contents*, preserving
the folder structure—not the ZIP itself.

## Edit the animation
At the END of `style.css`, find `TRUE MATTE-GOLD SWEEP + CENTERED SCALE`.
The duration, gold colors and scale percentages are documented as CSS
variables. No JavaScript is necessary for desktop hover animations.

## Unchanged
- Alex Gonzalez branding
- The high-resolution Damascus image
- Who I Am, More, and project brochure pages
- Project data remains empty until you add projects
- Generic `you@example.com` email placeholder remains unchanged
