'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _distChapter3SelectionSort = require('../../../dist/Chapter 3/Selection Sort/');

var _distChapter3SelectionSort2 = _interopRequireDefault(_distChapter3SelectionSort);

var BinarySearch = (function (_Sort) {
  _inherits(BinarySearch, _Sort);

  function BinarySearch(array) {
    _classCallCheck(this, BinarySearch);

    _get(Object.getPrototypeOf(BinarySearch.prototype), 'constructor', this).call(this, array);
  }

  _createClass(BinarySearch, [{
    key: 'find',
    value: function find(key, lower, upper) {
      if (!lower && !upper) return this.find(key, 0, this.stack.length - 1);else {
        var current = undefined;
        current = Math.floor((lower + upper) / 2);
        if (this.stack[current] === key) return current;else if (lower > upper) return false;else {
          if (this.stack[current] < key) return this.find(key, current + 1, upper);else return this.find(key, lower, current - 1);
        }
      }
    }
  }]);

  return BinarySearch;
})(_distChapter3SelectionSort2['default']);

var binary = new BinarySearch([9, 18, 27, 36, 45, 54, 63, 72, 81, 90, 99, 108, 117, 126, 135, 144]);
var result = binary.find(27);
console.log(result ? 'found 27 at index ' + result : 'couldn\'t find 27.');

exports['default'] = _distChapter3SelectionSort2['default'];
module.exports = exports['default'];
//# sourceMappingURL=../../source maps/Chapter 6/Examples/binarySearch.js.map