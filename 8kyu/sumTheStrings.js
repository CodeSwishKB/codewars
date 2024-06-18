function sumStr(a, b) {
  const convertToNum = (x) => Number(x);
  let ans = convertToNum(a) + convertToNum(b);
  return `${ans}`;
}
