'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Stack = require('../Stack');

var _Stack2 = _interopRequireDefault(_Stack);

var RPNConverter = (function () {
  function RPNConverter() {
    var input = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

    _classCallCheck(this, RPNConverter);

    this.input = input;
    this.stack = new _Stack2['default'](input.length);
    this.output = '';
  }

  /**
   * Translates infix to postfix
   */

  _createClass(RPNConverter, [{
    key: 'convert',
    value: function convert() {
      for (var index = 0; index < this.input.length; index++) {
        var char = this.input[index];
        switch (char) {
          case '+':
          case '-':
            this.consume(char, true, 1);
            break;
          case '*':
          case '/':
            this.consume(char, true, 2);
            break;
          case '(':
          case ')':
            this.consume(char, false);
            break;

          default:
            this.output += char;
            break;
        }
      }
      while (!this.stack.isEmpty()) {
        this.output += this.stack.pop();
      }
      return this.output;
    }
  }, {
    key: 'consume',
    value: function consume(char, isOperator, precedence) {
      if (!isOperator && char === '(') {
        this.stack.push(char);
        return;
      }
      if (isOperator) {
        while (!this.stack.isEmpty()) {
          if (this.operator(char, precedence)) break;
        }
        this.stack.push(char);
      } else {
        while (!this.stack.isEmpty()) {
          if (this.seperator()) break;
        }
      }
    }
  }, {
    key: 'operator',
    value: function operator(char, precedence) {
      var top = this.stack.pop();
      if (top === '(') {
        this.stack.push(top);
        return true;
      } else {
        var prec;
        if (top === '+' || top === '-') prec = 1;else prec = 2;
        if (prec < precedence) {
          this.stack.push(top);
          return true;
        } else this.output += top;
      }
    }
  }, {
    key: 'seperator',
    value: function seperator() {
      var character = this.stack.pop();
      if (character === '(') {
        return true;
      } else this.output += character;
    }
  }]);

  return RPNConverter;
})();

exports['default'] = RPNConverter;
module.exports = exports['default'];
//# sourceMappingURL=../../source maps/Chapter 4/Parsing Arithmetic Expressions/rpn.converter.js.map