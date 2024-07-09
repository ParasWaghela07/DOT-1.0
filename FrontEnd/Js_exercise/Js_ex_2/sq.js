// Define a function called getSquare that takes a number parameter
function getSquare(number) {
    // Use the exponent operator (**) to square the number parameter
    const square = number ** 2;
  
    // Return the square value to the calling code
    return square;
  }
  
  // Call the getSquare function and pass in the number 5 as an argument
  const result = getSquare(5);
  
  // Log the result to the console
  console.log(result); // Output: 25