/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
import { createReducer } from 'reduxsauce';
import Types from './types';

export const INITIAL_STATE = {
  login: {},
  status: 'NOOP',
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

export const logout = (state = INITIAL_STATE) => {
  return { ...state, login: {} };
};

export const resetStatus = (state = INITIAL_STATE) => {
  return { ...state, status: 'NOOP' };
};

export const HANDLERS = {
  [Types.LOGIN_REQUEST]: loginRequest,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILURE]: loginFailure,
  [Types.LOGOUT]: logout,
  [Types.RESET_STATUS]: resetStatus,
};

export default createReducer(INITIAL_STATE, HANDLERS);
