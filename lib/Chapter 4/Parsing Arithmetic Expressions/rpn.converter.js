'use strict';
import Stack from '../Stack';

class RPNConverter {
  constructor(input = '') {
      this.input = input;
      this.stack = new Stack(input.length);
      this.output = '';
    }
    /**
     * Translates infix to postfix
     */
  convert() {
    for (var index = 0; index < this.input.length; index++) {
      var char = this.input[index];
      switch (char) {
      case '+':
      case '-':
        this.consume(char, true, 1);
        break;
      case '*':
      case '/':
        this.consume(char, true, 2);
        break;
      case '(':
      case ')':
        this.consume(char, false);
        break;

      default:
        this.output += char;
        break;
      }
    }
    while (!this.stack.isEmpty()) {
      this.output += this.stack.pop();
    }
    return this.output;
  }
  consume(char, isOperator, precedence) {
    if (!isOperator && char === '(') {
      this.stack.push(char);
      return;
    }
    if (isOperator) {
      while (!this.stack.isEmpty()) {
        if (this.operator(char, precedence)) break;
      }
      this.stack.push(char);
    } else {
      while (!this.stack.isEmpty()) {
        if (this.seperator()) break;
      }
    }
  }

  operator(char, precedence) {
    var top = this.stack.pop();
    if (top === '(') {
      this.stack.push(top);
      return true;
    } else {
      var prec;
      if (top === '+' || top === '-') prec = 1;
      else prec = 2;
      if (prec < precedence) {
        this.stack.push(top);
        return true;
      } else this.output += top;
    }
  }

  seperator() {
    var character = this.stack.pop();
    if (character === '(') {
      return true;
    } else this.output += character;
  }
}
export default RPNConverter;