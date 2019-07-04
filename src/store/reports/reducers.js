/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */

import { createReducer } from 'reduxsauce';
import Types from './types';

export const INITIAL_STATE = {
  reports: [],
  report: {},
  status: 'NOOP',
  statusCreate: 'NOOP',
};

export const reportCreate = (state = INITIAL_STATE) => {
  return { ...state, statusCreate: 'ONGOING' };
};

export const reportCreateSuccess = (state = INITIAL_STATE, { report }) => {
  return { ...state, statusCreate: 'SUCCESS', report };
};

export const reportCreateFailure = (state = INITIAL_STATE) => {
  return { ...state, statusCreate: 'FAILURE' };
};

export const reportsRequest = (state = INITIAL_STATE) => {
  return { ...state, status: 'ONGOING' };
};

export const reportsRequestSuccess = (state = INITIAL_STATE, { reports }) => {
  return { ...state, status: 'SUCCESS', reports };
};

export const reportsRequestFailure = (state = INITIAL_STATE) => {
  return { ...state, status: 'FAILURE' };
};

export const resetStatus = (state = INITIAL_STATE) => {
  return { ...state, status: 'NOOP', statusCreate: 'NOOP' };
};

export const HANDLERS = {
  [Types.REPORT_CREATE]: reportCreate,
  [Types.REPORT_CREATE_SUCCESS]: reportCreateSuccess,
  [Types.REPORT_CREATE_FAILURE]: reportCreateFailure,
  [Types.REPORTS_REQUEST]: reportsRequest,
  [Types.REPORTS_REQUEST_SUCCESS]: reportsRequestSuccess,
  [Types.REPORTS_REQUEST_FAILURE]: reportsRequestFailure,
  [Types.RESET_STATUS]: resetStatus,
};

export default createReducer(INITIAL_STATE, HANDLERS);
