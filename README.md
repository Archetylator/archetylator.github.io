# archetylator.github.io

Super prosty, nowoczesny (2026) starter personal site oparty o Astro (SSG).

## Szybki start

1. Zainstaluj zaleznosci:

   npm install

2. Odpal lokalny dev server:

   npm run dev

3. Zbuduj statyczna wersje:

   npm run build

Gotowe pliki trafiaja do dist/.

## Deploy na GitHub Pages

- Workflow jest w .github/workflows/deploy.yml.
- Publikacja odpali sie automatycznie po pushu do main.
- W repo wlacz GitHub Pages: Settings -> Pages -> Build and deployment -> GitHub Actions.

## Struktura

- src/pages/index.astro - strona glowna
- src/layouts/BaseLayout.astro - layout i style globalne
- astro.config.mjs - konfiguracja Astro
