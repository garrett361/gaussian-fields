# Gaussian Fields

Explanation of gaussian random fields and how to generate them simply, given their power spectrum.

## Notes for using as a template

Main code is in `src/index.ejs`.  Images, and diagrams are placed in `static`. In `index.ejs` images should be called as though we are in the `static` directory already, e.g., `<img src="images/gaussian.svg">`,  for whatever reason.  

A local development server which (mostly) updates as changes are made to the code can be called with `npm run dev`.

### Deployment to GitHub Pages

GitHub pages only handles static webpages (not EJS). We can generate a `html` file in the `root` of the folder (the required location for GitHub pages) from the `index.ejs` file in `src` by calling the `ejs_to_html.js` file via `node ejs_to_html.js`.  In order for images to be correctly called by `index.html`, we also create a symbolic link in `root` to `static/images`.

