import { delay } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  getItemFromLocalStorate,
  removeItemFromLocalStorage,
  setItemToLocalStorage
} from './utils';
import axios from 'axios';
import {
  SIGNIN_SUBMIT,
  SIGNUP_SUBMIT,
  SIGNOUT,
  FETCH_USERS_REQUEST
} from '../actions/types';
import history from '../history';
import { paths } from '../components/Routes';
import {
  signinSuccess,
  signinFailure,
  signupSuccess,
  signupFailure,
  clearFormError
} from '../actions/authenticate';

import { fetchUsersSuccess, fetchUsersFailure } from '../actions/fetchUsers';
const ROOT_URL = 'http://localhost:3090';

export function* formSignout() {
  yield call(history.push, paths.home);
  yield call(removeItemFromLocalStorage);
}

export function* watchSignout() {
  yield takeLatest(SIGNOUT, formSignout);
}

export function* formSignin({ payload }) {
  try {
    const result = yield call(axios.post, `${ROOT_URL}/signin`, payload);
    const { data: { token } } = result;
    yield call(setItemToLocalStorage, token);
    yield put(signinSuccess());
    yield call(history.push, paths.resources);
  } catch (error) {
    const { response: { data } } = error;
    yield put(signinFailure(data));
    yield delay(1800);
    yield put(clearFormError());
  }
}

export function* formSignup({ payload }) {
  try {
    const result = yield call(axios.post, `${ROOT_URL}/signup`, payload);
    const { data: { token } } = result;
    yield call(setItemToLocalStorage, token);
    yield put(signupSuccess());
    yield call(history.push, paths.resources);
  } catch (error) {
    const { response: { data } } = error;
    yield put(signupFailure(data));
    yield delay(1800);
    yield put(clearFormError());
  }
}

export function* usersFetch() {
  const requestOptions = {
    headers: { authorization: getItemFromLocalStorate() }
  };
  try {
    const result = yield call(axios.get, `${ROOT_URL}/users`, requestOptions);
    const { data } = result;
    yield put(fetchUsersSuccess(data));
  } catch (error) {
    const { response: { data } } = error;
    yield put(fetchUsersFailure(data));
  }
}

export function* watchSignin() {
  yield takeLatest(SIGNIN_SUBMIT, formSignin);
}

export function* watchSignup() {
  yield takeLatest(SIGNUP_SUBMIT, formSignup);
}

export function* watchFetchUsers() {
  yield takeLatest(FETCH_USERS_REQUEST, usersFetch);
}
export default function* root() {
  yield all([watchSignout(), watchSignin(), watchSignup(), watchFetchUsers()]);
}
