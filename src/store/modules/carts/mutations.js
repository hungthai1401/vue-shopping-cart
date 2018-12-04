import { PUSH_TO_CART, INCREMENT_PRODUCT_CART, SET_CHECKOUT_STATUS, EMPTY_CART } from '@/store/mutation-types'

export default {
  [PUSH_TO_CART]: (state, { id }) => {
    state.items.push({
      id,
      quantity: 1
    })
  },
  [INCREMENT_PRODUCT_CART]: (state, item) => {
    item.quantity++
  },
  [SET_CHECKOUT_STATUS]: (state, { status }) => {
    state.status = status
  },
  [EMPTY_CART]: (state) => {
    state.items = []
  }
}