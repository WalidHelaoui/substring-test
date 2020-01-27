const isSubstring = require('./index');

test('isSubstring function exists', () => {
  expect(isSubstring).toBeDefined();
});

test('isSubstring find substring on string', () => {
  expect(isSubstring('banana', 'ana')).toEqual(true);
});

test('isSubstring doesnt find substring on string', () => {
  expect(isSubstring('banana', 'nna')).toEqual(false);
});

test('isSubstring doesnt accept substring empty', () => {
  expect(isSubstring('banana', '')).toEqual(false);
});

test('isSubstring doesnt accept string and substring empty', () => {
  expect(isSubstring('', '')).toEqual(false);
});

test('isSubstring doesnt accept other type then string', () => {
  expect(isSubstring(0, 0)).toEqual(false);
});