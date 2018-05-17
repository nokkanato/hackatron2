<template>
<div   style="background-color:#26C6DA; height: 100%">
    <v-container>
    <v-layout row>
    <v-flex xs12 offset-xs2>
     <v-card v-if="current !== null" style="width: 70%; font-size: 22px; padding: 2%; margin: 2%">
        <h1 v-if="role === 'rider'">My ride!</h1>
        <h1 v-if="role === 'driver'">My drive!</h1>
                    <v-layout>
                        <v-flex xs6>
                            Capacity: {{current.text.capacity}}
                        </v-flex>
                        <v-flex xs6>
                            Destination: {{current.text.destination}}
                            </v-flex>
                    </v-layout>
                    <v-layout>
                        <v-flex xs6>
                            Leave: {{current.text.leave}}
                            </v-flex>
                        <v-flex xs6>
                            Model: {{current.text.model}}
                        </v-flex>
                    </v-layout>
                    <v-layout>
                        <v-flex xs6>
                            Plate: {{current.text.plate}}
                        </v-flex>
                        <v-flex xs6>
                            Price: {{current.text.price}}
                        </v-flex>
                    </v-layout>
                    <v-layout>
                        <v-flex xs6>
                            Status: {{current.text.status}}
                        </v-flex>
                        <v-flex xs6>
                            Taken: {{current.text.taken}}
                        </v-flex>
                    </v-layout>
                    <br>
                </v-card>
     <!-- DRIVERRRRRRR -->
         </v-flex>
    </v-layout >
    </v-container>
    <v-btn
      v-if="role === 'rider'"
      :loading="loading"
      :disabled="loading"
      color="orange darken-2"
      style="height: 10%; width: 98%; font-size: 50px; color: white;"
      @click="cancle()"
    >CANCEL    </v-btn>
 <div v-if="role === 'driver'"  class="text-xs-center" style="margin: auto; margin-top:17%;" >
    <v-btn
      v-if="current.text.status !== 'start'"
      :loading="loading"
      :disabled="loading"
      @click="updateStatus(current.id, current.text.taken, current.text.capacity, current.text.destination, current.text.leave,
                    current.text.model, current.text.plate, current.text.price, 'start')"
      color="yellow darken-2"
      style="height: 100%; width: 98%; font-size: 50px; color: white;"
    >
      START
    </v-btn>
    <v-btn
      :loading="loading"
      :disabled="loading"
      color="orange darken-2"
      style="height: 100%; width: 98%; font-size: 50px; color: white"
      @click="end(current.id)"
    >
      END
    </v-btn>
 </div>
 <Logout></Logout>
 </div>
</template>
<script>
import firebase from 'firebase'
import Logout from '@/components/Logout'
import Api from '../api/api2.js'
import Store from '../store.js'
export default {
  components: {
    Logout
  },
  data: () => ({
    role: '',
    status: '',
    current: [],
    start: '',
    finish: false,
    db: ''
  }),
  mounted () {
    // Store.state.statusPage = false
    if (Store.state.direction === 'to') {
      this.db = 'to'
      Api.god(Store.state.idd, 'to', hello => {
        console.log(this.hello)
        this.current = hello
      })
    } else {
      this.db = 'from'
      Api.god(Store.state.idd, 'from', hello => {
        this.current = hello
      })
    }
    if (Store.state.role === 'rider') {
      this.role = 'rider'
    } else {
      this.role = 'driver'
    }
  },
  methods: {
    cancle () {
      Store.state.role = ''
      Store.state.statusPage = false
      Store.state.idd = ''
      Store.state.direction = ''
      alert('You just cancel the ride')
      this.$router.push('role')
    },
    updateStatus (id, take, cap, destination, leave, model, plate, price, status) {
      var postData = {
        uid: id,
        capacity: cap,
        destination: destination,
        leave: leave,
        model: model,
        status: status,
        plate: plate,
        price: price,
        taken: take
      }
      console.log('this.start', status)
      var updates = {}
      updates['/' + this.db + '/' + id + '/'] = postData
      firebase.database().ref().update(updates)
      Api.god(id, this.db, hello => {
        this.current = hello
        console.log(this.current)
      })
    },
    end (id) {
      firebase.database().ref('/' + this.db).child(id).remove()
      Store.state.role = ''
      Store.state.statusPage = false
      Store.state.idd = ''
      Store.state.direction = ''
      alert('Your trip end here')
      this.$router.push('role')
    }
  }
}
</script>
<style>
</style>
