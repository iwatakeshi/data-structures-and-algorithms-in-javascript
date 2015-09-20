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

var BubbleSort = (function (_Unordered) {
  _inherits(BubbleSort, _Unordered);

  function BubbleSort() {
    var array = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

    _classCallCheck(this, BubbleSort);

    _get(Object.getPrototypeOf(BubbleSort.prototype), 'constructor', this).call(this, array);
  }

  /**
   * Sorts the elements in the array from low to high
   */

  _createClass(BubbleSort, [{
    key: 'sort',
    value: function sort() {
      var inner, outer;
      // Outer loop (backward)
      for (outer = this.stack.length - 1; outer > 1; outer--) {
        // Inner loop (forward)
        for (inner = 0; inner < outer; inner++) {
          if (this.stack[inner] > this.stack[inner + 1]) this.swap(inner, inner + 1);
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

  return BubbleSort;
})(_Chapter2ArrayUnOrdered2['default']);

exports['default'] = BubbleSort;
module.exports = exports['default'];
//# sourceMappingURL=../../source maps/Chapter 3/Bubble Sort/index.js.map