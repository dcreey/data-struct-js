/**
 * Created by dcreey on 11/1/2016.
 */

function insertionSort(array, comparator = defaultComparator) {
  let count = 0;

  for (let i = 1; i < array.length; i++) {
    let j = i -1;
    while (j >= 0 && comparator(array[j], array[j+1])) {
      [array[j+1], array[j]] = [array[j], array[j+1]];
      count++;
      j--;
    }
    //for (let j = i + 1; j < array.length ; j++) {
    //  if (comparator(array[min], array[j])) min = j;
    //  count++;
    //}
    //[array[i], array[min]] = [array[min], array[i]];
  }

  console.log(`Array of size ${array.length} completed in ${count} iterations - proportion ${count/array.length}`);
  return array;
}

function defaultComparator(a, b) {
  return a > b;
}

module.exports = insertionSort;
