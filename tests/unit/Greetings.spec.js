/* eslint-disable vue/multi-word-component-names */
import { mount } from "@vue/test-utils";
import Greeting from "@/components/Greeting.vue";
// import Vue from "vue";
// import { shallowMount } from "@vue/test-utils";

describe("Greeting.vue", () => {
  it("renders a greeting", () => {
    const wrapper = mount(Greeting);

    expect(wrapper.text()).toMatch("Vue and TDD");

    // const Child = Vue.component("Child", {
    //   name: "Child",

    //   template: "<div>Child component</div>",
    // });

    // const Parent = Vue.component("Parent", {
    //   name: "Parent",

    //   template: "<div><child /></div>",
    // });

    // const shallowWrapper = shallowMount(Child);
    // const mountWrapper = mount(Child);

    // console.log(shallowWrapper.html());
    // console.log(mountWrapper.html());

    // const shallowWrapper2 = shallowMount(Parent);
    // const mountWrapper2 = mount(Parent);

    // console.log(shallowWrapper2.html());
    // console.log(mountWrapper2.html());
  });
});
