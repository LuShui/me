<template>
  <li><a @click="typefunc" :class="{select: isselect }">{{json.name}}</a></li>
</template>

<script>
export default {
  name: 'item',
  props: ['json', 'index'],
  methods: {
    typefunc: function () {
      this.$router.push({path: this.json.title})
      this.$store.commit('change', this.index)
    }
  },
  computed: {
    isselect: function () {
      let ind = this.$store.getters.doneTodos.index
      if (ind === 6) {
        return false
      } else if (ind === this.index) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped>
  a{
    display: block;
    cursor: pointer;
    text-align: center;
    background-color: #42b983;
    height: 30px;
    line-height: 30px;
    border-radius: 5px;
    color: white;
  }
  a:hover{
    background-color: #2c3e50;
  }
  .select{
    background-color: #2c3e50;
    color: white;
  }
</style>
