import Vue from 'vue'
import App from './App.vue'
import { currency } from '@/filters/currency'
import store from '@/store'

Vue.config.productionTip = false

Vue.filter('currency', currency)

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
