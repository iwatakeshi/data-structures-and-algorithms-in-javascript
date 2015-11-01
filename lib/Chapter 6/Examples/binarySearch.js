import Sort from '../../../dist/Chapter 3/Selection Sort/';

class BinarySearch extends Sort {
  constructor(array) {
    super(array);
  }

  find(key, lower, upper) {
    if (!lower && !upper) return this.find(key, 0, this.stack.length - 1);
    else {
      let current;
      current = Math.floor((lower + upper) / 2);
      if (this.stack[current] === key) return current;
      else if (lower > upper) return false;
      else {
        if (this.stack[current] < key)
          return this.find(key, current + 1, upper);
        else return this.find(key, lower, current - 1);
      }
    }
  }
}

const binary = new BinarySearch([9, 18, 27, 36, 45, 54, 63, 72, 81, 90, 99, 108, 117, 126, 135, 144]);
const result = binary.find(27);
console.log(result ? `found 27 at index ${ result }` : 'couldn\'t find 27.');

export default Sort;