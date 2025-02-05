function trappingRainWater(heights) {
    let n = heights.length;
    if (n === 0) return 0;
    let leftMax = Array(n).fill(0);
    leftMax[0] = heights[0];
    for (let i = 1; i < n; i++) {
      leftMax[i] = Math.max(heights[i], leftMax[i - 1]);
    }
    let rightMax = Array(n).fill(0);
    rightMax[n - 1] = heights[n - 1];
    for (let i = n - 2; i >= 0; i--) {
      rightMax[i] = Math.max(heights[i], rightMax[i + 1]);
    }
    let trappedWater = 0;
    for (let i = 0; i < n; i++) {
      trappedWater += Math.min(leftMax[i], rightMax[i]) - heights[i];
    }
    return trappedWater;
  }
  
  // Example
  const heights = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
  console.log(trappingRainWater(heights)); // Output: 6