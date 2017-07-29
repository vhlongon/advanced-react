import { delay } from 'redux-saga';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { CHANGE_AUTH, SIGNIN_SUBMIT, SIGNIN_SUCCESS } from '../actions/types';
import history from '../history';
import { paths } from '../components/Routes';
import { signinSuccess, signinFailure } from '../actions/authenticate';
import { getIsAuthenticated } from '../selectors';

const ROOT_URL = 'http://localhost:3090';

export const setItemToLocalStorage = token =>
  window.localStorage && localStorage.setItem('reactAuthToken', token);
export const removeItemFromLocalStorage = () =>
  window.localStorage && localStorage.removeItem('reactAuthToken');

export function* authChange() {
  const isAuthenticated = yield select(getIsAuthenticated);
  yield delay(500);
  if (isAuthenticated) {
    yield call(history.push, paths.resources);
  }
}

export function* watchAuthChange() {
  yield takeLatest(CHANGE_AUTH, authChange);
}

export function* formSignin({ payload }) {
  // console.log(payload);
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

export function* watchSignin() {
  yield takeLatest(SIGNIN_SUBMIT, formSignin);
}

export default function* root() {
  yield all([watchAuthChange(), watchSignin()]);
}
