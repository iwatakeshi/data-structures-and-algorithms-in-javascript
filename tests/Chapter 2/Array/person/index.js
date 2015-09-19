/* global describe, it, expect */
var Path = require('path');
var root = require('app-root-path').path;
/* Chapter 2 */
describe('Chapter 2', function(){
	/* Array */
	describe('Array', function(){
		/* Person */
			describe('Person', function(){
				var Person = require(Path.join(root,'/dist/Chapter 2/Array/person/index'));
				it('should export', function(){
					expect(typeof Person).toBe('function');
				});
				
				/* Test methods */
				describe('methods', function(){
					var person = new Person();
					/* Test getLastName() */
					describe('getLastName', function(){
						it('should exist', function(){
							expect(typeof person.getLastName).toBe('function');
						});
						it('should get the last name', function(){
							expect(person.getLastName()).toEqual('');
						});
					});
					
					/* Test print() */
					describe('print', function(){
						it('should exist', function(){
							expect(typeof person.print).toBe('function');
						});
					});
				});
			});
	});
});