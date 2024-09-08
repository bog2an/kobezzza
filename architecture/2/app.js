function addToString(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('The argument must be an array');
  }

  return new Proxy(arr, {
    get(target, prop) {
      if (prop === 'toString') {
        return () => {
          if (target.length === 0) {
            return '';
          }

          if (target.length === 1) {
            return `${target[0]}`;
          }

          return `${target[0]}..${target[target.length - 1]}`;
        };
      }
      return target[prop];
    },
  });
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

console.log('foo'.capitalize());
