import Vue from 'vue'
import Vuex from 'vuex'
import products from '@/store/modules/products'
import carts from '@/store/modules/carts'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    products,
    carts
  }
})