import * as types from '../types'

const state = {
    title: '',
    loading: 0,
    leftNavState: false
}
const actions = {

    // 左侧导航栏的开关
    changeLeftNavState({commit}, status) {
        commit(types.CHANGES_LEFTNAV_STATUS, status)
    }
}

const getters = {
    comConf: state => state,
    loading: state => state.loading,
    title: state => state.title,
    leftNavState: state => state.leftNavState
}

const mutations = {
    [types.CHANGES_LEFTNAV_STATUS](state, status) {
        state.leftNavState = status
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}
