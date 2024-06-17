function sumMix(x) {
  let num = x.map(Number);
  return num.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}
console.log(sumMix([9, 3, "7", "3"]));
