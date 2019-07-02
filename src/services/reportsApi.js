/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
import api from '.';

export const instance = {
  reportCreate: (report) => {
    return api.post('/', report);
  },
  reportsRequest: () => {
    return api.get('/');
  },
};

export default instance;
