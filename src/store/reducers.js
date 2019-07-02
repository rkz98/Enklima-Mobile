import { combineReducers } from 'redux';
import LoginReducer from './login/reducers';
import ReportsReducer from './reports/reducers';

const reducers = combineReducers({
  login: LoginReducer,
  reports: ReportsReducer,
});

export default reducers;
