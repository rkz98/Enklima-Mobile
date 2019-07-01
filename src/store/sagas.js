import { all, takeLatest } from 'redux-saga/effects';
import LoginActions from './login/actions';
import { loginRequest } from './login/sagas';
import LoginApi from '~/services/loginApi';

export default function* rootSaga() {
  yield all([
    takeLatest(LoginActions.Types.LOGIN_REQUEST, loginRequest, LoginApi),
  ]);
}
