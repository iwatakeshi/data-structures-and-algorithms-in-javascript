"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = (function () {
  function Node() {
    var key = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
    var value = arguments.length <= 1 || arguments[1] === undefined ? undefined : arguments[1];

    _classCallCheck(this, Node);

    this.key = key;
    this.value = value;
    this.left = undefined;
    this.right = undefined;
  }

  _createClass(Node, [{
    key: "print",
    value: function print() {
      console.log("key: " + this.key + ", value: " + this.value);
    }
  }]);

  return Node;
})();

exports["default"] = Node;
module.exports = exports["default"];
//# sourceMappingURL=../../source maps/Chapter 8/Node/index.js.map