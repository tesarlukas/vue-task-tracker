<template>
  <div
    @dblclick="handleToggle(task.id)"
    class="task"
    :class="task.reminder ? 'reminder' : ''"
  >
    <h3>
      {{ task.text }}
      <span @click="handleDelete(task.id)" style="color: red">X</span>
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
  },
};
</script>

<style></style>
