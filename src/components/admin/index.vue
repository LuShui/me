<template>
  <div>
    <header>
      <h4>后台管理登录</h4>
    </header>
    <div>
      <div>
        <p class="item">
          <label for="urlname">用户名</label>
          <input @keyup.13="loginfunc" id="urlname" placeholder="请输入用户名" v-model="username" type="text">
        </p>
        <p class="item">
          <label for="urllink">密&nbsp;码</label>
          <input @keyup.13="loginfunc" id="urllink" placeholder="请输入密码" v-model="passworld" type="password">
        </p>
      </div>
      <div class="btnbox">
        <a id="button" @click="loginfunc">登录</a>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'index',
    data: function () {
      return {
        username: '',
        passworld: ''
      }
    },
    methods: {
      loginfunc: function () {
        if (this.username === 'lushui' && this.passworld === 'lu123456') {
          this.$router.push({path: '/mang'})
        } else {
          alert('账号或密码错误')
        }
      },
      aaa: function () {
        alert(1)
      }
    }
  }
</script>

<style lang="scss" scoped>
header{
  height: 100px;
  background-color: #42b983;
  h4{
    height: 100px;
    line-height: 100px;
    text-align: center;
    color: white;
    font-size: 16px;
  }
}
#box{
  max-width: 970px;
  margin: 0 auto;
}
.item{
  padding-top: 30px;
  text-align: center;
  height: 30px;
  width: 400px;
  margin:  0 auto;
}

.item >label{
  width: 100px;
  background-color: #42b983;
  color: #f7f7f7;
  border-top-left-radius:5px;
  border-bottom-left-radius: 5px;
}
.item >input{
  width: 300px;
  text-indent: 2em;
  outline: none;
}
input:active{
  outline: none;
}
.item >label,input{
  float: left;
  display: inline-block;
  vertical-align: middle;
  height: 30px;
  line-height: 30px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border: 1px solid #42b983;
}
.btnbox{
  margin-top: 30px;
}
#button{
  display: block;
  margin: 0 auto;
  background-color: #42b983;
  color: white;
  cursor: pointer;
  height: 30px;
  line-height: 30px;
  text-align: center;
  width: 400px;
  border-radius: 5px;
}
</style>
