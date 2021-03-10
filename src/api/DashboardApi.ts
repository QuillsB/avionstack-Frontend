import axios, { AxiosResponse } from 'axios';
import { baseUrl } from 'constants/api';

import { FilterParams } from 'types/FilterParamsType';

const loadFlightData = (params: FilterParams):  Promise<AxiosResponse> =>
  axios.get(`${baseUrl}/flights`, { params: params });

export default {
  loadFlightData,
};
