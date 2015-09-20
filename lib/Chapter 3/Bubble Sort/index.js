import 'source-map-support/register';
import Unordered from '../../Chapter 2/Array/un-ordered/';

class BubbleSort extends Unordered {
  constructor(array = []) {
      super(array);
    }
    /**
     * Sorts the elements in the array from low to high
     */
  sort() {
      var inner, outer;
      // Outer loop (backward)
      for (outer = this.stack.length - 1; outer > 1; outer--) {
        // Inner loop (forward)
        for (inner = 0; inner < outer; inner++) {
          if (this.stack[inner] > this.stack[inner + 1])
            this.swap(inner, inner + 1);
        }
      }
    }
    /**
     * Swaps the elements in the array
     * @private
     * @param first The first index
     * @param second The second index
     */
  swap(first, second) {
    var temp = this.stack[first];
    this.stack[first] = this.stack[second];
    this.stack[second] = temp;
  }
}

export default BubbleSort;