'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Node = require('../Node');

var _Node2 = _interopRequireDefault(_Node);

var BinaryTree = (function () {
  function BinaryTree() {
    _classCallCheck(this, BinaryTree);

    this.root = undefined;
  }

  /**
   * Searches for the node with the specified key
   * @param  {Number} key The key to the node
   * @return {Node}     The node
   */

  _createClass(BinaryTree, [{
    key: 'find',
    value: function find(key) {
      var current = this.root;
      while (current.key !== key) {
        // Go left
        if (key < current.key) current = current.left;
        // Go right
        else current = current.right;

        if (!current) return undefined;
      }
      return current;
    }
  }, {
    key: 'insert',
    value: function insert(key, value) {
      var node = new _Node2['default']();
      node.key = key;
      node.value = value;
      if (!this.root) this.root = node;else {
        var current = this.root;
        var _parent2 = undefined;
        while (true) {
          _parent2 = current;
          // Go left
          if (key < current.key) {
            current = current.left;
            // If the current is undefined,
            // then we have found a spot to
            // insert the node
            if (!current) {
              _parent2.left = node;
              return;
            }
            // Go right
          } else {
              current = current.right;
              // If the current is undefined,
              // then we have found a spot to
              // insert the node
              if (!current) {
                _parent2.right = node;
                return;
              }
            }
        }
      }
    }
  }, {
    key: 'remove',
    value: function remove(key) {
      var current = this.root;
      var parent = this.root;
      var isLeftChild = false;
      // Checks whether the node have
      var check = function check(node) {
        if (!node.left && !node.right) return {
          chilren: 0,
          position: {
            left: false,
            right: false
          }
        };
        if (node.left && !node.right) return {
          chilren: 1,
          position: {
            left: true,
            right: false
          }
        };
        if (!node.left && node.right) return {
          chilren: 1,
          position: {
            left: false,
            right: true
          }
        };
        if (node.left && node.right) return {
          chilren: 2,
          position: {
            left: true,
            right: true
          }
        };
      };
      // Sets the node
      var setNode = function setNode(current, root, parent, node) {
        if (current === root) root = node;else if (isLeftChild) parent.left = node;else parent.right = node;
      };

      var getSuccessor = function getSuccessor(node) {
        var _parent = node;
        var _successor = node;
        var _current = node.right;
        while (!!_current) {
          _parent = _successor;
          _successor = _current;
          _current = _current.left;
        }
        if (_successor !== node.right) {
          _parent.left = _successor.right;
          _successor.right = node.right;
        }
        return _successor;
      };

      // Search for the node
      while (key !== current.key) {
        parent = current;
        if (key < current.key) {
          isLeftChild = true;
          current = current.left;
        } else {
          isLeftChild = false;
          current = current.right;
        }
        if (!current) return false;
      }
      switch (check(current).chilren) {
        case 0:
          setNode(current, this.root, parent, undefined);
          break;
        case 1:
          if (check(current).position.left) setNode(current, this.root, parent, current.left);else setNode(current, this.root, parent, current.right);
          break;
        case 2:
          var successor = getSuccessor(current);
          setNode(current, this.root, parent, successor);
          successor.left = current.left;
          break;
      }
      return true;
    }
  }]);

  return BinaryTree;
})();

exports['default'] = BinaryTree;
module.exports = exports['default'];
//# sourceMappingURL=../../source maps/Chapter 8/Binary Tree/index.js.map