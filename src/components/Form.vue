<template>
  <div>
      <v-container>
       <v-layout style="margin-top:10%;">
        <v-flex xs12 sm6 offset-sm3>
            <v-card>
                  <v-form v-model="valid">
                    <v-text-field
                    v-model="this.type"
                    :rules="nameRules"
                    label='direction'
                    disabled="true"
                    required
                    ></v-text-field>
                    <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="Route Taking"
                    required
                    ></v-text-field>
                     <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    label="Leave when"
                    required
                    ></v-text-field>
                    <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="Estimate Arriving Time"
                    required
                    ></v-text-field>
                    <br><br><br>
                    <v-divider></v-divider>
                    <v-layout>
                        <v-flex xs6>
                            <h1>Note</h1>
                             <v-text-field
                                name="input-7-2"
                                label="Label Text"
                                value="Input Text"
                                multi-line
                                ></v-text-field>
                                <v-btn color="info">Submit</v-btn>
                        </v-flex>
                         <v-flex xs6>
                             <v-text-field
                                name="input-1-3"
                                label="Car Model"
                                single-line
                                ></v-text-field>
                                <v-text-field
                                name="input-1-3"
                                label="Plate no."
                                single-line
                                ></v-text-field>
                        </v-flex>
                    </v-layout>

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
