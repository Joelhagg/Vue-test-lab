import { mount } from "@vue/test-utils";
import FormSubmitter from "@/components/FormSubmitter.vue";
import flushPromises from "flush-promises";

let url = "";
let data = "";

const mockHttp = {
  get: (_url, _data) => {
    return new Promise((resolve, reject) => {
      url = _url;
      data = _data;
      resolve();
    });
  },
};

describe("FormSubmitter", () => {
  //   it("reveals a notification when submitted", async () => {
  //     const wrapper = mount(FormSubmitter);

  //     await wrapper.find("[data-username]").setValue("alice");
  //     await wrapper.find("form").trigger("submit.prevent");

  //     expect(wrapper.find(".message").text()).toBe(
  //       "Thank you for your submission, alice."
  //     );
  //   });

  //   it("reveals a notification when submitted", () => {
  //     const wrapper = mount(FormSubmitter, {
  //       mocks: {
  //         $http: mockHttp,
  //       },
  //     });

  //     wrapper.find("[data-username]").setValue("alice");
  //     wrapper.find("form").trigger("submit.prevent");

  //     expect(wrapper.find(".message").text()).toBe(
  //       "Thank you for your submission, alice."
  //     );
  //   });

  it("reveals a notification when submitted", async () => {
    const wrapper = mount(FormSubmitter, {
      mocks: {
        $http: mockHttp,
      },
    });

    await wrapper.find("[data-username]").setValue("alice");
    await wrapper.find("form").trigger("submit.prevent");

    await flushPromises();

    expect(wrapper.find(".message").text()).toBe(
      "Thank you for your submission, alice."
    );

    expect(url).toBe("/api/v1/register");
    expect(data).toEqual({ username: "alice" });
  });
});
