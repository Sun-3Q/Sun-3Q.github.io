# 使用说明

## 本地开发

```bash
pnpm install
pnpm run docs:dev
```

## 写新页面

1. 在 `docs/` 新建 `xxx.md`
2. 需要导航入口的话，到 `docs/.vitepress/config.mts` 的 `nav` / `sidebar` 增加链接

## 构建与预览

```bash
pnpm run docs:build
pnpm run docs:preview
```

## 部署

推送到 `main` 分支会触发 `.github/workflows/deploy.yml`，自动部署到 GitHub Pages。
