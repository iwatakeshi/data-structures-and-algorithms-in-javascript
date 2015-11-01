/* global describe, it, expect */
var Path = require('path');
var root = require('app-root-path').path;
/* Chapter 3 */
describe('Chapter 3', function () {
		/* Merge Sort */
	describe('Merge Sort', function () {
		var MergeSort = require(Path.join(root, '/dist/Chapter 6/Merge Sort/index'));
		it('should export', function () {
			expect(typeof MergeSort).toBe('function');
		});
				
				/* Test methods */
		describe('methods', function () {
			var array = new MergeSort();
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
					
			/* Test merge() */
			describe('merge', function () {
				it('should exist', function () {
					expect(typeof array.merge).toBe('function');
				});
			});
		});
	});
});