import {
  LOAD_AIRLINES_DATA,
  LOAD_AIRLINES_DATA_SUCCESS,
  LOAD_AIRLINES_DATA_FAILURE,
} from 'actions/FilterActions';

import Status from 'types/StatusType';

import { ActionType } from 'types/ActionsType';

const initialState = {
  airlinesData: [],
  airlinesDataStatus:  Status.DEFAULT,
};

export interface StateType {
  airlinesData: string[];
  airlinesDataStatus: Status;
}

export default function filterState(state: StateType = initialState, action: ActionType): StateType {
  switch (action.type) {
    case LOAD_AIRLINES_DATA:
      return {
        ...state,
        airlinesDataStatus: Status.LOADING,
      };

    case LOAD_AIRLINES_DATA_SUCCESS:
      return {
        ...state,
        airlinesDataStatus: Status.SUCCESS,
        airlinesData: action.payload.data,
      };

    case LOAD_AIRLINES_DATA_FAILURE:
      return {
        ...state,
        airlinesDataStatus: Status.FAIL,
      };

    default:
      return state;
  }
}
