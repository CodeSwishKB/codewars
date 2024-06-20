function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  let msg = '' 
  dna.split('').forEach(item => {
   if (item == 'T') msg += 'U'
   else msg += item
  })
  return msg
}
