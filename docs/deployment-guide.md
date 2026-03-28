---
title: VitePress 部署指南
---

# VitePress + pnpm + GitHub Actions 部署到 GitHub Pages

## 1) 本地开发与构建

```bash
pnpm install
pnpm run docs:dev
pnpm run docs:build
pnpm run docs:preview
```

## 2) GitHub Pages（Actions 部署）

你已配置 `.github/workflows/deploy.yml`：

- 推送到 `main` 自动构建并发布
- 构建产物目录为 `docs/.vitepress/dist`

## 3) 常见问题

- 如果是 `xxx.github.io`（用户/组织主页仓库），`docs/.vitepress/config.mts` 的 `base` 保持为 `/`。
- 如果以后改成“项目页”（仓库名不是 `xxx.github.io`），需要把 `base` 改成 `/<repo>/`。
