import { all, spawn } from 'redux-saga/effects';

import dashboardSaga from 'sagas/dashboardSaga';
import filterSaga from 'sagas/filterSaga';

function* sagas() {
  yield all([
    spawn(dashboardSaga),
    spawn(filterSaga),
  ]);
}

export default sagas;
