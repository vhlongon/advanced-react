import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure
} from '../fetchUsers';
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from '../types';

describe('fetchUsers', () => {
  describe('fetchUsersRequest', () => {
    it('returns the correct type', () => {
      expect(fetchUsersRequest().type).toEqual(FETCH_USERS_REQUEST);
    });
  });

  describe('fetchUsersSuccess', () => {
    it('returns the correct type', () => {
      expect(fetchUsersSuccess().type).toEqual(FETCH_USERS_SUCCESS);
    });
    it('returns the correct payload', () => {
      const data = 'data';
      expect(fetchUsersSuccess(data).payload).toEqual(data);
    });
  });
  describe('fetchUsersFailure', () => {
    it('returns the correct type', () => {
      expect(fetchUsersFailure().type).toEqual(FETCH_USERS_FAILURE);
    });
    it('returns the correct payload', () => {
      const error = 'error';
      expect(fetchUsersFailure(error).error).toEqual(error);
    });
  });
});
