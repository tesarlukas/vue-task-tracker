<template>
  <div class="container">
    <h1 class="text-center">Your main focus today is</h1>
    <div v-if="getTask.text" class="task">
      <h3>{{ getTask.text }}</h3>
      <p>{{ getTask.day }}</p>
    </div>
    <div v-else class="task text-center">
      <p>There is no task you are focused on</p>
    </div>
    <NavButtons />
  </div>
</template>

<script>
import NavButtons from '@/components/NavButtons.vue';
import { mapGetters } from 'vuex';

export default {
  components: { NavButtons },
  name: 'Focus',
  computed: {
    ...mapGetters({ getTask: 'GET_TASK' }),
  },
};
</script>

<style lang="css" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.task {
  margin: 20px 5px;
}
</style>
