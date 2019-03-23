import React from 'react';
import { mount } from "enzyme";
import RuleRow from "./RuleRow"
import toJson from "enzyme-to-json"

it('renders without crashing', () => {
    mount(<RuleRow />);
});

it('matches snapshot', () => {
    let wrapper = mount(<RuleRow />);
    let serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
});

it('does clicking the rulerow call any function if score = undefined', () => {
    let clickFn = jest.fn();
    let wrapper = mount(<RuleRow doScore={clickFn} score={undefined}/>);
    wrapper.find(".RuleRow").first().simulate("click");
    expect(clickFn).toHaveBeenCalled();
});

it('does clicking the rulerow NOT call a function if score IS 0 (defined value)', () => {
    let clickFn = jest.fn();
    let wrapper = mount(<RuleRow doScore={clickFn} score={0}/>);
    wrapper.find(".RuleRow").first().simulate("click");
    expect(clickFn).not.toHaveBeenCalled();
});