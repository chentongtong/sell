import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from 'components/goods/goods.vue';
import ratings from 'components/ratings/ratings.vue';
import seller from 'components/seller/seller.vue';

import "common/styles/index.styl";

//开启debug模式
Vue.config.debug = true;
Vue.use(VueRouter);
Vue.use(VueResource);

// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
  linkActiveClass:'active',
  mode: 'history',
  base: __dirname,
  routes:[
    { path: '/goods',component: goods },
    { path:'/ratings',component : ratings },
    { path:'/seller',component: seller}
  ]
});

const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app');

