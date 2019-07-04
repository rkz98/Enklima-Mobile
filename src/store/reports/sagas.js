/* eslint-disable linebreak-style */

import { put, call } from 'redux-saga/effects';
import Actions from './actions';

export function* reportCreate(api, { report }) {
  const response = yield call(api.reportCreate, report);
  if (response.data !== 'ERROR') {
    yield put(Actions.Creators.reportCreateSuccess(response.data));
  } else {
    yield put(Actions.Creators.reportCreateFailure());
  }
}

export function* reportsRequest(api, { status }) {
  const response = yield call(api.reportsRequest, status);
  if (response.data !== 'ERROR') {
    yield put(Actions.Creators.reportsRequestSuccess(response.data));
  } else {
    yield put(Actions.Creators.reportsRequestFailure());
  }
}
