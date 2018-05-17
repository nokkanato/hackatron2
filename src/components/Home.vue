<template>
  <div style="background-color:#26C6DA; height: 100%">
    <v-layout row style="margin-top:60px">
          <v-flex xs12 sm6 offset-sm4 >
            <v-card style="width: 60%; padding: 50px;">
                   <v-form style="">
                     <h1>Login</h1>
                     <br/>
                      <v-text-field style=""
                                label="email"
                                v-model="email"
                                :rules="emailRules"
                                required>
                     </v-text-field>
                      <v-text-field
                                label="password"
                                v-model="password"
                                required>
                     </v-text-field>
                      <v-btn style="width: 40%;" color="info" @click="login()" >Login</v-btn>
                      <v-btn style="width: 40%" color="warning" @click="signup()" >Sign Up</v-btn>
                    <br/>
                    <br/>
                      <v-divider></v-divider>
                      <br/>
                      <v-btn depressed @click="googleLogin()">
                        <img height="25" style="margin-right: 10px" src="~@/assets/google.png">
                        Log in with Google</v-btn>
                   </v-form>
                    <v-divider></v-divider>
            </v-card>
          </v-flex>
      </v-layout>
    </div>
</template>
<script>
import firebase from 'firebase'
import router from '@/router'
export default {
  mounted () {
    this.onResize()
  },
  data: () => ({
    email: '',
    password: '',
    windowSize: {
      x: 0,
      y: 0
    },
    offsetTop: 0,
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
    ]
  }),
  components: {
  },
  methods: {
    onScroll (e) {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
    },
    onResize () {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight }
    },
    login () {
      // var credential = firebase.auth.EmailAuthProvider.credential(this.email, this.password)
      // auth.signInWithCredential(credential)
      //   .then(authUser => {
      //     console.log(authUser)
      //     this.$router.push('role')
      //   })
      //   .catch(authError => {
      //     alert(authError)
      //   })
      this.$router.push('role')
    },
    signup () {
      this.$router.push('signup')
    },
    googleLogin () {
      var provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider).then(function (result) {
        // var token = result.credential.accessToken;
        // var user = result.user
        router.push('role')
        console.log(result)
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>
<style>
</style>
