import { FilterParams } from "types/FilterParamsType";
import { FlightData, PaginationContent } from "types/FlightType";

export type Action =
  | LOAD_FLIGHT_DATA_ACTION
  | LOAD_FLIGHT_DATA_SUCCESS_ACTION
  | LOAD_FLIGHT_DATA_FAILURE_ACTION;

export const LOAD_FLIGHT_DATA = "LOAD_FLIGHT_DATA";
export const loadFlightData = (params: FilterParams): LOAD_FLIGHT_DATA_ACTION => ({
  type: LOAD_FLIGHT_DATA,
  payload: params,
});

export const LOAD_FLIGHT_DATA_SUCCESS = "LOAD_FLIGHT_DATA_SUCCESS";
export const loadFlightDataSuccess = 
  (flightData: { pagination: PaginationContent, data: FlightData[] }):
  LOAD_FLIGHT_DATA_SUCCESS_ACTION => 
  ({
    type: LOAD_FLIGHT_DATA_SUCCESS,
    payload: flightData,
  });

export const LOAD_FLIGHT_DATA_FAILURE = "LOAD_FLIGHT_DATA_FAILURE";
export const loadFlightDataFailure = (): LOAD_FLIGHT_DATA_FAILURE_ACTION => ({
  type: LOAD_FLIGHT_DATA_FAILURE,
});

export interface LOAD_FLIGHT_DATA_ACTION {
  type: typeof LOAD_FLIGHT_DATA;
  payload: FilterParams;
}

export interface LOAD_FLIGHT_DATA_SUCCESS_ACTION {
  type: typeof LOAD_FLIGHT_DATA_SUCCESS;
  payload: {
    pagination: PaginationContent,
    data: FlightData[],
  };
}

export interface LOAD_FLIGHT_DATA_FAILURE_ACTION {
  type: typeof LOAD_FLIGHT_DATA_FAILURE;
}
