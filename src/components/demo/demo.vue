<template>
  <div>
    <header>
      <h4>Some animations</h4>
    </header>
    <div id="warp">
      <div class="left-view">
        <ul>
          <li><a>animate.css</a></li>
        </ul>
      </div>

      <div class="ctn-view">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo'
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
$head_h : 100px;
$bg_color : #42b983;
$a_height : 40px;

header{
  height: $head_h;
  line-height: $head_h;
  background-color: $bg_color;
  color: white;
  h4{
    text-align: center;
    height: $head_h;
    line-height: $head_h;
    color: white;
  }
}
  #warp{
    display: -webkit-box;
    display: -moz-box;
    display: flex;
    max-width: 970px;
    margin: 0 auto;
    margin-top: 20px;
    .left-view{
      width: 160px;
      ul{
        display: block;
        li{
          display: block;
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          a{
            display: block;
            height: $a_height;
            line-height: $a_height;
            text-align: center;
            cursor: pointer;
            color: white;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            border-bottom: 1px solid #f7f7f7;
            background-color: $bg_color;
            border-radius: 5px;
            &:hover{
              background-color: #2c3e50;
            }
          }
        }
      }
    }
    .ctn-view{
      -webkit-box-flex: 1;
      -moz-box-flex: 1;
      flex: 1;
      margin-left: 20px;
    }
  }

</style>
