import {shallowMount, createLocalVue} from "@vue/test-utils";
import Vuex from 'vuex';
import Filters from "@/components/organisms/Filters.vue";

const localVue = createLocalVue();
localVue.use(Vuex);
const getters = {
  filterList: jest.fn()
};
const store = new Vuex.Store({getters});
describe('Buttons of filter', () => {
  it('Filters component', () => {
    const wrapper = shallowMount(Filters, {store, localVue});
    expect(wrapper.vm).toBeTruthy();
    expect(getters.filterList).toHaveBeenCalled();
  })
});
