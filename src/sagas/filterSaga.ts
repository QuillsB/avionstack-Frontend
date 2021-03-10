import { call, takeLatest, put } from 'redux-saga/effects';

import FilterApi from 'api/FilterApi';

import IS_DEV from 'constants/global';

import {
  loadAirlinesDataSuccess,
  loadAirlinesDataFailure,
  LOAD_AIRLINES_DATA,
} from 'actions/FilterActions';

import { airlineDataToArray } from 'utils/airlineDataToArray';

function* loadAirlinesDataFunction() {
  try {
    const { data, status } = yield call(FilterApi.loadAirlinesData);

    if (status === 200) {
      yield put(loadAirlinesDataSuccess({ data: airlineDataToArray(data.data) }));
    } else {
      IS_DEV && console.log('[LOAD AIRLINES] Error');
      yield put(loadAirlinesDataFailure());
    }
  } catch (e) {
    IS_DEV && console.log('error', e);
    yield put(loadAirlinesDataFailure());
  }
}

export default function* filterSaga() {
  yield takeLatest(LOAD_AIRLINES_DATA, loadAirlinesDataFunction);
}
