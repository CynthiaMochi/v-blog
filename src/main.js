import Vue from 'vue'
import router from './routes/index'
import store from './store/index'

import App from './App.vue'

import VueBlu from 'vue-blu'
import 'vue-blu/dist/css/vue-blu.min.css'
import VeeValidate from 'vee-validate';

Vue.use(VueBlu)
Vue.use(VeeValidate)

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App } // 是否需要
})
