'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Stack = require('../Stack/');

var _Stack2 = _interopRequireDefault(_Stack);

var RPNParser = (function () {
  function RPNParser() {
    var input = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

    _classCallCheck(this, RPNParser);

    this.input = input;
    this.stack = new _Stack2['default'](input.length);
  }

  _createClass(RPNParser, [{
    key: 'parse',
    value: function parse() {
      var result, num, num2;
      for (var index = 0; index < this.input.length; index++) {
        var ch = this.input[index];
        if (ch.match(/\d/)) {
          this.stack.push(parseInt(ch));
        } else {
          num2 = this.stack.pop();
          num = this.stack.pop();
          switch (ch) {
            case '+':
              result = num + num2;
              break;
            case '-':
              result = num - num2;
              break;
            case '*':
              result = num * num2;
              break;
            case '/':
              result = num / num2;
              break;
            default:
              result = 0;
              break;
          }
          this.stack.push(result);
        }
      }
      result = this.stack.pop();
      return result;
    }
  }]);

  return RPNParser;
})();

exports['default'] = RPNParser;
module.exports = exports['default'];
//# sourceMappingURL=../../source maps/Chapter 4/Parsing Arithmetic Expressions/rpn.parser.js.map