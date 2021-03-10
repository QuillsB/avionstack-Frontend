import { FlightData } from "types/FlightType";

export const dateToCleanDate = (date: string): string => {
  const datefmt = new Date(date);

  return datefmt.toISOString().replace(/T/, ' ').replace(/\..+/, '').substr(0, 16);
}

export const minutesBetweenDates = (flight: FlightData): string => {
  const scheduled = new Date(flight.departure.estimated);

  if (flight.departure.actual === undefined) {
    return '';
  }

  const actual = new Date(flight.departure.actual);
  const diffMs = actual.getTime() - scheduled.getTime();

  if (diffMs > 0) {
    return `+${diffMs / 60000}min`;
  }

  return `${diffMs / 60000}min`;
}
