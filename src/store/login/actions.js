/* eslint-disable linebreak-style */
import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  loginRequest: ['login'],
  loginSuccess: ['login'],
  loginFailure: ['error'],
  logout: null,
}, {});

const Actions = {
  Types,
  Creators,
};

export default Actions;
