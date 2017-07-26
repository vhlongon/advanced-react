import React from 'react';
import { App } from '../App';
import { Routes } from '../Routes';
import { shallow } from 'enzyme';

describe('App', () => {
  it('has the correct class the routes', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.hasClass('app')).toBeTruthy();
  });

  it('renders the Routes', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Routes).length).toBe(1);
  });
});
