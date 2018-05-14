<template>
<div>
 <div class="text-xs-center" style="margin-top:20%;" >
    <v-btn
      @click="to()"

      :loading="loading"
      :disabled="loading"
      color="blue-grey"
      @click.native="loader = 'loading'"
      large
    >
      TO MUIC
    </v-btn>
 </div>
 <div class="text-xs-center" style="" >
    <v-btn
      @click="from()"
    large
      :loading="loading"
      :disabled="loading"
      color="secondary"
      @click.native="loader = 'loading'"
    >
      From MUIC
    </v-btn>
 </div>
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
    offsetTop: 0
  }),
  components: {
  },
  methods: {
    from () {
      Store.state.direction = 'from'
      if (Store.state.role === 'driver') {
        this.$router.push('form')
      } else {
        console.log('rider')
      }
    },
    to () {
      Store.state.direction = 'to'
      if (Store.state.role === 'driver') {
        this.$router.push('form')
      } else {
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
