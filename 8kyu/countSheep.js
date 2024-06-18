var countSheep = function (num){
  //your code here
  let nonNeg = Math.abs(num)
  let msg = ''
  for (let i = 1; i <= nonNeg; i++){
    if(nonNeg == 0) msg = ''
    else msg += `${i} sheep...`
  }
  return msg
}
 
console.log(countSheep(69))
