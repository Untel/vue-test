import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import Hello from '@/store/Hello';

Vue.use(Vuex);

/* eslint-disable no-new */
const store = new Vuex.Store({
  modules: {
    Hello,
  },
  plugins: [createPersistedState()],
});

export default store;
