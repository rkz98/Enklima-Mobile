/* eslint-disable linebreak-style */

import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  reportCreate: ['report'],
  reportCreateSuccess: ['report'],
  reportCreateFailure: ['error'],

  reportsRequest: null,
  reportsRequestSuccess: ['reports'],
  reportsRequestFailure: ['error'],
  resetStatus: null,
}, {});

const Actions = {
  Types,
  Creators,
};

export default Actions;
