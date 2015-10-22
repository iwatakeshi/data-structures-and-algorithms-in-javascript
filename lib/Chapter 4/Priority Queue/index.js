class PriorityQueue {
  constructor(length = 10) {
    this.length = length;
    this.queue = [];
    this.nItems = 0;
  }
  insert(item) {
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
  remove() {
    var temp = this.queue[this.nItems - 1];
    this.queue[this.nItems - 1] = undefined;
    --this.nItems;
    return temp;
  }

  peekMin() {
    return this.queue[this.nItems - 1];
  }

  isEmpty() {
    return this.nItems === 0;
  }

  isFull() {
    return this.nItems === this.length;
  }
}

export default PriorityQueue;