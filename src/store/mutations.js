import * as types from './types'

export default {
    [types.USER_SIGNUP](state, token) {
      localStorage.setItem('jwt', token);
      state.token = token;
    },

    [types.USER_LOGIN](state, token) {
      console.log(token)
      localStorage.setItem('jwt', token);
      state.token = token;
    },

    [types.USER_LOGOUT](state) {
      localStorage.removeItem('jwt')
      state.token = null;
    }
}
