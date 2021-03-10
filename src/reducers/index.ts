import { combineReducers } from 'redux';

import dashboardState from 'reducers/dashboardReducer';
import filterState from 'reducers/filterReducer';

const reducers = {
  dashboardState,
  filterState,
};

export default combineReducers(reducers);
