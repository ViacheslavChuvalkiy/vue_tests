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
    const div_task = wrapper.find("div");
    expect(div_task.exists()).toBe(true);
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
    const empty_title = wrapper.find('h2');
    expect(empty_title.is('h2')).toBe(true);
    expect(empty_title.html()).toContain('<h2>добавьте задачи к выполнению!!!</h2>');
  });
});
