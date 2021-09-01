import Vuex from 'vuex'

import TaskList from './modules/TaskList';

const store = new Vuex.Store({
  modules: {
    TaskList
  },
  strict: process.env.NODE_ENV !== 'production'
});

export default store;