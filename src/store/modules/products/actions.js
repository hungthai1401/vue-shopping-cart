import { FETCH_PRODUCTS } from '@/store/mutation-types'
import shop from '@/api/shop'

export default {
  fetchProducts({ commit }) {
    return new Promise((resolve, reject) => {
      shop.getProducts(products => {
        commit(FETCH_PRODUCTS, products)
        resolve()
      })
    })
  }
}