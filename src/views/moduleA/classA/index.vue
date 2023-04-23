<template>
  <div class="classA">
    <h1>classA Home</h1>
    <button primary>
      <router-link to="/class-a/detail" class="d-flex align-center">
        show detail
      </router-link>
    </button>
  </div>
</template>
<script setup>
import {onMounted} from 'vue'
onMounted(()=>{
  console.log('classA page onMounted ');
})
</script>
<style lang="scss" scoped></style>
