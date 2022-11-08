import { it,expect } from "vitest";
import writeData from "./io";

it('test', ()=>{
    let data = 'love'
    let fileName = 'love.txt'

    expect(writeData(data, fileName)).resolves.toBeUndefined()
})