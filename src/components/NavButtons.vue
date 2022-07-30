<template>
  <div class="buttons">
    <button class="btn" @click="() => $router.back()">Back</button>
    <button class="btn" @click="() => $router.push('/')">Go Home</button>
  </div>
</template>

<script>
export default {
  name: 'NavButtons',
};
</script>

<style lang="scss" scoped>
.buttons {
  display: flex;
  justify-content: space-between;
}
</style>
