<template xmlns:v-bind="http://www.w3.org/1999/xhtml" xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div id="home">
    <header >
      <h4>
        一个记录笔记的网站
      </h4>
      <p>
        研究技术时记录笔记的小网站（HTML,CSS,JAVASCRIPT,PHP,MYSQL）
      </p>
      <a id="addnote" @click="admingdunc">管理中心</a>
    </header>
    <div class="margin100">
      <div id="warp">
        <div class="type-view">
          <a v-on:click="showfunc" class="showbtn">
            <i></i><i></i><i></i>
          </a>
          <transition name="slide-fade">
          <ul v-if="issh">
            <item v-for="(json, index) in data" :index="index" :json="json" key="index"></item>
          </ul>
          </transition>
        </div>
        <div class="view-content">
          <transition name="fade">
            <router-view></router-view>
          </transition>
        </div>
        <div class="audio-view">
        </div>
      </div>
    </div>
</div>
</template>
<script>
import item from './child/item.vue'
export default {
  name: 'hello',
  data: function () {
    return {
      data: [],
      issh: true
    }
  },
  components: {
    item
  },
  methods: {
    showfunc: function () {
      this.issh = !this.issh
    },
    admingdunc: function () {
      window.location.href = 'http://lushui.space/tpnote/index.php/home/login/login'
    }
  },
  created: function () {
    this.data = this.$store.getters.doneTodos.type
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  a{
    cursor: pointer;
  }
  .showbtn{
    display: none;
  }
  .margin100{
    margin-top: 100px;
  }
  .fade-enter-active {
    -webkit-transition: opacity 0.5s;
    -moz-transition: opacity 0.5s;
    transition: opacity 0.5s;
  }
  .fade-leave-active {
  }
  .fade-enter {
    opacity: 0;
  }
  .fade-leave-active {
    opacity: 0;
  }
  @media all and (max-width:700px ){
    .view-content{
      margin-left: 0px !important;
    }
    #addnote{
      display: none !important;
    }
    .slide-fade-enter-active {
      -webkit-transition: all .3s ease;
      -moz-transition: all .3s ease;
      transition: all .3s ease;
    }
    .slide-fade-leave-active {
      -webkit-transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
      -moz-transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
      transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-active {
      -webkit-transform: translateX(10px);
      -moz-transform: translateX(10px);
      transform: translateX(10px);
      opacity: 0;
    }
    #warp{
      display: block !important;
      margin: 0 auto;
    }
    .type-view{
      width: 100px !important;
      position: fixed;
      right: 10px;
      top: 110px;
    }
    .showbtn{
      display: block;
      height: 30px;
      line-height: 30px;
      background-color: #42b983;
      border-radius: 5px;
      width: 40px;
      padding-top:2px;
      margin-right: 0px;
      margin-left: auto;
      i{
        display: block;
        height: 3px;
        background-color: white;
        width: 80%;
        margin:  0 auto;
        margin-top: 5px;
      }
    }
  }

  header{
    background-color: #42b983;
    height: 100px;
    text-align: center;
    position: fixed;
    color: white;
    left: 0;
    right:0;
    top: 0;
    h4{
      color: white;
      height: 40px;
      line-height: 40px;
    }
    p{
      line-height: 20px;
      padding: 0px 30px;
      max-height: 40px;
      overflow: hidden;
      color: white;
    }
    #addnote{
      display: block;
      width: 100px;
      height: 30px;
      line-height: 30px;
      position: absolute;
      right: 20px;
      top: 50px;
      background-color: #ffffff;
      border-radius: 5px;
      color: #42b983;
    }
  }
  #warp{
    display: -webkit-box;
    display: -moz-box;
    display: flex;
    max-width: 970px;
    margin: 0 auto;
  }
  /*左边列表样式*/
  .type-view{
    width: 140px;
    position: fixed;
  }
  .type-view >ul >li{
    padding-top: 10px;
    width: 100px;
    margin: 0 auto;
  }
.type-list > li{
  padding: 10px 10px 0px 10px;
}
/*中间样式*/
.view-content{
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  flex: 1;
  margin-left: 140px;
}
/*右边样式*/
.audio-view{
  width: 150px;
}
</style>
