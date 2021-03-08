import {
  LOAD_FLIGHT_DATA,
  LOAD_FLIGHT_DATA_SUCCESS,
  LOAD_FLIGHT_DATA_FAILURE,
} from 'actions/DashboardActions';

import Status from 'types/StatusType';
import { ActionType } from 'types/ActionsType';

const initialState = {
  flightData: [],
  flightDataStatus: Status.DEFAULT,
};

export interface StateType {
  flightData: string[];
  flightDataStatus: Status;
}

export default function dashboardState(state: StateType = initialState, action: ActionType): StateType {
  switch (action.type) {
    case LOAD_FLIGHT_DATA:
      return {
        ...state,
        flightDataStatus: Status.LOADING,
      };

    case LOAD_FLIGHT_DATA_SUCCESS:
      return {
        ...state,
        flightDataStatus: Status.SUCCESS,
        flightData: action.payload,
      };

    case LOAD_FLIGHT_DATA_FAILURE:
      return {
        ...state,
        flightDataStatus: Status.FAIL,
      };

    default:
      return state;
  }
}
