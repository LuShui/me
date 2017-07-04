<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div id="popview" v-if="show">
    <div id="view">
      <h4>提示</h4>
      <p>{{title}}</p>
      <a v-on:click="increment">确认</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'layer',
    props: ['title', 'show'],
    methods: {
      increment: function () {
        this.$emit('increment')
      }
    },
    watch: {
      show: function () {
        if (this.show === true) {
          document.documentElement.style.overflow = 'hidden'
        } else {
          document.documentElement.style.overflow = 'scroll'
        }
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
#popview{
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  #view{
    position: relative;
    width: 240px;
    height: 120px;
    background-color: #f7f7f7;
    margin: 0 auto;
    margin-top: 120px;
    border-radius: 5px;
    overflow: hidden;
    z-index: 100;
    h4{
      text-align: center;
      height: 40px;
      line-height: 40px;
      background-color: #42b983;
      color: white;
    }
    p{
      height: 40px;
      line-height: 40px;
      text-align: center;
    }
    a{
      display: block;
      position: absolute;
      bottom: 0px;
      left: 0px;
      right: 0px;
      text-align: center;
      height: 30px;
      line-height: 30px;
      background-color: #2c3e50;
      color: white;
      cursor: pointer;
    }
  }
}
</style>
