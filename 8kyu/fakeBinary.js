function fakeBin(x) {
  let bin = "";
  for (let i = 0; i < x.length; i++) {
    let nums = Number(x[i]);
    if (nums < 5) {
      bin += "0";
    } else {
      bin += "1";
    }
  }
    return bin;
}
console.log(fakeBin("45385593107843568"));
