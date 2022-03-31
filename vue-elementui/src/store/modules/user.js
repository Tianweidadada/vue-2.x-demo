const user = {
    state : sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')) : {
        user: {
            name: ''
        }
    },
    // 监听 state 对象的状态（计算属性）
    getters : {
        getUser(state) {
            return state.user
        }
    },
    // 唯一可以修改 state 的方法（同步执行）
    mutations : {
        updateUser(state, user) {
            state.user = user
        }
    },
    // 异步执行 actions 方法
    actions : {
        asyncUpdateUser(context, user) {
            context.commit('updateUser', user)
        }
    }
}

export default user;