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
    <div v-if="tasks.length > 0">
      <Task
        v-for="task in tasks"
        :key="task.id"
        @delete-task="$emit('delete-task', task.id)"
        @toggle-reminder="$emit('toggle-reminder', task.id)"
        :task="task"
      />
    </div>
    <p v-else>There are not tasks</p>
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
