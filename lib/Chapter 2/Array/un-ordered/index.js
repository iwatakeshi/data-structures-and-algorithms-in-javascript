import 'source-map-support/register';

/**
 * This class creates a un-ordered array
 * @class JSArray
 */
class JSArray {
  constructor(array = []) {
      this.stack = array;
    }
    /**
     * Finds the item in the array if it exists.
     * @param {Number|String}
     * @return {Boolean} The truth value
     */
  find(key) {
      var i;
      for (i = 0; i < this.stack.length; i++) {
        var item = this.stack[i];
        if (key === item) break;
      }
      if (i === this.stack.length)
        return false;
      else return true;
    }
    /**
     * Inserts the item into the array.
     * @param {Number|String}
     */
  insert(item) {
      this.stack[this.stack.length] = item;
    }
    /**
     * Removes all specified items from the array.
     * @param {Number|String}
     */
  remove(key) {
      var i;
      // Iterate through the array until we find
      // the item with the key
      for (i = 0; i < this.stack.length; i++) {
        // We found it
        if (key === this.stack[i]) break;
        // or we just went through all but
        // didn't find it
      }
      // We didn't find it at worst case senario
      if (i === this.stack.length) return false;
      else {
        // Start iterating from the last position
        for (var j = i; j < this.stack.length; j++) {
          // Shift down the elements
          this.stack[j] = this.stack[j + 1];
        }
        // Decrement the size
        this.stack.length--;
        return true;
      }
    }
    /**
     * Prints all the elements in the array
     */
  print() {
    console.log.apply(console, this.stack);
  }
}

export default JSArray;
