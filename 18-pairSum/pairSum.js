function pairSum(nums, target) {
  let found = false
  if (nums.length <= 1) {
    throw Exception
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if(nums[i] + nums[j] === target && i != j) {
        found = true
      }
    }
  } return found
}

// Do not edit this line;
module.exports = pairSum;