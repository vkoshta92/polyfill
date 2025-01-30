function printMatrix(rows, cols) {
    const matrix = [];

    // Create the matrix
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            row.push(Math.floor(Math.random() * 10)); // Add random values (0-9)
        }
        matrix.push(row);
    }

    // Print the matrix
    for (let row of matrix) {
        console.log(row.join(' '));
    }
}

// Example usage: Print a 6x7 matrix
printMatrix(6, 7);
