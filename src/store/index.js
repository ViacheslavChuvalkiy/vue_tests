import Vuex from 'vuex'

import TaskList from './modules/TaskList';

const store = new Vuex.Store({
  modules: {
    TaskList
  }
});

export default store;