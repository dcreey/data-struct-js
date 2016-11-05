/**
 * Created by dcreey on 11/3/2016.
 */

const assert = require('assert');
const selectionSort = require('./selectionSort');

describe('Selection Sort Tests', function(){
  it('Sort array of 10', function(){
    const arr = getRandomArray(10);
    const sortedArr = selectionSort(arr);
    assert(isSorted(sortedArr));
  });

  it('Should sort array thats already sorted',function(){
    const arr = getRandomArray(10);
    const sortedArr = selectionSort(arr);
    assert(isSorted(sortedArr));
    const sortedTwiceArr = selectionSort(sortedArr);
    assert(isSorted(sortedTwiceArr));
  });

  it('Should sort array of equivalent values',function(){
    const arr = [1,1,1,1,1,1,1,1];
    const sortedArr = selectionSort(arr);
    assert(isSorted(sortedArr));
  });

  it('Should sort array of odd length',function(){
    const arr = getRandomArray(7);
    const sortedArr = selectionSort(arr);
    assert(isSorted(sortedArr));
  });

  it('Should sort array of 1000', function(){
    const arr = getRandomArray(1000);
    const sortedArr = selectionSort(arr);
    assert(isSorted(sortedArr));
  });

  it('Sort array of 10000', function(){
    const arr = getRandomArray(10000);
    const sortedArr = selectionSort(arr);
    assert(isSorted(sortedArr));
  });
});

function getRandomArray(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(getRandomInt(0, n));
  }
  return arr;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function isSorted(arr){
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i+1]) return false;
  }
  return true;
}
