<template lang="">
  <div class="todo-app">
    <h2 class="title">To-Do List</h2>
    <TodoForm />
    <TodoList />
  </div>
</template>
<script>
import TodoForm from '@/components/TodoForm.vue'
import TodoList from '@/components/TodoList.vue'

export default {
  components: {
    TodoForm,
    TodoList
  }
}
</script>
