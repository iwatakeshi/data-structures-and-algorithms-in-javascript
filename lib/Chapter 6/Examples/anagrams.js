'use strict';

class Anagram {
  constructor(word) {
    this.word = word;
    this.stack = this.word.split('');
    this.count = 0;
  }
  anagram(length) {
    if (!length) length = this.word.length;
    if (length === 1) return;
    for (var i = 0; i < length; i++) {

      this.anagram(length - 1);

      if (length === 2) this.show();
      this.rotate(length);
    }
  }
  show() {
    if (this.count < 99)
      process.stdout.write(' ');
    if (this.count < 9)
      process.stdout.write(' ');
    process.stdout.write(++this.count + ' ');
    for (var j = 0; j < this.word.length; j++)
      process.stdout.write(this.stack[j]);
    process.stdout.write('   ');
    if (this.count % 6 === 0)
      console.log('');
  }
  rotate(length) {
    let j = 0;
    let position = this.word.length - length;
    let temp = this.stack[position];
    for (j = position + 1; j < this.word.length; j++) {
      this.stack[j - 1] = this.stack[j];
    }
    this.stack[j - 1] = temp;
  }
}

new Anagram('cats').anagram();

export default Anagram;