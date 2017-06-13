import React from 'react';
import { App } from '../App';
import { Routes } from '../Routes';
import { shallow } from 'enzyme';

describe('App', () => {

  it('should render the correct title', () => {
    const wrapper = shallow(<App title="title" />);
    expect(wrapper.find('.app__title').text()).toBe('title');
  });
  
  it('should render the correct log status when logged-in', () => {
    const wrapper = shallow(<App authenticated />);
    expect(wrapper.find('.app__status').text()).toBe('You are: Logged-in');
  });

  it('should render the correct log status when logged-out', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.app__status').text()).toBe('You are: Logged-out');
  });
  
  it('should always render a Routes component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Routes).length).toBe(1);
  });
});
