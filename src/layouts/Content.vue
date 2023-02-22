<template>
  <div class="content">
    <Header />
    <div class="main-box">
      <Aside />
      <main class="main">
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script setup>
import Header from './Header.vue'
import Aside from './Aside.vue'
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  height: 100vh;
  .header {
    height: 80px;
    background-color: #91caff;
  }
  .main-box {
    background-color: #fafafa;
    flex: 1;
    flex-grow: 1;
    display: flex;
    .aside {
      width: 200px;
      background: #e6f4ff;
    }
    .main {
      flex: 1;
      height: calc(100vh - 60px);
      overflow: auto;
    }
  }
}
</style>
