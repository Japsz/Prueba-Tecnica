import React from "react";
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import Index from './Single'
import {Provider} from "react-redux";
import store from '../../store/store'

configure({adapter: new Adapter})

describe('Index Test', () => {
  it('render', () => {
    const wrapper = shallow(<Provider store={store}><Index id={1}/></Provider>)
    expect(wrapper.find(Index)).toBeDefined()
  })
})