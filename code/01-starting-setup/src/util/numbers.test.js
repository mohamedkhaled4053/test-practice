import { it, expect, describe } from 'vitest';

import { cleanNumbers, transformToNumber } from './numbers';

describe('transformToNumber()', () => {
  it('should transform a string number to a number of type number', () => {
    const input = '1';

    const result = transformToNumber(input);

    expect(result).toBeTypeOf('number');
  });

  it('should transform a string number to a number of type number', () => {
    const input = '1';

    const result = transformToNumber(input);

    expect(result).toBe(+input);
  });

  it('should yield NaN for non-transformable values', () => {
    const input = 'invalid';
    const input2 = {};

    const result = transformToNumber(input);
    const result2 = transformToNumber(input2);

    expect(result).toBeNaN();
    expect(result2).toBeNaN();
  });
});


describe('cleanNumbers()',()=>{
  it('should return array of number if array of strings passed',()=>{
    let arr= ['1','2']

    let result = cleanNumbers(arr)

    expect(result[0]).toBeTypeOf('number')
    expect(result[0]).toBe(1)
    expect(result[1]).toBeTypeOf('number')
    expect(result[1]).toBe(2)
  })
  it('should throw error if invalid value passed',()=>{
    let arr= ['ali','string']

    let resultFn = ()=>{
      cleanNumbers(arr)
    }

    expect(resultFn).toThrow()
  })
})