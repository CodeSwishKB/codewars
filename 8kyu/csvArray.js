function toCsvText(array) {
  // good luck
  let res = "";
  for (let i = 0; i < array.length; i++) {
    res += `${array[i]}`;
    if (i !== array.length - 1) {
      res += '\n'
    }
  }
  return res;
}

console.log(
  toCsvText([
    [0, 1, 2, 3, 45],
    [10, 11, 12, 13, 14],
    [20, 21, 22, 23, 24],
    [30, 31, 32, 33, 34],
  ]),
);
