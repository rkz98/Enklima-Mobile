/* eslint-disable linebreak-style */

import { put, call } from 'redux-saga/effects';
import Actions from './actions';

export function* loginRequest(api, { login }) {
  const response = yield call(api.loginRequest, login);
  if (response.ok) {
    yield put(Actions.Creators.loginSuccess(response.data));
  } else {
    yield put(Actions.Creators.loginFailure());
  }
}
