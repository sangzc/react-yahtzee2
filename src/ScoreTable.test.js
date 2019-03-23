import React from 'react';
import { shallow, mount } from "enzyme";
import ScoreTable from "./ScoreTable";
import toJson from "enzyme-to-json";

const scores = {
    ones: undefined,
    twos: undefined,
    threes: undefined,
    fours: undefined,
    fives: undefined,
    sixes: undefined,
    threeOfKind: undefined,
    fourOfKind: undefined,
    fullHouse: undefined,
    smallStraight: undefined,
    largeStraight: undefined,
    yahtzee: undefined,
    chance: undefined
}

it('renders without crashing', () => {
    shallow(<ScoreTable scores={scores}/>);
});

it('matches snapshot', () => {
    let wrapper = shallow(<ScoreTable scores={scores}/>);
    let serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
});