<template lang="">
  <li class="todo-item">
    <div v-show="!isEditing" class="todo-display">
      <div class="todo-text" @click="editTodoItem">
        <input type="checkbox" :checked="todo.completed" />
        <span :class="{ completed: todo.completed }">{{ todo.title }}</span>
      </div>
      <div class="btn-wrapper">
        <button class="btn-icon" @click="deleteTodoItem">
          <fa icon="xmark" />
        </button>
        <button class="btn-icon" @click="toggleEdit">
          <fa icon="pen-to-square" />
        </button>
      </div>
    </div>
    <div v-show="isEditing" class="todo-edit">
      <input class="input-edit" v-model="titleEdit" @keyup.enter="editTodoItem" />
      <button class="btn-action" @click="editTodoItem">Edit</button>
      <button class="btn-action" @click="cancelEdit">Cancel</button>
    </div>
  </li>
</template>
<script>
export default {
  data() {
    return {
      isEditing: false,
      titleEdit: this.todo.title
    }
  },
  props: {
    todo: {
      typeof: String,
      default: () => {}
    }
  },
  methods: {
    editTodoItem() {
      this.$emit('editTodoItem', {
        ...this.todo,
        title: this.titleEdit,
        completed: this.isEditing ? this.todo.completed : !this.todo.completed
      })
      if (this.isEditing) {
        this.isEditing = !this.isEditing
      }
    },
    deleteTodoItem() {
      this.$emit('deleteTodoItem', this.todo.id)
    },
    toggleEdit() {
      this.isEditing = !this.isEditing
    },
    cancelEdit() {
      this.isEditing = false
    }
  }
}
</script>
