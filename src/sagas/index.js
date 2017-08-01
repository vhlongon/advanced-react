import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { SIGNIN_SUBMIT, SIGNUP_SUBMIT, SIGNOUT } from '../actions/types';
import history from '../history';
import { paths } from '../components/Routes';
import { signinSuccess, signinFailure } from '../actions/authenticate';

const ROOT_URL = 'http://localhost:3090';

export const getItemFromLocalStorate = () =>
  window.localStorage && localStorage.getItem('reactAuthToken');
export const setItemToLocalStorage = token =>
  window.localStorage && localStorage.setItem('reactAuthToken', token);
export const removeItemFromLocalStorage = () =>
  window.localStorage &&
  getItemFromLocalStorate() &&
  localStorage.removeItem('reactAuthToken');

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
    yield token;
    yield call(setItemToLocalStorage, token);
    yield put(signinSuccess());
    yield call(history.push, paths.resources);
  } catch (error) {
    //yield call(removeItemFromLocalStorage);
    const errorMessage = yield 'Bad login info';
    yield put(signinFailure(errorMessage));
  }
}

export function* formSignup({ payload }) {}

export function* watchSignin() {
  yield takeLatest(SIGNIN_SUBMIT, formSignin);
}

export function* watchSignup() {
  yield takeLatest(SIGNUP_SUBMIT, formSignup);
}

export default function* root() {
  yield all([watchSignout(), watchSignin(), watchSignup()]);
}
