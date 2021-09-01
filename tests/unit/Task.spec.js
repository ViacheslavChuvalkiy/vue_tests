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
    const inputTask = wrapper.find("input");
    inputTask.trigger("submit.prevent");
    inputTask.trigger("change");
    expect(mutations.changeStatusTask).toHaveBeenCalled();
  });
  it('task button del mutations', async () => {
    const wrapper = mount(Task, {store, localVue});
    expect(wrapper.vm).toBeTruthy();
    const buttonDelete = wrapper.find("button");
    await buttonDelete.trigger("submit.prevent");
    await buttonDelete.trigger("click");
    expect(mutations.deleteTask).toHaveBeenCalled();
  });
  it('p text - props', async () => {
    const wrapper = mount(Task, {
      propsData: {
        taskText: 'Test',
      }
    });
    const pText = wrapper.find('p');
    expect(pText).toBeTruthy();
    expect(wrapper.html()).toContain('<p>Test</p>');
  });
});
