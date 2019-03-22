import React from 'react';
import { mount } from "enzyme";
import Game from "./Game"
import toJson from "enzyme-to-json"

it('renders without crashing', () => {
    mount(<Game />);
});

it("handles locking of dice", () => {
    const wrapper = mount(<Game />);
    expect(wrapper.state().locked).toEqual([false, false, false, false, false]);
    wrapper
      .find(".Die")
      .at(0)
      .simulate("click");
    expect(wrapper.state().locked).toEqual([true, false, false, false, false]);
  });