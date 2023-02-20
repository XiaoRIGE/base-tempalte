<template>
  <div>
    <h1>foo</h1>
    <div>{{ count }}</div>

    <DemoChild name="父组件传值123" @aboutExeVisible="aboutExeVisible" />
  </div>
</template>
<script setup>
import { ref } from 'vue'
import DemoChild from './DemoChild.vue'

const count = ref('Foo')
const aboutExeVisible = () => {
  console.log('you clicked the text')
}
</script>
<style lang="scss" scoped>
h1 {
  font-size: 48px;
}
</style>
