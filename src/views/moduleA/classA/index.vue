<template>
  <h1>classA Home</h1>
  <button primary>
    <router-link to="/class-a/detail" class="d-flex align-center">
      show detail
    </router-link>
  </button>
  <a-card :loading="loading" title="Card title">whatever content</a-card>
  <a-button style="margin-top: 16px" @click="handleClick">
    Toggle loading
  </a-button>
</template>
<script setup>
import { ref } from 'vue'
const loading = ref(true)
const handleClick = () => {
  loading.value = !loading.value
}
</script>
