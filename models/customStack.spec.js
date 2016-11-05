/**
 * Created by dcreey on 10/27/2016.
 */
'use strict';

const assert = require('assert');
const Stack = require('./customStack');

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

describe('Stack Tests', function(){
  describe('Empty Initialization Tests', function(){
    it('add then remove same object', function(){
      const stack = new Stack();
      stack.push(6);
      assert(stack.pop() === 6);
    });

    it('add one remove two throws Error', function(){
      const stack = new Stack();
      stack.push(6);
      stack.pop();
      try {
        stack.pop();
      } catch (er){
        assert(er.message === 'Out Of Range')
      }
    });

    it('add then remove same object', function(){
      const stack = new Stack();
      list.forEach((x) => { stack.push(x); });
      for(let x = list.length - 1; x > 0; x--){
        assert(list[x] === stack.pop());
      }
    });

    it('add then find one pushed at end', function(){
      const stack = new Stack();
      list.forEach((x) => { stack.push(x); });
      stack.find(10).then((x) => { assert(x === 10); });
      stack.find(112).then((x) => { assert(x === -1); });
    });

    it('add then enumerate', function(){
      const stack = new Stack();
      list.forEach((x) => { stack.push(x); });
      const enumStack = stack.getEnumerator();
      let eStack;
      let cnt = list.length - 1;
      while (eStack = enumStack.next()){
        assert(list[cnt] === eStack);
        cnt--;
      }
    });
  });

  describe('List Initialization Tests', function(){
    it('add then remove same object', function(){
      const stack = new Stack(list);
      stack.push(6);
      assert(stack.pop() === 6);
      assert(stack.pop() === 10);
    });

    it('add then remove same object', function(){
      const stack = new Stack(list);
      for(let x = list.length - 1; x > 0; x--){
        assert(list[x] === stack.pop());
      }
    });

    it('add then find one pushed at end', function(){
      const stack = new Stack(list);
      stack.find(10).then((x) => { assert(x === 10); });
      stack.find(112).then((x) => { assert(x === -1); });
    });

    it('add then enumerate', function(){
      const stack = new Stack(list);
      const enumStack = stack.getEnumerator();
      let eStack;
      let cnt = list.length - 1;
      while (eStack = enumStack.next()){
        assert(list[cnt] === eStack);
        cnt--;
      }
    });
  });

});
