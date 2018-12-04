<template>
  <div>
    <h1>Cart</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.title }} - {{ product.price | currency }} - {{ product.quantity }}
        </li>
    </ul>
    <p>Total: {{ total | currency }}</p>
    <button :disabled="products.length === 0" @click="checkout">Checkout</button>
    <p v-if="checkoutStatus">{{ checkoutStatus }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('carts', {
      checkoutStatus: state => state.status
    }),
    ...mapGetters('carts', {
      products: 'cartItems',
      total: 'cartTotal'
    })
  },
  methods: {
    ...mapActions('carts', {
      checkout: 'checkout'
    })
  }
}
</script>

