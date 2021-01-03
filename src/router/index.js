import Vue from 'vue'
import VueRouter from 'vue-router'
import RoutesHome from '../views/home'
import RoutesAuth from '../views/auth'

Vue.use(VueRouter)
let routes = []
routes = routes.concat(
  RoutesHome,
  RoutesAuth
)

const router = new VueRouter({
  mode: 'history',
  authRedirect: { path: '/' },
  routes
})

export default router
