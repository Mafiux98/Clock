const getTime = require('./getTime');

describe("getTime", () => {
test('should return object with time', () => {
  expect(getTime()).toStrictEqual({
   "h": expect.any(String),
   "m": expect.any(String),
   "s": expect.any(String),
      });
});
});
