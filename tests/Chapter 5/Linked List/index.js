/* global describe, it, expect */
var Path = require('path');
var root = require('app-root-path').path;
/* Chapter 5 */
describe('Chapter 5', function () {
		/* Linked List */
	describe('Linked List', function () {
		var LinkedList = require(Path.join(root, '/dist/Chapter 5/Linked List/index'));
		it('should export', function () {
			expect(typeof LinkedList).toBe('function');
		});
		
		/* Test methods */
		describe('methods', function () {
			var list = new LinkedList();
			/* Test insertFirst() */
			describe('insertFirst', function () {
				it('should exist', function () {
					expect(typeof list.insertFirst).toBe('function');
				});
				it('should add an element', function () {
					list.insertFirst(1);
					expect(list.first).toBeDefined();
				});
			});
					
			/* Test deletFirst() */
			describe('deleteFirst', function () {
				it('should exist', function () {
					expect(typeof list.deleteFirst).toBe('function');
				});
				it('should pop an element', function () {
					list.deleteFirst();
					expect(list.first).not.toBeDefined();
				});
			});
			
			/* Test find() */
			describe('find', function () {
				it('should exist', function () {
					expect(typeof list.find).toBe('function');
				});
				it('should find an element', function () {
					list.insertFirst(5);
					expect(list.find(5).int).toEqual(5);
				});
			});
			
			/* Test delete() */
			describe('delete', function () {
				it('should exist', function () {
					expect(typeof list.delete).toBe('function');
				});
				it('should delete an element', function () {
					expect(list.delete(5).int).toEqual(5);
					expect(list.first).not.toBeDefined();
				});
			});
		});
	});
});