<template>
<div style="background-color:#26C6DA; height: 100%">
 <div class="text-xs-center" style="margin: auto; margin-top:17%;" >
    <v-btn
      @click="to()"
      :loading="loading"
      :disabled="loading"
      color="yellow darken-2"
      style="height: 100%; width: 98%; font-size: 50px; color: white;"
    >
      TO MUIC
    </v-btn>
 </div>
 <div class="text-xs-center" style="" >
    <v-btn
      @click="from()"
      :loading="loading"
      :disabled="loading"
      color="orange darken-2"
      style="height: 100%; width: 98%; font-size: 50px; color: white"
    >
      From MUIC
    </v-btn>
 </div>
 <Logout></Logout>
 </div>
</template>
<script>
import Logout from '@/components/Logout'
import Store from '../store.js'
export default {
  mounted () {
    console.log('role', Store.state.role)
    this.onResize()
  },
  data: () => ({
    windowSize: {
      x: 0,
      y: 0
    },
    offsetTop: 0
  }),
  components: {
    Logout
  },
  methods: {
    from () {
      Store.state.direction = 'from'
      if (Store.state.role === 'driver') {
        this.$router.push('form')
      } else {
        this.$router.push('choose')
      }
    },
    to () {
      Store.state.direction = 'to'
      if (Store.state.role === 'driver') {
        this.$router.push('form')
      } else {
        this.$router.push('choose')
        console.log('rider')
      }
    },
    onScroll (e) {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
    },
    onResize () {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight }
    },
    login () {
      this.$router.push('role')
    }
  }
}
</script>
