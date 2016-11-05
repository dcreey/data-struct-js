/**
 * Created by dcreey on 11/1/2016.
 */
let count = 0;
let compare;
function quickSort(array, comparator = defaultComparator) {
  compare = comparator;
  sort(array, 0, array.length -1);

  console.log(`Array of size ${array.length} completed in ${count} iterations - proportion ${count/array.length}`);
  return array;
}

function sort(arr, lo, hi) {
  if (lo < hi) {
    // partition using pivot as last element in array section
    const pivot = arr[hi];
    let p = lo;
    for (let j = lo; j < hi; j++) {
      count++;
      if (compare(pivot, arr[j])) {
        [arr[p], arr[j]] = [arr[j], arr[p]];
        p++;
      }
    }
    [arr[p], arr[hi]] = [arr[hi], arr[p]];

    sort(arr, lo, p-1);
    sort(arr, p + 1, hi);
  }
}

function defaultComparator(a, b) {
  return a > b;
}

module.exports = quickSort;
