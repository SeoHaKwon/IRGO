import Vue from 'vue'
import App from './App.vue'
import router from './routes/router'
import store from './store/store'
import GoTop from '@inotom/vue-go-top'
import Donut from 'vue-css-donut-chart'
import 'vue-css-donut-chart/dist/vcdonut.css'

Vue.config.productionTip = false
Vue.use(GoTop)
Vue.use(Donut)
Vue.component('GoTop', GoTop)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
