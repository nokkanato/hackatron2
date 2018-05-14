<template>
  <div style="margin-top:20%;">
      <h1>pick a role</h1>
     rider
       <v-btn @click="rider()" fab dark large color="purple">
      <v-icon dark>edit</v-icon>
    </v-btn>
     driver
     <v-btn  @click="driver()" fab dark large color="purple">
      <v-icon dark>android</v-icon>
    </v-btn>
  </div>
</template>
<script>
import Store from '../store.js'
export default {
  mounted () {
    this.onResize()
  },
  data: () => ({
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
      this.$router.push('direction')
    },
    driver () {
      Store.state.role = 'driver'
      this.$router.push('direction')
    },
    rider () {
      Store.state.role = 'rider'
      this.$router.push('direction')
    }
  }
}
</script>
