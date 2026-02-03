---
title: VitePress 部署全手册
---
# 🚀 VitePress + pnpm + GitHub Actions 部署全手册 (金牌通关版)

本文档记录了从零开始，包括环境配置、云端仓库建立到自动化部署的所有操作细节。

## 一、 环境安装 (NVM + pnpm)

1. **安装 NVM-Windows**：
    
    从 [nvm-windows](https://github.com/coreybutler/nvm-windows/releases) 下载 `nvm-setup.exe` 并安装。
    
2. **安装 Node LTS**：
    
    DOS
    
    ```
    nvm install lts
    nvm use lts
    node -v  # 确认版本号
    ```
    
3. **安装 pnpm**：
    
    DOS
    
    ```
    npm install -g pnpm
    pnpm -v  # 确认版本号 (建议 v10+)
    ```
    

---

## 二、 云端准备：GitHub 仓库创建

在本地操作前，先在 GitHub 网页端建立“家园”：

1. **登录 GitHub**，点击右上角 `+` -> **New repository**。
    
2. **Repository name**: 必须填写 `Sun-3Q.github.io`。 # 此处需填写：Github账户名.github.io
    
3. **Public/Private**: 选择 **Public**。
    
4. **初始化选项**: **不要**勾选 "Add a README" 或 "Add .gitignore"（我们要在本地手动创建）。
    
5. **创建**: 点击 **Create repository**。
    
6. **获取地址**: 页面生成后，点击 **SSH** 按钮，复制类似 `git@github.com:Sun-3Q/Sun-3Q.github.io.git` 的地址。
    

---

## 三、 本地初始化：VitePress 项目

1. **创建文件夹**:
    
    DOS
    
    ```
    mkdir Website # 此处项目名可自行定义
    cd Website
    ```
    
2. **安装核心包**:
    
    DOS
    
    ```
    pnpm add -D vitepress@next vue
    ```
    
3. **执行配置向导**:
    
    DOS
    
    ```
    pnpm vitepress init
    ```
    
    **向导选项对照表**:
    
    - **Initialize config**: `./docs`
        
    - **Markdown location**: `./docs`
        
    - **Site title**: `你的项目名称`
        
    - **Site description**: `你的项目描述`
        
    - **Theme**: `Default Theme`
        
    - **TypeScript**: `Yes`
        
    - **Add scripts**: `Yes`
        
    - **Add prefix**: `Yes`
        
    - **Prefix**: `docs`
        

---

## 四、 自动化部署配置 (Action 脚本)

1. 在根目录创建文件夹路径：`.github/workflows/`。
    
2. 在该路径下新建文件 `deploy.yml`，填入：
    

YAML

```
name: Deploy VitePress site to Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - name: Install pnpm
        uses: pnpm/action-setup@v4
        with:
          version: 10 # 根据你使用的pnpm版本填写，pnpm -v
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 24 # 根据你使用的node版本填写，node -v
          cache: 'pnpm'
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Install dependencies
        run: pnpm install
      - name: Build with VitePress
        run: pnpm run docs:build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: docs/.vitepress/dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## 五、 首次推送代码

1. **创建 `.gitignore`** (根目录):
    
    Plaintext
    
    ```
    node_modules
    docs/.vitepress/dist
    docs/.vitepress/cache
    ```
    
2. **Git 身份配置**:
    
    DOS
    
    ```
    git config --global user.email "zfsun@mail.ustc.edu.cn"
    git config --global user.name "Sun-3Q"
    ```
    
3. **建立连接并推送**:
    
    DOS
    
    ```
    git init
    git remote add origin git@github.com:Sun-3Q/Sun-3Q.github.io.git
    git add .
    git commit -m "initial clean push"
    git branch -M main
    git push -u origin main --force
    ```
    

---

## 六、 激活 Pages 服务 (最后冲刺)

1. 回到 GitHub 网页仓库，点击顶部的 **Settings**。
    
2. 左侧点击 **Pages**。
    
3. **Build and deployment > Source**: 点击下拉菜单，将 `Deploy from a branch` 更改为 **`GitHub Actions`**。
    
4. 点击顶部 **Actions** 标签，查看构建进度。绿色 ✅ 出现后，访问 `https://sun-3q.github.io/`。
    

---

## 七、 维护命令

- **预览**: `pnpm run docs:dev`
    
- **更新**: `git add .` -> `git commit -m "update"` -> `git push`

---

## 八、 配置评论系统 (可选)

网站已集成 Giscus 评论系统，但需要完成以下配置才能使用：

1. **查看详细配置指南**：[Giscus 评论系统配置指南](/giscus-setup)

2. **快速配置步骤**：
   - 确保仓库是公开的
   - 启用 Discussions 功能 (Settings → Features)
   - 安装 Giscus App: https://github.com/apps/giscus
   - 访问 https://giscus.app 获取配置参数
   - 更新 `docs/.vitepress/theme/components/Comment.vue` 中的占位符

3. **如遇到问题**：参考配置指南中的故障排查部分

配置完成后，每篇文章底部都会显示评论区，访客可以使用 GitHub 账号登录评论。