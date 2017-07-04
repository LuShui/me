<template>
  <div id="loading">
    <div id="over" class="over"></div>
    <div id="layout" class="layout">
      <img src="../../assets/loading.gif" alt="" />
      <div class="loa-title">
        <p>~~加载中~~</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loading'
}
</script>

<style scoped>
  .loa-title p{
    color: #555555;
    padding-top: 20px;
    text-align: center;
    width: 100px;
    margin:  0 auto;
    font-size: 14px;
  }
  .current a {
    font-size: 20px;
  }
  .over {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
  }
  .layout img{
    display: block;
    margin: 0 auto;
    width: 50px;
    margin-top: 40px;
  }
</style>
