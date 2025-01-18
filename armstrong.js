function isArmstrong(number) {
    const digits = number.toString().split('').map(Number); // Split digits
    const power = digits.length;

    // Helper function for recursion
    function sumOfPowers(index) {
        if (index === digits.length) {
            return 0; // Base case: no more digits
        }
        return Math.pow(digits[index], power) + sumOfPowers(index + 1); // Recursive case
    }

    // Check if the sum of powers equals the number
    return sumOfPowers(0) === number;
}

// Example usage
const number = 153; // Change this to test other numbers
if (isArmstrong(number)) {
    console.log(`${number} is an Armstrong number.`);
} else {
    console.log(`${number} is not an Armstrong number.`);
}
