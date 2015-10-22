class Stack {
  constructor(size = 10) {
    this.max = size;
    this.stack = [];
    this.top = -1;
  }
  push(item) {
    this.stack[++this.top] = item;
  }
  pop() {
    var temp = this.stack[this.top--];
    this.stack.length--;
    return temp;
  }
  peek() {
    return this.stack[this.top];
  }
  isEmpty() {
    return this.top === -1;
  }
  isFull() {
    return this.top === this.max - 1;
  }
}

export default Stack;