<template>
  <li class="listitem">
    <div class="itembox">
      <div class="itemleft" :class="image"></div>
      <div class="itemright">
        <h4>这是一个书签</h4>
        <p class="pspan">
          这是一个书签详情这是一个书签详情这是一个书签详情这是一个书签详情这是一个书签详情
        </p>
      </div>
    </div>
  </li>
</template>
<script>
  export default {
    name: 'shuqianitem',
    props: ['index'],
    computed: {
      image: function () {
        let index = this.index % 6 + 1
        switch (index) {
          case 1:
            return 'css'
          case 2:
            return 'javascript'
          case 3:
            return 'html'
          case 4:
            return 'mysql'
          case 5:
            return 'php'
          case 6:
            return 'other'
          default :
            break
        }
      }
    }
  }
</script>


<style lang="scss" scoped>
  .listitem{
    float: left;
    width: 33.333%;
    height: 120px;
    cursor: pointer;
  }
  .listitem:hover{
    background-color: #f1f1f1;
  }
  .listitem .pspan{
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    font-size: 12px;
    line-height: 1.5em;
  }
  .itembox{
    display: -webkit-box;
    -webkit-box-orient: horizontal;
  }
  .itemleft{
    width: 100px;
    height: 120px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 60px 60px;
  }
  .css{
    background-image: url("../../assets/cssicon.png");
  }
  .javascript{
    background-image: url(../../assets/JavaScript.png);
  }
  .html{
    background-image: url("../../assets/htmlicon.png");
  }
  .mysql{
    background-image: url("../../assets/mysql.png");
  }
  .php{
    background-image: url("../../assets/PHP.png");
  }
  .other{
    background-image: url("../../assets/other.png");
  }
  .itemright{
    -webkit-box-flex: 1;
    padding: 10px;
  }
  .itemright >h4{
    height: 30px;
    line-height: 30px;
    font-weight: 100;
    font-size: 16px;
  }
</style>
