import { it, expect, vi } from 'vitest';
import writeData from './io';
import { promises as fs } from 'fs';

vi.mock('fs');
vi.mock('path',()=>{
    return{
        default:{
            join: (...args)=>{
                return args[args.length -1]
            }
        }
    }
})

it('test', () => {
  let data = 'love';
  let fileName = 'love.txt';

  writeData(data, fileName);

//   expect(writeData(data, fileName)).resolves.toBeUndefined()
  expect(fs.writeFile).toBeCalled();
});
