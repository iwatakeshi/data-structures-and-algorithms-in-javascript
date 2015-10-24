class Link {
  constructor(int = 0, double = 0.0) {
    this.int = int;
    this.double = double;
    this.next = undefined;
  }
  print() {
    console.log(`{ ${ this.int }, ${ this.double }  }`);
  }
}

export default Link;