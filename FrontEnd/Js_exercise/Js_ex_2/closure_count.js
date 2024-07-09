function createCounter() {
    let count = 0; // initialize count to 0
  
    // define and return a function that increments count and returns its value
    return function () {
      count++; // increment count by 1
      return count; // return the new value of count
    };
  }
  
  // create a new counter function
  const counter = createCounter();
  
  // call the counter function multiple times and log the result
  console.log(counter()); // prints 1
  console.log(counter()); // prints 2
  console.log(counter()); // prints 3