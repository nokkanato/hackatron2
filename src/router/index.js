import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Role from '@/components/Role'
import Direction from '@/components/Direction'
import Form from '@/components/Form'
import Signup from '@/components/Signup'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/role',
      name: 'Role',
      component: Role
    },
    {
      path: '/direction',
      name: 'direction',
      component: Direction
    },
    {
      path: '/form',
      name: 'form',
      component: Form
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    }
  ]
})
