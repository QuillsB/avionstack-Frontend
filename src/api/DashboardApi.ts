import axios, { AxiosResponse } from 'axios';
import baseUrl from 'constants/api';

const loadFlightData = ():  Promise<AxiosResponse> => axios.get(`${baseUrl}/flights?access_key=ce953361b2fa45f830b234fcf98d223d`);

export default {
  loadFlightData,
};
