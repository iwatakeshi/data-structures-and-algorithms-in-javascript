class TriagNumber {
  static solve(num) {
    if (num === 1) return num;
    else return num + TriagNumber.solve(num - 1);
  }
}

console.log(TriagNumber.solve(4));

export default TriagNumber;