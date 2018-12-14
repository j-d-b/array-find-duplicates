const findDuplicates = require('./index.js');

test('single repetition', () => {
  const arr = ['a', 'b', 'b', 'c'];
  const dupes = findDuplicates(arr);
  expect(dupes).toHaveLength(1);
  expect(dupes).toContain('b');
});

test('multiple duplicates with mutliple repeats', () => {
  const arr = [1, 2, 1, 1, 2, 4, 5, 6, 1];
  const dupes = findDuplicates(arr);
  expect(dupes).toHaveLength(2);
  expect(dupes).toContain(1);
  expect(dupes).toContain(2);
});

test('mixed types; multiple repeats', () => {
  const arr = [1, 'a', 1, 'a', 1, 'a', 5, 6, 'b'];
  const dupes = findDuplicates(arr);
  expect(dupes).toHaveLength(2);
  expect(dupes).toContain(1);
  expect(dupes).toContain('a');
});
