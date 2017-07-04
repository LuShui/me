<template>
  <li><a :class="{select:iscurr}" @click="pagefunc">{{index}}</a></li>
</template>

<script>
  export default {
    name: 'pageitem',
    props: ['index', 'currpage'],
    methods: {
      pagefunc: function () {
        this.$emit('pagefunc', this.index)
      }
    },
    computed: {
      iscurr: function () {
        if (this.index === this.currpage) {
          return true
        } else {
          return false
        }
      }
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
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
        background-color: #42b983;
        color: white;
      }
    }
  }

  .select{
    border: 1px solid #42b983;
    background-color: #42b983;
    color: white;
  }
</style>
