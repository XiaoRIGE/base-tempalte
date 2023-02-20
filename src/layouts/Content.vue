<template>
  <div class="content">
    <Header />
    <div class="main-box">
      <Aside />

      <main class="main">
        <div class="app-content-container boxed-container pa-4">
          <slot></slot>
        </div>
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
    // flex-grow: 0;
  }
}
.main-box {
  background-color: #fafafa;
  flex: 1;
  flex-grow: 1;
  flex: 1;
  flex-grow: 1;
  display: flex;
  .aside {
    width: 200px;
    background: #e6f4ff;
  }
  .main {
    flex: 1;
  }
}
</style>
