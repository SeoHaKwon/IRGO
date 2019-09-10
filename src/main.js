import Vue from 'vue'
import App from './App.vue'
import router from './routes/router'
import store from './store/store'
import VSwipe from 'vswipe'

Vue.config.productionTip = false
Vue.use(VSwipe)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
