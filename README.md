# Mahadi Al Moktadir — Portfolio Website

Portfolio for Mahadi Al Moktadir, published at:

https://mahadimuktadir.github.io/https-mahadialmoktadirshupto.github.io/

GitHub Pages publishes `main` from `/ (root)`. Keep `index.html` and the `assets` folder at the repository root.

## Edit the site

- `index.html` — all text, work links, contact details, gallery captions and which real photo appears with each report.
- `assets/css/style.css` — layout, mobile styles and the Midnight, Editorial and Light themes.
- `assets/js/main.js` — mobile menu, filters, gallery viewer, theme switcher and copy-email buttons.
- `assets/images/gallery/` — authentic reporting photos. Replace a photo using the same filename to update both the field archive and any work card that uses it. The archive shows each image at its natural aspect ratio.
- `assets/images/mahadi-field-hero.webp` — wide opening image.
- `profile.jpg.jpg` — centered professional portrait in the About section.
- `mahadi-al-moktadir-cv.pdf` — PDF opened by both CV buttons.

The Selected Work cards use actual photographs from the field archive. The previously generated thumbnails have been removed. To change a report image, edit its `<img src="...">` in `index.html` to another photo in `assets/images/gallery/`.

## Publish an update

Commit changes to `main`. GitHub Pages builds and publishes automatically from the repository root. Check **Actions** for the latest `pages build and deployment` run if an update does not appear. Refresh the site with Ctrl+F5 after a successful deployment.
