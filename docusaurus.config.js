// SonoraPlay documentation portal.
// Pages live in docs/ (English, default) and i18n/es/ (Spanish).
// Detailed technical records stay in the code repository (sonoraplay/main).
const config = {
  title: 'SonoraPlay Royalties',
  tagline: 'Fair, traceable music royalties',
  favicon: 'img/favicon.svg',
  url: 'https://sonoraplay.github.io',
  baseUrl: '/',
  organizationName: 'sonoraplay',
  projectName: 'sonoraplay.github.io',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  markdown: {
    mermaid: true,
    hooks: { onBrokenMarkdownLinks: 'throw' }
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    localeConfigs: {
      en: { label: 'English', htmlLang: 'en' },
      es: { label: 'Español', htmlLang: 'es' }
    }
  },
  presets: [['classic', {
    docs: {
      path: 'docs',
      routeBasePath: '/',
      sidebarPath: './sidebars.js',
      showLastUpdateTime: false
    },
    blog: false,
    theme: { customCss: './src/css/custom.css' }
  }]],
  themes: ['@docusaurus/theme-mermaid'],
  themeConfig: {
    colorMode: { respectPrefersColorScheme: true },
    docs: { sidebar: { hideable: true } },
    tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
    navbar: {
      title: 'SonoraPlay',
      logo: { alt: 'SonoraPlay', src: 'img/favicon.svg' },
      items: [
        { type: 'docSidebar', sidebarId: 'portal', position: 'left', label: 'Documentation' },
        { to: '/architecture', label: 'Architecture', position: 'left' },
        { to: '/business-rules', label: 'Rules', position: 'left' },
        { type: 'localeDropdown', position: 'right' },
        { href: 'https://github.com/sonoraplay/main', label: 'GitHub', position: 'right' }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Start here',
          items: [
            { label: 'Vision & Scope', to: '/vision' },
            { label: 'How It Works', to: '/how-it-works' },
            { label: 'Getting Started', to: '/getting-started' }
          ]
        },
        {
          title: 'Code',
          items: [
            { label: 'Code repository', href: 'https://github.com/sonoraplay/main' },
            { label: 'Decision records (ADR)', href: 'https://github.com/sonoraplay/main/blob/main/docs/adr/README.md' }
          ]
        }
      ],
      copyright: 'SonoraPlay · Riwi data engineering academic project'
    }
  }
};
module.exports = config;
