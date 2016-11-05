/**
 * Created by dcreey on 11/3/2016.
 */

function selectionSort(array, comparator = defaultComparator) {
  let count = 0;

  for (let i = 0; i < array.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < array.length ; j++) {
      if (comparator(array[min], array[j])) min = j;
      count++;
    }
    [array[i], array[min]] = [array[min], array[i]];
  }

  console.log(`Array of size ${array.length} completed in ${count} iterations - proportion ${count/array.length}`);
  return array;
}

function defaultComparator(a, b) {
  return a > b;
}

module.exports = selectionSort;
