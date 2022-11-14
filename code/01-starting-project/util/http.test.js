import { expect, it, vi } from 'vitest';
import { HttpError } from './errors';
import { sendDataRequest } from './http';

let testResponseData = { key: 'value' };
let testFetch = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    if (typeof options.body !== 'string') {
      return reject();
    }
    resolve({
      ok: true,
      json: () => {
        return new Promise((resolve, reject) => {
          resolve(testResponseData);
        });
      },
    });
  });
});

vi.stubGlobal('fetch', testFetch);

it('should return response', async () => {
  let data = 'data';
  let responseData = await sendDataRequest(data);

  expect(responseData).toEqual(testResponseData);
});

it('should throw error if not ok', async () => {
  testFetch.mockImplementationOnce((url, options) => {
    return new Promise((resolve, reject) => {
      if (typeof options.body !== 'string') {
        return reject();
      }
      resolve({
        ok: false,
        json: () => {
          return new Promise((resolve, reject) => {
            resolve(testResponseData);
          });
        },
      });
    });
  });

  let data = 'data';

  let resError

  try {
  let responseData = await sendDataRequest(data);
  } catch (error) {
    resError = error
  }

  expect(resError).toBeInstanceOf(HttpError);
});
