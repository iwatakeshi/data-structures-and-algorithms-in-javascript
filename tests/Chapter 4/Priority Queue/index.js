/* global describe, it, expect */
var Path = require('path');
var root = require('app-root-path').path;
/* Chapter 4 */
describe('Chapter 4', function () {
		/* Priority Queue */
	describe('Priority Queue', function () {
		var Queue = require(Path.join(root, '/dist/Chapter 4/Priority Queue/index'));
		it('should export', function () {
			expect(typeof Queue).toBe('function');
		});
		
		/* Test methods */
		describe('methods', function () {
			var queue = new Queue(10);
			/* Test insert() */
			describe('insert', function () {
				it('should exist', function () {
					expect(typeof queue.insert).toBe('function');
				});
				it('should add an element', function () {
					queue.insert(1);
					queue.insert(4);
					queue.insert(2);
					expect(queue.queue).toEqual([4, 2, 1]);
				});
			});
					
			/* Test remove() */
			describe('remove', function () {
				it('should exist', function () {
					expect(typeof queue.remove).toBe('function');
				});
				it('should remove an element', function () {
					queue.remove();
					queue.remove();
					expect(queue.queue).toEqual([4, undefined, undefined]);
				});
			});
			
			/* Test peekMin() */
			describe('peekMin', function () {
				it('should exist', function () {
					expect(typeof queue.peekMin).toBe('function');
				});
				it('should peekFront an element', function () {
					queue.insert(5);
					expect(queue.peekMin()).toEqual(4);
				});
			});
			
			/* Test isEmpty() */
			describe('isEmpty', function () {
				it('should exist', function () {
					expect(typeof queue.isEmpty).toBe('function');
				});
				it('should return a boolean', function () {
					expect(queue.isEmpty()).toEqual(false);
				});
			});
			
			/* Test isFull() */
			describe('isFull', function () {
				it('should exist', function () {
					expect(typeof queue.isFull).toBe('function');
				});
				it('should return a boolean', function () {
					expect(queue.isFull()).toEqual(false);
				});
			});
		});
	});
});