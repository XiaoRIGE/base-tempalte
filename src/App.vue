<template>
  <a-config-provider :locale="locale">
    <component :is="resolveLayout">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" v-if="$route.meta.keepAlive" />
        </keep-alive>
        <component :is="Component" v-if="!$route.meta.keepAlive" />
      </router-view>
    </component>
  </a-config-provider>
</template>

<script setup>
import { computed } from 'vue'
import useUserStore from '@/stores/user'
import { useRoute } from 'vue-router'
import LayoutBlank from '@/layouts/Blank.vue'
import LayoutContent from '@/layouts/Content.vue'
import { message } from 'ant-design-vue'

import zhCN from 'ant-design-vue/es/locale/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')

const locale = zhCN

console.log('import.meta.env', import.meta.env)

const userStore = useUserStore()
userStore.increment()

const route = useRoute()

const resolveLayout = computed(() => {
  if (route.name === null) return null

  if (route.meta?.layout === 'blank') return LayoutBlank // 空白布局

  return LayoutContent // 菜单栏布局
})

message.info('This is a normal message')
</script>

<style scoped></style>
