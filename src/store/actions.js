import Vue from 'vue'
import api from '../api/request.js'
import router from '../routes'

const userApi = api.user
export default {
  UserSignup({ commit }, data) {
    userApi.signup(data)
          .then(result => {
            let data = result.data

            if (!data.code && result.status === 200) {
              Vue.prototype.$notify.open({content: '成功'})
              commit('USER_SIGNUP', data.token)
              // replace 不会替换历史记录
              router.replace({path: '/admin'})
            }
          })
          .catch(err => {
            console.log(err)
          })
  },

  UserLogin({ commit }, data) {
    userApi.login(data)
          .then(result => {
            let data = result.data

            console.log(result)
            if (!data.code && result.status === 200) {
              Vue.prototype.$notify.open({content: '成功'})
              commit('USER_LOGIN', data.token)
              // replace 不会替换历史记录
              router.replace({path: '/admin'})
            }
          })
          .catch(err => {
            console.log(err)
          })
  },

  UserLogout({ commit }) {
    commit('USER_LOGOUT')
    router.push({path: '/login'})
  }
}
