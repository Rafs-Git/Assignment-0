function setUnionOfAnyAmountOfSets(...args) {
  let union = new Set()
  for (let i = 0; i < args.length; i++) {
    let x = Array.from(args[i])
    for (let i = 0; i < x.length; i++) {
      if (!(union.has(x[i]))) {
        union.add(x[i])
      }
    }
  }
  return union
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;