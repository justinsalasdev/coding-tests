var twoSum = function (nums, target) {
  const cache = {};
  let pair;
  for (let i = 0; i < nums.length; i++) {
    const inv = cache[nums[i]];
    if (inv !== undefined) {
      pair = [parseInt(inv), i];
      break;
    } else {
      cache[target - nums[i]] = i;
      continue;
    }
  }
  return pair;
};

twoSum([2, 7, 11, 5], 9);
5;
