import Vue from 'vue'
import App from './App.vue'
import JQuery from 'jquery'

import '@/assets/css/app.css'

Vue.config.productionTip = false
window.$ = JQuery

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
