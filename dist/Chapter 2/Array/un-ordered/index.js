'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

require('source-map-support/register');

/**
 * This class creates a un-ordered array
 * @class
 */

var JSArray = (function () {
  function JSArray() {
    var array = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

    _classCallCheck(this, JSArray);

    this.stack = array;
  }

  /**
   * Finds the item in the array if it exists.
   * @param {Number|String}
   * @return {Boolean} The truth value
   */

  _createClass(JSArray, [{
    key: 'find',
    value: function find(key) {
      var i;
      for (i = 0; i < this.stack.length; i++) {
        var item = this.stack[i];
        if (key === item) break;
      }
      if (i === this.stack.length) return false;else return true;
    }

    /**
     * Inserts the item into the array.
     * @param {Number|String}
     */
  }, {
    key: 'insert',
    value: function insert(item) {
      this.stack[this.stack.length] = item;
    }

    /**
     * Removes all specified items from the array.
     * @param {Number|String}
     */
  }, {
    key: 'remove',
    value: function remove(key) {
      var i;
      // Iterate through the array until we find
      // the item with the key
      for (i = 0; i < this.stack.length; i++) {
        // We found it
        if (key === this.stack[i]) break;
        // or we just went through all but
        // didn't find it
      }
      // We didn't find it at worst case senario
      if (i === this.stack.length) return false;else {
        // Start iterating from the last position
        for (var j = i; j < this.stack.length; j++) {
          // Shift down the elements
          this.stack[j] = this.stack[j + 1];
        }
        // Decrement the size
        this.stack.length--;
        return true;
      }
    }

    /**
     * Prints all the elements in the array
     */
  }, {
    key: 'print',
    value: function print() {
      console.log.apply(console, this.stack);
    }
  }]);

  return JSArray;
})();

exports['default'] = JSArray;
module.exports = exports['default'];
//# sourceMappingURL=../../../source maps/Chapter 2/Array/un-ordered/index.js.map