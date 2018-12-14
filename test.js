const findDuplicates = require('./index.js');

test('empty array', () => {
  const arr = [];
  const dupes = findDuplicates([]);
  expect(dupes).toHaveLength(0);
});

test('no duplicates', () => {
  const arr = [1, 2, 3];
  const dupes = findDuplicates(arr);
  expect(dupes).toHaveLength(0);
});

test('single repetition', () => {
  const arr = ['a', 'b', 'b', 'c'];
  const dupes = findDuplicates(arr);
  expect(dupes).toHaveLength(1);
  expect(dupes).toContain('b');
});

test('multiple repeats', () => {
  const arr = [1, 2, 1, 1, 4, 5, 6, 1];
  const dupes = findDuplicates(arr);
  expect(dupes).toHaveLength(1);
  expect(dupes).toContain(1);
});

test('multiple duplicates and multiple repeats', () => {
  const arr = [1, 'a', 1, 'a', 1, 'a', 5, 6, 'b'];
  const dupes = findDuplicates(arr);
  expect(dupes).toHaveLength(2);
  expect(dupes).toContain(1);
  expect(dupes).toContain('a');
});
