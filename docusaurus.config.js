// Portal de documentación de SonoraPlay.
// Los documentos (.md) viven en sonoraplay/main, carpeta docs/. El workflow de
// publicación los copia aquí antes de compilar; no se editan en este repositorio.
const path = require('path');

const REPO_CODIGO = 'https://github.com/sonoraplay/main/blob/main';
const CARPETA_DOCS = path.resolve(__dirname, 'docs');

// Los documentos enlazan a archivos del repositorio de código (notebooks, .py,
// esquemas) con rutas relativas como ../../src/x.py. Esos archivos no forman
// parte del portal, así que esos enlaces se apuntan al archivo en GitHub.
function enlacesAlCodigo() {
  const recorrer = (nodo, archivo) => {
    if ((nodo.type === 'link' || nodo.type === 'definition') && typeof nodo.url === 'string') {
      const url = nodo.url;
      if (url && !/^([a-z][a-z0-9+.-]*:|#|\/)/i.test(url)) {
        const [ruta, ancla] = url.split('#');
        const destino = path.resolve(path.dirname(archivo), decodeURI(ruta));
        if (destino !== CARPETA_DOCS && !destino.startsWith(CARPETA_DOCS + path.sep)) {
          const relativa = path.relative(__dirname, destino).split(path.sep).join('/');
          nodo.url = `${REPO_CODIGO}/${encodeURI(relativa)}${ancla ? `#${ancla}` : ''}`;
        }
      }
    }
    (nodo.children || []).forEach((hijo) => recorrer(hijo, archivo));
  };
  return (arbol, archivo) => {
    if (archivo.path) recorrer(arbol, archivo.path);
  };
}

const config = {
  title: 'SonoraPlay Regalías',
  tagline: 'Documentación de arquitectura, datos y ejecución',
  favicon: 'img/favicon.svg',
  url: 'https://sonoraplay.github.io',
  baseUrl: '/',
  organizationName: 'sonoraplay',
  projectName: 'sonoraplay.github.io',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  markdown: {
    mermaid: true,
    hooks: { onBrokenMarkdownLinks: 'warn' }
  },
  i18n: { defaultLocale: 'es', locales: ['es', 'en'], localeConfigs: { es: { label: 'Español' }, en: { label: 'English' } } },
  presets: [['classic', {
    docs: {
      path: 'docs',
      routeBasePath: '/',
      sidebarPath: './sidebars.js',
      showLastUpdateTime: false,
      beforeDefaultRemarkPlugins: [enlacesAlCodigo]
    },
    blog: false,
    theme: { customCss: './src/css/custom.css' }
  }]],
  themes: ['@docusaurus/theme-mermaid'],
  themeConfig: {
    navbar: { title: 'SonoraPlay', items: [
      { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Documentación' },
      { type: 'localeDropdown', position: 'right' },
      { href: 'https://github.com/sonoraplay/main', label: 'GitHub', position: 'right' }
    ] },
    footer: { style: 'dark', copyright: 'SonoraPlay · Proyecto académico de ingeniería de datos' }
  }
};
module.exports = config;
