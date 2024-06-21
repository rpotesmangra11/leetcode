// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
//My first solution
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let addend1 = nums[i];
    for (let j = 1; j < nums.length; j++) {
      if (target - nums[j] == addend1) {
        let arr = [];
        addend1 = nums.indexOf(addend1);
        let addend2 = nums.lastIndexOf(nums[j]);
        return [...arr, addend1, addend2];
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
//nums = [2,7,11,15], target = 9 ANSWER: [ 0, 1 ]

//My second solution
var twoSum = function (nums, target) {
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        let addend1 = nums[i]
        let addend2 = target - addend1
        if (nums.lastIndexOf(addend2) != -1 && nums.lastIndexOf(addend2) != nums.indexOf(addend1)) {
            addend1 = nums.indexOf(addend1)
            addend2 = nums.lastIndexOf(addend2)
            return [...arr, addend1, addend2]
        }

    }
}

//The best solution, need to learn hash maps
var twoSum = function (nums, target) {
    const mp = {}
 
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]
        console.log(`Iteration ${i}: Current number is ${nums[i]}, difference is ${diff}`);
    
        if (diff in mp) {
            console.log(`Found ${diff} in map, returning [${i}, ${mp[diff]}]`);
            return [i, mp[diff]]
        }
 
        mp[nums[i]] = i
        console.log(`Adding ${nums[i]} to map with value ${i}`);
        console.log('Current map:', mp);
    }
}

// Call the function with some test inputs
twoSum([2, 7, 11, 15], 9);