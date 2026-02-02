<template>
  <div class="comment-container">
    <div id="giscus-container" ref="giscusContainer"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useData, useRoute } from 'vitepress'

const { isDark } = useData()
const route = useRoute()
const giscusContainer = ref<HTMLElement>()

const loadGiscus = () => {
  if (!giscusContainer.value) return

  // 清除之前的 Giscus 实例
  giscusContainer.value.innerHTML = ''

  // 创建 script 标签
  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.setAttribute('data-repo', 'Sun-3Q/Sun-3Q.github.io')
  
  // ⚠️ 重要：请替换下面的占位符为实际值
  // 1. 确保仓库是公开的
  // 2. 在仓库 Settings → Features 中启用 Discussions
  // 3. 安装 Giscus App: https://github.com/apps/giscus
  // 4. 访问 https://giscus.app 获取实际的 repo-id 和 category-id
  // 详细配置指南: docs/giscus-setup.md
  script.setAttribute('data-repo-id', 'R_placeholder')  // ← 替换为从 giscus.app 获取的实际值
  script.setAttribute('data-category', 'Announcements')  // ← 如需要可修改为其他分类 (如 General)
  script.setAttribute('data-category-id', 'DIC_placeholder')  // ← 替换为从 giscus.app 获取的实际值
  
  script.setAttribute('data-mapping', 'pathname')
  script.setAttribute('data-strict', '0')
  script.setAttribute('data-reactions-enabled', '1')
  script.setAttribute('data-emit-metadata', '0')
  script.setAttribute('data-input-position', 'bottom')
  script.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
  script.setAttribute('data-lang', 'zh-CN')
  script.setAttribute('crossorigin', 'anonymous')
  script.async = true

  giscusContainer.value.appendChild(script)
}

onMounted(() => {
  loadGiscus()
})

// 监听主题变化
watch(isDark, () => {
  const iframe = document.querySelector<HTMLIFrameElement>('.giscus-frame')
  if (iframe) {
    iframe.contentWindow?.postMessage(
      {
        giscus: {
          setConfig: {
            theme: isDark.value ? 'dark' : 'light'
          }
        }
      },
      'https://giscus.app'
    )
  }
})

// 监听路由变化，重新加载评论
watch(() => route.path, () => {
  loadGiscus()
})
</script>

<style scoped>
.comment-container {
  margin-top: 48px;
  padding-top: 32px;
  border-top: 1px solid var(--vp-c-divider);
}

@media (max-width: 768px) {
  .comment-container {
    margin-top: 32px;
    padding-top: 24px;
  }
}
</style>
