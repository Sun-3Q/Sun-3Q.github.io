---
title: Giscus 评论系统配置指南
---

# 🔧 Giscus 评论系统配置指南

本指南将帮助你完成 Giscus 评论系统的配置，解决 "无法在该仓库上使用 giscus" 的问题。

## ❓ 常见问题快速解答

### Q: 必须要安装 Giscus App 吗？

**A: 是的，必须安装。** Giscus App 是评论系统运行的核心组件，没有它评论功能完全无法工作。

**为什么必须安装？**
- 💬 App 负责在访客评论时创建 GitHub Discussion
- 🔐 App 管理访问权限，确保安全
- 🔄 App 在网站和 GitHub 之间同步数据

**放心安装**：Giscus 是[开源项目](https://github.com/giscus/giscus)，只请求 Discussions 相关权限，不会访问你的代码。

[跳转到详细安装说明 ↓](#-3-安装-giscus-app)

---

### Q: 我的仓库必须是公开的吗？

**A: 是的。** Giscus 只支持公开仓库，因为：
- 访客需要能够查看 Discussions
- GitHub 对私有仓库的 API 访问有更严格限制

---

### Q: 不启用 Discussions 功能可以吗？

**A: 不可以。** Giscus 的评论实际上就是存储为 GitHub Discussions，这是核心功能。

---

## 📋 前置要求检查

在配置 Giscus 之前，你的 GitHub 仓库必须满足以下条件：

### ✅ 1. 仓库必须是公开的

**检查方法：**
1. 访问你的仓库 https://github.com/Sun-3Q/Sun-3Q.github.io
2. 查看仓库名称旁边的标签
3. 如果显示 "🔒 Private"，需要将其改为公开

**如何设置为公开：**
1. 进入仓库页面
2. 点击 **Settings** (设置)
3. 滚动到页面底部的 **Danger Zone** (危险区域)
4. 点击 **Change repository visibility** (更改仓库可见性)
5. 选择 **Make public** (设为公开)
6. 按照提示确认操作

⚠️ **注意：** 公开仓库后，所有人都可以查看你的代码和内容。

---

### ✅ 2. 启用 Discussions 功能

**检查方法：**
1. 访问你的仓库主页
2. 查看顶部标签栏，检查是否有 **Discussions** 标签

**如何启用 Discussions：**
1. 进入仓库页面
2. 点击 **Settings** (设置)
3. 向下滚动到 **Features** (功能) 部分
4. 勾选 ✅ **Discussions**
5. 自动创建后，访问 **Discussions** 标签确认

---

### ✅ 3. 安装 Giscus App

#### ❓ 为什么必须安装 Giscus App？

**简短回答：是的，必须安装。没有 App，评论功能完全无法工作。**

**详细说明：**

Giscus App 是评论系统的核心组件，它的作用包括：

1. **🔐 权限管理**
   - App 需要访问你的仓库和 Discussions 的权限
   - 确保只有授权的操作才能进行，保护你的仓库安全

2. **💬 评论创建**
   - 访客发表评论时，实际是通过 Giscus App 代理创建 GitHub Discussion
   - 没有 App，评论无法被写入到你的仓库

3. **🔄 数据同步**
   - App 负责在你的网站和 GitHub Discussions 之间同步数据
   - 读取现有评论、接收新评论、处理回复等都依赖 App

4. **🛡️ 安全保障**
   - App 使用 GitHub OAuth 进行身份验证
   - 防止垃圾评论和恶意操作

**不安装 App 会发生什么？**
- ❌ 评论区显示"giscus 尚未加载"或错误信息
- ❌ 访客无法登录发表评论
- ❌ 现有评论无法显示
- ❌ giscus.app 配置页面会提示"无法在该仓库上使用 giscus"

💡 **放心安装**：Giscus App 是开源的，你可以查看它的[源代码](https://github.com/giscus/giscus)。App 只请求必要的权限，不会对你的代码或其他数据进行任何修改。

---

#### 📦 安装步骤

1. **访问 Giscus App 安装页面**
   - 直接访问：https://github.com/apps/giscus
   - 或通过 giscus.app 配置页面的链接访问

2. **点击 "Install" (安装) 或 "Configure" (配置)**

3. **选择安装位置**
   - 选择 "Only select repositories" (仅选择的仓库) ⬅️ **推荐**
   - 在下拉列表中选择 `Sun-3Q/Sun-3Q.github.io`
   - 或选择 "All repositories" (所有仓库)，如果你希望所有仓库都能使用

4. **授权安装**
   - 点击 **Install** 或 **Save**
   - 确认授权

5. **验证安装**
   - 访问 https://github.com/settings/installations
   - 确认 "giscus" 出现在已安装应用列表中
   - 确保 `Sun-3Q/Sun-3Q.github.io` 仓库在授权范围内

#### 🔒 Giscus App 请求的权限

Giscus App 只请求以下必要权限：
- ✅ **Discussions**: 读取和写入权限 - 用于创建和管理评论
- ✅ **Metadata**: 只读权限 - 用于获取仓库基本信息

**不会访问：**
- ❌ 你的代码
- ❌ Issues
- ❌ Pull Requests  
- ❌ 其他敏感数据

---

## 🎯 获取 Giscus 配置参数

完成上述三个步骤后，需要获取配置参数来更新代码：

### 步骤 1: 访问 Giscus 配置网站

打开 https://giscus.app

### 步骤 2: 填写仓库信息

在 **仓库** 输入框中填写：
```
Sun-3Q/Sun-3Q.github.io
```

如果一切配置正确，会显示：
```
✅ 成功！此仓库满足所有条件。
```

### 步骤 3: 配置 Discussion 分类

1. 向下滚动到 **Discussion 分类** 部分
2. 推荐选择以下分类之一：
   - **Announcements** (公告) - 仅维护者可创建新讨论，适合博客评论
   - **General** (通用) - 所有人都可创建讨论

3. 记住你选择的分类名称（后面会用到）

### 步骤 4: 选择其他选项

- **页面 ↔️ discussion 映射关系**：选择 `pathname` (已在代码中配置)
- **Discussion 主题色**：会自动跟随网站主题（已在代码中配置）
- **语言**：选择 `简体中文 (zh-CN)` (已在代码中配置)

### 步骤 5: 复制生成的配置

向下滚动到 **启用 giscus** 部分，你会看到类似这样的代码：

```html
<script src="https://giscus.app/client.js"
        data-repo="Sun-3Q/Sun-3Q.github.io"
        data-repo-id="R_kgDONxxxxxxxx"
        data-category="Announcements"
        data-category-id="DIC_kwDONxxxxxxxx"
        ...
</script>
```

**重要：** 记下以下两个参数：
- `data-repo-id`: 以 `R_` 开头的字符串
- `data-category-id`: 以 `DIC_` 开头的字符串

---

## 📝 更新代码配置

### 方法 1: 直接编辑 GitHub 文件

1. 访问 https://github.com/Sun-3Q/Sun-3Q.github.io/blob/main/docs/.vitepress/theme/components/Comment.vue
2. 点击右上角的 ✏️ (Edit this file) 按钮
3. 找到以下行：

```javascript
script.setAttribute('data-repo-id', 'R_placeholder')
script.setAttribute('data-category', 'Announcements')
script.setAttribute('data-category-id', 'DIC_placeholder')
```

4. 替换为你从 giscus.app 获取的实际值：

```javascript
script.setAttribute('data-repo-id', 'R_kgDONxxxxxxxx')  // 替换为你的实际值
script.setAttribute('data-category', 'Announcements')    // 如果选择了其他分类，也要修改这里
script.setAttribute('data-category-id', 'DIC_kwDONxxxxxxxx')  // 替换为你的实际值
```

5. 滚动到页面底部，填写提交信息：
   - Commit message: `配置 Giscus 评论系统参数`
   - 选择 "Commit directly to the main branch"
   - 点击 **Commit changes**

### 方法 2: 本地修改后推送

如果你在本地开发环境：

```bash
# 编辑文件
nano docs/.vitepress/theme/components/Comment.vue

# 提交更改
git add docs/.vitepress/theme/components/Comment.vue
git commit -m "配置 Giscus 评论系统参数"
git push
```

---

## 🔍 验证配置

配置完成后，按照以下步骤验证：

### 1. 等待部署完成

如果你使用 GitHub Actions 自动部署，等待几分钟让网站重新构建。

可以在 https://github.com/Sun-3Q/Sun-3Q.github.io/actions 查看部署状态。

### 2. 访问网站

打开 https://sun-3q.github.io/deployment-guide （或任意文章页面）

### 3. 检查评论区

滚动到页面底部，应该能看到：
- Giscus 评论框正常加载
- 可以进行 GitHub 登录
- 可以发表评论和查看评论

---

## ❌ 常见问题排查

### 问题 1: "无法在该仓库上使用 giscus"

**可能原因和解决方案：**

1. **仓库不是公开的**
   - 解决：按照上述步骤将仓库改为公开

2. **Discussions 未启用**
   - 解决：在仓库 Settings → Features 中启用 Discussions

3. **Giscus App 未安装**
   - 解决：访问 https://github.com/apps/giscus 安装应用

4. **仓库名称输入错误**
   - 检查：确保输入的是 `Sun-3Q/Sun-3Q.github.io` (大小写敏感)

### 问题 2: 评论区显示 "giscus 尚未加载"

**可能原因：**
- 配置参数还是占位符
- repo-id 或 category-id 不正确

**解决方案：**
- 确认已将 `R_placeholder` 和 `DIC_placeholder` 替换为实际值
- 重新访问 giscus.app 确认参数是否正确

### 问题 3: 评论区不显示

**检查清单：**
1. 打开浏览器开发者工具 (F12)
2. 查看 Console 标签页是否有错误
3. 检查 Network 标签页，确认 giscus.app 的请求是否成功
4. 确认 Comment.vue 组件是否正确集成到主题中

### 问题 4: 无法登录 GitHub

**可能原因：**
- Giscus App 权限问题
- GitHub 账号未授权

**解决方案：**
1. 访问 https://github.com/settings/applications
2. 找到 "giscus" 应用
3. 确认已授权访问

---

## 💬 详细 FAQ

### Q1: Giscus App 到底是什么？

Giscus App 是一个 GitHub 官方应用商店中的第三方应用，由 Giscus 开源项目提供。它充当你的网站和 GitHub Discussions 之间的桥梁。

**工作原理：**
```
访客发表评论 → Giscus 网站脚本 → Giscus App → 在你的仓库创建 Discussion
```

### Q2: 安装 App 安全吗？

**非常安全。** 原因如下：

1. **开源透明**：所有代码都在 GitHub 公开，任何人都可以审查
2. **最小权限**：只请求 Discussions 和 Metadata 权限
3. **广泛使用**：数千个网站在使用，社区信任度高
4. **可随时卸载**：你随时可以在 GitHub 设置中卸载

**验证安全性：**
- 查看 [Giscus 源码](https://github.com/giscus/giscus)
- 查看 [App 权限说明](https://github.com/apps/giscus)
- 检查 [社区反馈](https://github.com/giscus/giscus/discussions)

### Q3: 我只想在一个仓库使用，会影响其他仓库吗？

**不会。** 安装时选择 "Only select repositories" (仅选择的仓库)，App 只能访问你指定的仓库。

你可以：
- 随时添加或移除仓库
- 完全控制哪些仓库可以使用 Giscus
- 不同仓库可以有不同的配置

### Q4: 不安装 App，有其他替代方案吗？

**没有替代方案。** 如果不想安装 Giscus App，你可以考虑其他评论系统：

**其他评论系统选项：**
- **Utterances**：类似 Giscus，但使用 GitHub Issues 而不是 Discussions
- **Disqus**：传统的第三方评论服务
- **Waline**：需要自己部署服务器
- **Gitalk**：基于 GitHub Issues

但这些系统都有各自的要求和限制。Giscus 已经是最轻量级的解决方案之一。

### Q5: App 会占用我的 API 配额吗？

**不会。** Giscus App 使用自己的 GitHub App 身份，有独立的 API 配额。你的个人 API 配额不会受到影响。

### Q6: 访客需要安装 App 吗？

**不需要。** 只有仓库所有者（你）需要安装 App。访客只需要：
1. 有 GitHub 账号
2. 在你的网站上点击登录
3. 授权 Giscus 访问他们的基本信息（只在第一次）

### Q7: 卸载 App 后会发生什么？

如果卸载 Giscus App：
- ❌ 评论区立即停止工作
- ✅ 已有的 Discussions 不会被删除
- ✅ 评论数据保留在 GitHub Discussions 中
- ✅ 重新安装后评论会重新显示

### Q8: App 可以修改我的代码吗？

**完全不能。** Giscus App：
- ✅ 只能读取和创建 Discussions
- ✅ 只能读取仓库元数据（名称、描述等）
- ❌ 不能访问代码
- ❌ 不能创建或修改文件
- ❌ 不能操作 Issues、Pull Requests 等

---

## 📚 参考资料

- [Giscus 官方文档](https://giscus.app)
- [Giscus GitHub 仓库](https://github.com/giscus/giscus)
- [GitHub Discussions 文档](https://docs.github.com/en/discussions)

---

## 🎉 配置完成

完成上述所有步骤后，你的网站就拥有了功能完善的评论系统！

访客可以：
- 使用 GitHub 账号登录评论
- 查看和回复其他人的评论
- 点赞评论内容
- 评论会自动同步到 GitHub Discussions

祝使用愉快！ 🚀
