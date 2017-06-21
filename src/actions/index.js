import { FETCH_USERS } from './types';

const mockData = [
  {name: 'Deedee', company: 'Ramones', email: 'deedee@ramones.com'},
  {name: 'Joey', company: 'Ramones', email: 'joey@ramones.com'},
  {name: 'Jhonny', company: 'Ramones', email: 'jhonny@ramones.com'},
  {name: 'Marc', company: 'Ramones', email: 'marc@ramones.com'}
]
export const fetchUsers = (users = mockData) => ({
  type: FETCH_USERS,
  payload: users
});