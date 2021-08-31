import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import storeConfig from './store.cfg'

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store(storeConfig);

describe("store testing:", () => {

  it("get tasks from local storage", () => {
    store.dispatch("getFromLocalStorage");
    expect(store.state.tasksList.length).toBe(0);
  });

  it("Add new task", () => {
    const task = "newTask";
    store.commit('addNewTask', task);

    expect(store.state.tasksList[0].text).toBe(task);
    expect(store.state.tasksList[0].isChecked).toBe(false);
    expect(store.state.tasksList[0].id).toBeTruthy();
  });

  it("save tasks to local storage", () => {
    store.dispatch("saveToLocalStorage");
    expect(store.state.tasksList.length).toBe(1);
  });

  it("get tasks from local storage after saving", () => {
    store.dispatch("getFromLocalStorage");
    expect(store.state.tasksList.length).toBe(1);
  });

  it("change status task", () => {
    const id = store.state.tasksList[0].id;
    store.commit("changeStatusTask", id);
    expect(store.state.tasksList[0].isChecked).toBe(true);
  });

  it("Delete one task", () => {
    const id = store.state.tasksList[0].id;
    store.commit("deleteTask", id);
    expect(store.state.tasksList.length).toBe(0);
  });

  it("change active filter", () => {
    const filter = 'active';
    store.commit("changeActiveFilter", filter);
    expect(store.state.activeFilter).toBe(filter);
  });

  it("change active filter", () => {
    const filter = 'active';
    store.commit("changeActiveFilter", filter);
    expect(store.state.activeFilter).toBe(filter);
  });

});