# array-find-duplicates
Find duplicate values in an array.

By default, `array-find-duplicates` uses [strict equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Identity) (`===`) to determine duplicates.

An optional comparison function can be passed and will be used instead of strict equality when checking for duplicates

*O(n log n) complexity.*

## Example
```
npm install array-find-duplicates
```

### With default comparison
```javascript
const findDuplicates = require('array-find-duplicates');

const array = ['a', 'b', 'b', 'c'];
const duplicates = findDuplicates(array);
console.log(duplicates);
// expected output: ['b', 'b']
```

### With supplied compare function
```javascript
const findDuplicates = require('array-find-duplicates');

const array = [
  { id: 1, content: 'foo' },
  { id: 2, content: 'bar' },
  { id: 2, content: 'baz' }
];
const duplicates = findDuplicates(array, (a, b) => a.id === b.id);
console.log(duplicates);
// expected output: [{ id: 2, content: 'bar' }, { id: 2, content: 'baz' }]
```

## Syntax
### `findDuplicates(array[, compareFunction(firstEl, secondEl)])`
#### Parameters
* `array`: array to search for duplicates.
* `compareFunction` *Optional*: function to execute on a pair of elements to determine equality. If it returns true, the elements are considered to be duplicates. If no compare function is supplied, `findDuplicates` uses [strict equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Identity) to determine duplicates.
  * `firstEl`: first element for comparison.
  * `secondEl`: second element for comparison.

#### Return value
* Returns a new array containing *each instance* of all duplicate values in the original array.

## Testing
Uses `jest`
```
npm run test
```

## License
This package is licensed under [The MIT License](https://opensource.org/licenses/MIT).
