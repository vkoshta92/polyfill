

//
function findTargetPairs(nums, target) {
    let pairs = [];
    let seen = {};
//   seen = {
//     1: true,
//2: true,
//3: true
//   }
//   seen[num]
    for (let i = 0; i < nums.length; i++) {
      let complement = target - nums[i];
      if ( seen[complement]) {
        pairs.push([complement, nums[i]]);
      }
      seen[nums[i]] = true;
    }
  
    return pairs;
  }
  
  result = findTargetPairs([1,3,2,5,6,4],7);
  console.log(result);