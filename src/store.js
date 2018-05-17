import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// initial state of the app
const state = {
  auth: false,
  role: '',
  direction: '',
  statusPage: false,
  idd: ''
}

export default new Vuex.Store({
  state
})
