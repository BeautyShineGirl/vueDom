<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>登录</h2>
    
    <ul>
      <li>
         账号：<el-input v-model="value_account" size="small" placeholder="请输入内容" style="width: 200px"></el-input>
      </li>
      <br><br>
      <li>
       密码：<el-input v-model="value_password" type="password" size="small" placeholder="请输入内容" style="width: 200px"></el-input>
      </li>
      <br><br>
      <li>
      <a href="#">忘记密码?</a>
      <a href="#">注册</a>
      
      </li>
      <br><br>
      <li>
         <el-button @click="submit">提交</el-button> 
      </li>
     
    </ul>
    
   
  </div>
</template>

<script>

export default {
  name: 'login',
  data () {
    return {
      msg: '陌上百合科技有限公司',
      value_account:'',
      value_password:''
    }
  },
  methods:{
      submit(){
        this.$router.push("index")
      }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  width: 500px;
  height: 400px;
  margin:260px auto; 
  border: 2px solid #ff0000;
}
h1, h2 {
  margin-top: 20px;
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  padding: 80px;
  color: #42b983;
}
</style>
