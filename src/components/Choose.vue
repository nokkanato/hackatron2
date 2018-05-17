<template>
<div style="background-color:#FDD835; height: 100%">
  <v-container>
      {{idd}}
      <!-- jkl -->
      <v-layout row>
          <v-flex xs12 offset-xs2>
                  <h1 style="margin-right: 30%">Pick you ride!</h1>
                <v-card v-for="idd in dis" v-bind:key="idd" style="width: 70%; font-size: 22px; padding: 2%; margin: 2%">
                    <v-layout>
                        <v-flex xs6>
                            Capacity: {{idd.text.capacity}}
                        </v-flex>
                        <v-flex xs6>
                            Destination: {{idd.text.destination}}
                            </v-flex>
                    </v-layout>
                    <v-layout>
                        <v-flex xs6>
                            Leave: {{idd.text.leave}}
                            </v-flex>
                        <v-flex xs6>
                            Model: {{idd.text.model}}
                        </v-flex>
                    </v-layout>
                    <v-layout>
                        <v-flex xs6>
                            Plate: {{idd.text.plate}}
                        </v-flex>
                        <v-flex xs6>
                            Price: {{idd.text.price}}
                        </v-flex>
                    </v-layout>
                    <v-layout>
                        <v-flex xs6>
                            Status: {{idd.text.status}}
                        </v-flex>
                        <v-flex xs6>
                            Taken: {{idd.text.taken}}
                        </v-flex>
                    </v-layout>
                    <br>
                   <v-btn style="width: 30%;font-size: 22px;"  @click="ride(idd.id, idd.text.taken, idd.text.capacity, idd.text.destination, idd.text.leave,
                                                                            idd.text.model, idd.text.plate, idd.text.price, idd.text.status )" color="info">Ride</v-btn>
                </v-card>
          </v-flex>
          <Logout></Logout>
      </v-layout>
  </v-container>
</div>
</template>

<script>
import Store from '../store.js'
import Logout from '@/components/Logout'
import Api from '../api/api.js'
import firebase from 'firebase'
export default {
  mounted () {
    console.log('lol', Store.state.direction)
    // Store.state.statusPage = false
    // if (Store.state.statusPage === true) {
    //   this.$router.push('status')
    // }
    Api.getFrom(Store.state.direction, x => {
      console.log('hi')
      console.log('melloeeeee:   ', x)
      this.dis = x
    })
  },
  data: () => ({
    kk: [],
    dis: [],
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
    ride (id, take, cap, destination, leave, model, plate, price, status) {
      var postData = {
        uid: id,
        capacity: cap,
        destination: destination,
        leave: leave,
        model: model,
        status: status,
        plate: plate,
        price: price,
        taken: parseInt(take) + 1
      }
      if (parseInt(take) >= cap) {
        alert('All seat have been taken. Please try another ride :)')
      } else {
        Store.state.statusPage = true
        Store.state.idd = id
        console.log('ht', Store.state.statusPage)
        var updates = {}
        updates['/from/' + id + '/'] = postData
        firebase.database().ref().update(updates)
        // console.log('lol', Store.state.statusPage)
        // location.reload()
        this.$router.push('status')
      }
    },
    onScroll (e) {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
    },
    onResize () {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight }
    },
    login () {
      this.$router.push('direction')
    }
  }
}
</script>
<style>
</style>
