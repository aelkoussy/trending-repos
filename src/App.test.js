import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import App from "./App";

configure({ adapter: new Adapter() });

describe("<App />", () => {
  it("should render <App /> ", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(App)).toHaveLength(1);
  });
});
