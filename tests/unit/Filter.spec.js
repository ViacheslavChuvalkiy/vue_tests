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
    const input_btn = wrapper.find("input");
    await input_btn.trigger("submit.prevent");
    await input_btn.trigger("change");
    expect(mutations.changeActiveFilter).toHaveBeenCalled();
  });
  it('input radio button - props', async () => {
    const wrapper = mount(Filter, {
      propsData: {
        filterValue: 'Test',
        filterChecked: true
      }
    });
    const input_btn = wrapper.find('input[type="radio"]');
    await input_btn.trigger("submit.prevent");
    await input_btn.setChecked();
    expect(input_btn.element.checked).toBeTruthy();
    expect(input_btn.element.value === 'Test').toBe(true);
  });
  it('span text - props', async () => {
    const wrapper = mount(Filter, {
      propsData: {
        filterText: 'Test',
      }
    });
    const span_text = wrapper.find('span');
    expect(span_text).toBeTruthy();
    expect(wrapper.html()).toContain('<span>Test</span>');
  });
});
