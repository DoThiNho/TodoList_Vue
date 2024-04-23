<template lang="">
  <ul class="todo-list">
    <TodoListItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @editTodoItem="editTodoItem"
      @deleteTodoItem="deleteTodoItem"
    />
  </ul>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import TodoListItem from '@/components/TodoListItem.vue'

export default {
  components: {
    TodoListItem
  },
  computed: {
    ...mapState({
      todos: 'todos'
    })
  },
  methods: {
    ...mapActions({
      deleteTodo: 'deleteTodo',
      editTodo: 'editTodo'
    }),
    editTodoItem(todo) {
      this.editTodo(todo)
    },
    deleteTodoItem(todoId) {
      this.deleteTodo(todoId)
    }
  }
}
</script>
