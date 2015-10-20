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
    this.stack.length--;
    return this.stack[this.top--];
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