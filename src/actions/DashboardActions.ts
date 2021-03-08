export type Action =
  | LOAD_FLIGHT_DATA_ACTION
  | LOAD_FLIGHT_DATA_SUCCESS_ACTION
  | LOAD_FLIGHT_DATA_FAILURE_ACTION;

export const LOAD_FLIGHT_DATA = "LOAD_FLIGHT_DATA";
export const loadFlightData = (): LOAD_FLIGHT_DATA_ACTION => ({
  type: LOAD_FLIGHT_DATA,
});

export const LOAD_FLIGHT_DATA_SUCCESS = "LOAD_FLIGHT_DATA_SUCCESS";
export const loadFlightDataSuccess = (flightData: string[]): LOAD_FLIGHT_DATA_SUCCESS_ACTION => ({
  type: LOAD_FLIGHT_DATA_SUCCESS,
  payload: flightData,
});

export const LOAD_FLIGHT_DATA_FAILURE = "LOAD_FLIGHT_DATA_FAILURE";
export const loadFlightDataFailure = (): LOAD_FLIGHT_DATA_FAILURE_ACTION => ({
  type: LOAD_FLIGHT_DATA_FAILURE,
});

export interface LOAD_FLIGHT_DATA_ACTION {
  type: typeof LOAD_FLIGHT_DATA;
}

export interface LOAD_FLIGHT_DATA_SUCCESS_ACTION {
  type: typeof LOAD_FLIGHT_DATA_SUCCESS;
  payload: string[];
}

export interface LOAD_FLIGHT_DATA_FAILURE_ACTION {
  type: typeof LOAD_FLIGHT_DATA_FAILURE;
}
