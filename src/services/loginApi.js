/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */

import api from '.';

export const instance = {
  loginRequest: (login) => {
    return api.post('authenticate/', login);
  },
  loginCreate: (login) => {
    return api.post('account/', login);
  },
};

export default instance;
