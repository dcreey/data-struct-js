/**
 * Created by dcreey on 11/1/2016.
 */

/**
 * Created by dcreey on 11/1/2016.
 */
'use strict';

const assert = require('assert');
const BinarySearchTree = require('./customBinarySearchTree');

const sortedList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const randomList = [4, 2, 5, 3, 7, 6, 1, 9, 8, 10];

describe('Binary Search Tree Tests', function(){
  describe('Empty Initialization Tests', function(){
    it('add then remove same object', function(){
      const tree = new BinarySearchTree();
      tree.push(6);
      assert(tree.remove(6) === 6);
    });

    it('add one remove two throws Error', function(){
      const tree = new BinarySearchTree();
      tree.push(6);
      tree.remove();
      try {
        tree.remove();
      } catch (er){
        assert(er.message === 'Out Of Range')
      }
    });

    it('add sortedList then search for values 3,4,5', function(){
      const tree = new BinarySearchTree();
      sortedList.forEach((x) => { tree.push(x); });
      assert(tree.find(3) === 3);
      assert(tree.find(4) === 4);
      assert(tree.find(5) === 5);
    });

    it('add then remove objects in order of binary search tree', function(){
      const tree = new BinarySearchTree();
      const reverseList = sortedList.slice().reverse();
      sortedList.forEach((x) => { tree.push(x); });
      for(let x = 0; x < sortedList.length; x++){
        assert(reverseList[x] === tree.remove(reverseList[x]));
      }
    });
  });

  describe('List Initialization Tests', function(){
    it('add then remove first two objects of binary search tree', function(){
      const tree = new BinarySearchTree(sortedList);
      tree.push(0);
      assert(tree.remove(10) === 10);
      assert(tree.remove(9) === 9);
      assert(tree.remove(0) === 0)
    });

    it('add sorted list then search for values 3,4,5', function(){
      const tree = new BinarySearchTree(sortedList);
      tree.find(3);
      tree.find(4);
      tree.find(5);
    });

    it('add sorted list then remove each item', function(){
      const tree = new BinarySearchTree(sortedList);
      const reverseList = sortedList.slice().reverse();
      for(let x = 0; x < sortedList.length; x++){
        assert(reverseList[x] === tree.remove(reverseList[x]));
      }
    });

    it('add random list then remove each item', function(){
      const tree = new BinarySearchTree(randomList);
      for(let x = 0; x < randomList.length; x++){
        assert(randomList[x] === tree.remove(randomList[x]));
      }
    });

    it('add 10k random integers between 1 and 10000 and count depth', function(){
      const tree = new BinarySearchTree();
      const start = 0;
      const end = 10000;
      for (let i = start; i < end; i++) {
        tree.push(getRandomInt(start, end));
      }


      for(let x = 0; x < randomList.length; x++){
        assert(randomList[x] === tree.remove(randomList[x]));
      }
    })
  });

});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
