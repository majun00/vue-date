import Vue from 'vue'
import App from './App.vue'

import vueDate from './lib/index.js'
Vue.use(vueDate)

new Vue({
  el: '#app',
  render: h => h(App)
})
