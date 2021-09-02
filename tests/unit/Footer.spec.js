import {mount, createLocalVue} from "@vue/test-utils";
import Vuex from 'vuex';
import Footer from "@/components/organisms/Footer.vue";

const localVue = createLocalVue();
localVue.use(Vuex);
const getters = {
  countTask: jest.fn(),
  countActiveTask: jest.fn(),
  countCompletedTask: jest.fn(),
  getActiveFilter: jest.fn(),
  filterList: jest.fn()
};
const store = new Vuex.Store({getters});
describe('footer component - getters', () => {
  it('footer text test', () => {
    const wrapper = mount(Footer, {
      store, localVue, computed: {
        Tittle() {
          return "test title";
        },
      },
      methods: {}
    });
    expect(wrapper.vm).toBeTruthy();
    const pTask = wrapper.find("p");
    expect(pTask.exists()).toBe(true);
    expect(pTask.html()).toContain('<p>test title</p>');
  });
  it('formations title with getters', () => {
    const wrapper = mount(Footer, {
      store, localVue
    });
    expect(wrapper.vm).toBeTruthy();
    expect(getters.countActiveTask).toHaveBeenCalled();
    expect(getters.countTask).toHaveBeenCalled();
    expect(getters.getActiveFilter).toHaveBeenCalled();
  });
});
