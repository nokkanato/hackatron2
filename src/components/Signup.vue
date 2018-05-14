<template>
  <v-layout row style="margin-top:60px">
          <v-flex  xs12 sm6 offset-sm3 >
            <v-card style="">
              <h1>Register</h1>
                   <v-form v-model="valid" style="margin-top:60px;">
                      <v-text-field style=""
                                label="email"
                                v-model="email"
                                :rules="emailRules"
                                required
                                >
                     </v-text-field>
                      <v-text-field
                                label="password"
                                v-model="password"
                                required
                                >
                     </v-text-field>
                      <v-btn color="info" @click="login()" >submit</v-btn>
                   </v-form>
            </v-card>
          </v-flex>
      </v-layout>
</template>
<script>
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
    submit () {
      this.$router.push('role')
    }
  }
}
</script>
<style>
</style>
