import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyC-3jyJznotfJH7_ReDEmWAwSU_JVeeS-Y',
  authDomain: 'hackatron2-e2817.firebaseapp.com',
  databaseURL: 'https://hackatron2-e2817.firebaseio.com',
  projectId: 'hackatron2-e2817',
  storageBucket: 'hackatron2-e2817.appspot.com',
  messagingSenderId: '548998022859'
}

firebase.initializeApp(config)

export default firebase
export const db = firebase.database()
export const auth = firebase.auth()
/* eslint-disable no-new */
