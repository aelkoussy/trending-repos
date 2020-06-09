import { configure, mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { ListOfRepos } from "./ListOfRepos";
import { RepoItem } from "../components/RepoItem";

configure({ adapter: new Adapter() });

describe("<ListOfRepos />", () => {
  it("should render <ListOfRepos />  component", () => {
    const wrapper = mount(<ListOfRepos />);
    expect(wrapper.find(ListOfRepos)).toHaveLength(1);
  });
});
