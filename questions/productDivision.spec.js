/**
 * Created by dcreey on 10/27/2016.
 */
'use strict';
const assert = require('assert');
const testArrOne = [3,5,7];
const answerOne = [35,21,15];

const testArrTwo = [1,2,3,4,5,6,7,8,9,10];
const answerTwo = [3628800,1814400,1209600,907200,725760,604800,518400,453600,403200,362880];

const testArrThree = [1,2,3,4,5,6,7,8,9,10,0];
const answerThree = [0,0,0,0,0,0,0,0,0,0,3628800];

// Find product of all other values in array size N except current index
// Use no explicit division

describe('Test Product Division Question', function(){
  let productDivision;

  describe('Brute Force Implementation', function(){
    it('should have correct solution', function(){
      productDivision = new ProductDivision(testArrOne);
      const productArr = productDivision.bruteForce();
      for(let x = 0; x < answerOne.length; x++){
        assert(answerOne[x] === productArr[x]);
      }
    });
    it('should have correct solution - two', function(){
      productDivision = new ProductDivision(testArrTwo);
      const productArr = productDivision.bruteForce();
      for(let x = 0; x < answerTwo.length; x++){
        assert(answerTwo[x] === productArr[x]);
      }
    });
    it('should have correct solution - three', function(){
      productDivision = new ProductDivision(testArrThree);
      const productArr = productDivision.bruteForce();
      for(let x = 0; x < answerThree.length; x++){
        assert(answerThree[x] === productArr[x]);
      }
    });
  });

  describe('Elegant Implementation', function(){
    it('should have correct solution', function(){
      productDivision = new ProductDivision(testArrOne);
      const productArr = productDivision.elegant();
      for(let x = 0; x < answerOne.length; x++){
        assert(answerOne[x] === productArr[x]);
      }
    });
    it('should have correct solution - two', function(){
      productDivision = new ProductDivision(testArrTwo);
      const productArr = productDivision.elegant();
      for(let x = 0; x < answerTwo.length; x++){
        assert(answerTwo[x] === productArr[x]);
      }
    });
  });
  it('should have correct solution - three', function(){
    productDivision = new ProductDivision(testArrThree);
    const productArr = productDivision.elegant();
    for(let x = 0; x < answerThree.length; x++){
      assert(answerThree[x] === productArr[x]);
    }
  });
});

class ProductDivision{
  constructor(arr){
    this.arr = arr;
  }

  solve(){

  }

  // order N^2 - N size
  bruteForce(){
    const arrCopy = this.arr.slice();
    for(let x = 0; x < arrCopy.length; x++){
      let iter = 1;
      for(let y = 0; y < arrCopy.length; y++){
        if (x !== y) iter*=this.arr[y];
      }
      arrCopy[x] = iter;
    }
    return arrCopy;
  }

  // order 2N - 3N size, could reduce size requirement some
  elegant(){
    const arrCopy = this.arr.slice();
    const arrCopyOne = this.arr.slice();
    const arrCopyTwo = this.arr.slice();
    for(let x = 1; x < arrCopyOne.length; x++){
      arrCopyOne[x] = arrCopyOne[x]*arrCopyOne[x-1];
      if (x > 1) {
        arrCopyTwo[arrCopy.length - x] = arrCopyTwo[arrCopy.length - x] * arrCopyTwo[arrCopy.length - x + 1];
      }
    }
    for(let x = 0; x < arrCopy.length; x++){
      if (x == 0) {
        arrCopy[x] = arrCopyTwo[x+1];
      } else if (x == arrCopy.length - 1) {
        arrCopy[x] = arrCopyOne[x-1];
      } else {
        arrCopy[x] = arrCopyOne[x-1]*arrCopyTwo[x+1];
      }
    }
    return arrCopy;
  }
}
