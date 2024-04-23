export default {
  addTodo({ commit }, title) {
    commit('NEW_TODO', title)
  },
  editTodo({ commit }, todoItem) {
    commit('EDIT_TODO', todoItem)
  },
  deleteTodo({ commit }, id) {
    commit('DELETE_TODO', id)
  }
}
