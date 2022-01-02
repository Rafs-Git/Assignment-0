function frequencyCounter(word) {
  let count = {}
  for (let i = 0; i < word.length; i++) {
    if (!(word.charAt(i) in count)) {
      count[word.charAt(i)] = 1
    } else count[word.charAt(i)]++
  }
  return count
}
// Do not edit this line;
module.exports = frequencyCounter;