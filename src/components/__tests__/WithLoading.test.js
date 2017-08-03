import React from 'react';
import { Loader } from '../WithLoading';
import { shallow } from 'enzyme';

describe('WithLoading loader', () => {
  it('renders a loader div', () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper.hasClass('loader')).toBeTruthy();
    expect(wrapper.text()).toBe('Loading...');
  });
});
