var removeDuplicates = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    // console.log(nums.indexOf(nums[i]))
    console.log(i);
    if (nums.indexOf(nums[i]) != i) {
      nums.splice(nums[i], 1, ':(');
      console.log(nums);
    }
  }
  return nums.length
};

console.log(removeDuplicates([1,1,2]))
// removeDuplicates([1, 1, 2]);
