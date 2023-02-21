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

const a = 'fix'

console.log('a', a)
</script>

<style lang="scss" scoped></style>
