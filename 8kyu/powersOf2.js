function powersOfTwo(n) {
  // 2^n
  let arrNum = [];
  for (let i = 0; i <= n; i++) {
    let formula = 2 ** i;
    arrNum.push(formula);
  }
  return arrNum;
}

console.log(powersOfTwo(4));
