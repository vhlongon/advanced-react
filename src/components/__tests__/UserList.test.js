import React from 'react';
import { UserList } from '../UserList';
import User from '../User';
import { shallow } from 'enzyme';

describe('UserList', () => {
  it('should render a <ul> with the correct class', () => {
    const wrapper = shallow(<UserList users={[]} />);
    expect(wrapper.is('ul.userlist')).toBe(true);
  });
  
  it('should the correct number of users', () => {
    const wrapper = shallow(<UserList users={['Hej', 'Ho', 'Lets go']} />);
    expect(wrapper.find(User).length).toBe(3);
  });
  
});
