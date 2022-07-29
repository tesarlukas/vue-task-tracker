<template>
  <div class="container">
    <h1 class="text-center">Your main focus today is</h1>
    <div class="task">
      <h3>{{ getTask.text }}</h3>
      <p>{{ getTask.day }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Focus',
  computed: {
    ...mapGetters({ getTask: 'GET_TASK' }),
  },
};
</script>

<style lang="scss" scoped>
.container {
  border: none;
}
</style>
