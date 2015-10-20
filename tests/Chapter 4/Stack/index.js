/* global describe, it, expect */
var Path = require('path');
var root = require('app-root-path').path;
/* Chapter 4 */
describe('Chapter 4', function () {
		/* Stack */
	describe('Stack', function () {
		var Stack = require(Path.join(root, '/dist/Chapter 4/Stack/index'));
		it('should export', function () {
			expect(typeof Stack).toBe('function');
		});
		
		/* Test methods */
		describe('methods', function () {
			var stack = new Stack(10);
			/* Test push() */
			describe('push', function () {
				it('should exist', function () {
					expect(typeof stack.push).toBe('function');
				});
				it('should add an element', function () {
					stack.push(1);
					stack.push(4);
					stack.push(2);
					expect(stack.stack).toEqual([1, 4, 2]);
				});
			});
					
			/* Test pop() */
			describe('pop', function () {
				it('should exist', function () {
					expect(typeof stack.pop).toBe('function');
				});
				it('should pop an element', function () {
					stack.pop();
					stack.pop();
					expect(stack.stack).toEqual([1]);
				});
			});
			
			/* Test peek() */
			describe('peek', function () {
				it('should exist', function () {
					expect(typeof stack.peek).toBe('function');
				});
				it('should peek an element', function () {
					stack.push(5);
					expect(stack.peek()).toEqual(5);
				});
			});
			
			/* Test isEmpty() */
			describe('isEmpty', function () {
				it('should exist', function () {
					expect(typeof stack.isEmpty).toBe('function');
				});
				it('should return a boolean', function () {
					expect(stack.isEmpty()).toEqual(false);
				});
			});
			
			/* Test isFull() */
			describe('isFull', function () {
				it('should exist', function () {
					expect(typeof stack.isFull).toBe('function');
				});
				it('should return a boolean', function () {
					expect(stack.isFull()).toEqual(false);
				});
			});
		});
	});
});