import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import storeConfig from './store-config'

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store(storeConfig);

describe("store testing:", () => {

  it("get tasks from local storage", () => {
    store.dispatch("getTasksFromLocalStorage");
    expect(store.state.tasksList.length).toBe(0);
  });

  it("Add new task", () => {
    const task = "newTask";
    store.commit("addTask", task);
    expect(store.state.tasksList[0].text).toBe(task);
    expect(store.state.tasksList[0].isChecked).toBe(false);
    expect(store.state.tasksList[0].id).toBeTruthy();
  });

  it("Delete one  task", () => {
    const id = store.state.tasksList[0].id;
    store.commit("deleteTask", id);
    expect(store.state.tasksList.length).toBe(0);
  });

});