import React from "react";
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import Index from './index'

configure({adapter: new Adapter})
import {Provider} from "react-redux";
import store from '../../../store/store'

describe('Index Test', () => {
  const wrapper = shallow(<Provider store={store}><Index id={1} tipo={'character'}/></Provider>)
  it('render', () => {
    expect(wrapper.find(Index)).toBeDefined()
  })

})