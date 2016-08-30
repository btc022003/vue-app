import Vue from 'vue';
// import App from './views/App';
import VueRouter from 'vue-router';
import routerMap from './routers';  //引入路由

Vue.use(VueRouter);

/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })
// 配置相参数说明
// http://router.vuejs.org/zh-cn/options.html
let router = new VueRouter({
  hashbang: true,
  history: false,
  saveScrollPosition: true,
  transitionOnLoad: true
});

let app = Vue.extend({});
routerMap(router);
router.start(app, '#app');
