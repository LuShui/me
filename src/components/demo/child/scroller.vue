<template>
  <div class="cut">
    <div id="nav">
      <ul>
        <ul>
        </ul>
      </ul>
    </div>
    <div class="ctn">
      <div class="animated bounce box">animate</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'scroller'
}
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  .cut{
    display: -webkit-box;
    display: -moz-box;
    display: flex;
  }
  #nav{
    width: 120px;
  }
  .ctn{
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    flex: 1;
  }
.box{
  width: 100px;
  text-align: center;
  background-color: #42b983;
  color: white;
  height: 30px;
  line-height: 30px;
  margin: 0 auto;
}
</style>
