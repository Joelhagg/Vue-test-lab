import { mount } from "@vue/test-utils";
import Bilingual from "../../src/components/Bilingual.vue";

describe("Bilingual", () => {
  it("renders successfully", () => {
    const wrapper = mount(Bilingual);

    console.log(wrapper.html());
    // const wrapper = mount(Bilingual, {
    //   mocks: {
    //     $t: (msg) => msg,
    //   },
    // });
  });
});
