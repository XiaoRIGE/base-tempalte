<template>
  <component :is="resolveLayout">
    <router-view></router-view>
  </component>
</template>

<script setup>
import { computed } from 'vue'
import useUserStore from '@/stores/user'
import { useRoute } from 'vue-router'
import LayoutBlank from '@/layouts/Blank.vue'
import LayoutContent from '@/layouts/Content.vue'

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
