function mosAlgorithm(arr, queries) {
    const blockSize = Math.floor(Math.sqrt(arr.length));
    const sortedQueries = queries.map((q, i) => ({ query: q, index: i })).sort((a, b) => {
      const blockA = Math.floor(a.query[0] / blockSize);
      const blockB = Math.floor(b.query[0] / blockSize);
  
      if (blockA === blockB) {
        return a.query[1] - b.query[1];
      }
  
      return blockA - blockB;
    });
  
    let currentLeft = 0;
    let currentRight = -1;
    let currentSum = 0;
    const result = [];
  
    for (const { query, index } of sortedQueries) {
      while (currentLeft > query[0]) {
        currentLeft--;
        currentSum += arr[currentLeft];
      }
  
      while (currentRight < query[1]) {
        currentRight++;
        currentSum += arr[currentRight];
      }
  
      while (currentLeft < query[0]) {
        currentSum -= arr[currentLeft];
        currentLeft++;
      }
  
      while (currentRight > query[1]) {
        currentSum -= arr[currentRight];
        currentRight--;
      }
  
      result[index] = currentSum;
    }
  
    return result;
  }
  
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const queries = [
    [0, 3],
    [1, 5],
    [2, 7],
  ];
  const result = mosAlgorithm(arr, queries);
  
  console.log(result); // Output: [10, 18, 33]
  