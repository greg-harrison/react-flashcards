import { verifyEmail, verifyPassword } from './index'

it('Email returns Invalid for ajkdjsljdsa', () => {
  let email = 'ajkdjsljdsa'
  expect(verifyEmail(email)).toBe(false)
});

it('Email returns Valid for ajkdjsljdsa@test.com', () => {
  let email = 'ajkdjsljdsa@test.com'
  expect(verifyEmail(email)).toBe(true)
});

it('Password returns Invalid for Test', () => {
  let pw = 'ajkdjsljdsa'
  expect(verifyPassword(pw)).toBe(false)
});

it('Password returns Valid for ajkdjsljdsa@test.com', () => {
  let pw = 'asjdklAJK23@32@'
  expect(verifyPassword(pw)).toBe(true)
});
