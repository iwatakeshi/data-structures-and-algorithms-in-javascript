import Unorderd from '../../Chapter 2/Array/un-ordered/';

class ShellSort extends Unorderd {
  constructor(array) {
    super(array);
  }

  sort() {
    let inner, outer;
    let temp;

    let h = 1;
    while (h <= Math.floor(this.stack.length / 3)) h = h * 3 + 1;
    while (h > 0) {
      for (outer = h; outer < this.stack.length; outer++) {
        temp = this.stack[outer];
        inner = outer;
        while (inner > h - 1 && this.stack[inner - h] >= temp) {
          this.stack[inner] = this.stack[inner - h];
          inner -= h;
        }
        this.stack[inner] = temp;
      }
      h = Math.floor((h - 1) / 3);
    }
  }
}

export default ShellSort;