function findHighestHourglassSum(arr) {
    // Initialize the maximum sum to a very small number
    let maxSum = -Infinity;
    console.log(maxSum);
  
    // Define the hourglass shape
    const hourglassShape = [
      [1, 1, 1],
      [0, 1, 0],
      [1, 1, 1],
    ];
  
    const numRows = arr.length;
    const numCols = arr.length;
    const shapeRows = hourglassShape.length;
    const shapeCols = hourglassShape.length;
  
    // Iterate through the array
    for (let row = 0; row <= numRows - shapeRows; row++) {
      for (let col = 0; col <= numCols - shapeCols; col++) {
        // Calculate the sum of the current hourglass
        let hourglassSum = 0;
        for (let i = 0; i < shapeRows; i++) {
          for (let j = 0; j < shapeCols; j++) {
            if (hourglassShape[i][j] === 1) {
              hourglassSum += arr[row + i][col + j];
            }
          }
        }
  
        // Update the maximum sum
        maxSum = Math.max(maxSum, hourglassSum);
      }
    }
  
    return maxSum;
  }
  
  // Example usage:
  const array = [
    [-1, -1, 0, -9, -2, -2],
    [-2, -1, -6, -8, -2, -5],
    [-1, -1, -1, -2, -3, -4],
    [-1, -9, -2, -4, -4, -5],
    [-7, -3, -3, -2, -9, -9],
    [-1, -3, -1, -2, -4, -5]
  ];
  
  const highestSum = findHighestHourglassSum(array);
  console.log("Highest hourglass sum: " + highestSum);
  