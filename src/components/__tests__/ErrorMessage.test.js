import React from 'react';
import ErrorMessage from '../ErrorMessage';
import { shallow } from 'enzyme';

describe('ErrorMessage', () => {
  it('renders correct class', () => {
    const wrapper = shallow(<ErrorMessage />);
    expect(wrapper.hasClass('error-message')).toBeTruthy();
  });
  it('renders correct text', () => {
    const text = 'text';
    const wrapper = shallow(<ErrorMessage text={text} />);
    expect(wrapper.text()).toEqual(text);
  });
});
