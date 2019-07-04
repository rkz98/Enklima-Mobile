/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
import api from '.';

export const instance = {
  reportCreate: (report) => {
    return api.post('reports/', report);
  },
  reportsRequest: () => {
    return api.get('reports/get-reports-status');
  },
};

export default instance;
