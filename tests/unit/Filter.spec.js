import {mount, createLocalVue} from "@vue/test-utils";
import Vuex from 'vuex';
import Filter from "@/components/molecules/Filter.vue";

const localVue = createLocalVue();
localVue.use(Vuex);
const mutations = {
  changeActiveFilter: jest.fn(),
};
const store = new Vuex.Store({mutations});
describe('filter component  - mutations', () => {
  it('Filter button', async () => {
    const wrapper = mount(Filter, {store, localVue});
    expect(wrapper.vm).toBeTruthy();
    const inputBtn = wrapper.find("input");
    await inputBtn.trigger("submit.prevent");
    await inputBtn.trigger("change");
    expect(mutations.changeActiveFilter).toHaveBeenCalled();
  });
  it('input radio button - props', async () => {
    const wrapper = mount(Filter, {
      propsData: {
        filterValue: 'Test',
        filterChecked: true
      }
    });
    const inputBtn = wrapper.find('input[type="radio"]');
    await inputBtn.trigger("submit.prevent");
    await inputBtn.setChecked();
    expect(inputBtn.element.checked).toBeTruthy();
    expect(inputBtn.element.value === 'Test').toBe(true);
  });
  it('span text - props', async () => {
    const wrapper = mount(Filter, {
      propsData: {
        filterText: 'Test',
      }
    });
    const spanText = wrapper.find('span');
    expect(spanText).toBeTruthy();
    expect(wrapper.html()).toContain('<span>Test</span>');
  });
});
