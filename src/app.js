import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import router from './router'

import './bootstrap.css'

Vue.use(VueRouter)

new Vue({
  el: '#root',
  router,
  components: {
    App
  },
  template: '<App />'
})
