import Vuex from "vuex";
import Vue from "vue";
import user from './modules/user'

Vue.use(Vuex);


// 暴露方法
export default new Vuex.Store({
    modules: {
        user
    }
})