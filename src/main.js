import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/scss/style.scss'

Vue.config.productionTip = false

Vue.router = router

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
