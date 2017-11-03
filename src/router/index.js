import Vue from 'vue';
import VueRouter from 'vue-router';

import Hello from '@/components/Hello';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Hello',
    component: Hello,
  },
];

/* eslint-disable no-new */
const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
