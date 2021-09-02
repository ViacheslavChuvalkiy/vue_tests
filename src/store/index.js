import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import TaskList from './modules/TaskList';

const store = new Vuex.Store({
  modules: {
    TaskList
  }
});

export default store;