import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
// import gsap from "gsap";


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

var app1 = new Vue({
  el: '#app1',
  data: {
    message: 'Привет, Vue!'
  }
})

