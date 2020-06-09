import { configure, mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { RepoItem } from "./RepoItem";

configure({ adapter: new Adapter() });

describe("<RepoItem />", () => {
  it("should render <RepoItem />  component", () => {
    const wrapper = mount(<RepoItem />);
    expect(wrapper.find(RepoItem)).toHaveLength(1);
  });

  it("Given name prop it shows a name title", () => {
    const wrapper = shallow(<RepoItem name="My awesome repo" />);
    expect(wrapper.contains(<h1>My awesome repo</h1>)).toBe(true);
  });
  it("Given description prop it shows a description", () => {
    const wrapper = shallow(<RepoItem description="Some nice description" />);
    expect(wrapper.contains(<p>Some nice description</p>)).toBe(true);
  });
  it("Given stars prop it shows a stars count", () => {
    const wrapper = shallow(<RepoItem stars={12345} />);
    expect(wrapper.contains(<h4>12345 stars</h4>)).toBe(true);
  });
  it("Given githubLink prop it shows a link", () => {
    const testLink = "https://github.com/testing-library/react-testing-library";
    const wrapper = shallow(<RepoItem githubLink={testLink} />);
    expect(wrapper.contains(<a href={testLink}>github link</a>)).toBe(true);
  });
});
