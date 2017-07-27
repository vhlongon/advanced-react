import { delay } from 'redux-saga';
import { all, call, select, takeEvery } from 'redux-saga/effects';
import { CHANGE_AUTH } from '../actions/types';
import history from '../history';
import { paths } from '../components/Routes';

const getIsAuthenticated = state => state.isAuthenticated;

export function* authChange() {
  const isAuthenticated = yield select(getIsAuthenticated);
  yield delay(500);
  if (isAuthenticated) {
    yield call(history.push, paths.resources);
  }
}

export function* watchAuthChange() {
  yield takeEvery(CHANGE_AUTH, authChange);
}

export default function* sagas() {
  yield all([watchAuthChange()]);
}