# array-find-duplicates
Find duplicate values in an array.

`array-find-duplicates` uses [strict equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Identity) (`===`) to determine duplicates.

## Usage
```
npm install array-find-duplicates
```

```javascript
const findDuplicates = require('array-find-duplicates');

const arr = ['a', 'b', 'b', 'c'];
const duplicates = findDuplicates(arr);
// ['b']
```

## API
### `findDuplicates(array)`
* `array`: array to search for duplicates
* Returns array of all duplicate values

## Testing
Uses `jest`
```
npm run test
```

## License
This package is licensed under [The MIT License](https://opensource.org/licenses/MIT).
