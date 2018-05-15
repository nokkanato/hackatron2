<template>
  <div style="background-color:#FDD835; height: 100%">
      <v-container>
       <v-layout style="">
        <v-flex xs12 sm6 offset-sm3>
            <v-card style="padding:30px">
                  <v-form v-model="valid">
                    <v-text-field
                    v-model="this.type"
                    :rules="nameRules"
                    disabled="true"
                    required
                    ></v-text-field>
                    <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="Route Taking"
                    required
                    ></v-text-field>
                    <v-layout>
                      <v-flex>
                         <v-text-field
                        v-model="name"
                        :rules="nameRules"
                        label="Leave when"
                        required
                        style="width: 95%"
                        ></v-text-field>
                      </v-flex>
                      <v-flex>
                        <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="Estimate Arriving Time"
                        style="margin-left: 5%;width: 95%"
                        required
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-layout>
                      <v-flex>
                         <v-text-field
                        v-model="name"
                        :rules="nameRules"
                        label="Car Model"
                        style="width: 95%"
                        ></v-text-field>
                      </v-flex>
                      <v-flex>
                        <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="Plate Number"
                        style="margin-left: 5%;width: 95%"
                        required
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-text-field
                    name="input-7-2"
                    label="Label Text"
                    multi-line
                    ></v-text-field>
                    <v-btn color="info" style="width: 50%">Submit</v-btn>
                </v-form>
            </v-card>
        </v-flex>
       </v-layout>
       </v-container>
  </div>
</template>
<script>
import Store from '../store.js'
export default {
  mounted () {
    this.onResize()
    this.type = Store.state.direction
  },
  data: () => ({
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
    }
  }
}
</script>
<style>

</style>
