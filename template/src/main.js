// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import EcUI from 'front-common';
import 'front-common/src/assets/index.less';
import EcBusiness from 'front-business';
import 'front-business/src/assets/index.less';
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.use(ElementUI);
Vue.use(EcUI);
Vue.use(EcBusiness);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});

