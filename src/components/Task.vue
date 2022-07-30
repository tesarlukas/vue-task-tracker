<template>
  <div
    @dblclick="handleToggle(task.id)"
    class="task"
    :class="task.reminder ? 'reminder' : ''"
  >
    <h3>
      {{ task.text }}
      <div>
        <i
          class="fas fa-check"
          style="color: blue"
          @click="handleFocus(task)"
        />
        <i
          class="fas fa-times"
          style="color: red"
          @click="handleDelete(task.id)"
        />
      </div>
    </h3>
    <p>{{ task.day }}</p>
  </div>
</template>

<script>
export default {
  name: 'Task',
  props: {
    task: Object,
  },
  methods: {
    handleDelete(id) {
      this.$emit('delete-task', id);
    },
    handleToggle(id) {
      this.$emit('toggle-reminder', id);
    },
    handleFocus(task) {
      this.$store.dispatch('setTask', task);
      alert('Your focus has been set to this task');
    },
  },
};
</script>

<style lang="scss" scoped>
i {
  margin-left: 5px;
}
</style>
