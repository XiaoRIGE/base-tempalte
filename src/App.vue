<template>
  <el-config-provider :locale="locale">
    <component :is="resolveLayout">
      <router-view></router-view>
    </component>
  </el-config-provider>
</template>

<script setup>
import { computed } from 'vue'
import useUserStore from '@/stores/user'
import { useRoute } from 'vue-router'
import LayoutBlank from '@/layouts/Blank.vue'
import LayoutContent from '@/layouts/Content.vue'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const locale = zhCn

const userStore = useUserStore()
userStore.increment()

const route = useRoute()

const resolveLayout = computed(() => {
  if (route.name === null) return null

  if (route.meta?.layout === 'blank') return LayoutBlank // 空白布局

  return LayoutContent // 菜单栏布局
})
</script>

<style scoped></style>
