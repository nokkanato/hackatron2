import Vue from 'vue'
import store from '../store'

export default {
  login (email, password, callback) {
    console.log(store)
    var loginParams = {
      user: {
        email: email,
        password: password
      }
    }
    Vue.$http.post('/users/api_sign_in.json', loginParams)
    .then(function (response) {
      store.dispatch('login')
      callback(response.data)
    })
    .catch(function (response) {
      store.dispatch('logout')
    })
  },
  signUp (email, password) {
      
  }

}