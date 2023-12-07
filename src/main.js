import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import * as directives from "./util/directive";
// 注册全局指令
Object.keys(directives).forEach((key) => {
  Vue.directive(key, directives[key]); // 插入指令名和对应方法
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount("#app");
