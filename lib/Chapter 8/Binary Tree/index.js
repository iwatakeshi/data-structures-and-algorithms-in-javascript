class Node {
    constructor (key = 0, value = undefined) {
    this.key = key;
    this.value = value;
    this.left = undefined;
    this.right = undefined;
    }
  }

  print() {
    console.log(`key: ${this.key}, value: ${this.value}`);
  }
}

class BinaryTree {
  constructor () {
    this.root = undefined;
  }

  find (key) {
    let current = this.root;
    while(current.key !== key) {
      if(key < current.key) current = current.left;
      else current = current.right;

      if(current === undefined) return undefined;
    }
    return current;
  }

  insert (key, value) {
    let node = new Node();
    if(this.root === undefined)
      this.root = node;
    else {
      let current = this.root;
      let parent;
      while(true) {
        parent = current;
        if(key < current.key) {
          current = current.left;
          if(current === undefined) {
            parent.left = node;
            return;
          }
        } else {
          current = current.right;
          if(current === undefined) {
            parent.right = node;
            return;
          }
        }
      }
    }
  }
}