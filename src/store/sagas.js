import { all, takeLatest } from 'redux-saga/effects';
import LoginActions from './login/actions';
import ReportsActions from './reports/actions';
import { loginRequest } from './login/sagas';
import { reportsRequest, reportCreate } from './reports/sagas';
import LoginApi from '~/services/loginApi';
import ReportsApi from '~/services/reportsApi';

export default function* rootSaga() {
  yield all([
    takeLatest(LoginActions.Types.LOGIN_REQUEST, loginRequest, LoginApi),

    takeLatest(ReportsActions.Types.REPORT_CREATE, reportCreate, ReportsApi),
    takeLatest(ReportsActions.Types.REPORTS_REQUEST, reportsRequest, ReportsApi),
  ]);
}
