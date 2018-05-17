<template>
  <div style="background-color:#FDD835; height: 100%">
      <img height="300" style="margin-right: 10px" src="~@/assets/yellow.png">
      <img height="300" style="margin-right: 10px" src="~@/assets/right.png">
      <img @click="driver()" height="300" style="margin-top: 4%; margin-left: 0%" src="~@/assets/blueCircle.png">
      <br/>
      <img height="300" style="margin-right: 10px" src="~@/assets/down.png">
       <img @click="rider()" height="300" src="~@/assets/greenCircle.png">
      <!-- <v-icon dark>android</v-icon> -->
      <Logout></Logout>
  </div>
</template>
<script>
import Store from '../store.js'
import Logout from '@/components/Logout'
export default {
  mounted () {
    this.onResize()
  },
  data: () => ({
    items: [
      { title: 'Logout' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' }
    ],
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
    Logout
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
      console.log(Store.state.role)
      this.$router.push('direction')
    },
    rider () {
      Store.state.role = 'rider'
      this.$router.push('direction')
    }
  }
}
</script>
