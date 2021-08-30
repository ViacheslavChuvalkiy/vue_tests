import {mount} from "@vue/test-utils";
import Header from "@/components/organisms/Header.vue";

describe("Header", () => {
  test("Vue component", () => {
    const wrapper = mount(Header);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  test("There is h2", () => {
    const wrapper = mount(Header);
    expect(wrapper.contains('div > h2')).toBe(true);
  });
  test("There is title", () => {
    const wrapper = mount(Header);
    expect(wrapper.html()).toContain('<h2>to do list</h2>');
  });
  test("header visible", () => {
    const wrapper = mount(Header);
    expect(wrapper.isVisible()).toBe(true);
  });
});