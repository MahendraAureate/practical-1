<template>
    <div id="app">
      <ProductList/>
    </div>
</template>

<script>

import ProductList from './components/ProductList.vue'

export default {
    name: 'App',
    components: {
        ProductList
    }
}
</script>

<style>
@import './assets/style';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  line-height: 1.4;
}


</style>
