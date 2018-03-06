import { verifyEmail, verifyPassword } from './index'

it('Returns Invalid for ajkdjsljdsa', () => {
  let email = 'ajkdjsljdsa'
  console.log('verifyEmail(email)', verifyEmail(email));
  expect(verifyEmail(email)).toBe(false)
});

it('Returns Valid for ajkdjsljdsa@test.com', () => {
  let email = 'ajkdjsljdsa@test.com'
  console.log('verifyEmail(email)', verifyEmail(email));
  expect(verifyEmail(email)).toBe(true)
});
