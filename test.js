const findDuplicates = require('./index.js');

test('empty array', () => {
  const dupes = findDuplicates([]);
  expect(dupes).toHaveLength(0);
});

test('invalid first argument', () => {
  expect(() => findDuplicates()).toThrow();
});

test('invalid compare function', () => {
  expect(() => findDuplicates([], () => true)).toThrow();
});

test('primitive: no duplicates', () => {
  const array = [1, 2, 3];
  const dupes = findDuplicates(array);
  expect(dupes).toHaveLength(0);
});

test('primitive: single repetition', () => {
  const array = ['a', 'b', 'b', 'c'];
  const dupes = findDuplicates(array);
  expect(dupes).toHaveLength(2);
  expect(dupes).toContain('b');
});

test('primitive: multiple repeats', () => {
  const array = [1, 2, 1, 1, 4, 5, 6, 1];
  const dupes = findDuplicates(array);
  expect(dupes).toHaveLength(4);
  expect(dupes).toContain(1);
});

test('primitive: multiple duplicates and multiple repeats', () => {
  const array = [1, 'a', 1, 'a', 1, 'a', 5, 6, 'b'];
  const dupes = findDuplicates(array);
  expect(dupes).toHaveLength(6);
  expect(dupes).toContain(1);
  expect(dupes).toContain('a');
});

test('custom compare: no duplicates', () => {
  const array = [
    { id: 1, content: 'foo' },
    { id: 2, content: 'bar' },
    { id: 3, content: 'baz' }
  ];
  const dupes = findDuplicates(array, (a, b) => a.id === b.id);
  expect(dupes).toHaveLength(0);
});

test('custom compare: single repetition', () => {
  const array = [
    { id: 1, content: 'foo' },
    { id: 2, content: 'bar' },
    { id: 2, content: 'baz' }
  ];
  const dupes = findDuplicates(array, (a, b) => a.id === b.id);
  expect(dupes).toHaveLength(2);
});

test('custom compare: multiple repeats', () => {
  const array = [
    { id: 1, content: 'foo' },
    { id: 2, content: 'bar' },
    { id: 2, content: 'baz' },
    { id: 2, content: 'qux' },
    { id: 3, content: 'quux' },
    { id: 3, content: 'corge' },
    { id: 4, content: 'grault' }
  ];
  const dupes = findDuplicates(array, (a, b) => a.id === b.id);
  expect(dupes).toHaveLength(5);
});
