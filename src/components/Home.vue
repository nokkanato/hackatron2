<template>
    <v-layout row style="margin-top:60px">
          <v-flex  xs12 sm6 offset-sm3 >
            <v-card>
              <h1>login</h1>
                   <v-form  style="margin-top:60px;">
                      <v-text-field style=""
                                label="email"
                                v-model="email"
                                :rules="emailRules"
                                required
                                >
                     </v-text-field>
                      <v-text-field
                                label="password"
                                v-model="email"
                                :rules="emailRules"
                                required
                                >
                     </v-text-field>
                      <v-btn color="info" @click="login()" >Login</v-btn>
                      <v-btn color="info" @click="signup()" >Sign Up</v-btn>
                   </v-form>
                    <v-divider></v-divider>
                   <v-layout>
                     <v-flex xs12>
                               <v-btn depressed small @click="googleLogin()">Google</v-btn>
                     </v-flex>
                   </v-layout>
            </v-card>
          </v-flex>
      </v-layout>
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
