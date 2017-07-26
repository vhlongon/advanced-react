import React from 'react';
import Resources from '../Resources';
import { shallow } from 'enzyme';

describe('App', () => {
  it('has the correct class the routes', () => {
    const wrapper = shallow(<Resources />);
    expect(wrapper.text()).toBe('Protected resources');
  });
});
