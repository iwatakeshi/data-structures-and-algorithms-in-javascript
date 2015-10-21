class Queue {
  constructor(length = 10) {
    this.length = length;
    this.queue = [];
    this.front = 0;
    this.rear = -1;
    this.nItems = 0;
  }

  insert(item) {
    if (this.rear === this.length - 1)
      this.rear = -1;
    this.queue[++this.rear] = item;
    this.nItems++;
  }

  remove() {
    var temp = this.queue[this.front];
    this.queue[this.front] = undefined;
    this.front++;
    if (this.front === this.length)
      this.front = 0;
    this.nItems--;
    return temp;
  }

  peekFront() {
    return this.queue[this.front];
  }

  isEmpty() {
    return this.nItems === 0;
  }

  isFull() {
    return this.nItems === this.length;
  }

  size() {
    return this.length;
  }
}

export default Queue;