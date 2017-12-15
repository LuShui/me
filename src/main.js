import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import VueQuillEditor from 'vue-quill-editor'
// use
Vue.use(VueQuillEditor)
// axios.defaults.baseURL = 'http://192.168.1.110/tpnote/index.php/Home/'
axios.defaults.baseURL = 'http://admin.lushui.space/index.php/Home/'
Vue.prototype.$http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
