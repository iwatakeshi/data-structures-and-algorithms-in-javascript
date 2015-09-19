import 'source-map-support/register';

/**
 * The class creates a person object (pg 66)
 * @class Person
 */
class Person {
  constructor(firstname = '', lastname = '', age = 24) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.age = age;
    }
    /**
     * Prints the fields in the object
     */
  print() {
      console.log(
        'first name:', this.firstname,
        'last name:', this.last,
        'age: ', this.age);
    }
    /**
     * Returns the last name
     * @return {String} The last name
     */
  getLastName() {
    return this.lastname;
  }
}

export default Person;