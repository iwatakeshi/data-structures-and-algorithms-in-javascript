import 'source-map-support/register';
import Unordered from '../../Chapter 2/Array/un-ordered/';

class SelectionSort extends Unordered {
  constructor(array = []) {
      super(array);
    }
    /**
     * Sorts the elements in the array from low to high
     */
  sort() {
      var inner, outer, minimum;
      // Outer loop (forward until the one before the last index)
      for (outer = 0; outer < this.stack.length - 1; outer++) {
        // Keep track of the minimum
        minimum = outer;
        // Inner loop (forward ahead of the outer by 1 index)
        for (inner = outer + 1; inner < this.stack.length; inner++) {
          // Check for the a new minimum
          if (this.stack[inner] < this.stack[minimum])
            minimum = inner;
        }
        // Swap them once the inner loop has
        // decided which of the items is the
        // minimum	
        this.swap(outer, minimum);
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

export default SelectionSort;