import actions from '@/store/actions'
import mutations from '@/store/mutations'
import { createStore } from 'vuex'

const store = createStore({
  state: {
    todos: []
  },
  mutations,
  actions
})

export default store
