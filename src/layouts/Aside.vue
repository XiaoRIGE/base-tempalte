<template>
  <div class="aside">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/class-a">ClassA</router-link>
      </li>
      <li>
        <router-link to="/class-b">ClassB</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/login">Login</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.aside {
  width: 200px;
  background: #e6f4ff;
}
</style>
