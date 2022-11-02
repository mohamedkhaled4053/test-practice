import { expect, it } from 'vitest';
import { generateToken, generateTokenPromise } from './async-example';

// it('should return string', (done) => {
//   let email = 'test@test.com';

//   generateToken(email, (err, token) => {
//     try {
//       expect(token).toBeDefined();
//       done();
//     } catch (error) {
//       done(error);
//     }
//   });
// });

it('should return string', async () => {
  let email = 'test@test.com';

  generateTokenPromise(email).then((res) => expect(res).toBeDefined());
 
  // expect(generateTokenPromise(email)).resolves.toBeDefined()

  let token = await generateTokenPromise(email);
  expect(token).toBeTypeOf('string');
});
