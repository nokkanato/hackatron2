// import Vue from 'vue'
import firebase from 'firebase'
import Api2 from './api2.js'
export default {
  getFrom (dir, callback) {
    let g = []
    firebase.database().ref(dir).once('value').then(function (snapshot) {
      let x = snapshot.val()
      // console.log('callback', x)
      for (var i in x) {
        Api2.buddha(i, dir, j => {
          g.push(j)
        })
      }
      console.log('g', g)
      callback(g)
    })
  }
}
