'use strict';

class Factorial {
  static solve(num) {
    if (num === 0) return 1;
    else return num * Factorial.solve(num - 1);
  }
}

module.exports = Factorial;