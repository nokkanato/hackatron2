<template>
   <v-menu open-on-hover top offset-y>
      <v-btn fab dark large color="purple" nudge-bottom='100' slot="activator" style=""><v-icon dark>list</v-icon></v-btn>
      <v-list>
        <v-list-tile v-for="item in items" :key="item.title" @click="menu(item)">
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
</template>
<script>
import firebase from 'firebase'
import router from '@/router'
export default {
  mounted () {
    // this.onResize()
  },
  data: () => ({
    items: [
      { title: 'Logout' }
      // { title: 'Click Me' },
      // { title: 'Click Me33' },
      // { title: 'Click Me 2' }
    ]
  }),
  components: {
  },
  methods: {
    menu (item) {
      console.log(item.title)
      if (item.title === 'Logout') {
        firebase.auth().signOut().then(() => {
          router.push('/')
        })
      }
    }
  }
}
</script>
