const findDuplicates = arr => ([
  ...arr.reduce((dupes, val, i) => {
    if (arr.indexOf(val, i + 1) !== -1) {
      dupes.add(val);
    }
    return dupes;
  }, new Set())
]);

module.exports = findDuplicates;
