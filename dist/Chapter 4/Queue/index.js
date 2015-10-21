"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Queue = (function () {
  function Queue() {
    var length = arguments.length <= 0 || arguments[0] === undefined ? 10 : arguments[0];

    _classCallCheck(this, Queue);

    this.length = length;
    this.queue = [];
    this.front = 0;
    this.rear = -1;
    this.nItems = 0;
  }

  _createClass(Queue, [{
    key: "insert",
    value: function insert(item) {
      if (this.rear === this.length - 1) this.rear = -1;
      this.queue[++this.rear] = item;
      this.nItems++;
    }
  }, {
    key: "remove",
    value: function remove() {
      var temp = this.queue[this.front];
      this.queue[this.front] = undefined;
      this.front++;
      if (this.front === this.length) this.front = 0;
      this.nItems--;
      return temp;
    }
  }, {
    key: "peekFront",
    value: function peekFront() {
      return this.queue[this.front];
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.nItems === 0;
    }
  }, {
    key: "isFull",
    value: function isFull() {
      return this.nItems === this.length;
    }
  }, {
    key: "size",
    value: function size() {
      return this.length;
    }
  }]);

  return Queue;
})();

exports["default"] = Queue;
module.exports = exports["default"];
//# sourceMappingURL=../../source maps/Chapter 4/Queue/index.js.map