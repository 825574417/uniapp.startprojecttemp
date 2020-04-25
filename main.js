import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import store from './store'
Vue.prototype.$store = store;

import cuCustom from './components/current/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
