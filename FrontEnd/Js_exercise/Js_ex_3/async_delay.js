// console.log("Before Delay");
// setTimeout(function(){
//     console.log("After delay")
// },5000);

//solution
function simulateDelay(delay, callback) {
    setTimeout(callback, delay);
  }
  
  // Example usage:
  console.log("Before delay");
  
  simulateDelay(2000, () => {
    console.log("After delay");
  });
  
  console.log("Function finished executing");
  
  // Output:
  // Before delay
  // Function finished executing
  // After delay (after a 2 second delay)