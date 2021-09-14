const path =  require('path');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'AuthGuard Documentation',
  tagline: 'Identity management simplified',
  url: 'https://authguard.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'AuthGuard', 
  projectName: 'authguard.github.io', // Usually your repo name.
  plugins: [path.resolve(__dirname, 'plugins', 'custom-webpack')],
  themeConfig: {
    navbar: {
      title: 'AuthGuard',
      logo: {
        alt: 'AuthGuard',
        src: 'img/reduced_authguard_logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/blog',
          position: 'left',
          label: 'Blog',
        },
        {
          position: 'left',
          label: 'API',
          to: '/api'
        },
        {
          href: 'https://github.com/authguard/AuthGuard',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'nex::blocks',
              href: 'https://nexblocks.com/nexblocks',
            },
            {
              label: 'Licenses',
              to: 'https://nexblocks.com/nexblocks/portal',
            },
          ],
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} nex::blocks. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        authguard: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
    [
      'redocusaurus',
      {
        debug: Boolean(process.env.DEBUG || process.env.CI),
        specs: [
          {
            specUrl: 'https://raw.githubusercontent.com/AuthGuard/AuthGuard/master/api/src/main/resources/openapi.yml',
            routePath: '/api/',
          }
        ],
        theme: {
          primaryColor: '#1890ff',
          redocOptions: { hideDownloadButton: false },
        },
      },
    ],
  ],
};
