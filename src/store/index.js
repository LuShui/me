/**
 * Created by Administrator on 2017/4/13.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let typearr = [{
  'title': 'JavaScript',
  'name': 'JavaScript',
  'id': '1'
}, {
  'title': 'html',
  'name': 'html',
  'id': '2'
}, {
  'title': 'css',
  'name': 'css样式',
  'id': '3'
}, {
  'title': 'webpack',
  'name': '构建工具',
  'id': '4'
}, {
  'title': 'vue',
  'name': 'js插件',
  'id': '5'
}, {
  'title': 'php',
  'name': 'php相关',
  'id': '6'
}, {
  'title': 'demo',
  'name': '案例',
  'id': '7'
}]
const state = {
  name: 'me web app',
  verson: 1.0,
  age: 23,
  index: 0,
  isreload: false,
  type: typearr
}

export default new Vuex.Store({
  state,
  getters: {
    doneTodos: state => {
      return state
    }
  },
  mutations: {
    change (state, index) {
      // 改变 state
      state.index = index
      localStorage.index = index
    }
  }
})
