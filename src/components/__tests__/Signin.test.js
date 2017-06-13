import React from 'react';
import Signin from '../Signin';
import { Link } from 'react-router-dom';
import { shallow } from 'enzyme';

describe('Signin', () => {
  it('should render the correct message when comming from redirect', () => {
    const message = '/the-message';
    const wrapper = shallow(<Signin location={{ state: { message } }} />);
    expect(wrapper.find('p').text()).toBe(message);
  });
  it('should render default message', () => {
    const message = '/the-message';
    const wrapper = shallow(<Signin location={{}} />);
    expect(wrapper.find('p').text()).toBe('Sign in section');
  });
});
