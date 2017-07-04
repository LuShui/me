<template>
  <div id="detil">
    <header >
      <h4>
        {{data.title}}
      </h4>
      <p>{{data.des}}</p>
    </header>
    <div>
      <div id="content" v-html="data.ctn">
      </div>
    </div>
  </div>
</template>

<script>
  import qs from 'qs'
  export default {
    name: 'detil',
    data: function () {
      return {
        data: {}
      }
    },
    created: function () {
      let id = this.$route.query.id
      this.$http.post('home/getdetil', qs.stringify({
        id: id
      })).then((res) => {
        this.data = res.data.ctn
      })
    }
  }
</script>

<style lang="scss" scoped>
  @media all and (max-width:700px ) {
    #content{
      width: 100vw !important;
    }
    img {
      width: 100vw !important;
    }
  }
  header{
    background-color: #42b983;
    height: 100px;
    text-align: center;
    color: white;
    position: fixed;
    top: 0px;
    left: 0;
    right: 0;
  }
  h4{
    color: white;
    height: 50px;
    line-height: 50px;
    font-size: 22px;
  }
  img{
    width: 100%;
  }
  #content{
    max-width: 970px;
    margin: 0 auto;
    padding-top: 20px;
    margin-top: 100px;
  }
  .title{
    font-size: 20px;
    padding: 10px 0;
    text-align: center;
  }
</style>
