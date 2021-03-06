import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from "bootstrap-vue/dist/bootstrap-vue.esm";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import VueValidator from 'vue-form-validator'

import { router } from './router'

Vue.use(BootstrapVue)
Vue.use(VueValidator)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
