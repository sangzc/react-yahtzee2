import React from 'react';
import { mount } from "enzyme";
import Die from "./Die";
import toJson from "enzyme-to-json"


it('renders without crashing', () => {
    mount(<Die value="1"/>);
});

it('locks die', () => {
    let wrapper = mount(<Die locked value="1"/>);
    let serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
});

it('keeps die unlocked', () => {
    let wrapper = mount(<Die value="1"/>);
    let serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
});

it('does clicking work test', () => {
    let clickFn = jest.fn();
    let wrapper = mount(<Die handleToggleLocked={clickFn} value="1"/>);
    wrapper.simulate("click");
    expect(clickFn).toHaveBeenCalled();
});




