import React from 'react';
import Users from '../Users';
import { shallow } from 'enzyme';

describe('App', () => {
  it('has the correct class the routes', () => {
    const wrapper = shallow(<Users />);
    expect(wrapper.text()).toBe('Protected users');
  });
});
