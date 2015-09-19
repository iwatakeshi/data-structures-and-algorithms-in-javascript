'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

require('source-map-support/register');

/**
 * The class creates a person object (pg 66)
 * @class Person
 */

var Person = (function () {
  function Person() {
    var firstname = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
    var lastname = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
    var age = arguments.length <= 2 || arguments[2] === undefined ? 24 : arguments[2];

    _classCallCheck(this, Person);

    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }

  /**
   * Prints the fields in the object
   */

  _createClass(Person, [{
    key: 'print',
    value: function print() {
      console.log('first name:', this.firstname, 'last name:', this.last, 'age: ', this.age);
    }

    /**
     * Returns the last name
     * @return {String} The last name
     */
  }, {
    key: 'getLastName',
    value: function getLastName() {
      return this.lastname;
    }
  }]);

  return Person;
})();

exports['default'] = Person;
module.exports = exports['default'];
//# sourceMappingURL=../../../source maps/Chapter 2/Array/person/index.js.map