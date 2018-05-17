<template>
  <div style="background-color:#FDD835; height: 100%">
      <v-container>
       <v-layout style="">
        <v-flex xs12 sm6 offset-sm3>
            <v-card style="padding:30px">
                    <v-text-field
                    v-if="this.type === 'from'"
                    label="From MUIC"
                    disabled="true"
                    ></v-text-field>
                    <v-text-field
                    v-if="this.type === 'to'"
                    label="To MUIC"
                    disabled="true"
                    ></v-text-field>
                    <v-text-field
                    v-if="this.type === 'from'"
                    v-model="des"
                    label="destination"
                    required
                    ></v-text-field>
                    <v-text-field
                    v-if="this.type === 'to'"
                    label="from"
                    v-model="des"
                    ></v-text-field>
                    <v-layout>
                      <v-flex>
                         <v-text-field
                        v-model="leave"
                        label="Leave time"
                        required
                        style="width: 95%"
                        ></v-text-field>
                      </v-flex>
                      <v-flex>
                        <v-text-field
                        v-model="arrive"
                        label="Estimated Arriving Time"
                        style="margin-left: 5%;width: 95%"
                        required
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-layout>
                      <v-flex>
                         <v-text-field
                        v-model="model"
                        label="Car Model"
                        style="width: 95%"
                        ></v-text-field>
                      </v-flex>
                      <v-flex>
                        <v-text-field
                        v-model="plate"
                        label="Plate Number"
                        style="margin-left: 5%;width: 95%"
                        required
                        ></v-text-field>
                      </v-flex>
                      <v-layout>
                      <v-flex>
                        <v-text-field
                        v-model="cap"
                        label="seat capacity"
                        style="margin-left: 5%;width: 95%"
                        required
                        ></v-text-field>
                      </v-flex>
                      <v-flex>
                        <v-text-field
                        v-model="price"
                        label="price per person"
                        style="margin-left: 5%;width: 95%"
                        required
                        ></v-text-field>
                      </v-flex>
                      </v-layout>
                    </v-layout>
                    <v-text-field
                    name="input-7-2"
                    label="remark"
                    multi-line
                    ></v-text-field>
                    <v-btn color="info"  @click="push()" style="width: 50%">Submit</v-btn>
            </v-card>
        </v-flex>
       </v-layout>
       <Logout></Logout>
       </v-container>
  </div>
</template>
<script>
import Api from '../api/api.js'
import firebase from 'firebase'
import Logout from '@/components/Logout'
import router from '@/router'
import Store from '../store.js'
export default {
  mounted () {
    console.log('lol', Store.state.statusPage)
    console.log('type', Store.state.role)
    this.type = Store.state.direction
    // Store.state.statusPage = false
    // if (Store.state.statusPage === true) {
    //   this.$router.push('status')
    // }
    Api.getFrom(x => {
      console.log('melloeeeee:   ', x)
      this.dis = x
    })
  },
  data: () => ({
    price: '',
    cap: '',
    valid: '',
    des: '',
    leave: '',
    arrive: '',
    model: '',
    plate: '',
    type: '',
    lol: 'from',
    windowSize: {
      x: 0,
      y: 0
    },
    offsetTop: 0,
    emailRules: [
      v => !!v || 'this field is required',
      v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
    ]
  }),
  components: {
    Logout
  },
  methods: {
    push () {
      // console.log(this.$db.ref('book'))
      let state = {
        price: this.price,
        type: this.type,
        destination: this.des,
        leave: this.leave,
        model: this.model,
        plate: this.plate,
        status: 'standby',
        capacity: this.cap,
        taken: 0
      }
      if (this.type === 'from') {
        console.log('flol')
        // Store.state.statusPage = true
        firebase.database().ref('from').push(state).then(function (result) {
          Store.state.idd = result.key
          console.log(result)
          router.push('status')
        })
      } else {
        // Store.state.statusPage = true
        firebase.database().ref('to').push(state).then(function (result) {
          Store.state.idd = result.key
          console.log(result.key)
          router.push('status')
        })
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
<style>

</style>
