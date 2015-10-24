'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _link = require('./link');

var _link2 = _interopRequireDefault(_link);

var LinkedList = (function () {
  function LinkedList() {
    _classCallCheck(this, LinkedList);

    this.first = undefined;
  }

  _createClass(LinkedList, [{
    key: 'isEmpty',
    value: function isEmpty() {
      return this.first === undefined;
    }
  }, {
    key: 'insertFirst',
    value: function insertFirst(int, double) {
      var link = new _link2['default'](int, double);
      link.next = this.first;
      this.first = link;
    }
  }, {
    key: 'deleteFirst',
    value: function deleteFirst() {
      if (!this.isEmpty()) {
        var link = this.first;
        this.first = this.first.next;
        return link;
      } else throw new Error('The linked list is empty');
    }
  }, {
    key: 'find',
    value: function find(key) {
      if (this.isEmpty()) return undefined;
      var current = this.first;
      while (current.int !== key) {
        if (current.next === undefined) return undefined;else current = current.next;
      }
      return current;
    }
  }, {
    key: 'delete',
    value: function _delete(key) {
      if (this.isEmpty()) throw new Error('The linked list is empty');
      var current = this.first;
      var previous = this.first;
      while (current.int !== key) {
        if (current.next === undefined) return undefined;else {
          previous = current;
          current = current.next;
        }
      }
      if (current === this.first) {
        this.first = this.first.next;
      } else previous.next = current.next;
      return current;
    }
  }, {
    key: 'print',
    value: function print() {
      console.log('List (first-->last) :');
      var current = this.first;
      while (current !== undefined) {
        if (typeof current.print === 'function') current.print();
        current = current.next;
      }
    }
  }]);

  return LinkedList;
})();

exports['default'] = LinkedList;
module.exports = exports['default'];
//# sourceMappingURL=../../source maps/Chapter 5/Linked List/index.js.map