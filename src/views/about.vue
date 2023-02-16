<template>
  <div>about</div>

  <Suspense>
    <template #default>
      <BaseForm />
    </template>
    <template #fallback>
      <div>加载中...</div>
    </template>
  </Suspense>

  <Suspense>
    <template #default>
      <DemoParent />
    </template>
    <template #fallback>
      <div>加载中...</div>
    </template>
  </Suspense>
</template>

<script setup>
// 异步方式引入
import { defineAsyncComponent } from 'vue'
const BaseForm = defineAsyncComponent(() =>
  import('../components/form/BaseForm.vue')
)
// 同步方式引入
// import BaseForm from '../components/form/BaseForm.vue'

// todo: 使用全局注册的组件 修改组件后未正确完成热更新
// 参考issue https://github.com/vitejs/vite/issues/10616
</script>

<style lang="scss" scoped></style>
