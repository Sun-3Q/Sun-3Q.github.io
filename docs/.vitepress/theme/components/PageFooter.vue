<template>
  <div class="page-footer-stats">
    <div class="stats-container">
      <span class="stat-item">
        <span class="icon">🌐</span>
        <span>本站总访问量</span>
        <span id="busuanzi_value_site_pv" class="stat-value">--</span>
        <span>次</span>
      </span>
      <span class="stat-divider">|</span>
      <span class="stat-item">
        <span class="icon">👤</span>
        <span>本站访客数</span>
        <span id="busuanzi_value_site_uv" class="stat-value">--</span>
        <span>人</span>
      </span>
      <span class="stat-divider">|</span>
      <span class="stat-item">
        <span class="icon">📄</span>
        <span>本页阅读量</span>
        <span id="busuanzi_value_page_pv" class="stat-value">--</span>
        <span>次</span>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

let scriptElement: HTMLScriptElement | null = null

const loadBusuanzi = () => {
  // 检查脚本是否已经加载
  if (document.getElementById('busuanzi_script')) {
    return
  }

  // 创建 script 标签
  scriptElement = document.createElement('script')
  scriptElement.id = 'busuanzi_script'
  scriptElement.async = true
  scriptElement.src = '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'
  document.body.appendChild(scriptElement)
}

onMounted(() => {
  loadBusuanzi()
})

onUnmounted(() => {
  // 清理脚本
  if (scriptElement && scriptElement.parentNode) {
    scriptElement.parentNode.removeChild(scriptElement)
    scriptElement = null
  }
})
</script>

<style scoped>
.page-footer-stats {
  padding: 24px 0;
  margin-top: 48px;
  border-top: 1px solid var(--vp-c-divider);
  text-align: center;
  font-size: 14px;
  color: var(--vp-c-text-2);
}

.stats-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

.stat-item {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
}

.stat-item .icon {
  font-size: 16px;
}

.stat-value {
  font-weight: 600;
  color: var(--vp-c-brand-1);
  margin: 0 2px;
}

.stat-divider {
  color: var(--vp-c-divider);
  margin: 0 4px;
}

@media (max-width: 768px) {
  .page-footer-stats {
    font-size: 12px;
    padding: 16px 0;
    margin-top: 32px;
  }
  
  .stats-container {
    flex-direction: column;
    gap: 12px;
  }
  
  .stat-divider {
    display: none;
  }
  
  .stat-item {
    justify-content: center;
  }
}
</style>
