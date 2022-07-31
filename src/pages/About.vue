<template>
  <div class="container">
    <h1 class="text-center">About This Application</h1>
    <p>
      This is an application serving as a simple Task Tracker application. Its
      main purpose is to show practical usage of the Vue framework and its main
      features in comparison to the Svelte framework.
    </p>
    <NavButtons />
  </div>
</template>

<script>
import NavButtons from '../components/NavButtons.vue';

export default {
  name: 'About',
  components: {
    NavButtons,
  },
};
</script>

<style lang="scss" scoped>
.container {
  border: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
