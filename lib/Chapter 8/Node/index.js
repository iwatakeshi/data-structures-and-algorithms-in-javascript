class Node {
  constructor(key = 0, value = undefined) {
    this.key = key;
    this.value = value;
    this.left = undefined;
    this.right = undefined;
  }
  print() {
    console.log(`key: ${this.key}, value: ${this.value}`);
  }
}

export default Node;