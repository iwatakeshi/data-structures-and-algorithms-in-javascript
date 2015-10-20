'use strict';

import Stack from '../index.js';
import io from 'io';
class Reverser {
  constructor(input = '') {
    this.input = input;
    this.output = '';
  }
  reverse() {
    var length = this.input.length;
    var stack = new Stack(length);
    var char = '';
    for (var index = 0; index < this.input.length; index++) {
      char = this.input[index];
      stack.push(char.toString());
    }
    while (!stack.isEmpty()) {
      char = stack.pop();
      this.output += char;
    }
    return this.output;
  }
}

io.read({
  question: 'Enter a string: '
}, function (answer) {
  var matches;
  matches = /^[\']([\w\s\S\d]+)[\']$/g.exec(answer);
  if (!matches) matches = /^[\"]([\w\s\S\d]+)[\"]$/g.exec(answer);
  answer = matches ? matches[1] : undefined || answer;
  var reverser = new Reverser(answer);
  console.log('Reversed: ' + reverser.reverse());
});