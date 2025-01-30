function combinations(arr, r) {
    const result = [];
  
    function generateCombination(start, current) {
      if (current.length === r) {
        result.push(current);
        return;
      }
  
      for (let i = start; i < arr.length; i++) {
        generateCombination(i + 1, current.concat(arr[i]));
      }
    }
  
    generateCombination(0, []);
  
    return result;
  }
  
  const arr = [1, 2, 3, 4];
  const r = 2;
  const result = combinations(arr, r);
  
  console.log(result); // Output: [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]
  