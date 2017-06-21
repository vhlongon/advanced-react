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
    const users = [
      { name: 'Deedee', company: 'Ramones', email: 'deedee@ramones.com', id: 1 },
      { name: 'Joey', company: 'Ramones', email: 'joey@ramones.com', id: 2 },
      { name: 'Jhonny', company: 'Ramones', email: 'jhonny@ramones.com', id: 3 },
      { name: 'Marc', company: 'Ramones', email: 'marc@ramones.com', id: 4 }
    ];
    const wrapper = shallow(<UserList users={users} />);
    expect(wrapper.find(User).length).toBe(4);
  });
});
