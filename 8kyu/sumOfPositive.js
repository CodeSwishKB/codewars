function positiveSum(arr) {
  return arr.filter(item => item > 0).reduce((acc, curr) => acc + curr , 0)
}
