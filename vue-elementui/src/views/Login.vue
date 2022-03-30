<template>
  <div>
    <el-form ref="form" :model="form" :rules="rules" label-width="80px" class="login-box">
      <h3 class="login-title">欢迎登录</h3>
      <el-form-item label="用户名" prop="name">
        <el-input type="text" v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password"  v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        name: '',
        password: ''
      },
      rules: {
        name: [ // 注意是 required 不是 require
          {required: true, message: '请输入用户名', trigger:'blur'},
          { min: 2, max: 6, message: '长度在 2 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          {required: true, message: '请输入密码', trigger:'blur'},
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // this.$router.push('/main')
          // 登录成功后,把用户名传递到 Main 组件
          this.$router.push({name:'Main',params:{name:this.form.name}})
        } else {
          this.$message({
            message: '用户名或密码错误',
            type: 'warning'
          });
          return false;
        }
      });
    }
  }
}
</script>

<style scoped>
  .login-box {
     width: 350px;
    margin: 120px auto; /*到父dom的边距*/
    border: 1px solid #DCDFE6;
    padding: 40px; /* 子dom 到当前 dom 边距*/
    border-radius: 10px;
    box-shadow: 0 0 20px;
  }
  /*文本居中*/
  .login-title {
    text-align: center;
  }
</style>