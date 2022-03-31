<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

// 监听刷新事件，用 sessionStorage 存储 state ，解决vuex 刷新数据丢失问题
// 刷新时，把 state 保存下来，再次渲染页面时候从保存的 state 中读取状态填充页面
export default {
  name: 'App',
  mounted() {
    window.addEventListener('unload', this.saveState); // 监听刷新事件, 函数不能加括号
  },
  methods: {
    saveState() {
      sessionStorage.setItem('state', JSON.stringify(this.$store.state.user));
    }
  }
}
</script>

<style>

</style>
