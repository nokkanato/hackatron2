import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Role from '@/components/Role'
import Direction from '@/components/Direction'
import Form from '@/components/Form'
import Signup from '@/components/Signup'
import firebase from '../firebase'
Vue.use(Router)
let router = new Router({
  routes: [
    {
      path: '*',
      name: 'Home',
      component: Home
    },
    {
      path: '/role',
      name: 'Role',
      component: Role,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/direction',
      name: 'direction',
      component: Direction,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/form',
      name: 'form',
      component: Form,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    }
  ]
})
router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('hello')
  else next()
})
export default router
