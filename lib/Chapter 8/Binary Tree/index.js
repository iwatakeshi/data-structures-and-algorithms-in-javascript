import Node from '../Node';

class BinaryTree {
  constructor() {
      this.root = undefined;
    }
    /**
     * Searches for the node with the specified key
     * @param  {Number} key The key to the node
     * @return {Node}     The node
     */
  find(key) {
    let current = this.root;
    while (current.key !== key) {
      // Go left
      if (key < current.key) current = current.left;
      // Go right
      else current = current.right;

      if (!current) return undefined;
    }
    return current;
  }

  insert(key, value) {
    let node = new Node();
    node.key = key;
    node.value = value;
    if (!this.root)
      this.root = node;
    else {
      let current = this.root;
      let parent;
      while (true) {
        parent = current;
        // Go left
        if (key < current.key) {
          current = current.left;
          // If the current is undefined,
          // then we have found a spot to
          // insert the node
          if (!current) {
            parent.left = node;
            return;
          }
          // Go right
        } else {
          current = current.right;
          // If the current is undefined,
          // then we have found a spot to
          // insert the node
          if (!current) {
            parent.right = node;
            return;
          }
        }
      }
    }
  }

  remove(key) {
    let current = this.root;
    let parent = this.root;
    let isLeftChild = false;
    // Checks whether the node have
    const check = function (node) {
      if (!node.left && !node.right)
        return {
          chilren: 0,
          position: {
            left: false,
            right: false
          }
        };
      if (node.left && !node.right)
        return {
          chilren: 1,
          position: {
            left: true,
            right: false
          }
        };
      if (!node.left && node.right)
        return {
          chilren: 1,
          position: {
            left: false,
            right: true
          }
        };
      if (node.left && node.right)
        return {
          chilren: 2,
          position: {
            left: true,
            right: true
          }
        };
    };
    // Sets the node
    const setNode = function (current, root, parent, node) {
      if (current === root) root = node;
      else if (isLeftChild) parent.left = node;
      else parent.right = node;
    };

    const getSuccessor = function (node) {
      let _parent = node;
      let _successor = node;
      let _current = node.right;
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
      if (check(current).position.left)
        setNode(current, this.root, parent, current.left);
      else setNode(current, this.root, parent, current.right);
      break;
    case 2:
      let successor = getSuccessor(current);
      setNode(current, this.root, parent, successor);
      successor.left = current.left;
      break;
    }
    return true;
  }
}

export default BinaryTree;