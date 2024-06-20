function flickSwitch(arr){
  let on = true
  return arr.map(item => {
    if(item == "flick"){
      on = !on
    }
   // console.log(on)
   return on
  })
}
