'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Hanoi = (function () {
  function Hanoi() {
    var disks = arguments.length <= 0 || arguments[0] === undefined ? 3 : arguments[0];

    _classCallCheck(this, Hanoi);

    this.disks = disks;
  }

  _createClass(Hanoi, [{
    key: 'solve',
    value: function solve(top, source, intermediate, destination) {
      if (!top) return this.solve(this.disks, 'A', 'B', 'C');
      if (top === 1) return console.log('Moving Disk 1 from ' + source + ' to ' + destination);else {
        this.solve(top - 1, source, destination, intermediate);
        console.log('Moving Disk ' + top + ' from ' + source + ' to ' + destination);
        this.solve(top - 1, intermediate, source, destination);
      }
    }
  }]);

  return Hanoi;
})();

new Hanoi(10).solve();
//# sourceMappingURL=../../source maps/Chapter 6/Examples/towerOfHanoi.js.map