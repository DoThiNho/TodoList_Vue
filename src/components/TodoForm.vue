<template lang="">
  <div class="form-add">
    <input
      type="text"
      class="input-add"
      placeholder="Add your text"
      v-model="title"
      @keyup.enter="addNewTodoItem"
      required
    />
    <button class="btn-add" @click="addNewTodoItem">Add</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      title: ''
    }
  },
  methods: {
    ...mapActions({
      addTodo: 'addTodo'
    }),
    addNewTodoItem() {
      if (this.title !== '') {
        this.addTodo(this.title)
        this.title = ''
      }
    }
  }
}
</script>
