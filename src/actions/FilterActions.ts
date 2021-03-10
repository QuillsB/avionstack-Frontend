export type Action =
  |  LOAD_AIRLINES_DATA_ACTION
  |  LOAD_AIRLINES_DATA_SUCCESS_ACTION
  |  LOAD_AIRLINES_DATA_FAILURE_ACTION;

export const LOAD_AIRLINES_DATA = "LOAD_AIRLINES_DATA";
export const loadAirlinesData = (): LOAD_AIRLINES_DATA_ACTION => ({
  type: LOAD_AIRLINES_DATA,
});

export const LOAD_AIRLINES_DATA_SUCCESS = "LOAD_AIRLINES_DATA_SUCCESS";
export const loadAirlinesDataSuccess =
  (airlinesData: { data: string[] }):
  LOAD_AIRLINES_DATA_SUCCESS_ACTION =>
  ({
    type: LOAD_AIRLINES_DATA_SUCCESS,
    payload: airlinesData,
  });

export const LOAD_AIRLINES_DATA_FAILURE = "LOAD_AIRLINES_DATA_FAILURE";
export const loadAirlinesDataFailure = (): LOAD_AIRLINES_DATA_FAILURE_ACTION => ({
  type: LOAD_AIRLINES_DATA_FAILURE,
});

export interface LOAD_AIRLINES_DATA_ACTION {
  type: typeof LOAD_AIRLINES_DATA;
}

export interface LOAD_AIRLINES_DATA_SUCCESS_ACTION {
  type: typeof LOAD_AIRLINES_DATA_SUCCESS;
  payload: { data: string[] };
}

export interface LOAD_AIRLINES_DATA_FAILURE_ACTION {
  type: typeof LOAD_AIRLINES_DATA_FAILURE;
}
