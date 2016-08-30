'use strict'
export default function(router) {
  router.map({
    '/': {
      name: 'home',
      component: function(resolve) {
        require(['./views/app'], resolve)
      }
    },
    '*': {
      component: function(resolve) {
        require(['./views/app'], resolve)
      }
    },
    '/about': {
      component: function(resolve) {
        require(['./views/about'], resolve)
      }
    }
  })
}
