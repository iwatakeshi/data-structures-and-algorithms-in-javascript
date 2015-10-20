"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stack = (function () {
  function Stack() {
    var size = arguments.length <= 0 || arguments[0] === undefined ? 10 : arguments[0];

    _classCallCheck(this, Stack);

    this.max = size;
    this.stack = [];
    this.top = -1;
  }

  _createClass(Stack, [{
    key: "push",
    value: function push(item) {
      this.stack[++this.top] = item;
    }
  }, {
    key: "pop",
    value: function pop() {
      this.stack.length--;
      return this.stack[this.top--];
    }
  }, {
    key: "peek",
    value: function peek() {
      return this.stack[this.top];
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.top === -1;
    }
  }, {
    key: "isFull",
    value: function isFull() {
      return this.top === this.max - 1;
    }
  }]);

  return Stack;
})();

exports["default"] = Stack;
module.exports = exports["default"];
//# sourceMappingURL=../../source maps/Chapter 4/Stack/index.js.map