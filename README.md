# Minh Nguyen — Senior Mobile Developer

Personal profile & CV site — Flutter · Android · iOS.

**Live:** https://minhmark123123.github.io/profile

- `index.html` — profile page (parallax) and printable CV (`#cv`)
- English by default, Vietnamese via the EN / VI switch
- Plain HTML, CSS & JavaScript — no build step

## Project structure

```
.
├── index.html            # Entry point (profile + printable CV)
├── content/
│   └── data.js           # All CV content (EN / VI)
└── assets/
    ├── css/style.css     # Styles (screen + print)
    ├── js/
    │   ├── i18n.js       # UI strings & language switching
    │   ├── common.js     # Shared helpers
    │   └── site.js       # Page rendering
    └── img/
        ├── avatar-web.jpg
        └── favicon.svg
```

## Edit content

All CV content lives in [`content/data.js`](content/data.js). Text can be a plain string or `{ en: "...", vi: "..." }`.

## Run locally

```sh
python3 -m http.server 8000   # then open http://localhost:8000
```

## Deploy on GitHub Pages

Settings → Pages → Source: *Deploy from a branch* → `main` / root.
