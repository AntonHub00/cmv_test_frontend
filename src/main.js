import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

const axiosInstance = axios.create({
	baseURL: process.env.VUE_APP_API_URL,
})

Vue.use(VueAxios, axiosInstance)

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app')
