"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PriorityQueue = (function () {
  function PriorityQueue() {
    var length = arguments.length <= 0 || arguments[0] === undefined ? 10 : arguments[0];

    _classCallCheck(this, PriorityQueue);

    this.length = length;
    this.queue = [];
    this.nItems = 0;
  }

  _createClass(PriorityQueue, [{
    key: "insert",
    value: function insert(item) {
      var j = 0;
      // if no items,
      if (this.nItems === 0)
        // insert at 0
        this.queue[this.nItems++] = item;
        // if items,
      else {
          // start at end,
          for (j = this.nItems - 1; j >= 0; j--) {
            // if new item larger,
            if (item > this.queue[j])
              // shift upward
              this.queue[j + 1] = this.queue[j];
              // if smaller done shifting
            else break;
          }
          // insert it
          this.queue[j + 1] = item;
          this.nItems++;
        }
    }
  }, {
    key: "remove",
    value: function remove() {
      var temp = this.queue[this.nItems - 1];
      this.queue[this.nItems - 1] = undefined;
      --this.nItems;
      return temp;
    }
  }, {
    key: "peekMin",
    value: function peekMin() {
      return this.queue[this.nItems - 1];
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
  }]);

  return PriorityQueue;
})();

exports["default"] = PriorityQueue;
module.exports = exports["default"];
//# sourceMappingURL=../../source maps/Chapter 4/Priority Queue/index.js.map