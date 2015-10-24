"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Link = (function () {
  function Link() {
    var int = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
    var double = arguments.length <= 1 || arguments[1] === undefined ? 0.0 : arguments[1];

    _classCallCheck(this, Link);

    this.int = int;
    this.double = double;
    this.next = undefined;
  }

  _createClass(Link, [{
    key: "print",
    value: function print() {
      console.log("{ " + this.int + ", " + this.double + "  }");
    }
  }]);

  return Link;
})();

exports["default"] = Link;
module.exports = exports["default"];
//# sourceMappingURL=../../source maps/Chapter 5/Linked List/link.js.map