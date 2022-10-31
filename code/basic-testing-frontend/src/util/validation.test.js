import { describe, expect, it } from 'vitest';
import { validateNumber, validateStringNotEmpty } from './validation';

describe('validateStringNotEmpty()', () => {
  it('should throw error if input is empty', () => {
    let arg = '';
    let arg2 = '     ';

    let resultFn = () => {
      validateStringNotEmpty(arg);
    };
    let resultFn2 = () => {
      validateStringNotEmpty(arg2);
    };

    expect(resultFn).toThrow(/Invalid input/);
    expect(resultFn2).toThrow(/Invalid input/);
  });

  it('should throw error if argument is not string', () => {
    let arg = [];

    let resultFn = () => {
      validateStringNotEmpty(arg);
    };

    expect(resultFn).toThrow(/Invalid input/);
  });
});

describe('validateNumber', () => {
  it('should throw error if argument is not valid', () => {
    let arg = '1';

    let resultFn = () => {
      validateNumber(arg);
    };

    expect(resultFn).toThrow(/Invalid number/);
  });
});
