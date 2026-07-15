# StepOnTheSprayKids — update site

The whole site is one post: a full-screen image with an optional title,
and a small "made by" credit in the top right corner. To change what's
showing, edit **`posts.json`**.

## Updating the site

Open `posts.json` and edit the one entry (or add a new one above it —
whichever has the latest `date` is what shows):

```json
{
  "date": "2026-08-01",
  "title": "your headline here",
  "image": "images/your-image.jpg",
  "alt": "short description of the image, for accessibility"
}
```

- `title` is optional — leave it out for just the image, no text.
- `image` is optional too — leave it out for just a title on a plain background.
- To swap the image: upload your new file into the `images/` folder, then
  update the `image` path to match.

## Viewing it while you work

Browsers block loading `posts.json` directly from your hard drive. If
you're previewing locally (not through GitHub Pages), run:
```
cd path/to/this/folder
python3 -m http.server
```
Then open `http://localhost:8000`.

If it's already live on GitHub Pages, none of this applies — just edit
the files in the repo and the live site updates automatically.

## Files

- `index.html` / `style.css` / `app.js` — the page itself, no need to touch these
- `posts.json` — **the only file you'll edit**
- `images/` — put your image here
