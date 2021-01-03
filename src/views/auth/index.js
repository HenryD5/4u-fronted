import Login from './Login.vue'
import Register from './Register.vue'

const routes = [
  {
    path: '/iniciar-sesion',
    name: 'login',
    component: Login
  },
  {
    path: '/registro',
    name: 'registro',
    component: Register
  }
]

export default routes
