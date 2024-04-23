export default {
  NEW_TODO(state, title) {
    state.todos.push({
      id: state.todos.length + 1,
      title,
      completed: false
    })
  },
  EDIT_TODO(state, todoItem) {
    let todoIndex = state.todos.findIndex((todo) => todo.id === todoItem.id)
    if (todoIndex !== -1) {
      state.todos[todoIndex] = todoItem
    }
  },
  DELETE_TODO(state, id) {
    state.todos = state.todos.filter((todo) => todo.id !== id)
  }
}
