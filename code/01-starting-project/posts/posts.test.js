import { expect, it } from 'vitest';
import { extractPostData } from './posts';

it('should return title and content from form object', () => {
  let testFormObject = {
    title: 'title',
    content: 'content',
    get(key) {
      return this[key];
    },
  };

  let expectedResult = { title: 'title', content: 'content' };

  let result = extractPostData(testFormObject);

  expect(result).toEqual(expectedResult);
});
