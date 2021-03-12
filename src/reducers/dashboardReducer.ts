import {
  LOAD_FLIGHT_DATA,
  LOAD_FLIGHT_DATA_SUCCESS,
  LOAD_FLIGHT_DATA_FAILURE,
} from 'actions/DashboardActions';

import {
  defaultPaginationContent,
  FlightData,
  PaginationContent,
} from 'types/FlightType';

import { defaultFilterParams, FilterParams } from 'types/FilterParamsType';

import Status from 'types/StatusType';

import { ActionType } from 'types/ActionsType';

const initialState = {
  flightData: {
    pagination: defaultPaginationContent,
    data: []
  },
  flightDataStatus: Status.DEFAULT,
  flightParams: defaultFilterParams,
  pagination: defaultPaginationContent,
};

export interface StateType {
  flightData: {
    pagination: PaginationContent,
    data: FlightData[],
  };
  flightDataStatus: Status;
  flightParams: FilterParams;
  pagination: PaginationContent;
}

export default function dashboardState(state: StateType = initialState, action: ActionType): StateType {
  switch (action.type) {
    case LOAD_FLIGHT_DATA:
      return {
        ...state,
        flightDataStatus: Status.LOADING,
        flightParams: action.payload,
      };

    case LOAD_FLIGHT_DATA_SUCCESS:
      return {
        ...state,
        flightDataStatus: Status.SUCCESS,
        flightData: action.payload,
        pagination: action.payload.pagination,
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
