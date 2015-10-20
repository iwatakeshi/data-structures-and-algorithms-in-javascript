'use strict';

import Stack from '../';
import io from 'io';

class BracketChecker {
  constructor(input) {
    this.input = input;
  }
  check() {
    var length = this.input.length;
    var stack = new Stack(length);
    for (var index = 0; index < this.input.length; index++) {
      var char = this.input[index];
      switch (char) {
      case '{':
      case '[':
      case '(':
        stack.push(char);
        break;
      case '}':
      case ']':
      case ')':
        if (!stack.isEmpty()) {
          var next = stack.pop();
          if (char === '}' && next !== '{' ||
            char === ']' && next !== '[' ||
            char === ')' && next !== '(')
            console.error('Error: ' + '\'' + char + '\'' + 'at ' + index);
        }

        break;
      }
    }
    if (!stack.isEmpty())
      console.error('Error: missing right delimiter.');
  }
}

io.read({
  question: 'Enter a string:'
}, function (answer) {
  var checker = new BracketChecker(answer);
  checker.check();
});