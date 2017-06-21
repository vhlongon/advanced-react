import React from 'react';
import User from '../User';
import { shallow } from 'enzyme';

describe('User', () => {
  it('should render a <li> with the correct class', () => {
    const wrapper = shallow(<User />);
    expect(wrapper.is('li.user')).toBe(true);
  });
  
  it('should the correct name', () => {
    const name = 'name';
    const wrapper = shallow(<User name={name} />);
    expect(wrapper.find('.user__name').text()).toBe(name);
  });

  it('should the correct company', () => {
    const company = 'company';
    const wrapper = shallow(<User company={company} />);
    expect(wrapper.find('.user__company').text()).toBe(company);
  });

  it('should the correct email', () => {
    const email = 'email';
    const wrapper = shallow(<User email={email} />);
    expect(wrapper.find('.user__email').prop('href')).toBe(`mailto:${email}`);
  });
  
});
