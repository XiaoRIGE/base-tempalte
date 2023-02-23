<template>
  <div class="classB">
    <h1>classB Home</h1>
    <input type="text" v-model="text" />
    <button primary>
      <router-link to="/class-b/detail" class="d-flex align-center">
        show detail
      </router-link>
    </button>
  </div>
</template>
<script setup name="classB">
import { ref, onActivated, onMounted } from 'vue'

const text = ref('')
onMounted(() => {
  console.log('onMounted')
})
onActivated(() => {
  console.log('缓存页面激活')
})
</script>

<style lang="scss" scoped></style>
