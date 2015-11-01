class Hanoi {
  constructor(disks = 3) {
    this.disks = disks;
  }
  solve(top, source, intermediate, destination) {
    if (!top) return this.solve(this.disks, 'A', 'B', 'C');
    if (top === 1) return console.log('Moving Disk 1 from ' + source + ' to ' + destination);
    else {
      this.solve(top - 1, source, destination, intermediate);
      console.log(`Moving Disk ${ top } from ` + source + ' to ' + destination);
      this.solve(top - 1, intermediate, source, destination);
    }
  }
}

new Hanoi(10).solve();