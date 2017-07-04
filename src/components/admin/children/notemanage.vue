<template>
  <div id="warp">
    <div class="table-c">
      <table border="0" cellspacing="0" cellpadding="0">
        <thead>
        <tr>
          <td colspan="3"></td>
          <td>
            <a @click="addfunc" class="addnote">添加笔记</a>
          </td>
        </tr>
        <tr>
          <td>标题</td> <td>描述</td> <td>类型</td> <td>操作</td>
        </tr>
        </thead>
        <tbody>
          <noteitem v-for="(json, index) in data" :json="json" key="index" @itemfunc="parsefunc"></noteitem>
        </tbody>
      </table>
    </div>
    <div class="page">
      <page v-bind:page="page" :currpage="currpage" @currfunc="curfuc"></page>
    </div>
  </div>
</template>

<script>
import noteitem from './noteitem.vue'
import page from '../../common/page/index.vue'
export default {
  name: 'notemanage',
  components: {
    noteitem,
    page
  },
  created: function () {
    this.$http.post('admin/adminlist').then((response) => {
      this.data = response.data.ctn
    })
  },
  methods: {
    curfuc: function (currpage) {
      this.currpage = currpage
    },
    addfunc: function () {
      this.$router.push({path: 'note'})
    },
    parsefunc: function (json) {
      let index = this.data.indexOf(json)
      this.data.splice(index, 1)
    }
  },
  data: function () {
    return {
      currpage: 1,
      page: 0,
      data: []
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .addnote{
    display: block;
    width: 120px;
    height: 30px;
    line-height: 30px;
    background-color: #42b983;
    color: white;
    margin: 0 auto;
    border-radius: 5px;
    font-size: 14px;
    &:hover{
      background-color: #2c3e50;
    }
  }

  .table-c  table {
    border-right:1px solid #f7f7f7;
    border-bottom:1px solid #f7f7f7;
    width: 100%;
    max-height: 720px;
    font-size: 14px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
  }
  .table-c td{
    border-left:1px solid #f7f7f7;
    border-top:1px solid #f7f7f7;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  td{
    width: 25%;
    height: 60px;
    text-align: center;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  tr{
    border: 1px solid #555555;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .page{
    padding: 5px 0;
    position: absolute;
    width: 990px;
    top: 880px;
  }
</style>
