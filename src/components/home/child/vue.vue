
<template>
  <div>
    <loading v-if="loadshow"></loading>
    <ul>
      <Cell v-for="(json,index) in array" v-bind:json="json" :key="index"></Cell>
    </ul>
    <div class="nosoure" v-if="show">
      <transition name="fade">
        <div>
          <img src="../../../assets/nosoure.png">
          <p >~怎么没找到?~</p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import Cell from './cell.vue'
  import loading from '../../loading'
  import qs from 'qs'
  export default {
    name: 'javascript',
    data: function () {
      return {
        array: [],
        show: false,
        loadshow: true
      }
    },
    components: {
      Cell,
      loading
    },
    computed: {
      name: function () {
        return this.$store.state.name
      }
    },
    created: function () {
      if (this.$store.state.plugarr.length > 0) {
        this.array = this.$store.state.plugarr
        this.loadshow = false
      } else {
        this.$http.post('home/getsoure', qs.stringify({
          type: 5
        })).then((res) => {
          this.loadshow = false
          this.array = res.data.ctn
          this.$store.commit('plugarr', this.array)
          if (this.array.length > 0) {
            this.show = false
          } else {
            this.show = true
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .fade-enter-active {
    transition: opacity .5s
  }
  .fade-leave-active {

  }
  .fade-enter {
    opacity: 0
  }
  .fade-leave-active {
    opacity: 0
  }
  .nosoure >div{
    width: 120px;
    margin: 0 auto;
  }
  .nosoure img{
    display: block;
    width: 120px;
    margin:  0 auto;
  }
  .nosoure p{
    color: #42b983;
    width: 120px;
    height: 30px;
    line-height: 30px;
    padding-top: 10px;
  }
  .nosoure{
    color: #555555;
    padding-top: 30px;
  }
</style>
