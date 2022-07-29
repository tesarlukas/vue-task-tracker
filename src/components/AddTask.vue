<template>
  <form class="add-form" @submit.prevent="onSubmit">
    <div class="form-control">
      <label for="">Task</label>
      <input type="text" placeholder="Add Task" v-model="text" />
    </div>
    <div class="form-control">
      <label for="">Day & Time</label>
      <input type="text" placeholder="Add Day & Time" v-model="day" />
    </div>
    <div class="form-control form-control-check">
      <label for="">Set Reminder</label>
      <input
        type="checkbox"
        :checked="reminder"
        placeholder="Add Task"
        v-model="reminder"
      />
    </div>
    <div class="form-control">
      <input type="submit" class="btn btn-block" value="Save Task" />
    </div>
  </form>
</template>

<script>
export default {
  name: 'AddTask',
  data() {
    return {
      text: '',
      day: '',
      reminder: false,
    };
  },
  methods: {
    onSubmit() {
      if (!this.text) {
        alert('Please add a task');
        return;
      }
      const newTask = {
        text: this.text,
        day: this.day,
        reminder: this.reminder,
      };
      this.text = '';
      this.day = '';
      this.reminder = false;
      this.$emit('add-task', newTask);
    },
  },
};
</script>

<style></style>
