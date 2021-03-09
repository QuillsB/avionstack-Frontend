import { FlightData } from "types/FlightType";

export const sortFlightData = (data: FlightData[]): FlightData[] => {
  return(data.sort(function(a, b) {
    const scheduleA = new Date(a.departure.scheduled);
    const scheduleB = new Date(b.departure.scheduled);

    return (scheduleA < scheduleB ? -1 : 1)
  }));
};