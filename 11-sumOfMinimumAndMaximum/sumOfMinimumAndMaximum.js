function sumOfMinimumAndMaximum(nums) {
  let lowest = nums[0]
  let highest = nums [0]
  for (let i = 1; i < nums.length; i++) {
    if(nums[i] < lowest) {
      lowest = nums[i]
    } else if (nums[i] > highest) {
      highest = nums[i]
    } 
  }
  return lowest + highest
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;