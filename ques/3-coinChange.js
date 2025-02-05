function coinChange(coins, amount) {
    const dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0;
  
    for (const coin of coins) {
      for (let i = coin; i <= amount; i++) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  
    return dp[amount] === Infinity ? -1 : dp[amount];
  }
  
  // Example
  const coins = [1, 2, 5];
  const amount = 11;
  console.log(coinChange(coins, amount)); // Output: 3