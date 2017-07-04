<template>
  <div>
    <header>
      <!--<h4>后台管理中心</h4>-->
    </header>
    <nav>
      <a :class="{ select: isnote }" @click="noteclick">笔记管理</a>
      <a :class="{ select: isadd }" @click="urlclick">网址添加</a>
    </nav>
    <div class="routerview">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'mang',
    data: function () {
      return {
        isnote: true,
        isadd: false
      }
    },
    methods: {
      noteclick: function () {
        this._changestate()
        this.isnote = true
        this.$router.push({path: 'notemanage'})
      },
      urlclick: function () {
        this._changestate()
        this.isadd = true
        this.$router.push({path: 'url'})
      },
      _changestate: function () {
        this.isnote = false
        this.isadd = false
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .select{
    background-color: #555555 !important;
  }
  header{
    height: 100px;
    background-color: #42b983;
  }
  h4{
    height: 100px;
    line-height: 100px;
    text-align: center;
    color: white;
    font-size: 16px;
  }
  nav{
    max-width: 990px;
    margin: 0 auto;
    height: 30px;
    padding: 20px 0px;
  }
  .routerview{
    max-width: 990px;
    height: 100px;
    margin: 0 auto;
  }
  a{
    display: block;
    width: 110px;
    text-align: center;
    height: 30px;
    line-height: 30px;
    background-color: #42b983;
    color: white;
    float: left;
    cursor: pointer;
  }
  a:hover{
    background-color: #555555;
  }
</style>
