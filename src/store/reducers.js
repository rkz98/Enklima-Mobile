import { combineReducers } from 'redux';
import LoginReducer from './login/reducers';

const reducers = combineReducers({
  login: LoginReducer,
});

export default reducers;
