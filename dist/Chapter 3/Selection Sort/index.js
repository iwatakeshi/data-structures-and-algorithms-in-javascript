'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('source-map-support/register');

var _Chapter2ArrayUnOrdered = require('../../Chapter 2/Array/un-ordered/');

var _Chapter2ArrayUnOrdered2 = _interopRequireDefault(_Chapter2ArrayUnOrdered);

var SelectionSort = (function (_Unordered) {
  _inherits(SelectionSort, _Unordered);

  function SelectionSort() {
    var array = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

    _classCallCheck(this, SelectionSort);

    _get(Object.getPrototypeOf(SelectionSort.prototype), 'constructor', this).call(this, array);
  }

  /**
   * Sorts the elements in the array from low to high
   */

  _createClass(SelectionSort, [{
    key: 'sort',
    value: function sort() {
      var inner, outer, minimum;
      // Outer loop (forward until the one before the last index)
      for (outer = 0; outer < this.stack.length - 1; outer++) {
        // Keep track of the minimum
        minimum = outer;
        // Inner loop (forward ahead of the outer by 1 index)
        for (inner = outer + 1; inner < this.stack.length; inner++) {
          // Check for the a new minimum
          if (this.stack[inner] < this.stack[minimum]) minimum = inner;
          // Swap them	
          this.swap(outer, minimum);
        }
      }
    }

    /**
     * Swaps the elements in the array
     * @private
     * @param first The first index
     * @param second The second index
     */
  }, {
    key: 'swap',
    value: function swap(first, second) {
      var temp = this.stack[first];
      this.stack[first] = this.stack[second];
      this.stack[second] = temp;
    }
  }]);

  return SelectionSort;
})(_Chapter2ArrayUnOrdered2['default']);

exports['default'] = SelectionSort;
module.exports = exports['default'];
//# sourceMappingURL=../../source maps/Chapter 3/Selection Sort/index.js.map