<template>
  <div id="app">
    <Products />
    <Carts />
  </div>
</template>

<script>
import Products from './components/Products'
import Carts from './components/Carts'

export default {
  name: 'app',
  components: {
    Products,
    Carts
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
