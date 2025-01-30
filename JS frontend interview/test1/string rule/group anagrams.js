function groupAnagrams(strs) {
    const map = {};
    for (let str of strs) {
      const sorted = str.split('').sort().join('');
      if (!map[sorted]) {
        map[sorted] = [str];
      } else {
        map[sorted].push(str);
      }
    }
    return Object.values(map);
  }
  
  // Example usage:
  console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
  // Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
  