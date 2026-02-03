# Giscus 评论组件配置说明

## ❓ 必须安装 Giscus App 吗？

**是的，必须安装。** 

Giscus App 是评论系统的核心，没有它：
- ❌ 评论区无法加载
- ❌ 访客无法发表评论  
- ❌ giscus.app 会提示"无法在该仓库上使用 giscus"

**放心安装**：Giscus 是开源的，只请求 Discussions 权限，不会访问你的代码。

📖 **详细说明**：查看 [完整 FAQ](../../../giscus-setup.md#-必须要安装-giscus-app-吗)

---

## 🚀 快速配置

当前 `Comment.vue` 使用占位符，需要替换为实际配置：

### 需要替换的占位符：

```javascript
// 第 25 行
script.setAttribute('data-repo-id', 'R_placeholder')  // ← 需要替换

// 第 27 行  
script.setAttribute('data-category-id', 'DIC_placeholder')  // ← 需要替换
```

### 如何获取实际值：

1. **确保 GitHub 仓库满足条件：**
   - ✅ 仓库是公开的
   - ✅ 已启用 Discussions 功能
   - ✅ 已安装 Giscus App: https://github.com/apps/giscus

2. **访问 Giscus 配置页面：**
   - 打开 https://giscus.app
   - 输入仓库：`Sun-3Q/Sun-3Q.github.io`
   - 按照提示完成配置

3. **复制生成的参数：**
   - `data-repo-id`: 以 `R_kgDO` 开头
   - `data-category-id`: 以 `DIC_kwDO` 开头

4. **更新本文件**，替换占位符为实际值

## 📖 详细文档

完整配置指南请查看：`docs/giscus-setup.md`

## ❌ 常见问题

**"无法在该仓库上使用 giscus"**
- 确认仓库是公开的
- 确认已启用 Discussions
- 确认已安装 Giscus App

**评论区不显示**
- 检查占位符是否已替换
- 查看浏览器 Console 是否有错误
- 确认网站已重新部署

## 🔗 相关链接

- [Giscus 官网](https://giscus.app)
- [详细配置指南](../../../giscus-setup.md)
