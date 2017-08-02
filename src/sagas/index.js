import { delay } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { removeItemFromLocalStorage, setItemToLocalStorage } from './utils';
import axios from 'axios';
import { SIGNIN_SUBMIT, SIGNUP_SUBMIT, SIGNOUT } from '../actions/types';
import history from '../history';
import { paths } from '../components/Routes';
import {
  signinSuccess,
  signinFailure,
  signupSuccess,
  signupFailure,
  clearFormError
} from '../actions/authenticate';

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
    const errorMessage = yield 'Bad login info';
    yield put(signinFailure(errorMessage));
    yield delay(1500);
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
    const { response: { data } } = yield error;
    yield put(signupFailure(data));
    yield delay(1500);
    yield put(clearFormError());
  }
}

export function* watchSignin() {
  yield takeLatest(SIGNIN_SUBMIT, formSignin);
}

export function* watchSignup() {
  yield takeLatest(SIGNUP_SUBMIT, formSignup);
}

export default function* root() {
  yield all([watchSignout(), watchSignin(), watchSignup()]);
}
