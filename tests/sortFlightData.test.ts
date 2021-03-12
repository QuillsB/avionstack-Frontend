import { sortFlightData } from '../src/utils/sortFlightData';

import sortFlight from './sort_flights_test.json';
import sortResult from './sort_flights_test_result.json';
import sortFlightWithoutDate from './sort_flights_without_test.json';

describe('Testing sortFlightData Function', function() {
  it('complete sort with good data', function() {
    let result = sortFlightData(sortFlight);
    expect(result).toStrictEqual(sortResult);
  });

  it('sort with data without good dates', function() {
    let result = sortFlightData(sortFlightWithoutDate);
    expect(result).toStrictEqual(sortFlightWithoutDate);
  })
})
