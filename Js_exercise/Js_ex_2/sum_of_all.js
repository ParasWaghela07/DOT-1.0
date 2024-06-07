// Function to calculate the sum of all numbers in an array
function sumArrayNumbers(arr) {
    let sum = 0; // Initialize sum variable to zero
    for (let i = 0; i < arr.length; i++) {
      // Loop through the array
      sum += arr[i]; // Add each number to sum
    }
    return sum; // Return the final sum
  }
  
  // Test cases
  const numbers1 = [1, 2, 3, 4, 5];
  console.log(sumArrayNumbers(numbers1)); // Output: 15
  
  const numbers2 = [10, 20, 30];
  console.log(sumArrayNumbers(numbers2)); // Output: 60
  
  const numbers3 = [-1, 2, -3, 4, -5];
  console.log(sumArrayNumbers(numbers3)); // Output: -3