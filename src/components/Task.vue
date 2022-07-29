<template>
  <div
    @dblclick="handleToggle(task.id)"
    class="task"
    :class="task.reminder ? 'reminder' : ''"
  >
    <h3>
      {{ task.text }}
      <div>
        <span @click="handleFocus(task)" style="color: blue">F</span>
        <span @click="handleDelete(task.id)" style="color: red">X</span>
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
  created() {},
  methods: {
    handleDelete(id) {
      this.$emit('delete-task', id);
    },
    handleToggle(id) {
      this.$emit('toggle-reminder', id);
    },
    handleFocus(task) {
      this.$store.dispatch('setTask', task);
    },
  },
};
</script>

<style lang="scss" scoped>
span {
  margin-left: 5px;
}
</style>
