# vue-elementui

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Key Points
* 嵌套路由
    * index.js 路由文件,加入 children
    * 父组件(Main)模板引入 router-link 指向子组件路由
    * 父组件需要在模板引入 router-view
* 路由传参
    * 父组件和其子组件内部传递
        * props 方式(GoodsCategory 演示了该方法)
        * 参数匹配方式 (MemberLevel 演示了该方法)
    * 跨组件传参数
        *
### Error Check
* 出错了就 F12 查看控制台报错信息，定位到文件

### Function List
* 判断用户是否登录 router.beforeEach
  * [vue-router 3.x , 全局前置守卫](https://v3.router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%85%A8%E5%B1%80%E5%89%8D%E7%BD%AE%E5%AE%88%E5%8D%AB)
### Software Version
* npm -> 6.14.12
* @vue/cli -> 5.0.4
* vue -> 2.6.14

### Q & A
* Module not found: Error: Can't resolve 'path' in 'D:\Vue\vue-2.x-demo\vue-elementui\src'
  * [ref](https://blog.csdn.net/xjcwzp/article/details/118725888)
* 引入vuex 报错警告 “export ‘inject‘ was not found in ‘vue‘
  * [ref](https://blog.csdn.net/weixin_44856544/article/details/123168789?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1.pc_relevant_aa&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1.pc_relevant_aa&utm_relevant_index=1)
  * vue 2.x 匹配 vuex 3.x, vue 3.x 匹配 vuex 4.x
