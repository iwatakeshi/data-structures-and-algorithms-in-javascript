import Link from './link';

class LinkedList {
  constructor() {
    this.first = undefined;
  }
  isEmpty() {
    return this.first === undefined;
  }

  insertFirst(int, double) {
    var link = new Link(int, double);
    link.next = this.first;
    this.first = link;
  }

  deleteFirst() {
    if (!this.isEmpty()) {
      var link = this.first;
      this.first = this.first.next;
      return link;
    } else throw new Error('The linked list is empty');
  }

  find(key) {
    if (this.isEmpty()) return undefined;
    var current = this.first;
    while (current.int !== key) {
      if (current.next === undefined)
        return undefined;
      else current = current.next;
    }
    return current;
  }
  delete(key) {
    if (this.isEmpty()) throw new Error('The linked list is empty');
    var current = this.first;
    var previous = this.first;
    while (current.int !== key) {
      if (current.next === undefined)
        return undefined;
      else {
        previous = current;
        current = current.next;
      }
    }
    if (current === this.first) {
      this.first = this.first.next;
    } else previous.next = current.next;
    return current;
  }
  print() {
    console.log('List (first-->last) :');
    var current = this.first;
    while (current !== undefined) {
      if (typeof current.print === 'function')
        current.print();
      current = current.next;
    }
  }
}
export default LinkedList;