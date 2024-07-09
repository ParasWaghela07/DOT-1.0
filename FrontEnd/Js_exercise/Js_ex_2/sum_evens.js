function sumEvenNumbers(numbers) {
    let sum = 0; // initialize sum to 0
  
    // loop through each number in the array
    for (let i = 0; i < numbers.length; i++) {
      // check if the current number is even
      if (numbers[i] % 2 === 0) {
        sum += numbers[i]; // add the current number to sum
      }
    }
  
    return sum; // return the final sum of even numbers
  }
  
  // test the function with an example array
  const numbers = [1, 2, 3, 4, 5, 6];
  console.log(sumEvenNumbers(numbers)); // prints 12