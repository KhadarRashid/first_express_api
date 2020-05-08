import Vue from 'vue'
import App from './App.vue'

import HelloApi from "@/services/HelloApi"

Vue.config.productionTip = false

Vue.prototype.$hello_api = HelloApi

new Vue({
  render: h => h(App),
}).$mount('#app')
