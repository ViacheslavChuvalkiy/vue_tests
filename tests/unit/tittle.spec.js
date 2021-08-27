import { mount } from "@vue/test-utils";
import Header from "@/components/organisms/Header.vue";

describe("Header", () => {
  test("является экземпляром Vue", () => {
    const wrapper = mount(Header);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
