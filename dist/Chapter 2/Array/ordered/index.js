'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

require('source-map-support/register');

/**
 * This class creates an ordered array.
 * @class JSArray
 */

var JSArray = (function () {
  function JSArray() {
    var array = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

    _classCallCheck(this, JSArray);

    this.stack = array;
  }

  /**
   * Represents the length of the array.
   * @return {Number} The length of the array
   */

  _createClass(JSArray, [{
    key: 'length',
    value: function length() {
      return this.stack.length;
    }

    /**
     * Finds the item in the array if it exists.
     * @param {Number}
     * @return {Number} The index if it exists or -1
     */
  }, {
    key: 'find',
    value: function find(key) {
      var middle = undefined;
      // Lower bound is the first index
      var lowerBound = 0,

      // Upper bound is the last index
      upperBound = this.stack.length - 1;
      while (true) {
        // The current index which is half of the
        // length of the array
        middle = Math.floor((lowerBound + upperBound) / 2);
        // Found it!
        if (key === this.stack[middle]) return middle;
        // We didn't find it and we can't divide anymore
        else if (lowerBound > upperBound) return -1;
          // We didn't find it yet but we can keep dividing
          else {
              // Check if the item is below the key
              if (this.stack[middle] < key)
                // Then it's the upper half
                // (because the item must be >= key)
                lowerBound = middle + 1;
                // Then it's in the lower half
                // (because the item must be <= key)
              else upperBound = middle - 1;
            }
      }
    }

    /**
     * Inserts the item into the array in an order matter.
     * @param {Number} item The item to insert
     */
  }, {
    key: 'insert',
    value: function insert(item) {
      var i;
      // Iterate through the array and find where
      // we should put this item
      for (i = 0; i < this.stack.length; i++) {
        // Begin linear search
        if (this.stack[i] > item) break;
      }
      // Let's move the bigger items up!
      for (var j = this.stack.length; j > i; j--) {
        // Detail:
        // As we go down from the length of the array (size)
        // create a new item (stack[j], where it's undefined)
        // then assign the previous item in the array to it
        this.stack[j] = this.stack[j - 1];
      }
      // Insert the item
      this.stack[i] = item;
    }

    /**
     * Removes all specified items from the array.
     * @param {Number} key The key to find the item
     */
  }, {
    key: 'remove',
    value: function remove(key) {
      var i = this.find(key);
      // We didn't find it at worst case senario
      if (i === this.stack.length) return false;else if (i === -1) return false;else {
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
//# sourceMappingURL=../../../source maps/Chapter 2/Array/ordered/index.js.map