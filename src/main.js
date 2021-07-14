import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const axiosInstance = axios.create({
	baseURL: process.env.VUE_APP_API_URL,
})

Vue.config.productionTip = false

Vue.use(BootstrapVue) // Make BootstrapVue available throughout the project

Vue.use(IconsPlugin) // Optionally install the BootstrapVue icon components plugin

Vue.use(VueAxios, axiosInstance)

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app')
