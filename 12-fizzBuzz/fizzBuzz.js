function fizzBuzz(start, end) {
  let x = []
  for (let i = start; i <= end; i++){
    if (i % 5 === 0 && i % 3 === 0) {
      x.push("FizzBuzz")
    } else if (i % 5 === 0) {
      x.push("Buzz")
    } else if (i % 3 === 0) {
      x.push("Fizz")
    } else {
      x.push(i)
    }
  }
  return x
}

// Do not edit this line;
module.exports = fizzBuzz;