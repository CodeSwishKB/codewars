function well(x){
 let key = x.reduce((acc, curr) => {
   acc[curr] = (acc[curr] + 1) || 1
   return acc
 }, {})
 
 let bad = key.bad
 let good = key.good
 
 if(good == 1 || good == 2) return 'Publish!'
 else if(good > 2) return 'I smell a series!'
 else if(bad || [] || '') return 'Fail!'
}
