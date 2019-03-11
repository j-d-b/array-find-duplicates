const findDuplicates = (array, compareFunction = (a, b) => a === b) => {
  if (!Array.isArray(array)) {
    throw new Error('First argument to findDuplicates must be an array.');
  }

  if (compareFunction.length !== 2) {
    throw new Error('Compare function must expect two parameters.');
  }

  return array.reduce((dupes, element, i) => {
    const isDupe = array.slice(i + 1).find(el => compareFunction(el, element))
      || dupes.find(el => compareFunction(el, element));

    if (isDupe) {
      dupes.push(element);
    }

    return dupes;
  }, []);
};

module.exports = findDuplicates;
