import {mount, createLocalVue} from "@vue/test-utils";
import Vuex from 'vuex';
import TaskList from "@/components/organisms/TaskList.vue";

const localVue = createLocalVue();
localVue.use(Vuex);
const getters = {
  listTasks: jest.fn()
};
const store = new Vuex.Store({getters});
describe('task list component - getters', () => {
  it('task list get data - true', async () => {
    const wrapper = mount(TaskList, {
      store, localVue, computed: {
        isEmpty() {
          return false;
        },
      },
      methods: {}
    });
    expect(wrapper.vm).toBeTruthy();
    const divTask = wrapper.find("div");
    expect(divTask.exists()).toBe(true);
  });
  it('task list get data - false', async () => {
    const wrapper = mount(TaskList, {
      store, localVue, computed: {
        isEmpty() {
          return true;
        },
      },
      methods: {}
    });
    expect(wrapper.vm).toBeTruthy();
    const emptyTitle = wrapper.find('h2');
    expect(emptyTitle.exists()).toBe(true);
    expect(emptyTitle.html()).toContain('<h2>добавьте задачи к выполнению!!!</h2>');
  });
});
