import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
// use
<<<<<<< HEAD
// axios.defaults.baseURL = 'http://192.168.1.110/tpnote/index.php/Home/'
=======
Vue.use(VueQuillEditor)

>>>>>>> 6c21f3f183ffd790eed9c7bbb999e88037e0662b
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
