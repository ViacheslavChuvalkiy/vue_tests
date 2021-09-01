import {mount, createLocalVue} from "@vue/test-utils";
import Vuex from 'vuex';
import NewTask from "@/components/atoms/TaskInput.vue";

const localVue = createLocalVue();
localVue.use(Vuex);
const mutations = {
  addNewTask: jest.fn(),
  saveDataLocalStorage: jest.fn(),
};
const store = new Vuex.Store({mutations});
describe('new task component - mutations', () => {
  it('new task input button mutations', async () => {
    const wrapper = mount(NewTask, {store, localVue});
    expect(wrapper.vm).toBeTruthy();
    const inputTask = wrapper.find("input");
    inputTask.trigger("submit.prevent");
    inputTask.trigger("keypress.enter");
    expect(mutations.addNewTask).toHaveBeenCalled();
  });
  it('new task value data', async () => {
    const wrapper = mount(NewTask, {store, localVue});
    expect(wrapper.vm).toBeTruthy();
    await wrapper.setData({value: 'test data'})
    expect(wrapper.vm.value).toBe('test data')
  });
});
