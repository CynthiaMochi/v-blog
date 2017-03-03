import Vue from 'vue'
import api from '../api/request.js'
import router from '../routes'

const userApi = api.user
export default {
  UserSignup({ commit }, data) {
    userApi.signup(data)
          .then(result => {
            console.log(result)
            if (result.code !== -200 && result.status === 200) {
              commit('USER_SIGNUP', result.data.token)
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
            console.log(result)
            if (result.code !== -200 && result.status === 200) {
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
