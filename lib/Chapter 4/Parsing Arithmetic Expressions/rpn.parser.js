import Stack from '../Stack/';

class RPNParser {
  constructor(input = '') {
    this.input = input;
    this.stack = new Stack(input.length);
  }
  parse() {
    var result, num, num2;
    for (var index = 0; index < this.input.length; index++) {
      var ch = this.input[index];
      if (ch.match(/\d/)) {
        this.stack.push(parseInt(ch));
      } else {
        num2 = this.stack.pop();
        num = this.stack.pop();
        switch (ch) {
        case '+':
          result = num + num2;
          break;
        case '-':
          result = num - num2;
          break;
        case '*':
          result = num * num2;
          break;
        case '/':
          result = num / num2;
          break;
        default:
          result = 0;
          break;
        }
        this.stack.push(result);
      }
    }
    result = this.stack.pop();
    return result;
  }
}
export default RPNParser;