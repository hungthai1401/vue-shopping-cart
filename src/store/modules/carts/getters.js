export default {
  cartItems(state, getters, rootState) {
    return state.items.map(({ id, quantity }) => {
      const { title, price } = rootState.products.items.find(product => product.id === id)
      return {
        title,
        price,
        quantity
      }
    })
  },
  cartTotal(state, getters) {
    return getters.cartItems.reduce((total, { price, quantity }) => total + price * quantity , 0)
  }
}