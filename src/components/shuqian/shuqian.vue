<template>
  <div id="controli">
    <ul class="list">
      <itemli v-for="(json,index) in array" :index="index" key="index" ></itemli>
    </ul>

  </div>
</template>
<script>
  import itemli from './sqitem.vue'
  export default {
    name: 'shuqian',
    data: function () {
      return {
        array: []
      }
    },
    components: {
      itemli
    }
  }
</script>

<style lang="scss" scoped>

  #controli{
    max-width: 990px;
    margin: 0 auto;
    min-height: 600px;
    padding-top: 20px;
  }
  .list{

  }
  .listitem:nth-of-type(2n){
    background-color: #f7f7f7;
  }


</style>
