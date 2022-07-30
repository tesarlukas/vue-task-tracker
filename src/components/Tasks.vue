<template>
  <div class="container">
    <Header
      :title="'Tasks'"
      @toggle-show="toggleShow"
      :showAddTask="showAddTask"
    />
    <AddTask
      v-if="showAddTask"
      @add-task="(newTask) => $emit('add-task', newTask)"
    />
    <Task
      v-for="task in tasks"
      :key="task.id"
      @delete-task="$emit('delete-task', task.id)"
      @toggle-reminder="$emit('toggle-reminder', task.id)"
      :task="task"
    />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import AddTask from '../components/AddTask.vue';
import Task from '../components/Task.vue';

export default {
  name: 'Tasks',
  props: {
    tasks: {
      type: Array,
      default: [],
    },
  },
  components: {
    Header,
    AddTask,
    Task,
  },
  data() {
    return {
      showAddTask: false,
    };
  },
  methods: {
    toggleShow() {
      this.showAddTask = !this.showAddTask;
    },
  },
};
</script>
