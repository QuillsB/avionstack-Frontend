import { FlightData } from "types/FlightType";

export const dateToCleanDate = (date: string): string => {
  const datefmt = new Date(date);

  if (isNaN(datefmt.getTime())) {
    return '';
  }

  return datefmt.toISOString().replace(/T/, ' ').replace(/\..+/, '').substr(0, 16);
}

export const minutesBetweenDates = (flight: FlightData): string => {
  const scheduled = new Date(flight.departure.estimated);

  if (isNaN(scheduled.getTime())) {
    return '0min';
  }

  if (flight.departure.actual === undefined) {
    return '';
  }

  const actual = new Date(flight.departure.actual);

  if (isNaN(actual.getTime())) {
    return '0min';
  }

  const diffMs = actual.getTime() - scheduled.getTime();

  if (diffMs > 0) {
    return `+${diffMs / 60000}min`;
  }

  return `${diffMs / 60000}min`;
}
