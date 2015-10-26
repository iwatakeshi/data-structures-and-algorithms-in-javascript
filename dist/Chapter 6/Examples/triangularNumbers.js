"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TriagNumber = (function () {
  function TriagNumber() {
    _classCallCheck(this, TriagNumber);
  }

  _createClass(TriagNumber, null, [{
    key: "solve",
    value: function solve(num) {
      if (num === 1) return num;else return num + TriagNumber.solve(num - 1);
    }
  }]);

  return TriagNumber;
})();

console.log(TriagNumber.solve(4));

exports["default"] = TriagNumber;
module.exports = exports["default"];
//# sourceMappingURL=../../source maps/Chapter 6/Examples/triangularNumbers.js.map