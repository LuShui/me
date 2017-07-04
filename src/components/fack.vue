<template>
  <div>
    <a @click="backfunc">返回</a>
    <a @click="childfunc">child</a>
  </div>

</template>

<script>
export default{
  name: 'fack',
  methods: {
    backfunc: function () {
      this.$router.back()
    },
    childfunc: function () {
      this.$router.push({
        name: 'child'
      })
    }
  }
}

</script>

<style scoped>
a{
  color: white;
  cursor: pointer;
  padding: 10px;
  background-color: #2c3e50;
  border-radius: 5px;
}

</style>
