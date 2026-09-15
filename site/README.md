# Perro Frío — Brand Website

One-page marketing site for **Perro Frío**, a frozen margarita bar concept for Playa del Carmen, México.

## Preview locally
Just open `index.html` in a browser — no build step, no dependencies.

## Deploy with GitHub Pages
1. Push this folder to a GitHub repo.
2. Go to **Settings → Pages**.
3. Under "Build and deployment," set **Source: Deploy from a branch**, branch `main`, folder `/ (root)`.
4. Save — your site will be live at `https://<username>.github.io/<repo>/` within a minute or two.

## Structure
```
index.html        the whole page
css/style.css      brand tokens, layout, motion/animation
js/main.js         scroll reveals, nav shrink, hero parallax, neon open/closed status
assets/logo.svg     Perro Frío badge mark (Frenchie mascot)
assets/storefront.jpg   hero image
```

## Notes
- The "ABIERTO / CERRADO" badge in the hero is driven by the visitor's local clock (open 12:00–01:00) — edit the hours in `js/main.js` if the real hours change.
- Menu items/prices in the Menu section are placeholders — update copy directly in `index.html`.
- Colors and type are defined as CSS custom properties at the top of `css/style.css` for easy re-theming.
