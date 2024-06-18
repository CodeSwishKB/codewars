function arrayPlusArray(arr1, arr2) {
  const addArr = (arr) => arr.reduce((acc, curr) => acc + curr , 0)
  return addArr(arr1) + addArr(arr2)
}
