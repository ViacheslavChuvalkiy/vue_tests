import {mount, createLocalVue} from "@vue/test-utils";
import Vuex from 'vuex';
import Task from "@/components/molecules/Task.vue";

const localVue = createLocalVue();
localVue.use(Vuex);
const mutations = {
  changeStatusTask: jest.fn(),
  deleteTask: jest.fn(),
  saveDataLocalStorage: jest.fn(),
};
const store = new Vuex.Store({mutations});
describe('task component - mutations, methods', () => {
  it('task input button mutations', async () => {
    const wrapper = mount(Task, {store, localVue});
    expect(wrapper.vm).toBeTruthy();
    const input_task = wrapper.find("input");
    input_task.trigger("submit.prevent");
    input_task.trigger("change");
    expect(mutations.changeStatusTask).toHaveBeenCalled();
  });
  it('task button del mutations', async () => {
    const wrapper = mount(Task, {store, localVue});
    expect(wrapper.vm).toBeTruthy();
    const button_delete = wrapper.find("button");
    await button_delete.trigger("submit.prevent");
    await button_delete.trigger("click");
    expect(mutations.deleteTask).toHaveBeenCalled();
  });
  it('p text - props', async () => {
    const wrapper = mount(Task, {
      propsData: {
        taskText: 'Test',
      }
    });
    const p_text = wrapper.find('p');
    expect(p_text).toBeTruthy();
    expect(wrapper.html()).toContain('<p>Test</p>');
  });
});
