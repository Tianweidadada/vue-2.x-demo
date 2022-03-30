<template>
  <div>
   <el-container>
     <el-aside>
        <el-menu :default-openeds="['1']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>会员管理</template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <router-link to="/member/list">
                  会员列表
                </router-link>
              </el-menu-item>
              <el-menu-item index="1-2">
<!--                <router-link to="/member/level/15"> 第一种传参方式-->
<!--                以下是传对象的方式, name 为路由的名字-->
                <router-link :to="{name:'MemberLevel',params:{id:13}}">
                  会员等级
                </router-link>
              </el-menu-item>
              <el-menu-item index="1-3">
                <router-link to="/goMain">
                  返回主页
                </router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-message"></i>商品管理</template>
            <el-menu-item-group>
              <el-menu-item index="2-1">
                <!--                  <router-link to="/goods/category">-->
                <router-link :to="{name:'GoodsCategory',params:{id:3}}">
                  商品分类
                </router-link>
              </el-menu-item>
              <el-menu-item index="2-2">
                <router-link to="/goods/list">
                  商品列表
                </router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
     </el-aside>


     <el-container>
       <el-header style="text-align: right; font-size: 12px">
         <el-dropdown>
           <i class="el-icon-setting" style="margin-right: 15px"></i>
           <el-dropdown-menu slot="dropdown">
             <el-dropdown-item>用户中心</el-dropdown-item>
             <el-dropdown-item>登出</el-dropdown-item>
           </el-dropdown-menu>
         </el-dropdown>
         <span>{{$route.params.name}}</span>
       </el-header>

       <el-main>
<!--         显示路由指向的子组件-->
         <router-view></router-view>
       </el-main>

     </el-container>
   </el-container>
  </div>
</template>

<script>
export default {
  name: "Main"
}
</script>

<style scoped>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>