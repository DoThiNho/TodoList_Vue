import './assets/scss/main.scss'
import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import store from './store/store'

library.add(fas)

createApp(App).component('fa', FontAwesomeIcon).use(store).mount('#app')
