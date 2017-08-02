import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from './types';

export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST
});

export const fetchUsersSuccess = payload => ({
  type: FETCH_USERS_SUCCESS,
  payload
});

export const fetchUsersFailure = error => ({
  type: FETCH_USERS_FAILURE,
  error
});
