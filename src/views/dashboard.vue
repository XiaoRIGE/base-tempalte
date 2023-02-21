<template>
  <div class="z-10 py-8">dashboard</div>
  {{ number }}
</template>

<script setup>
import useUserStore from '@/stores/user'
import { computed } from 'vue'
const userStore = useUserStore()
userStore.increment()

const number = computed(() => {
  return userStore.count
})
</script>

<style lang="scss" scoped></style>
