'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Anagram = (function () {
  function Anagram(word) {
    _classCallCheck(this, Anagram);

    this.word = word;
    this.stack = this.word.split('');
    this.count = 0;
  }

  _createClass(Anagram, [{
    key: 'anagram',
    value: function anagram(length) {
      if (!length) length = this.word.length;
      if (length === 1) return;
      for (var i = 0; i < length; i++) {

        this.anagram(length - 1);

        if (length === 2) this.show();
        this.rotate(length);
      }
    }
  }, {
    key: 'show',
    value: function show() {
      if (this.count < 99) process.stdout.write(' ');
      if (this.count < 9) process.stdout.write(' ');
      process.stdout.write(++this.count + ' ');
      for (var j = 0; j < this.word.length; j++) process.stdout.write(this.stack[j]);
      process.stdout.write('   ');
      if (this.count % 6 === 0) console.log('');
    }
  }, {
    key: 'rotate',
    value: function rotate(length) {
      var j = 0;
      var position = this.word.length - length;
      var temp = this.stack[position];
      for (j = position + 1; j < this.word.length; j++) {
        this.stack[j - 1] = this.stack[j];
      }
      this.stack[j - 1] = temp;
    }
  }]);

  return Anagram;
})();

new Anagram('cats').anagram();

exports['default'] = Anagram;
module.exports = exports['default'];
//# sourceMappingURL=../../source maps/Chapter 6/Examples/anagrams.js.map