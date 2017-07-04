<template>
  <div>
    <layer :title="title" :show="show" v-on:increment="incrementTotal"></layer>
    <div class="fromdata">
      <div class="item">
        <span class="lableitem" for="titlename">标&nbsp;&nbsp;题&nbsp;&nbsp;</span>
        <input id="titlename" name="titlename" placeholder="请输入标题" v-model="titlename">
      </div>
      <div class="item">
        <span class="lableitem" for="select">类&nbsp;&nbsp;型</span>
        <select id="select"  name="type" v-model="type">
          <option value="1">jvascript语法</option>
          <option value="2">html</option>
          <option value="3">css</option>
          <option value="4">构建工具</option>
          <option value="5">js插件</option>
          <option value="6">php相关</option>
        </select>
      </div>
      <div class="item" placeholder="请输入描述">
        <span class="lableitem" for="desbute">描&nbsp;&nbsp;述&nbsp;&nbsp;</span>
        <input id="desbute" name="desbute" v-model="desbute" placeholder="请输入描述">
      </div>
      <div>
        <quill-editor class="edit" v-model="content"></quill-editor>
      </div>
    </div>
    <div id="save">
      <a class="buttom" @click="savefunc">保存</a>
    </div>
  </div>
</template>
<script>
  import { quillEditor } from 'vue-quill-editor'
  import layer from './layer.vue'
  import qs from 'qs'
  export default{
    name: 'note',
    data: function () {
      return {
        titlename: '',
        type: 1,
        desbute: '',
        content: '',
        title: '',
        show: false
      }
    },
    methods: {
      incrementTotal: function () {
        this.show = !this.show
      },
      savefunc: function () {
        if (this.titlename === '') {
          this.show = true
          this.title = '请输入标题'
        } else if (this.desbute === '') {
          this.show = true
          this.title = '请输入描述'
        } else if (this.content === '') {
          this.show = true
          this.title = '请输入内容'
        } else {
          console.log(this.content)
          this.$http.post('admin/savecontent',
            qs.stringify({
              titlename: this.titlename,
              type: this.type,
              desbute: this.desbute,
              content: this.content
            }), {
              emulateJSON: true
            }).then((res) => {
              window.location.reload()
            }, (res) => {
              this.title = '添加失败'
              this.show = true
            })
        }
      }
    },
    components: {
      quillEditor,
      layer
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  .edit{
    height: 500px;
  }
  .fromdata{
    max-width: 970px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    .item{
      height: 40px;
    }
    .lableitem{
      display: block;
      width: 100px;
      height: 30px;
      line-height: 30px;
      background-color: #42b983;
      vertical-align: top;
      float: left;
      text-align: center;
      color: white;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    input{
      display: block;
      float: left;
      height: 30px;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      border: 1px solid #42b983;
      text-indent: 1em;
      outline: none;
      width: 500px;
      border-bottom-right-radius: 5px;
      border-top-right-radius: 5px;
    }
    #select{
     display: block;
      float: left;
      height: 30px;
      width: 160px;
      text-align: center;
      text-indent: 1em;
      font-size: 16px;
      outline: none;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      border: 1px solid #42b983;
      border-bottom-right-radius: 5px;
      border-top-right-radius: 5px;
      option{
        display: block;
        height: 30px;
        line-height: 30px;
      }
    }
  }
  #save {
    height: 100px;
    margin-top: 120px;
    .buttom {
      display: block;
      width: 160px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      background-color: #42b983;
      color: white;
      border-radius: 5px;
      margin: 0 auto;
      font-size: 16px;
      &:hover{
        background-color: #2c3e50;
      }
    }
  }
</style>
