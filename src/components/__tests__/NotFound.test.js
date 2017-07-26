import React from 'react';
import NotFound from '../NotFound';
import { shallow } from 'enzyme';

describe('App', () => {
  it('renders the correct text', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper.text()).toBe('Not found');
  });
});
