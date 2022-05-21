import Vue from "vue";
import App from "./App.vue";
import Router from 'vue-router'
import 'amfe-flexible';
import router from "./router";
import store from "./store";
import Vant from 'vant';
import 'vant/lib/index.css';
import './assets/style/reset.css' //全局格式化样式

// 使用mock
if (process.env.NODE_ENV === 'development') {
  require("./mock/mock.js")
}
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}
Vue.use(Vant);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");