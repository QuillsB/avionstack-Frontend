export interface PaginationContent {
  limit: number;
  offset: number;
  count: number;
  total: number;
}

export interface FlightInfos {
  airport: string;
  timezone: string;
  iata: string;
  icao: string;
  terminal?: string;
  gate?: string;
  delay?: number;
  scheduled: string;
  estimated: string;
  actual?: string;
}

export interface AirlineInfos {
  name: string;
  iata: string;
  icao: string;
}

export interface FlightSpecificInfos {
  number: string;
  iata: string;
  icao: string;
}

export interface AircraftInfos {
  registration: string;
  iata: string;
  icao: string;
  icao24: string;
}

export interface FlightData {
  flight_date: string;
  flight_status: string;
  departure: FlightInfos;
  arrival: FlightInfos;
  airline: AirlineInfos;
  flight: FlightSpecificInfos;
  aircraft?: AircraftInfos;
}

export const defaultPaginationContent: PaginationContent = {
  limit: 100,
  offset: 0,
  count: 100,
  total: 100,
};
