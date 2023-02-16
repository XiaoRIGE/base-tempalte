<template>
  <h1>bar</h1>
  <div @click="isOk">
    {{ props.name }}
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    default: '11',
  },
})

const emit = defineEmits(['aboutExeVisible'])
const isOk = () => {
  emit('aboutExeVisible')
}
</script>

<style lang="scss" scoped></style>
