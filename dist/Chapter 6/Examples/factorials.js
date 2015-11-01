'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Factorial = (function () {
  function Factorial() {
    _classCallCheck(this, Factorial);
  }

  _createClass(Factorial, null, [{
    key: 'solve',
    value: function solve(num) {
      if (num === 0) return 1;else return num * Factorial.solve(num - 1);
    }
  }]);

  return Factorial;
})();

module.exports = Factorial;
//# sourceMappingURL=../../source maps/Chapter 6/Examples/factorials.js.map