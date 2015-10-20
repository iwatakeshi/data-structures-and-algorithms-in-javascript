'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _indexJs = require('../index.js');

var _indexJs2 = _interopRequireDefault(_indexJs);

var _io = require('io');

var _io2 = _interopRequireDefault(_io);

var Reverser = (function () {
  function Reverser() {
    var input = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

    _classCallCheck(this, Reverser);

    this.input = input;
    this.output = '';
  }

  _createClass(Reverser, [{
    key: 'reverse',
    value: function reverse() {
      var length = this.input.length;
      var stack = new _indexJs2['default'](length);
      var char = '';
      for (var index = 0; index < this.input.length; index++) {
        char = this.input[index];
        stack.push(char.toString());
      }
      while (!stack.isEmpty()) {
        char = stack.pop();
        this.output += char;
      }
      return this.output;
    }
  }]);

  return Reverser;
})();

_io2['default'].read({
  question: 'Enter a string: '
}, function (answer) {
  var matches;
  matches = /^[\']([\w\s\S\d]+)[\']$/g.exec(answer);
  if (!matches) matches = /^[\"]([\w\s\S\d]+)[\"]$/g.exec(answer);
  answer = matches ? matches[1] : undefined || answer;
  var reverser = new Reverser(answer);
  console.log('Reversed: ' + reverser.reverse());
});
//# sourceMappingURL=../../../source maps/Chapter 4/Stack/Examples/example1.js.map