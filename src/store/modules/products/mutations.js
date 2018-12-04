import { FETCH_PRODUCTS, DECREMENT_PRODUCT } from '@/store/mutation-types'

export default {
  [FETCH_PRODUCTS]: (state, products) => {
    state.items = products
  },
  [DECREMENT_PRODUCT]: (state, product) => {
    product.inventory--
  }
}