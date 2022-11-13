import { vi } from 'vitest';

export const promises = {
  writeFile: vi.fn((path, data) => {
    console.log('dddd');
    return new Promise((resolve, reject) => {
      resolve();
    });
  }),
};
