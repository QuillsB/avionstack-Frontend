import { airlineDataToArray } from '../src/utils/airlineDataToArray';

describe('Testing airlineDataToArray Function', function() {
  it('empty array provide', function() {
    let result = airlineDataToArray([]);
    expect(result).toStrictEqual([]);
  });

  it('good array with complete data', function() {
    let result = airlineDataToArray([
        { fleet_average_age: "10.9", callsign: "AMERICAN", hub_code: "DFW", airline_name: "American Airlines" },
        { fleet_average_age: "17", callsign: "DELTA", hub_code: "ATL", airline_name: "Delta Air Lines" },
        { fleet_average_age: "13.8", callsign: "UNITED", hub_code: "ORD", airline_name: "Southwest Airlines Co." }
    ]);
    expect(result).toStrictEqual(["American Airlines", "Delta Air Lines", "Southwest Airlines Co."]);
  });

  it('good array without airline_name in data', function() {
    let result = airlineDataToArray([
        { fleet_average_age: "10.9", callsign: "AMERICAN", hub_code: "DFW", airline_name: "American Airlines" },
        { fleet_average_age: "17", callsign: "DELTA", hub_code: "ATL", airline_name: "Delta Air Lines" },
        { fleet_average_age: "13.8", callsign: "UNITED", hub_code: "ORD", airline_name: "Southwest Airlines Co." }
    ]);
    expect(result).toStrictEqual(["American Airlines", "Delta Air Lines", "Southwest Airlines Co."]);
  });
});
