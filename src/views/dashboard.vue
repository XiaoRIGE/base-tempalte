<template>
  <div class="z-10 py-8">dashboard</div>
  {{ number }}

  <el-date-picker
    v-model="value1"
    type="datetime"
    placeholder="Select date and time"
  />
</template>

<script setup>
import useUserStore from '@/stores/user'
import { computed, ref } from 'vue'

const userStore = useUserStore()

const number = computed(() => {
  return userStore.count
})
const value1 = ref('')
</script>

<style lang="scss" scoped></style>
