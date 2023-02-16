<template>
  <h1>Hello App!</h1>
  <p>
    <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
    <router-link to="/class-a">Go to ClassA</router-link>
    <router-link to="/class-b">Go to ClassB</router-link>
  </p>
  <router-view></router-view>
</template>

<script setup>
import useUserStore from '@/stores/user'

const userStore = useUserStore()

userStore.increment()
</script>

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
a {
  padding-right: 16px;
}
</style>
