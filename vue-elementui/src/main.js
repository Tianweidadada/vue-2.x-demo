import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import router from "@/router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from "axios";
import Vuex from 'vuex'
import store from "@/store";


Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.prototype.axios = axios

// 路由跳转之前
router.beforeEach((to, from ,next) => {
  let isLogin = sessionStorage.getItem('isLogin');

  if (to.path == '/logout') { // 注销
    sessionStorage.clear();
    next({path:'/login'})
  }
  else if (to.path == '/login'){
    if (isLogin != null) { // 如果不为空，跳转到首页
      next({path: '/main'})
    }
  }
  else if (isLogin == null) { // 未登录情况，全部跳转到登录页面
    next({path:'/login'})
  }
  next();
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
