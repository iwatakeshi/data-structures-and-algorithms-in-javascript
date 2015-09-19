import 'source-map-support/register';
import Person from '../';
/**
 * This class creates a un-ordered array
 * for the people class
 * @class JSArray
 */
class JSArray {
  constructor(array = []) {
      this.stack = array;
    }
    /**
     * Represents the length of the array.
     * @return {Number} The length of the array
     */
  length() {
      return this.stack.length;
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
        if (key === item.getLastName()) break;
      }
      if (i === this.stack.length)
        return false;
      else return true;
    }
    /**
     * Inserts the person into the array.
     * @param {String} item The item to insert
     */
  insert(firstname, lastname, age) {
      this.stack[this.stack.length] = new Person(firstname, lastname, age);
    }
    /**
     * Removes all specified items from the array.
     * @param {Number|String} key The key to find the item
     */
  remove(key) {
      var i;
      // Iterate through the array until we find
      // the item with the key
      for (i = 0; i < this.stack.length; i++) {
        // We found it
        if (key === this.stack[i].getLastName()) break;
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
    for (var i = 0; i < this.stack.length; i++) {
      var element = this.stack[i];
      element.print();
    }
  }
}

export default JSArray;