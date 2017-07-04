<template>
  <div>
    <div>
      <div>
        <p class="item">
          <label for="urlname">网址名称</label>
          <input id="urlname" placeholder="请输入网址名称" v-model="urlname" type="text">
        </p>
        <p class="item">
          <label for="urllink">网址链接</label>
          <input id="urllink" placeholder="请输入网址链接" v-model="urllink" type="text">
        </p>
        <p class="itemdes">
          <label for="urdesbute">网址描述</label>
          <textarea id="urdesbute" placeholder="请输入网址链接" v-model="urldesbute" type="text"></textarea>
        </p>
      </div>
      <div class="btnbox">
        <a id="button" @click="savefunc">保存</a>
      </div>
    </div>
  </div>
</template>
<script>
  import qs from 'qs'
  export default{
    name: 'urlview',
    data: function () {
      return {
        urlname: '',
        urllink: '',
        urldesbute: ''
      }
    },
    methods: {
      savefunc: function () {
        if (this.urlname === '') {
          alert('请输入网址名称')
        } else if (this.urllink === '') {
          alert('请输入网址链接')
        } else if (this.urldesbute === '') {
          alert('请输入网址描述')
        } else {
          this.$http.post('admin/addlink', qs.stringify({
            'name': this.urlname,
            'url': this.urllink,
            'des': this.urldesbute
          })).then(function (ret) {
            if (ret.data.code === 1) {
              alert('添加成功')
              this.urlname = ''
              this.urllink = ''
              this.urldesbute = ''
            } else {
              alert('添加失败')
            }
          })
        }
      }
    }
  }
</script>
<style scoped>
  #box{
    max-width: 970px;
    margin: 0 auto;
    font-size: 16px;
  }
  .item{
    padding-top: 30px;
    text-align: center;
    height: 30px;
    width: 400px;
    margin:  0 auto;
  }
  .itemdes{
    padding-top: 30px;
    text-align: center;
    height: 100px;
    width: 400px;
    margin:  0 auto;
  }
  .itemdes >label{
    width: 100px;
    background-color: #42b983;
    color: #f7f7f7;
    border-top-left-radius:5px;
    border-bottom-left-radius: 5px;
  }
  .item >label{
    width: 100px;
    background-color: #42b983;
    color: #f7f7f7;
    border-top-left-radius:5px;
    border-bottom-left-radius: 5px;
  }
  .item >input{
    width: 300px;
    text-indent: 2em;
    outline: none;
    font-size: 16px;
  }
  input:active{
    outline: none;
  }
  .item >label,input{
    float: left;
    display: inline-block;
    vertical-align: middle;
    height: 30px;
    line-height: 30px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border: 1px solid #42b983;
  }
  .btnbox{
    margin-top: 30px;
  }
  #button{
    display: block;
    margin: 0 auto;
    background-color: #42b983;
    color: white;
    cursor: pointer;
    height: 30px;
    line-height: 30px;
    text-align: center;
    width: 400px;
    border-radius: 5px;
  }

  .itemdes >label,textarea{
    float: left;
    display: inline-block;
    vertical-align: middle;
    height: 30px;
    line-height: 30px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border: 1px solid #42b983;
  }
  #urdesbute{
    width: 300px;
    text-indent: 2em;
    height: 100px;
    outline: none;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border: 1px solid #42b983;
    resize: none;
    font-size: 16px;
  }
</style>
