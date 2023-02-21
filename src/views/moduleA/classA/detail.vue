<template>
  <div class="classA-detail">classA-detail</div>
  <a-date-picker v-model:value="value1" />
</template>
<script setup>
import { ref } from 'vue'
const value1 = ref('')
</script>

<style lang="scss" scoped></style>
