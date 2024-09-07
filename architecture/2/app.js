function addToString(arr) {
  Array.prototype.toString = function () {
    if (this.length === 0) {
      return '';
    }

    if (this.length === 1) {
      return this[0].toString();
    }

    return `${this[0]}..${this[this.length - 1]}`;
  };
  return arr;
}

console.log(addToString([1, 2, 3, 4]).toString()); // 1..4
console.log(addToString([1]).toString()); // 1
console.log(addToString([]).toString()); // ''
console.log(addToString([5, 6, 7])); // [ 5, 6, 7 ]


String.prototype.capitalize = function () {
  if (this.length === 0) {
    return '';
  }
  return this.charAt(0).toUpperCase() + this.slice(1);
};

console.log('foo'.capitalize())