import Vue from 'vue'
import router from './routes/index'

import App from './App.vue'

import VueBlu from 'vue-blu'
import 'vue-blu/dist/css/vue-blu.min.css'

Vue.use(VueBlu)

new Vue({
    el: '#app',
	router,
    template: '<App/>',
    components: { App } // 是否需要
}) 