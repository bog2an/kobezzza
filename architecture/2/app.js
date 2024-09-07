class Wrapper {
  constructor(arr) {
    this.arr = arr;
  }

  toString() {
    if (this.arr.length === 0) {
      return '';
    }

    if (this.arr.length === 1) {
      return this.arr[0];
    }

    return `${this.arr[0]}..${this.arr[this.arr.length - 1]}`;
  }
}

function addToString(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Is not array");
  }

  return new Wrapper(arr);
}

console.log(addToString([1, 2, 3, 4]).toString());
console.log(addToString([1]).toString());
console.log(addToString([]).toString());


String.prototype.capitalize = function () {
  if (this.length === 0) {
    return;
  }
  return this.charAt(0).toUpperCase() + this.slice(1);
};

console.log('foo'.capitalize())