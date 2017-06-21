import React from 'react';
import { App } from '../App';
import { shallow } from 'enzyme';
import UserList from '../UserList';

describe('App', () => {
  it('should render the correct title', () => {
    const wrapper = shallow(<App title="title" />);
    expect(wrapper.find('.app__title').text()).toBe('title');
  });
  
  it('should render a UserList', () => {
    const wrapper = shallow(<App title="title" />);
    expect(wrapper.find(UserList).length).toBe(1);
  });
  
});
