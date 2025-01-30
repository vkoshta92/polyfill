const numbers = [1, 2, 3, 4, 5];
const reversedNumbers = [];

for (let i = numbers.length - 1; i >= 0; i--) {
  reversedNumbers.push(numbers[i]);
}

console.log(reversedNumbers); // Output: [5, 4, 3, 2, 1]
