import { dateToCleanDate, minutesBetweenDates } from '../src/utils/dateToCleanDate';

import flightTest from './flight_test.json';
import noDateFlightTest from './flight_test_2.json';

describe('Testing dateToCleanDate Function', function() {
  it('empty string', function() {
    let result = dateToCleanDate('');
    expect(result).toBe('');
  });

  it('good date provide', function() {
    let result = dateToCleanDate('2021-03-12T07:00:00+00:00');
    expect(result).toBe('2021-03-12 07:00');
  });

  it('not a date provide', function() {
    let result = dateToCleanDate('this is a test');
    expect(result).toBe('');
  });
});

describe('Testing minutesBetweenDates Function', function() {
  it('good dates provide', function() {
    let result = minutesBetweenDates(flightTest);
    expect(result).toBe('+10min');
  });

  it('not dates provide', function() {
    let result = minutesBetweenDates(noDateFlightTest);
    expect(result).toBe('0min');
  });
});
