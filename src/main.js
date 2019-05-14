import Vue from 'vue'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import AlertCmp from './components/Shared/alert'

Vue.use(Vuetify)

Vue.config.productionTip = false
Vue.component('app-alert', AlertCmp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created: function () {
    firebase.initializeApp({
      apiKey: 'AIzaSyBu9Hton9Ssl2b6wZQOSzHZKObD55Vpn3U',
      authDomain: 'landfalldatabase.firebaseapp.com',
      databaseURL: 'https://landfalldatabase.firebaseio.com',
      projectId: 'landfalldatabase',
      storageBucket: 'landfalldatabase.appspot.com',
      messagingSenderId: '128731828296'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
  }
})

