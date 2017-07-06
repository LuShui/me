/**
 * Created by Administrator on 2017/4/13.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
Vue.use(Vuex)

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
