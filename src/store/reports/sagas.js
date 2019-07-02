/* eslint-disable linebreak-style */

import { put, call } from 'redux-saga/effects';
import Actions from './actions';

export function* reportCreate(api, { report }) {
  const response = yield call(api.reportsRequest, report);
  if (response.ok) {
    yield put(Actions.Creators.reportsCreateSuccess(response.data));
  } else {
    yield put(Actions.Creators.reportsCreateFailure());
  }
}

export function* reportsRequest(api, { status }) {
  const response = yield call(api.reportsRequest, status);
  if (response.ok) {
    yield put(Actions.Creators.reportsRequestSuccess(response.data));
  } else {
    yield put(Actions.Creators.reportsRequestFailure());
  }
}
