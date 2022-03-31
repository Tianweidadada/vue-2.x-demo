import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

// 全局 state 数据，用于保存所有组件的公共数据
const state = sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')) : {
    user: {
        name: ''
    }
}

// 监听 state 对象的状态（计算属性）
const getters = {
    getUser(state) {
        return state.user
    }
}

// 唯一可以修改 state 的方法（同步执行）
const mutations = {
    updateUser(state, user) {
        state.user = user
    }
}

// 异步执行 actions 方法
const actions = {
    asyncUpdateUser(context, user) {
        context.commit('updateUser', user)
    }
}

// 暴露方法
export default new Vuex.Store({ // 注意是圆括号内加上大括号
    state,
    getters,
    mutations,
    actions
})