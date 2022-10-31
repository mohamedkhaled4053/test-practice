import { expect, it } from "vitest";
import {add} from './math'

it('sum numbers', ()=>{
    // arrange
    let numbers = [1,2,3]
    let expected = numbers.reduce((total, current)=> total+ current)

    // act
    let result = add(numbers)

    // assert
    expect(result).toBe(expected)
})

it('should return NaN if invalid number in numbers',()=>{
    let numbers = ['invalid', 1]

    let result = add(numbers)

    expect(result).toBeNaN()
})

it('should add numbers like strings',()=>{
    let numbers = ['1','2','3']

    let result = add(numbers)

    expect(result).toBe(6)
})

it('should retun 0 if empty array',()=>{
    let numbers = []

    let result = add(numbers)

    expect(result).toBe(0)
})

it('should throw error if no arguments',()=>{
    let resultFn = ()=>{
        add()
    }
    expect(resultFn).toThrow()
})

it('should throw error if multiple argument instead of array',()=>{
    let resultFn = ()=>{
        add(1,2)
    }
    expect(resultFn).toThrow(/is not iterable/)
})