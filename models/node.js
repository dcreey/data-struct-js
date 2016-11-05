/**
 * Created by dcreey on 10/27/2016.
 */
'use strict';

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.previous = null;
  }

  //get next() {
  //  return this.n;
  //}
  //
  //set next(next) {
  //  this.n = next;
  //}
  //get prev() {
  //  return this.p;
  //}
  //
  //set prev(next) {
  //  this.next = p;
  //}
};

module.exports = Node;
