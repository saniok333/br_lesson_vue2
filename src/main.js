import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import BuyModalComponent from '@/components/Shared/BuyModal'
import * as fb from 'firebase'


Vue.component('app-buy-modal', BuyModalComponent)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    fb.initializeApp({
      apiKey: 'AIzaSyBYSWmZguUWTlfApXRz9ifGKhfnCLJ9z1Y',
      authDomain: 'vue-project-132f7.firebaseapp.com',
      databaseURL: 'https://vue-project-132f7.firebaseio.com',
      projectId: 'vue-project-132f7',
      storageBucket: 'vue-project-132f7.appspot.com',
      messagingSenderId: '1075767797368'
    })

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user);
      }
    })

    this.$store.dispatch('fetchAds')
  }
}).$mount('#app')