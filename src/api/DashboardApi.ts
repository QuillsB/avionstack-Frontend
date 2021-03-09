import axios, { AxiosResponse } from 'axios';
import { baseUrl, apiKey } from 'constants/api';

const loadFlightData = ():  Promise<AxiosResponse> =>
  axios.get(`${baseUrl}/flights`, { params: { access_key: apiKey } });

export default {
  loadFlightData,
};
