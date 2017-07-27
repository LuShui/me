import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import VueQuillEditor from 'vue-quill-editor'
// use
Vue.use(VueQuillEditor)
axios.defaults.baseURL = 'http://lushui.space/tpnote/index.php/home/'
Vue.prototype.$http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App } 
})

