<template>
  <div class="error">
    <img class="error-icon" src="../../assets/images/svg/404.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.error {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  &-icon {
    max-height: 60vh;
  }
}
</style>
