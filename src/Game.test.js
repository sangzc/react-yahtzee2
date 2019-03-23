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


it("prevents rolling past 0 rerolls", () => {
    const wrapper = mount(<Game />);
    wrapper.setState({
        locked: [false, false, false, false, false],
        rollsLeft: 0
      });
    const rerollButton = wrapper
      .find(".Game-reroll")
      .first()
    expect(rerollButton.html()).toContain("disabled");
  });

