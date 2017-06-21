import { FETCH_USERS } from '../types';
import { fetchUsers } from '../index';
import moxios from 'moxios';

describe('fetchUsers', () => {
  beforeEach(function() {
    // import and pass your custom axios instance to this method
    moxios.install();
  });
  afterEach(function() {
    // import and pass your custom axios instance to this method
    moxios.uninstall();
  });

  it('should return FETCH_USERS action with the correct payload', () => {
    const users = [
      {
        name: 'Deedee',
        company: 'Ramones',
        email: 'deedee@ramones.com',
        id: 1
      },
      { name: 'Joey', company: 'Ramones', email: 'joey@ramones.com', id: 2 },
      {
        name: 'Jhonny',
        company: 'Ramones',
        email: 'jhonny@ramones.com',
        id: 3
      },
      { name: 'Marc', company: 'Ramones', email: 'marc@ramones.com', id: 4 }
    ];
    const action = {
      type: FETCH_USERS,
      payload: { data: users }
    };
    moxios.wait(() => {
      moxios.requests.mostRecent()
        .respondWith({
          status: 200,
          response: {
            data: users
          }
        })
        .then(() => expect(fetchUsers()).toEqual(action));
    });
  });
});
