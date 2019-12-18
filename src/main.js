import Vue from 'vue'
import App from './App.vue'
import router from './routes/router'
import store from './store/store'

Vue.config.productionTip = false
require('@/style/_common.scss')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
