/* eslint-disable linebreak-style */

import { put, call } from 'redux-saga/effects';
import Actions from './actions';

export function* loginRequest(api, { login }) {
  const response = yield call(api.loginRequest, login);
  if (response.data !== 'ERROR') {
    yield put(Actions.Creators.loginSuccess(response.data));
  } else {
    yield put(Actions.Creators.loginFailure());
  }
}

export function* loginCreate(api, { login }) {
  const response = yield call(api.loginCreate, login);
  if (response.data !== 'ERROR') {
    yield put(Actions.Creators.loginCreateSuccess(response.data));
  } else {
    yield put(Actions.Creators.loginCreateFailure());
  }
}
