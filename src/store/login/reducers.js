/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */

import { createReducer } from 'reduxsauce';
import Types from './types';

export const INITIAL_STATE = {
  login: {},
  loginCreated: {},
  status: 'NOOP',
  statusCreate: 'NOOP',
};

export const loginRequest = (state = INITIAL_STATE) => {
  return { ...state, status: 'ONGOING' };
};

export const loginSuccess = (state = INITIAL_STATE, { login }) => {
  return { ...state, status: 'SUCCESS', login };
};

export const loginFailure = (state = INITIAL_STATE) => {
  return { ...state, status: 'FAILURE' };
};

export const loginCreate = (state = INITIAL_STATE) => {
  return { ...state, statusCreate: 'ONGOING' };
};

export const loginCreateSuccess = (state = INITIAL_STATE, { login }) => {
  return { ...state, statusCreate: 'SUCCESS', loginCreated: login };
};

export const loginCreateFailure = (state = INITIAL_STATE) => {
  return { ...state, statusCreate: 'FAILURE' };
};

export const logout = (state = INITIAL_STATE) => {
  return { ...state, login: {} };
};

export const resetStatus = (state = INITIAL_STATE) => {
  return { ...state, status: 'NOOP', statusCreate: 'NOOP' };
};

export const HANDLERS = {
  [Types.LOGIN_REQUEST]: loginRequest,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILURE]: loginFailure,
  [Types.LOGIN_CREATE_REQUEST]: loginCreate,
  [Types.LOGIN_CREATE_SUCCESS]: loginCreateSuccess,
  [Types.LOGIN_CREATE_FAILURE]: loginCreateFailure,
  [Types.LOGOUT]: logout,
  [Types.RESET_STATUS]: resetStatus,
};

export default createReducer(INITIAL_STATE, HANDLERS);
