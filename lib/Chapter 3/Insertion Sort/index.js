import 'source-map-support/register';
import Unordered from '../../Chapter 2/Array/un-ordered/';

class InsertionSort extends Unordered {
  constructor(array = []) {
      super(array);
    }
    /**
     * Sorts the elements in the array from low to high
     */
  sort() {
      var inner, outer;

      // Outer is the dividing line
      for (outer = 1; outer < this.stack.length; outer++) {
        // Remove the marked item
        var temp = this.stack[outer];
        inner = outer;
        // Begin shifting from the 'outer' until
        // one is smaller
        while (inner > 0 && this.stack[inner - 1] >= temp) {
          // Shift items to the right
          this.stack[inner] = this.stack[inner - 1];
          // Move index to the left
          inner--;
        }
        // Insert marked position
        this.stack[inner] = temp;
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

export default InsertionSort;