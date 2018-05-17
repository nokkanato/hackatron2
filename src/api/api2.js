import firebase from 'firebase'
export default {
  god (key, dir, callback) {
    firebase.database().ref(dir + '/' + key).once('value').then(function (snapshot) {
      let j = {id: key, text: snapshot.val()}
      callback(j)
    })
  },
  buddha (key, dir, callback) {
    firebase.database().ref(dir + '/' + key).once('value').then(function (snapshot) {
      let j = {id: key, text: snapshot.val()}
      callback(j)
    })
  }
}
