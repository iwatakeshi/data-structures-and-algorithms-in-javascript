/* global describe, it, expect */
var Path 	= require('path');
var root 	= require('app-root-path').path;
var _ 		= require('lodash');
/* Chapter 2 */
describe('Chapter 2', function(){
	/* Array */
	describe('Array', function(){
		/* Person Array */
			describe('Person Array', function(){
				var JSArray = require(Path.join(root,'/dist/Chapter 2/Array/person/person-array/index'));
				var Person = require(Path.join(root,'/dist/Chapter 2/Array/person/index'));
				it('should export', function(){
					expect(typeof JSArray).toBe('function');
				});
				
				/* Test methods */
				describe('methods', function(){
					var array = new JSArray();
					var personA = new Person('Sakamoto', 'Ryuichi', 63),
							personB = new Person('Steve', 'Jobs', 56),
							personC = new Person('Naruto', 'Uzumaki', 21);
					/* Test insert() */
					describe('insert', function(){
						it('should exist', function(){
							expect(typeof array.insert).toBe('function');
						});
						it('should add an element', function(){
							array.insert('Sakamoto', 'Ryuichi', 63);
							array.insert('Steve', 'Jobs', 56);
							array.insert('Naruto', 'Uzumaki', 21);
							expect(_.isEqual(array.stack, [personA, personB, personC])).toEqual(true);
						});
					});
					
					/* Test find() */
					describe('find', function(){
						it('should exist', function(){
							expect(typeof array.find).toBe('function');
						});
						it('should find elements', function(){
							expect(array.find('Ryuichi')).toBe(true);
							expect(array.find('Jobs')).toBe(true);
							expect(array.find('Uzumaki')).toBe(true);
							expect(array.find('Doe')).toBe(false);
						});
					});
					
					/* Test remove() */
					describe('remove', function(){
						it('should exist', function(){
							expect(typeof array.remove).toBe('function');
						});
						it('should remove element', function(){
							expect(array.remove('Ryuichi')).toBe(true);
							expect(array.remove('Jobs')).toBe(true);
							expect(array.remove('Doe')).toBe(false);
							expect(_.isEqual(array.stack, [personC])).toEqual(true);
						});
					});
					
					/* Test print() */
					describe('print', function(){
						it('should exist', function(){
							expect(typeof array.print).toBe('function');
						});
					});
					
					/* Test length() */
					describe('length', function(){
						it('should exist', function(){
							expect(typeof array.length).toBe('function');
						});
					});
				});
			});
	});
});