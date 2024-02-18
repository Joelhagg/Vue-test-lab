import { mount } from "@vue/test-utils";
import SubmitButton from "@/components/SubmitButton.vue";

// describe("SubmitButton.vue", () => {
//   it("is a Vue instance", () => {
//     const wrapper = mount(SubmitButton);
//     expect(wrapper.vm).toBeTruthy();
//   });

//   it("displays a non authorized message", () => {
//     const msg = "submit";
//     const wrapper = mount(SubmitButton, {
//       propsData: {
//         msg: msg,
//       },
//     });

//     console.log(wrapper.html());

//     expect(wrapper.find("span").text()).toBe("Not Authorized");
//     expect(wrapper.find("button").text()).toBe("submit");
//   });

//   it("displays a admin privileges message", () => {
//     const msg = "submit";
//     const isAdmin = true;
//     const wrapper = mount(SubmitButton, {
//       propsData: {
//         msg,
//         isAdmin,
//       },
//     });

//     console.log(wrapper.html());

//     expect(wrapper.find("span").text()).toBe("Admin Privileges");
//     expect(wrapper.find("button").text()).toBe("submit");
//   });
// });

// next test

describe("SubmitButton", () => {
  const msg = "submit";
  const factory = (propsData) => {
    return mount(SubmitButton, {
      propsData: {
        msg,
        ...propsData,
      },
    });
  };
  describe("does not have admin privileges", () => {
    it("renders a message", () => {
      const wrapper = factory();

      expect(wrapper.find("span").text()).toBe("Not Authorized");
      expect(wrapper.find("button").text()).toBe("submit");
    });
  });

  describe("has admin privileges", () => {
    it("renders a message", () => {
      const wrapper = factory({ isAdmin: true });

      expect(wrapper.find("span").text()).toBe("Admin Privileges");
      expect(wrapper.find("button").text()).toBe("submit");
    });
  });
});
