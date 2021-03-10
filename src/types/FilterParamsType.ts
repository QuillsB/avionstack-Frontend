import { apiKey } from 'constants/api';

export interface FilterParams {
  access_key: string;
  limit?: number;
  offset?: number;
  flight_status?: string;
  airline_name?: string;
  dep_icao?: string;
  arr_icao?: string;
}

export const defaultFilterParams: FilterParams = {
  access_key: apiKey,
};
