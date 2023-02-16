<script setup>
import { ref, onMounted } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
import { formatDateByTimeStamp } from '@/utils'
const now = ref(0)
onMounted(() => {
  setInterval(() => {
    now.value = formatDateByTimeStamp()
  }, 1000)
})

const isPROD = ref(import.meta.env.PROD)
console.log(1)

// eslint-disable-next-line no-undef
console.log('appName', appName)
</script>

<template>
  <h5>{{ now }}</h5>
  <h1>{{ isPROD }}</h1>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
