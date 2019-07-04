/* eslint-disable arrow-body-style */

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://52.89.227.235:8080/',
});

export default api;
