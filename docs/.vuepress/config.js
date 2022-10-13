import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { navbar, sidebar } from './configs/index.js'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  lang: 'en-US',
  title: 'VEC Wiki',
  description: 'Victoria Engineering Club Wiki',
  base: '/',
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search',
        },
      },
    }),
  ],
  theme: defaultTheme({
    logo: '/images/logo_small.png',
    repo: 'vecnz/wiki',
    docsDir: 'docs',
    locales: {
      '/': {
        // navbar
        navbar: navbar,
        // sidebar
        sidebar: sidebar,
        // page meta
        editLinkText: 'Edit this page on GitHub',
      },
    }
  }),
})
