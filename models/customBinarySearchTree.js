/**
 * Created by dcreey on 11/1/2016.
 */
'use strict';

class Node{
  constructor(data){
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

// Max-Sorted Binary Heap
// pop - removes value at heap root - highest priority value
// Insert + remove order log(n)
class BinarySearchTree{
  constructor(arr, comparator = this._defaultComparator){
    this.size = 0;
    this.root = null;
    this.comparator = comparator;
    if (arr !== undefined) {
      if (arr.length === undefined) throw new Error ('Invalid Argument');

      for(let d of arr) {
        this.push(d);
      };
    }
  }

  // log(n) order - log(n) corresponds to the depth of the tree
  // Depth is derived in this way because it is a binary tree (2^n is the size, where n is the depth)
  push(data){
    if (data === null || data === undefined) throw new Error('Invalid Argument');
    this.size++;

    if (this.root === null) {
      this._addRoot(data);
    } else {
      let node = this.root;
      while (node !== null){
        if (this._compare(node.data, data) > -1) {
          if (node.left === null) {
            node.left = new Node(data);
            break;
          } else node = node.left;
        } else {
          if (node.right === null) {
            node.right = new Node(data);
            break;
          } else node = node.right;
        }
      }
    }
  }

  // log(n) order - log(n) corresponds to the depth of the tree
  // worst case n order
  remove(data){
    if (this.size === 0) throw new Error('Out Of Range');
    this.size--;
    let currentNode = this.root;
    while (currentNode != null) {
      const comp = this._compare(currentNode.data, data);
      if (comp === 0) {
        const nodeData = currentNode.data;
        // node found - remove it
        this._removeNode(currentNode);
        return nodeData;
      } else if (comp === 1) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return null;
  }

  //
  find(data){
    if (this.size === 0) throw new Error('Out Of Range');
    let currentNode = this.root;
    while (currentNode != null) {
      const comp = this._compare(currentNode.data, data);
      if (comp === 0) {
        return currentNode.data;
      } else if (comp === 1) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return null;
  }

  _removeNode(node){
    if (node.right === null && node.left === null) {
      node = null;
    } else if (node.right !== null && node.left !== null) {
      // has two children - pick right side and find smallest value node
      let successor = node.right;
      while (successor.left !== null) {
        successor = successor.left;
      }
      node.data = successor.data;
      this._removeNode(successor);
    } else {
      // take non-empty branch
      node = node.left === null ? node.right : node.left;
    }
  }

  _addRoot(data){
    this.root = new Node(data);
  }

  _compare(dataA, dataB){
    return this.comparator(dataA, dataB);
  }

  _defaultComparator(x, y){
    if (x === y) {
      return 0;
    } else if (x > y) {
      return 1;
    } else {
      return -1
    }
  }
}

module.exports = BinarySearchTree;
