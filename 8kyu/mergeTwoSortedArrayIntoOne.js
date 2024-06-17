function mergeArrays(arr1, arr2) {
  let con = arr1.concat(arr2);
  let res = [...new Set(sortArr(con))];
  return res;
}

function sortArr(arr) {
  return arr.sort((a, b) => a - b);
}

console.log(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]));
