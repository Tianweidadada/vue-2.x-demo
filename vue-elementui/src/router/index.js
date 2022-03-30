import VueRouter from "vue-router";
import Login from "@/views/Login";
import Vue from "vue"; // 也要导入
import Main from "@/views/Main";
import MemberList from "@/views/Member/MemberList";
import MemberLevel from "@/views/Member/MemberLevel";
import GoodsCategory from "@/views/Goods/GoodsCategory";
import GoodsList from "@/views/Goods/GoodsList";
import NotFound from "@/views/NotFound";

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history', // 去除 url 地址栏的 #
    routes: [
        {
            // 登录页面
            path: '/login',
            name: 'Login',
            component: Login
        },
        { // 嵌套路由
            path: '/main',
            name: 'Main',
            component: Main,
            children: [
                {
                    path:'/member/list',
                    name: 'MemberList',
                    component: MemberList
                },
                {
                    path: '/member/level/:id',
                    name: 'MemberLevel',
                    component: MemberLevel
                },
                {
                    path: '/goods/category',
                    name: 'GoodsCategory',
                    component: GoodsCategory,
                    props:true
                },
                {
                    path: '/goods/list',
                    name: 'GoodsList',
                    component: GoodsList
                }
            ]
        },
        { // 重定向
            path:'/goMain',
            redirect:'/main'
        },
        {
            path: '*',
            component: NotFound
        }
    ]
})