import Unorderd from '../../Chapter 2/Array/un-ordered/';

class QuickSort extends Unorderd {
  constructor(array) {
    super(array);
  }

  sort(left, right) {
    if (!left && !right) this.sort(0, this.stack.length - 1);
    if (right - left <= 0) return;
    else {
      let pivot = this.stack[Math.floor((left + right) / 2)];
      let index = this.partition(left, right, pivot);
      if (left < pivot - 1) this.sort(left, index - 1);
      if (index < right) this.sort(index, right);
    }
  }

  partition(left, right, pivot) {
    let p = {
      left,
      right
    };
    while (p.left <= p.right) {

      while (this.stack[p.left] < pivot) {
        p.left++;
      }

      while (this.stack[p.right] > pivot) {
        p.right--;
      }

      if (p.left <= p.right) {
        this.swap(p.left, p.right);
        p.left++;
        p.right--;
      }
    }

    return p.left;
  }
  swap(first, second) {
    let temp = this.stack[first];
    this.stack[first] = this.stack[second];
    this.stack[second] = temp;
  }
}

export default QuickSort;