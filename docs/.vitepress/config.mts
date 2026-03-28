import { defineConfig } from 'vitepress'

const siteTitle = 'Sun-3Q Space'
const siteDescription = '记录技术、生活与思考'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: siteTitle,
  description: siteDescription,
  base: '/',

  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'theme-color', content: '#3c83f6' }],
    ['meta', { property: 'og:site_name', content: siteTitle }],
    ['meta', { property: 'og:title', content: siteTitle }],
    ['meta', { property: 'og:description', content: siteDescription }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'twitter:card', content: 'summary' }]
  ],

  themeConfig: {
    siteTitle: 'Sun-3Q',
    titleTemplate: ':title | Sun-3Q Space',
    nav: [
      { text: '首页', link: '/' },
      { text: '开始', link: '/setup-guide' },
      { text: '部署', link: '/deployment-guide' },
      { text: 'USTC 生活', link: '/ustc-life' }
    ],

    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: '站点使用说明', link: '/setup-guide' },
          { text: 'Markdown 示例', link: '/markdown-examples' },
          { text: 'API 示例', link: '/api-examples' }
        ]
      },
      {
        text: '项目实战',
        collapsed: false,
        items: [{ text: 'VitePress 部署指南', link: '/deployment-guide' }]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Sun-3Q/Sun-3Q.github.io' }
    ],

    search: { provider: 'local' },

    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2026-present Sun-3Q'
    },

    editLink: {
      pattern: 'https://github.com/Sun-3Q/Sun-3Q.github.io/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    lastUpdatedText: '最后更新'
  }
})
