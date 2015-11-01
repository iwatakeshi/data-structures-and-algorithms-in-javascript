'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Chapter2ArrayUnOrdered = require('../../Chapter 2/Array/un-ordered/');

var _Chapter2ArrayUnOrdered2 = _interopRequireDefault(_Chapter2ArrayUnOrdered);

var ShellSort = (function (_Unorderd) {
  _inherits(ShellSort, _Unorderd);

  function ShellSort(array) {
    _classCallCheck(this, ShellSort);

    _get(Object.getPrototypeOf(ShellSort.prototype), 'constructor', this).call(this, array);
  }

  _createClass(ShellSort, [{
    key: 'sort',
    value: function sort() {
      var inner = undefined,
          outer = undefined;
      var temp = undefined;

      var h = 1;
      while (h <= Math.floor(this.stack.length / 3)) h = h * 3 + 1;
      while (h > 0) {
        for (outer = h; outer < this.stack.length; outer++) {
          temp = this.stack[outer];
          inner = outer;
          while (inner > h - 1 && this.stack[inner - h] >= temp) {
            this.stack[inner] = this.stack[inner - h];
            inner -= h;
          }
          this.stack[inner] = temp;
        }
        h = Math.floor((h - 1) / 3);
      }
    }
  }]);

  return ShellSort;
})(_Chapter2ArrayUnOrdered2['default']);

exports['default'] = ShellSort;
module.exports = exports['default'];
//# sourceMappingURL=../../source maps/Chapter 7/Shell Sort/index.js.map