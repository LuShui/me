<template>
 <div>
  <div>
    <div class="">
      <h4>Hello world</h4>
      <a @click="fukcfunc">fack</a>
      <a @click="hellofunc">hello</a>
      <a @click="comfunc">show</a>
    </div>
  </div>
 </div>
</template>

<script>
import Util from '../js/common'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    fukcfunc: function () {
      this.$router.push({
        name: 'fack',
        params: {
          name: 'this is fack you page'
        }
      })
    },
    hellofunc: function () {
      this.$router.push({
        name: 'fack',
        params: {
          name: 'this is hello world page'
        }
      })
    },
    comfunc: function () {
      let u = new Util()
      u.showname()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: white;
  cursor: pointer;
  padding: 10px;
  background-color: #42b983;
  border-radius: 5px;
}

</style>
