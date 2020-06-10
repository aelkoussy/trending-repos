import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { ListOfRepos } from "./ListOfRepos";

configure({ adapter: new Adapter() });

describe("<ListOfRepos />", () => {
  it("should render <ListOfRepos />  component", () => {
    const wrapper = mount(<ListOfRepos />);
    expect(wrapper.find(ListOfRepos)).toHaveLength(1);
  });
});
