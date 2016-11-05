/**
 * Created by dcreey on 11/1/2016.
 */

function mergeSort(array, comparator = defaultComparator) {
  const n = 2;
  let iter = n;
  let numOfDivisions = 1;
  let count = 0;
  // iterate through array in first in iterations of size n
  // then increment size *=n
  while (iter/n < array.length) {
    numOfDivisions = Math.ceil(array.length/iter);
    let splitSize = iter/n;
    for (let i = 0; i < numOfDivisions; i++) {
      let left = iter*i;
      let right = iter*i + splitSize;

      // split current iteration into two halves
      const leftArr = array.slice(left, right);
      const rightArr = array.slice(right, right + splitSize);

      let ri = 0, li = 0;
      // compare left and right arrays and take smallest values until one array is depleted
      while (li < splitSize && ri < splitSize && ri + right < array.length) {
        if (comparator(leftArr[li], rightArr[ri])) {
          array[left] = rightArr[ri];
          ri++
        } else {
          array[left] = leftArr[li];
          li++
        }
        left++;
        count++;
      }

      // take rest of left array if any
      while (li < splitSize && left < array.length) {
        array[left] = leftArr[li];
        li++;
        left++;
        count++;
      }
      // take rest of right array if any
      while (ri < splitSize && ri + right < array.length) {
        array[left] = rightArr[ri];
        ri++;
        left++;
        count++;
      }
    }
    iter*=n;
  }
  console.log(`Array of size ${array.length} completed in ${count} iterations - proportion ${count/array.length}`);
  return array;
}

function defaultComparator(a, b) {
  return a > b;
}

module.exports = mergeSort;
