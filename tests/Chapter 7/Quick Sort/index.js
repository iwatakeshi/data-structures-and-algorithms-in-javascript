/* global describe, it, expect */
var Path = require('path');
var root = require('app-root-path').path;
/* Chapter 7 */
describe('Chapter 7', function () {
    /* Quick Sort */
  describe('Quick Sort', function () {
    var QuickSort = require(Path.join(root, '/dist/Chapter 7/Quick Sort/index'));
    it('should export', function () {
      expect(typeof QuickSort).toBe('function');
    });
        
        /* Test methods */
    describe('methods', function () {
      var array = new QuickSort();
      /* Test insert() */
      describe('insert', function () {
        it('should exist', function () {
          expect(typeof array.insert).toBe('function');
        });
        it('should add an element', function () {
          array.insert(1);
          array.insert(4);
          array.insert(2);
          expect(array.stack).toEqual([1, 4, 2]);
        });
      });
          
      /* Test sort() */
      describe('sort', function () {
        it('should exist', function () {
          expect(typeof array.sort).toBe('function');
        });
        it('should sort the array', function () {
          array.sort();
          expect(array.stack).toEqual([1, 2, 4]);
        });
      });
          
      /* Test find() */
      describe('find', function () {
        it('should exist', function () {
          expect(typeof array.find).toBe('function');
        });
        it('should find elements', function () {
          expect(array.find(1)).toBe(true);
          expect(array.find(2)).toBe(true);
          expect(array.find(4)).toBe(true);
          expect(array.find(5)).toBe(false);
        });
      });
          
      /* Test remove() */
      describe('remove', function () {
        it('should exist', function () {
          expect(typeof array.remove).toBe('function');
        });
        it('should remove element', function () {
          expect(array.remove(1)).toBe(true);
          expect(array.remove(4)).toBe(true);
          expect(array.remove(5)).toBe(false);
          expect(array.stack).toEqual([2]);
        });
      });
          
      /* Test print() */
      describe('print', function () {
        it('should exist', function () {
          expect(typeof array.print).toBe('function');
        });
      });
    });
  });
});