import React from 'react';
import { mount } from "enzyme";
import ScoreTable from "./ScoreTable";
import toJson from "enzyme-to-json";

it('renders without crashing', () => {
    mount(<ScoreTable />);
});

it('matches snapshot', () => {
    let wrapper = mount(<ScoreTable scores={{test: undefined}}/>);
    let serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
});