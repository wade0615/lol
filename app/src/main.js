import Vue from 'vue';
import lolapi from '@/api/index';
import router from './router';
import store from './store';
import App from './App.vue';
// 自定義資料引入
import '@/components/index';
// 套件引入
import vuetify from './plugins/vuetify';

Vue.prototype.$sportsData = lolapi.lolapi;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
