# Gaussian Fields

Explanation of gaussian random fields and how to generate them simply, given their power spectrum.

## Notes for using as a template

Main code is in `src/index.ejs`.  Images, and diagrams are placed in `static`. In `index.ejs`, `img` `src` links should be written as though we are in the `static` directory already, e.g., `<img src="images/gaussian.svg">`,  for whatever reason.  I restructured the front matter and re-wrote parts of `template.v2.js` so that the relevant data is all within `index.ejs` with the DOI field removed and the date more explicitly called.

A local development server which (mostly) updates as changes are made to the code can be called with `npm run dev`.

### Deployment to GitHub Pages

GitHub pages only handles static `html` webpages (not EJS).

We can generate a `html` file in the `root` of the folder (the required location for GitHub pages) from the `index.ejs` file in `src` by calling the `ejs_to_html.js` file in `root` via `node ejs_to_html.js`.  In order for `img` `src` references to work in `index.html`, we also create a symbolic link in `root` to `static/images`. A symbolic link in `root` to the `template.v2.js` distill file was created for similar reasons.

Whlie citations and the bibliography work in the `ejs` file, they fail after conversion to `html`, so they are not used. Have not managed to fix this yet.

