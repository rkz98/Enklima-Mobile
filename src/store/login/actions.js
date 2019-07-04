/* eslint-disable linebreak-style */

import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  loginRequest: ['login'],
  loginSuccess: ['login'],
  loginFailure: ['error'],
  loginCreate: ['login'],
  loginCreateSuccess: ['login'],
  loginCreateFailure: ['error'],
  logout: null,
  resetStatus: null,
}, {});

const Actions = {
  Types,
  Creators,
};

export default Actions;
