<template>
    <tr>
      <td><h4>{{json.title}}</h4></td>
      <td><p>{{json.des}}</p></td>
      <td><span>{{typeclass}}</span></td>
      <td>
        <div>
          <a @click="editfunc" class="edit-btn">编辑</a>
        </div>
        <div>
          <a @click="itemfunc" class="del-btn">删除</a>
        </div>
      </td>
    </tr>
</template>

<script>
  import qs from 'qs'
  export default {
    props: ['json'],
    name: 'noteitem',
    data: function () {
      return {
        typeArr: ['JavaScript', 'htnl', 'css', 'webpack', 'vue', 'php']
      }
    },
    methods: {
      editfunc: function () {
        this.$router.push({path: 'note'})
      },
      itemfunc: function () {
        this.$http.post('admin/changestaue', qs.stringify({
          id: this.json.id
        })).then((response) => {
          this.data = response.data
        })
        this.$emit('itemfunc', this.json)
      }
    },
    computed: {
      typeclass: function () {
        let type = Number(this.json.type) - 1
        return this.typeArr[type]
      }
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  td{
    width: 25%;
    height: 60px;
    text-align: center;
    border-left:1px solid #f7f7f7;
    border-top:1px solid #f7f7f7;
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
  .edit-btn,.del-btn{
    display: block;
    width: 60px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 5px;
    margin:  0 auto;
    font-size: 14px;
    &:hover{
      color: #42b983;
      font-size: 18px;
    }
  }
  .del-btn{
    color: red;
  }
</style>
