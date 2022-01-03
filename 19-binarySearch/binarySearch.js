class MySolution {
  constructor() {
  }

  binarySearch(nums, target) {
    let found = false
    let divide = Math.floor((nums.length)/2)
    
    if (nums[divide] === target) {
      found = true
    } else if (nums.length === 1){
      found = false
    } else if (target < nums[divide]) {
      found = this.binarySearch(nums.slice(0, divide), target)
    } else if (target > nums[divide]){
      found = this.binarySearch(nums.slice(divide, nums.length), target)
    }
    return found
  }
}
// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;