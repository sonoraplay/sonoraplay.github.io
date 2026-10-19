# Portal de documentación SonoraPlay

Publicado en **https://sonoraplay.github.io/**

Este repositorio solo contiene el portal [Docusaurus](https://docusaurus.io/). Los documentos viven en el repositorio de código [`sonoraplay/main`](https://github.com/sonoraplay/main), carpeta `docs/`, rama `main`.

## Cómo se publica

El workflow `.github/workflows/publicar.yml`:

1. Copia `docs/` desde `sonoraplay/main` (rama `main`).
2. Compila el portal en español e inglés.
3. Lo publica en GitHub Pages.

Se ejecuta al subir cambios a `main` de este repositorio, una vez al día y a mano desde **Actions → Publicar documentación → Run workflow**. Para publicar enseguida un cambio de documentación hecho en el repositorio de código, lanzarlo a mano.

## Editar la documentación

Los `.md` se editan en `sonoraplay/main`, no aquí. Aquí solo se cambian el menú (`sidebars.js`), la configuración (`docusaurus.config.js`) y el estilo (`src/css/custom.css`).

## Probar en local

Requiere Node.js 20 o superior.

```bash
git clone https://github.com/sonoraplay/sonoraplay.github.io.git
git clone https://github.com/sonoraplay/main.git codigo
cd sonoraplay.github.io
cp -r ../codigo/docs ./docs
npm ci
npm run docs:start
```
