<template>
  <div id="page">
      <ul>
        <pageitem v-for="index in allpage" :index="index" key="index" :currpage="currpage" @click="currfunc" @pagefunc="parfunc"></pageitem>
      </ul>
  </div>
</template>

<script>
  import pageitem from './item.vue'
  export default {
    name: 'page',
    props: ['page', 'currpage'],
    computed: {
      allpage: function () {
        if (this.page > 15) {
          return 15
        } else {
          return this.page
        }
      }
    },
    methods: {
      parfunc: function (currpage) {
        this.currfunc(currpage)
      },
      currfunc: function (currpage) {
        this.$emit('currfunc', currpage)
      }
    },
    components: {
      pageitem
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
#page{
  height: 30px;
  color: #2c3e50;
  text-align: center;
  ul{
    display: inline-block;
    li{
      display: block;
      min-width: 40px;
      line-height: 30px;
      text-align: center;
      float: left;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      margin-left: 5px;
      border-radius: 5px;
      a{
        display: block;
        border: 1px solid #cccccc;
        min-width: 40px;
        line-height: 30px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        border-radius: 5px;
        &:hover{
          background-color: #cccccc;
        }
      }
    }
  }
}
</style>
