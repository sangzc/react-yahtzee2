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

