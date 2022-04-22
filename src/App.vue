<template>
    <div id="app">
      <ProductComp/>
    </div>
</template>

<script>

import ProductComp from './components/ProductComp.vue'


export default {
    name: 'App',
    components: {
        ProductComp
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
