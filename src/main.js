// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import Axios from 'axios'
import Vuex from 'vuex'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import 'babel-polyfill'
import firebase from './firebase'
Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(Vuex)
Vue.use(firebase)
Vue.$http = Axios
let app

Vue.config.productionTip = false
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
firebase.auth().onAuthStateChanged(function (user) {
  console.log('user', user)
  if (!app) {
    app = new Vue({
      el: '#app',
      template: '<App/>',
      components: { App },
      router
    })
  }
})
