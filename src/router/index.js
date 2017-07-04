import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/javascript',
      component: function (resolve) {
        require.ensure([], function (require) {
          resolve(require('../components/home'))
        })
      },
      children: [{
        path: 'javascript',
        name: 'javascript',
        component: function (resolve) {
          require.ensure([], function (require) {
            resolve(require('../components/home/child/javascript.vue'))
          })
        }
      },
      {
        path: 'html',
        name: 'html',
        component: function (resolve) {
          require.ensure([], function (require) {
            resolve(require('../components/home/child/html.vue'))
          })
        }
      },
      {
        path: 'css',
        name: 'css',
        component: function (resolve) {
          require.ensure([], function (require) {
            resolve(require('../components/home/child/css.vue'))
          })
        }
      },
      {
        path: 'webpack',
        name: 'webpack',
        component: function (resolve) {
          require.ensure([], function (require) {
            resolve(require('../components/home/child/webpack.vue'))
          })
        }
      },
      {
        path: 'vue',
        name: 'vue',
        component: function (resolve) {
          require.ensure([], function (require) {
            resolve(require('../components/home/child/vue.vue'))
          })
        }
      },
      {
        path: 'php',
        name: 'php',
        component: function (resolve) {
          require.ensure([], function (require) {
            resolve(require('../components/home/child/php.vue'))
          })
        }
      },
      {
        path: 'webpack',
        name: 'webpack',
        component: function (resolve) {
          require.ensure([], function (require) {
            resolve(require('../components/home/child/webpack.vue'))
          })
        }
      }]
    },
    {
      path: '/detil',
      component: function (resolve) {
        require.ensure([], function (require) {
          resolve(require('../components/detil'))
        })
      }
    },
    {
      path: '/mang',
      redirect: '/notemanage',
      component: function (resolve) {
        require.ensure([], function (require) {
          resolve(require('../components/admin/mang.vue'))
        })
      },
      children: [{
        path: '/notemanage',
        component: function (resolve) {
          require.ensure([], function (require) {
            resolve(require('../components/admin/children/notemanage.vue'))
          })
        }
      }, {
        path: '/note',
        component: function (resolve) {
          require.ensure([], function (require) {
            resolve(require('../components/admin/children/note.vue'))
          })
        }
      },
      {
        path: '/url',
        component: function (resolve) {
          require.ensure([], function (require) {
            resolve(require('../components/admin/children/urlview.vue'))
          })
        }
      }]
    },
    {
      path: '/index',
      component: function (resolve) {
        require.ensure([], function (require) {
          resolve(require('../components/admin/index.vue'))
        })
      }
    },
    {
      path: '/demo',
      redirect: '/scroller',
      component: function (resolve) {
        require.ensure([], function (require) {
          resolve(require('../components/demo/demo.vue'))
        })
      },
      children: [{
        path: '/scroller',
        component: function (resolve) {
          require.ensure([], function (require) {
            resolve(require('../components/demo/child/scroller.vue'))
          })
        }
      }]
    }
  ]
})
