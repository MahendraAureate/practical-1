import Vue from 'vue'
import App from './App.vue'

// import VueRouter from 'vue-router' 
// import hello from './components/HelloWorld.vue'
// import productComp from './components/ProductComp.vue'
// import productSingle from '@/components/productSingle'

// Vue.use(VueRouter)

// const routes = [
//   { path : '/', component: hello},
//   { path : '/product', component: productComp},
//   { path : '/product/:pid', component: productSingle}
// ]

// const router = new VueRouter({
//   routes,
//   mode:'history'
// })

Vue.config.productionTip = false

new Vue({
  // router,
  render: h => h(App),
}).$mount('#app')
