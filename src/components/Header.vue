<template>
  <header>
    <h1>{{ title }}</h1>
    <Button
      :text="showAddTask ? 'Close' : 'Add'"
      :color="showAddTask ? 'red' : 'green'"
      :onClick="handleAdd"
    />
  </header>
</template>

<script>
import Button from '../components/Button.vue';

export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: 'Title',
    },
    showAddTask: Boolean,
  },
  components: {
    Button,
  },
  methods: {
    handleAdd() {
      this.$emit('toggle-show');
    },
  },
};
</script>

<style></style>
