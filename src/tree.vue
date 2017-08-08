<template>
 <div id="treebox">
   <i class="item"></i>
 </div>
</template>

<script>
  export default {
    name: 'tree'
  }
</script>

<style lang="scss" scoped>
  .item{
    display: inline-block;
    width: 32px;
    height: 32px;
    background-repeat: no-repeat;
    background-size: 32px;
    background-image: url("./assets/icon.png");
    position: fixed;
    top: 0px;
    right: 40px;
    animation: treeluox ease-in 10s ;
    animation-iteration-count:infinite;
    transition:all 10s ease-in;
  }
  @keyframes treeluox {
    0%{
      top: 0px;
      opacity: 1;
      right: 40px;
      -webkit-transform: translate(0px, -50px) rotatex(0deg);
    }
    85%{
      opacity: 0;
      right: 500px;
      -webkit-transform: rotatex(30deg);
    }
    100%{
      top: 600px;
      opacity: 0;
      right: 600px;
      -webkit-transform: translate(0px, 650px)  rotatex(10deg);
    }
  }
</style>
