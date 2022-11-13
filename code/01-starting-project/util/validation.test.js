import { expect, it } from 'vitest';
import { validateNotEmpty } from './validation';

it('should throw error if invalid input', () => {
  let text1 = '';
  let text2 = '  ';
  let text3 = null;
  let text4 = undefined;

  let errorMessage = 'error';

  let resultFn1 = () => {
    validateNotEmpty(text1, errorMessage);
  };
  let resultFn2 = () => {
    validateNotEmpty(text2, errorMessage);
  };
  let resultFn3 = () => {
    validateNotEmpty(text3, errorMessage);
  };
  let resultFn4 = () => {
    validateNotEmpty(text4, errorMessage);
  };

  expect(resultFn1).toThrow(errorMessage);
  expect(resultFn2).toThrow(errorMessage);
  expect(resultFn3).toThrow(errorMessage);
  expect(resultFn4).toThrow(errorMessage);
});
