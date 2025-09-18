# ageelelectrical — Landing Reparaciones e instalaciones eléctricas para escuelas y edificios

Configurada para **Política A** (base: `/ageelelectrical/`) y lista para **GitHub Pages**.

## Scripts
```bash
npm i
npm run dev
npm run build
npm run preview
```

## Despliegue en GitHub Pages
- Repo: **ageelelectrical** (rama `main`).
- `vite.config.js` ya está con **base: '/ageelelectrical/'**.
- Push y el workflow `pages.yml` publica `/dist` automáticamente.

## Estructura
- `index.html`, `package.json`, `vite.config.js`
- `src/` → `main.jsx`, `App.jsx`, `styles.css`
- `public/` → `logo-ageel.svg`, `presenta.webm`, `poster.png`, `Img001.png..Img004.png`
- `.github/workflows/pages.yml`

## Notas
- Tipografía **Poppins 400/600/700** desde Google Fonts.
- Todos los assets en JSX se referencian con `import.meta.env.BASE_URL + '...'`.
- Footer con redes (IG/FB/TT/Sitio).

© 2025 ageelprojects
