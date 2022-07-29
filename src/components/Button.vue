<template>
  <button class="btn" :style="`backgroundColor: ${color}`" @click="onClick">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    color: String,
    text: String,
    onClick: {
      type: Function,
      default: () => alert('Function is missing'),
    },
  },
};
</script>

<style scoped lang="scss"></style>
