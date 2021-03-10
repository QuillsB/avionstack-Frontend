import axios, { AxiosResponse } from 'axios';
import { baseUrl, apiKey } from 'constants/api';

const loadAirlinesData = (): Promise<AxiosResponse> =>
  axios.get(`${baseUrl}/airlines`, { params: { access_key: apiKey, limit: 1000 } });

export default {
  loadAirlinesData,
};
