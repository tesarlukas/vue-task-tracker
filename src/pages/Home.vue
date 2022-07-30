<template>
  <Tasks
    @add-task="addTask"
    @delete-task="deleteTask"
    @toggle-reminder="toggleReminder"
    :tasks="tasks"
  />
</template>

<script>
import Tasks from '../components/Tasks.vue';

export default {
  name: 'Home',
  components: {
    Tasks,
  },
  data() {
    return {
      tasks: [],
    };
  },
  async created() {
    const tasksFromServer = await this.fetchTasks();
    this.tasks = tasksFromServer;
  },
  methods: {
    async fetchTask(id) {
      const res = await fetch(`http://localhost:5002/tasks/${id}`);
      const data = await res.json();

      return data;
    },
    async fetchTasks() {
      const res = await fetch('http://localhost:5002/tasks');
      const data = await res.json();

      return data;
    },
    async addTask(newTask) {
      const res = await fetch('http://localhost:5002/tasks', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(newTask),
      });
      const data = await res.json();

      this.tasks = [...this.tasks, data];
    },
    async deleteTask(id) {
      await fetch(`http://localhost:5002/tasks/${id}`, {
        method: 'DELETE',
      });

      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    async toggleReminder(id) {
      const taskToToggle = await this.fetchTask(id);
      const toggledTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

      const res = await fetch(`http://localhost:5002/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(toggledTask),
      });

      const data = await res.json();

      const taskToUpdate = this.tasks.find((task) => task.id === data.id);
      taskToUpdate.reminder = data.reminder;
    },
  },
};
</script>
