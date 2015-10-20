'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _ = require('../');

var _2 = _interopRequireDefault(_);

var _io = require('io');

var _io2 = _interopRequireDefault(_io);

var BracketChecker = (function () {
  function BracketChecker(input) {
    _classCallCheck(this, BracketChecker);

    this.input = input;
  }

  _createClass(BracketChecker, [{
    key: 'check',
    value: function check() {
      var length = this.input.length;
      var stack = new _2['default'](length);
      for (var index = 0; index < this.input.length; index++) {
        var char = this.input[index];
        switch (char) {
          case '{':
          case '[':
          case '(':
            stack.push(char);
            break;
          case '}':
          case ']':
          case ')':
            if (!stack.isEmpty()) {
              var next = stack.pop();
              if (char === '}' && next !== '{' || char === ']' && next !== '[' || char === ')' && next !== '(') console.error('Error: ' + '\'' + char + '\'' + 'at ' + index);
            }

            break;
        }
      }
      if (!stack.isEmpty()) console.error('Error: missing right delimiter.');
    }
  }]);

  return BracketChecker;
})();

_io2['default'].read({
  question: 'Enter a string:'
}, function (answer) {
  var checker = new BracketChecker(answer);
  checker.check();
});
//# sourceMappingURL=../../../source maps/Chapter 4/Stack/Examples/example2.js.map