# Peptides YEG website

Static multi-page website for Peptides YEG. Open `index.html` locally or publish the folder with GitHub Pages.

## Files

- `navbar.js` — reusable navigation and footer web components
- `styles.css` — all visual styles and responsive layouts
- `script.js` — small interaction helpers
- `index.html`, `about.html`, `intended-use.html`, `shipping.html`, `order.html`, `contact.html`, `disclaimer.html` — site pages

## Add the Google Form

In `order.html`, replace the `.form-placeholder` block with the iframe supplied by Google Forms. Use a responsive iframe such as:

```html
<iframe src="YOUR_GOOGLE_FORM_EMBED_URL" width="100%" height="900" frameborder="0" marginheight="0" marginwidth="0" title="Peptides YEG order inquiry">Loading…</iframe>
```

## Before launch

Have the intended-use language, disclaimer, catalogue, payment flow, shipping terms and any return policy reviewed for the actual business and products by qualified Canadian counsel.
