import { expect, it } from 'vitest';
import { transformToNumber } from './numbers';

it('return number if argument is string like number', () => {
  let arg = '3';

  let result = transformToNumber(arg);

  expect(result).toBe(3);
});

it('return NaN if invalid input', () => {
  let args = ['ali', [], [1, 2, 3], {}];

  let results = [];

  for (const arg of args) {
    let result = transformToNumber(arg);
    results.push(result);
  }

  for (const result of results) {
    expect(result).toBeNaN()
  }
});



