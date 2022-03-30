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


### Software Version
* npm -> 6.14.12
* @vue/cli -> 5.0.4
* vue -> 2.6.14