import { defineConfig } from 'vitepress'
import { RSSOptions, RssPlugin } from 'vitepress-plugin-rss'

const RSS: RSSOptions = {
  title: 'Sun-3Q Space',
  baseUrl: 'https://sun-3q.github.io',
  copyright: 'Copyright © 2026-present Sun-3Q',
  description: '记录技术、生活与思考',
  language: 'zh-CN',
  icon: true,
  authors: [
    {
      name: 'Sun-3Q',
      email: '',
      link: 'https://github.com/Sun-3Q'
    }
  ],
  filename: 'feed.rss',
  log: true,
  ignoreHome: true,
  ignorePublish: false
}

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
      { text: 'USTC 生活', link: '/ustc-life' },
      { 
        text: '',
        link: '/feed.rss',
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.794 1.456-3.248 3.252-3.248 1.795.001 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.062 10.96 4.966 11.022 11.009h4.817c-.062-8.71-7.118-15.758-15.839-15.82zm0-3.368c10.58.046 19.152 8.594 19.183 19.188h4.817c-.03-13.231-10.755-23.954-24-24v4.812z"/></svg>'
        }
      }
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
          { text: '🚀 VitePress 部署指南', link: '/deployment-guide'},
          { text: '💬 Giscus 评论配置', link: '/giscus-setup'}
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
  },

  vite: {
    plugins: [RssPlugin(RSS)]
  }
})