import { call, takeLatest, put } from 'redux-saga/effects';

import DashboardApi from 'api/DashboardApi';

import IS_DEV from 'constants/global';

import {
  loadFlightDataSuccess,
  loadFlightDataFailure,
  LOAD_FLIGHT_DATA,
  LOAD_FLIGHT_DATA_ACTION,
} from 'actions/DashboardActions';

import { sortFlightData } from 'utils/sortFlightData';

function* loadFlightDataFunction(action: LOAD_FLIGHT_DATA_ACTION) {
  const { payload } = action;

  try {
    const { data, status } = yield call(DashboardApi.loadFlightData, payload);

    if (status === 200) {
      yield put(loadFlightDataSuccess({ pagination: data.pagination, data: sortFlightData(data.data) }));
    } else {
      IS_DEV && console.log('[LOAD FLIGHT] Error');
      yield put(loadFlightDataFailure());
    }
  } catch (e) {
    IS_DEV && console.log('error', e);
    yield put(loadFlightDataFailure());
  }
}

export default function* dashboardSaga() {
  yield takeLatest(LOAD_FLIGHT_DATA, loadFlightDataFunction);
}
