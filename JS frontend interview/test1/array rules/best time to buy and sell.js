function maxProfit(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;
  
    for (let i = 1; i < prices.length; i++) {
      if (prices[i] < minPrice) {
        minPrice = prices[i];
      } else if (prices[i] - minPrice > maxProfit) {
        maxProfit = prices[i] - minPrice;
      }
    }
  
    return maxProfit;
  }
  
  const prices = [7, 1, 5, 3, 6, 4];
  const result = maxProfit(prices);
  
  console.log(result); // Output: 5
  