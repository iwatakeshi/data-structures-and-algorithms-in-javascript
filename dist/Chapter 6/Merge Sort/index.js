'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _distChapter2ArrayUnOrdered = require('../../../dist/Chapter 2/Array/un-ordered');

var _distChapter2ArrayUnOrdered2 = _interopRequireDefault(_distChapter2ArrayUnOrdered);

var MergeSort = (function (_JSArray) {
  _inherits(MergeSort, _JSArray);

  function MergeSort(array) {
    _classCallCheck(this, MergeSort);

    _get(Object.getPrototypeOf(MergeSort.prototype), 'constructor', this).call(this, array);
  }

  _createClass(MergeSort, [{
    key: 'sort',
    value: function sort(workspace, lower, upper) {
      if (!workspace) this.sort([], 0, this.stack.length - 1);else {
        if (lower === upper) return;else {
          var mid = Math.floor((lower + upper) / 2);
          // Sort lower bound
          this.sort(workspace, lower, mid);
          // Sort the upper bound
          this.sort(workspace, mid + 1, upper);
          // Merge the upper and the lower
          this.merge(workspace, lower, mid + 1, upper);
        }
      }
    }
  }, {
    key: 'merge',
    value: function merge(workspace, low, high, upper) {
      var count = 0;
      var lower = low;
      var mid = high - 1;
      // Number of items
      var n = upper - lower + 1;

      // While 'low' is below the mid and 'high' is below the upper
      while (low <= mid && high <= upper)
      // Check if 'low' is less than 'high'
      if (this.stack[low] < this.stack[high])
        // Copy the low
        workspace[count++] = this.stack[low++];
        // Copy the high
      else workspace[count++] = this.stack[high++];
      // While 'low' is below or equal to the mid
      while (low <= mid) workspace[count++] = this.stack[low++];

      while (high <= upper) workspace[count++] = this.stack[high++];

      for (count = 0; count < n; count++) this.stack[lower + count] = workspace[count];
    }
  }]);

  return MergeSort;
})(_distChapter2ArrayUnOrdered2['default']);

exports['default'] = MergeSort;
module.exports = exports['default'];
//# sourceMappingURL=../../source maps/Chapter 6/Merge Sort/index.js.map