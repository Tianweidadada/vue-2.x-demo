const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8080 // 修改项目运行端口
  },
  configureWebpack: {
    resolve: {
      fallback: { path: require.resolve("path-browserify") },
    },
  }
})
