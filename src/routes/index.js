import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '../store'

Vue.use(VueRouter)
import routes from './routes'

// 在后退时回到浏览的位置？
const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
        return savedPosition
    } else {
        return { x: 0, y: 0 }
    }
}

// 变成history mode的时候后端的配置要注意
// 当访问不是定义好的路径时，会跳到404
const router = new VueRouter({
    linkActiveClass: 'is-active',    
    mode: 'history',
    scrollBehavior,
    routes
})

// 先不处理登录，token等问题

export default router