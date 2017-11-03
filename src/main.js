// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueMdl from 'vue-mdl';
import Vuelidate from 'vuelidate';
import router from '@/router';
import store from '@/store';
import App from '@/App';
import 'material-design-lite/material';

Vue.use(VueMdl);
Vue.use(Vuelidate);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
