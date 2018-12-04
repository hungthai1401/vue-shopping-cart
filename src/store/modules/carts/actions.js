import { PUSH_TO_CART, INCREMENT_PRODUCT_CART, DECREMENT_PRODUCT, SET_CHECKOUT_STATUS, EMPTY_CART } from '@/store/mutation-types'
import shop from '@/api/shop'

export default {
  addToCart({ state, commit }, product) {
    const { id } = product
    const item = state.items.find(item => item.id === id)
    if (!item) {
      commit(PUSH_TO_CART, { id })
    } else {
      commit(INCREMENT_PRODUCT_CART, item)
    }
    commit(`products/${DECREMENT_PRODUCT}`, product, { root: true})
  },
  checkout({ state, commit }) {
    shop.buyProducts(
      state.items,
      () => {
        commit(EMPTY_CART)
        commit(SET_CHECKOUT_STATUS, { status: 'success' })
      },
      () => {
        commit(SET_CHECKOUT_STATUS, { status: 'fail' })
      }
    )
  }
}