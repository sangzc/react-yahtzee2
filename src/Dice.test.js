import React from 'react';
import { mount } from "enzyme";
import Dice from "./Dice"
import toJson from "enzyme-to-json"

it('renders without crashing', () => {
    mount(<Dice />);
});

it('matches snapshot ofDice', () => {
    let wrapper = mount(<Dice locked={[true, false, true, false, true]}/>);
    let serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
});