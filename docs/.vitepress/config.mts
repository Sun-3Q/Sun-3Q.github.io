import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sun-3Q Space",
  description: "记录技术、生活与思考",
  
  // 核心：部署在 Sun-3Q.github.io 主站，base 必须为 /
  base: '/',

  themeConfig: {
    // 网站右上角 Logo 旁的文字
    siteTitle: 'Sun-3Q',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '部署手册', link: '/deployment-guide' },
      { text: 'USTC 生活', link: '/ustc-life' }
    ],

    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: 'Markdown 示例', link: '/markdown-examples' },
          { text: '运行时 API 示例', link: '/api-examples' }
        ]
      },
      {
        text: '项目实战',
        collapsed: false, // 默认展开
        items: [
          { text: '🚀 VitePress 部署指南', link: '/deployment_guide'}
        ]
      }
    ],

    // 修改为你自己的 GitHub 仓库地址
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Sun-3Q/Sun-3Q.github.io' }
    ],

    // 开启本地搜索（非常有用）
    search: {
      provider: 'local'
    },

    // 页脚配置
    footer: {
      message: '基于 VitePress 驱动',
      copyright: 'Copyright © 2026-present Sun-3Q'
    },

    // 编辑链接（点击可以直接跳转到 GitHub 修改源码）
    editLink: {
      pattern: 'https://github.com/Sun-3Q/Sun-3Q.github.io/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    // 最后更新时间的文字显示
    lastUpdatedText: '最后更新时间'
  }
})