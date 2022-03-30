<template>
  <div>
    会员等级 Level: {{$route.params.id}}
  </div>
</template>

<script>
export default {
  name: "MemberLevel",
  beforeRouteEnter: (to, from, next) => {
    console.log("进入会员等级页面");
    next(vm => {
      vm.getData();
    });
  },
  beforeRouteLeave: (to, from, next) => {
    console.log("离开会员等级页面");
    next();
  },
  methods: {
    getData: function () {
      this.axios({
        method: 'get',
        url: 'http://127.0.0.1:5000/static/data.json',
      }).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
    }
  }
}
</script>

<style scoped>

</style>