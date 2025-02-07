function isArmstrong(num) {
    let sum = 0;
    let temp = num;
    let digits = 0;

    // Count number of digits
    let n = num;
    while (n > 0) {
        digits++;
        n = Math.floor(n / 10);
    }

    // Calculate sum of digits raised to power of digits
    n = temp;
    while (n > 0) {
        let digit = n % 10; // Get last digit
        sum += digit ** digits; // Raise to power and add to sum
        n = Math.floor(n / 10); // Remove last digit
    }

    return sum === num;
}

// Test Cases
console.log(isArmstrong(153));  // true
console.log(isArmstrong(9474)); // true
console.log(isArmstrong(9475)); // false
console.log(isArmstrong(371));  // true
console.log(isArmstrong(407));  // true
console.log(isArmstrong(123));  // false



//other method
function isArmstrong(num) {
    let strNum = num.toString();
    let digits = strNum.length;
    let sum = 0;

    for (let char of strNum) {
        sum += Number(char) ** digits;
    }

    return sum === num;
}

console.log(isArmstrong(153));  // true
console.log(isArmstrong(9474)); // true
console.log(isArmstrong(123));  // false

